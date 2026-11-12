import dns from "dns/promises";

// Common temporary / disposable email service domains
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "10minutemail.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "sharklasers.com",
  "grr.la",
  "yopmail.com",
  "throwawaymail.com",
  "dispostable.com",
  "trashmail.com",
  "getnada.com",
  "fakeinbox.com",
  "generator.email",
  "tempail.com",
  "maildrop.cc",
  "inboxkitten.com",
  "burnermail.io",
  "mohmal.com",
  "crazymailing.com",
  "armyspy.com",
  "cuvox.de",
  "dayrep.com",
  "fleckens.hu",
  "gustr.com",
  "jourrapide.com",
  "rhyta.com",
  "superrito.com",
  "teleworm.us",
  "tinemail.com",
]);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function sanitizeText(text: string): string {
  if (!text) return "";
  return text
    .trim()
    .replace(/[<>]/g, (char) => (char === "<" ? "&lt;" : "&gt;"));
}

export function isValidEmailFormat(email: string): boolean {
  if (!email || email.length > 254) return false;
  return EMAIL_REGEX.test(email);
}

export function isDisposableEmail(email: string): boolean {
  const parts = email.toLowerCase().split("@");
  if (parts.length !== 2) return true;
  const domain = parts[1];
  return DISPOSABLE_DOMAINS.has(domain);
}

/**
 * Validates domain has active Mail Exchange (MX) records.
 * Catches made-up domains like "test@randomfakedomain123987.com".
 */
export async function verifyDomainHasMx(email: string): Promise<boolean> {
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const domain = parts[1].trim();

  // If in localhost or development with mock domains, let it pass if explicitly desired
  if (domain === "localhost" || domain.endsWith(".test")) {
    return true;
  }

  try {
    const mxRecords = await dns.resolveMx(domain);
    return Array.isArray(mxRecords) && mxRecords.length > 0;
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code;
    // ENOTFOUND or ENODATA means domain doesn't exist or has no mail servers
    if (code === "ENOTFOUND" || code === "ENODATA") {
      return false;
    }
    // For network timeouts or dns resolver issues, don't hard-block legitimate users
    console.warn(`DNS MX check warning for domain ${domain}:`, code || err);
    return true;
  }
}

