"use client";

import React, { useState } from "react";
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
import { sendMessage } from "@/lib/supabase";

const contactLinks = [
  {
    icon: Mail,
    label: "Email (zafiraryani@gmail.com)",
    href: "mailto:zafiraryani@gmail.com",
    isExternal: false,
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
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Mohon lengkapi nama, email, dan pesan.");
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");
      await sendMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Gagal mengirim pesan. Silakan coba lagi.");
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-white/[0.08] bg-[#0A0A0A] py-24 sm:py-32"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <div className="font-mono text-[10px] text-white/80 uppercase tracking-[0.18em] mb-12">
          Have a dataset, a problem, or an opportunity?
        </div>

        {/* Big Display Heading & 96x96 Arrow Link to GitHub */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-white/[0.08]">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[122.88px] font-normal leading-[0.9] tracking-[-0.06em] text-[#F2F0EB]">
            Let’s make data matter.
          </h2>

          <a
            href="https://github.com/Lehonci"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 border border-white/30 flex items-center justify-center text-[#F2F0EB] hover:border-[#A8242F] hover:text-[#A8242F] transition-all flex-shrink-0 group focus:outline-none"
            aria-label="Visit GitHub Profile (Lehonci)"
          >
            <ArrowUpRight className="w-8 h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Direct Interactive Form & Social Links */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Symbol Links */}
            <div className="lg:col-span-5 font-sans">
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
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-[#F2F0EB] hover:border-[#A8242F] hover:bg-[#A8242F]/10 transition-all group"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <item.icon className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-[#0D0D0D] border border-white/[0.08] space-y-5"
              >
                {status === "success" && (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Terima kasih! Pesan Anda telah terkirim ke database.</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Nama lengkap"
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@instansi.com"
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tulis pesan atau topik diskusi..."
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F2F0EB] focus:outline-none focus:border-[#A8242F] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-3 bg-[#F2F0EB] text-[#0A0A0A] hover:bg-[#A8242F] hover:text-white transition-all font-mono text-[11px] uppercase tracking-[0.18em] font-semibold"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
