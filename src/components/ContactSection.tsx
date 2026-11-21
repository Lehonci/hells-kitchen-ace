"use client";

import React, { useState, useRef } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "./DecryptedText";
import ScrollReveal from "./ScrollReveal";
import { LineReveal } from "./MotionPrimitives";

const contactLinks = [
  {
    icon: Mail,
    label: "Email (zafiraryani@gmail.com)",
    href: "mailto:zafiraryani@gmail.com",
    isExternal: false,
    copyEmail: "zafiraryani@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub (@Lehonci)",
    href: "https://github.com/Lehonci",
    isExternal: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn (Zafira Ryani)",
    href: "https://www.linkedin.com/in/zafira-ryani/",
    isExternal: true,
  },
  {
    icon: Instagram,
    label: "Instagram (@zafiraryani)",
    href: "https://instagram.com/zafiraryani",
    isExternal: true,
  },
  {
    icon: MapPin,
    label: "Location (Bogor & Jakarta, Indonesia)",
    href: "https://maps.google.com/?q=Bogor,+Indonesia",
    isExternal: true,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    hp_website: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopyEmail = (email: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    setToastMessage(`${email} disalin ke clipboard`);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Mohon lengkapi nama, email, dan pesan.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Gagal mengirim pesan. Silakan coba lagi.");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
        hp_website: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Terjadi gangguan koneksi. Silakan periksa jaringan Anda.");
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <ScrollReveal direction="up" distance={14}>
          <div className="font-mono text-[10px] text-white/80 uppercase tracking-[0.18em] mb-12">
            <DecryptedText
              text="Have a dataset, a problem, or an opportunity?"
              duration={800}
            />
          </div>
        </ScrollReveal>

        {/* Big Display Heading & 96x96 Arrow Link to GitHub */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-white/[0.08]">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[122.88px] font-normal leading-[0.9] tracking-[-0.06em] text-[#F2F0EB]">
            <LineReveal text="Let’s make data matter." />
          </h2>

          <motion.a
            href="https://github.com/Lehonci"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="w-24 h-24 border border-white/30 flex items-center justify-center text-[#F2F0EB] hover:border-[#A8242F] hover:bg-[#A8242F]/10 hover:text-[#A8242F] transition-colors flex-shrink-0 group focus:outline-none"
            aria-label="Visit GitHub Profile (Lehonci)"
          >
            <ArrowUpRight className="w-8 h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Direct Interactive Form & Social Links */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Symbol Links */}
            <div className="lg:col-span-5 font-sans">
              <ScrollReveal direction="up" delay={100} distance={18} blur>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A8242F] block mb-2">
                  Direct Contact
                </span>
                <p className="text-[14px] text-white leading-relaxed mb-6">
                  Silakan hubungi saya untuk tawaran magang Data Analyst/Engineer,
                  kolaborasi riset AI, atau proyek WebGIS.
                </p>

                {/* Clickable Symbols Row (Email, GitHub, LinkedIn, Instagram, Location) */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {contactLinks.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (item.copyEmail) handleCopyEmail(item.copyEmail);
                      }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#F2F0EB] hover:border-[#A8242F] hover:bg-[#A8242F]/10 transition-colors group"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={160} distance={20} blur>
                <form
                  onSubmit={handleSubmit}
                  className="p-8 bg-[#0D0D0D] border border-white/[0.08] space-y-5"
                >
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="p-4 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>Terima kasih! Pesan Anda telah terkirim ke email saya. Saya akan segera merespons.</span>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="p-4 bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Honeypot field (hidden from real users, caught by bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_website">Website</label>
                    <input
                      id="hp_website"
                      type="text"
                      name="hp_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_website}
                      onChange={(e) =>
                        setFormData({ ...formData, hp_website: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama lengkap"
                        className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@instansi.com"
                        className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                      Organization / Company <span className="text-white/40">(Opsional)</span>
                    </label>
                    <input
                      type="text"
                      maxLength={100}
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="Instansi / Perusahaan / Kampus"
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      minLength={10}
                      maxLength={3000}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tulis pesan atau topik diskusi (minimal 10 karakter)..."
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="px-8 py-3 bg-[#F2F0EB] text-[#0A0A0A] hover:bg-[#A8242F] hover:text-white transition-colors font-mono text-[11px] uppercase tracking-[0.18em] font-semibold disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Clipboard Copy Toast (variant-01.com style) */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9990] bg-[#F2F0EB] text-[#0A0A0A] font-mono text-[11px] uppercase tracking-[0.14em] px-5 py-2.5 border border-[#A8242F] shadow-[0_8px_30px_rgba(0,0,0,0.45)] pointer-events-none"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
