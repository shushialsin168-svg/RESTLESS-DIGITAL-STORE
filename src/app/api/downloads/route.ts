import { NextResponse } from 'next/server';
import { db } from '@/db';
import { downloads } from '@/db/schema';
import { ensureTables } from '@/db/ensure';

const PRODUCTS = [
  {
    title: "Coffee Web Store",
    description: "Complete coffee shop website template. Fully responsive, modern design with menu, ordering system and admin dashboard. Ready to deploy.",
    price: "29.99",
    fileUrl: "https://drive.google.com/file/d/1gZ8M-Y82i5hG_IIde_dP3xd6Dn-g2eST/view?usp=sharing",
    imageUrl: "/products/coffee-web-store.png",
    category: "Web Template",
  },
];

export async function GET() {
  try {
    await ensureTables();
    const allDownloads = await db.select().from(downloads);

    if (allDownloads.length === 0) {
      // Generate IDs in JS so seeding works even without gen_random_uuid()
      await db.insert(downloads).values(
        PRODUCTS.map(p => ({ ...p, id: crypto.randomUUID() }))
      );
      return NextResponse.json(await db.select().from(downloads));
    }

    return NextResponse.json(allDownloads);
  } catch (error) {
    console.error('Downloads API error:', error);
    return NextResponse.json(
      {
        error: 'database_unavailable',
        message: error instanceof Error ? error.message : 'Unknown database error',
        hint: 'Make sure PostgreSQL is running and DATABASE_URL in .env points to it (e.g. postgresql://postgres:postgres@127.0.0.1:5432/app_db).',
      },
      { status: 500 }
    );
  }
}
