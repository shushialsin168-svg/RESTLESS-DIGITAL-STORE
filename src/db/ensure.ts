import { db } from '@/db';
import { sql } from 'drizzle-orm';

let ensured = false;

async function tryExec(query: ReturnType<typeof sql>) {
  try {
    await db.execute(query);
  } catch (err) {
    // Non-fatal: log and continue (e.g. no permission for extensions)
    console.warn('ensureTables step skipped:', err instanceof Error ? err.message : err);
  }
}

/**
 * If a table exists but its `id` column is not uuid-compatible (e.g. a legacy
 * integer/serial PK), rename it aside and let the correct table be recreated.
 * Old data is preserved in <table>_legacy.
 */
async function fixIncompatibleIdColumn(table: string) {
  try {
    const result = await db.execute(sql`
      SELECT data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = ${table} AND column_name = 'id'
    `);
    const rows = result.rows as Array<{ data_type: string }>;
    if (rows.length === 0) return; // table doesn't exist yet

    const type = rows[0].data_type.toLowerCase();
    if (type !== 'uuid' && type !== 'text' && type !== 'character varying') {
      console.warn(`Table "${table}" has incompatible id type "${type}" — renaming to ${table}_legacy`);
      await tryExec(sql`DROP TABLE IF EXISTS ${sql.raw(`${table}_legacy`)}`);
      await db.execute(sql`ALTER TABLE ${sql.raw(table)} RENAME TO ${sql.raw(`${table}_legacy`)}`);
    }
  } catch (err) {
    console.warn(`fixIncompatibleIdColumn(${table}) skipped:`, err instanceof Error ? err.message : err);
  }
}

/**
 * Self-healing bootstrap: creates tables if missing, migrates legacy tables
 * with incompatible id types, and adds any missing columns.
 * Every step is individually fault-tolerant so a single failure
 * (e.g. missing permissions on managed hosting) never crashes the app.
 */
export async function ensureTables() {
  if (ensured) return;

  // gen_random_uuid() needs pgcrypto on PostgreSQL < 13
  await tryExec(sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`);

  // Migrate legacy tables whose id column can't hold UUIDs
  await fixIncompatibleIdColumn('downloads');
  await fixIncompatibleIdColumn('payments');

  await tryExec(sql`
    CREATE TABLE IF NOT EXISTS downloads (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text NOT NULL,
      price numeric NOT NULL,
      file_url text NOT NULL
    )
  `);

  await tryExec(sql`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS image_url text`);
  await tryExec(sql`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS category text`);

  await tryExec(sql`
    CREATE TABLE IF NOT EXISTS payments (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      md5 text,
      amount numeric,
      currency text NOT NULL DEFAULT 'USD',
      status text NOT NULL DEFAULT 'pending',
      created_at timestamp NOT NULL DEFAULT now(),
      paid_at timestamp,
      download_unlocked boolean NOT NULL DEFAULT false
    )
  `);

  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS md5 text`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS amount numeric`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'USD'`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending'`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS created_at timestamp NOT NULL DEFAULT now()`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS paid_at timestamp`);
  await tryExec(sql`ALTER TABLE payments ADD COLUMN IF NOT EXISTS download_unlocked boolean NOT NULL DEFAULT false`);
  await tryExec(sql`CREATE UNIQUE INDEX IF NOT EXISTS payments_md5_unique ON payments (md5)`);

  ensured = true;
}
