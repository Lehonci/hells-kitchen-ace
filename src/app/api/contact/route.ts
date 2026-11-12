import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  isValidEmailFormat,
  isDisposableEmail,
  verifyDomainHasMx,
  sanitizeText,
} from "@/lib/emailValidation";
import { sendNotifications } from "@/lib/notifications";

export async function POST(req: NextRequest) {
  try {
    // 1. IP & Rate Limiting (DDoS & Spam Mitigation)
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip = forwarded ? forwarded.split(",")[0].trim() : realIp || "127.0.0.1";

    const { allowed, resetInSec } = checkRateLimit(ip, 5, 10 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        {
          error: `Terlalu banyak permintaan dari perangkat Anda. Silakan coba lagi dalam ${Math.ceil(
            resetInSec / 60
          )} menit.`,
        },
        { status: 429 }
      );
    }

    // 2. Parse payload safely
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Format request tidak valid." },
        { status: 400 }
      );
    }

    const { name, email, organization, message, hp_website } = body || {};

    // 3. Honeypot check (Invisible bot trap)
    // If the hidden field has any value, a bot filled it out.
    // Silently return success so the bot moves on without knowing it was dropped.
    if (hp_website && typeof hp_website === "string" && hp_website.trim() !== "") {
      console.warn(`[Anti-Spam] Honeypot triggered by IP ${ip}. Silently dropped.`);
      return NextResponse.json(
        { success: true, message: "Pesan Anda telah berhasil diterima." },
        { status: 200 }
      );
    }

    // 4. Input sanitization (strip dangerous tags & trim)
    const cleanName = sanitizeText(name || "");
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanOrg = sanitizeText(organization || "");
    const cleanMessage = sanitizeText(message || "");

    // 5. Basic field validations
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Nama pengirim minimal 2 karakter." },
        { status: 400 }
      );
    }
    if (cleanName.length > 80) {
      return NextResponse.json(
        { error: "Nama pengirim maksimal 80 karakter." },
        { status: 400 }
      );
    }

    if (!cleanEmail || !isValidEmailFormat(cleanEmail)) {
      return NextResponse.json(
        { error: "Format alamat email tidak valid (contoh: nama@domain.com)." },
        { status: 400 }
      );
    }

    // 6. Anti-Fake & Anti-Disposable Email Check
    if (isDisposableEmail(cleanEmail)) {
      return NextResponse.json(
        {
          error:
            "Mohon gunakan alamat email resmi atau personal yang aktif (domain email sekali pakai tidak diterima).",
        },
        { status: 400 }
      );
    }

    // 7. Verify domain has active MX records (domain actually exists and receives email)
    const hasMx = await verifyDomainHasMx(cleanEmail);
    if (!hasMx) {
      return NextResponse.json(
        {
          error:
            "Domain email tidak valid atau tidak memiliki mail server yang aktif.",
        },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      return NextResponse.json(
        { error: "Pesan terlalu singkat (minimal 10 karakter)." },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 3000) {
      return NextResponse.json(
        { error: "Pesan terlalu panjang (maksimal 3000 karakter)." },
        { status: 400 }
      );
    }

    // 8. Dispatch notifications (Resend Email, Discord, Telegram)
    const notificationResults = await sendNotifications({
      name: cleanName,
      email: cleanEmail,
      organization: cleanOrg,
      message: cleanMessage,
    });

    console.info("Notification dispatch summary:", notificationResults);

    return NextResponse.json(
      {
        success: true,
        message: "Terima kasih! Pesan Anda telah berhasil terkirim.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unhandled error in /api/contact:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server. Silakan coba lagi beberapa saat." },
      { status: 500 }
    );
  }
}

