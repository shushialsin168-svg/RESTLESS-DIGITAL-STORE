import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

/**
 * Cloud PostgreSQL providers (Neon, Supabase, Render, Railway, Heroku, etc.)
 * require SSL. Local databases usually don't support it.
 * Auto-detect: enable SSL for non-local hosts or when sslmode is in the URL.
 */
function needsSSL(url: string): boolean {
  if (process.env.DATABASE_SSL === "false") return false;
  if (process.env.DATABASE_SSL === "true") return true;
  if (/sslmode=(require|prefer|verify)/i.test(url)) return true;
  try {
    const host = new URL(url).hostname;
    return !["localhost", "127.0.0.1", "::1", "host.docker.internal"].includes(host);
  } catch {
    return false;
  }
}

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  new Pool({
    connectionString: databaseUrl,
    ssl: needsSSL(databaseUrl) ? { rejectUnauthorized: false } : undefined,
    connectionTimeoutMillis: 10_000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db = drizzle(pool, { schema });
