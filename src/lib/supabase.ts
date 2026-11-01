import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("your-project") &&
    !supabaseAnonKey.includes("your-anon-key")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface MessagePayload {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

export async function sendMessage(payload: MessagePayload) {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.from("messages").insert([
      {
        name: payload.name,
        email: payload.email,
        organization: payload.organization || null,
        message: payload.message,
      },
    ]);
    if (error) {
      throw error;
    }
    return { success: true, data };
  }

  // Graceful local fallback when Supabase keys are not yet configured
  console.info("Supabase credentials not configured yet. Simulating submission:", payload);
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
      existing.push({ ...payload, created_at: new Date().toISOString() });
      localStorage.setItem("portfolio_messages", JSON.stringify(existing));
    } catch {
      // ignore localstorage errors
    }
  }

  // Simulate slight network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true, simulated: true };
}

