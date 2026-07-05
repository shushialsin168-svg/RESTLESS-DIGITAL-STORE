import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { payments } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ensureTables } from '@/db/ensure';
import { sendTelegramNotification } from '@/lib/telegram';

const BAKONG_API_BASE = process.env.BAKONG_API_BASE || 'https://api-bakong.nbc.gov.kh';

export async function POST(request: NextRequest) {
  try {
    await ensureTables();
    const { md5, simulate } = await request.json();

    if (!md5) {
      return NextResponse.json({ error: 'MD5 is required' }, { status: 400 });
    }

    const token = process.env.BAKONG_TOKEN;

    // Demo mode: no Bakong API token configured.
    // Allow explicit simulation so the unlock flow can be tested end-to-end.
    if (!token) {
      if (simulate) {
        const [payment] = await db
          .update(payments)
          .set({ status: 'paid', paidAt: new Date(), downloadUnlocked: true })
          .where(eq(payments.md5, md5))
          .returning();

        return NextResponse.json({
          success: true,
          status: 'paid',
          isPaid: true,
          demoMode: true,
          payment,
        });
      }

      return NextResponse.json({
        success: true,
        status: 'pending',
        isPaid: false,
        demoMode: true,
        hint: 'Set BAKONG_TOKEN env var (register at https://api-bakong.nbc.gov.kh) to enable real payment verification.',
      });
    }

    // Real verification via Bakong Open API (with timeout so a slow or
    // blocked network never hangs/crashes the checkout polling)
    let result: { responseCode?: number; responseMessage?: string; data?: unknown } | null = null;
    try {
      const res = await fetch(`${BAKONG_API_BASE}/v1/check_transaction_by_md5`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ md5 }),
        cache: 'no-store',
        signal: AbortSignal.timeout(8000),
      });
      result = await res.json();
    } catch (err) {
      console.warn('Bakong API unreachable, will retry on next poll:', err instanceof Error ? err.message : err);
      return NextResponse.json({
        success: true,
        status: 'pending',
        isPaid: false,
        note: 'Bakong API temporarily unreachable; retrying.',
      });
    }

    // responseCode 0 = transaction found (PAID), 1 = not found yet (UNPAID)
    const isPaid = result?.responseCode === 0 && !!result?.data;

    let payment = null;
    if (isPaid) {
      // Check previous status so the Telegram alert only fires once
      const before = await db.select().from(payments).where(eq(payments.md5, md5)).limit(1);
      const wasAlreadyPaid = before[0]?.status === 'paid';

      const updated = await db
        .update(payments)
        .set({ status: 'paid', paidAt: new Date(), downloadUnlocked: true })
        .where(eq(payments.md5, md5))
        .returning();
      payment = updated[0] ?? null;

      if (!wasAlreadyPaid) {
        const info = result?.data as {
          fromAccountId?: string;
          amount?: number;
          currency?: string;
          externalRef?: string;
        } | undefined;

        await sendTelegramNotification(
          [
            '✅ <b>Payment Received!</b>',
            '',
            `💰 Amount: <b>$${payment?.amount ?? info?.amount ?? '?'} ${payment?.currency ?? info?.currency ?? 'USD'}</b>`,
            info?.fromAccountId ? `👤 From: <code>${info.fromAccountId}</code>` : null,
            info?.externalRef ? `🧾 Ref: <code>${info.externalRef}</code>` : null,
            `🔑 MD5: <code>${md5}</code>`,
            `🕐 ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Phnom_Penh' })} (Phnom Penh)`,
            '',
            '🏪 RESTLESS DIGITAL STORE',
          ].filter(Boolean).join('\n')
        );
      }
    }

    return NextResponse.json({
      success: true,
      status: isPaid ? 'paid' : 'pending',
      isPaid,
      payment,
      bakong: {
        responseCode: result?.responseCode,
        responseMessage: result?.responseMessage,
      },
    });

  } catch (error) {
    console.error('Payment check error:', error);
    return NextResponse.json({
      error: 'Failed to check payment status',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
