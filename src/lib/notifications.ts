import { Resend } from "resend";

export interface ContactData {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

export async function sendNotifications(data: ContactData): Promise<{
  emailSent: boolean;
  discordSent: boolean;
  telegramSent: boolean;
}> {
  const results = {
    emailSent: false,
    discordSent: false,
    telegramSent: false,
  };

  const tasks: Promise<void>[] = [];

  // 1. Resend Email Notification
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "zafiraryani@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (resendApiKey) {
    tasks.push(
      (async () => {
        try {
          const resend = new Resend(resendApiKey);
          const emailHtml = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F2F0EB; padding: 32px; border: 1px solid #262626;">
              <div style="font-family: monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #A8242F; margin-bottom: 16px;">
                NEW DIRECT MESSAGE / PORTFOLIO
              </div>
              <h2 style="font-size: 24px; font-weight: normal; margin: 0 0 24px 0; border-bottom: 1px solid #262626; padding-bottom: 16px;">
                ${data.name}
              </h2>
              
              <div style="margin-bottom: 16px;">
                <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888;">Email:</strong><br/>
                <a href="mailto:${data.email}" style="color: #F2F0EB; text-decoration: underline;">${data.email}</a>
              </div>

              ${
                data.organization
                  ? `<div style="margin-bottom: 16px;">
                      <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888;">Organization:</strong><br/>
                      <span>${data.organization}</span>
                    </div>`
                  : ""
              }

              <div style="margin-bottom: 24px;">
                <strong style="font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888;">Message:</strong><br/>
                <p style="white-space: pre-wrap; background: #141414; padding: 16px; border: 1px solid #262626; line-height: 1.6;">${data.message}</p>
              </div>

              <div style="font-family: monospace; font-size: 10px; color: #666; border-top: 1px solid #262626; padding-top: 16px;">
                Sent from Zafira Ryani Putri's Portfolio Contact Form
              </div>
            </div>
          `;

          await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            replyTo: data.email,
            subject: `[Portfolio] Message from ${data.name}${data.organization ? ` (${data.organization})` : ""}`,
            html: emailHtml,
          });
          results.emailSent = true;
        } catch (err) {
          console.error("Failed to send email via Resend:", err);
        }
      })()
    );
  } else {
    console.info("RESEND_API_KEY is not set. Skipping email dispatch.");
  }

  // 2. Discord Webhook Notification
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (discordWebhookUrl) {
    tasks.push(
      (async () => {
        try {
          const payload = {
            embeds: [
              {
                title: "📥 New Portfolio Contact Message",
                color: 0xa8242f, // Portfolio brutalist red
                fields: [
                  { name: "Sender", value: data.name, inline: true },
                  { name: "Email", value: data.email, inline: true },
                  ...(data.organization
                    ? [{ name: "Organization", value: data.organization, inline: false }]
                    : []),
                  { name: "Message", value: data.message.slice(0, 1024) },
                ],
                footer: {
                  text: "Zafira Ryani Portfolio",
                },
                timestamp: new Date().toISOString(),
              },
            ],
          };

          const res = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (res.ok) {
            results.discordSent = true;
          } else {
            console.error("Discord webhook responded with error:", res.status);
          }
        } catch (err) {
          console.error("Failed to post to Discord webhook:", err);
        }
      })()
    );
  }

  // 3. Telegram Bot Notification
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  if (telegramBotToken && telegramChatId) {
    tasks.push(
      (async () => {
        try {
          const text = [
            `🚨 <b>New Portfolio Message</b>`,
            `<b>Name:</b> ${data.name}`,
            `<b>Email:</b> ${data.email}`,
            data.organization ? `<b>Org:</b> ${data.organization}` : null,
            `\n<b>Message:</b>\n${data.message}`,
          ]
            .filter(Boolean)
            .join("\n");

          const res = await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: telegramChatId,
                text,
                parse_mode: "HTML",
              }),
            }
          );

          if (res.ok) {
            results.telegramSent = true;
          } else {
            console.error("Telegram bot responded with error:", res.status);
          }
        } catch (err) {
          console.error("Failed to post to Telegram bot:", err);
        }
      })()
    );
  }

  await Promise.all(tasks);
  return results;
}

