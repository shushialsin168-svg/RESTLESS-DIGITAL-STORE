/**
 * Sends a Telegram notification via bot to the configured channel.
 * Fails silently (logs only) so a Telegram outage never breaks checkout.
 */
export async function sendTelegramNotification(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHANNEL;

  if (!token || !chatId) return;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      const body = await res.text();
      console.warn('Telegram notification failed:', res.status, body.slice(0, 200));
    }
  } catch (err) {
    console.warn('Telegram notification error:', err instanceof Error ? err.message : err);
  }
}
