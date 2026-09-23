import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Inquiries | Mwizerwa Steven",
  description:
    "Get in touch with Mwizerwa Steven — IT Engineer & Software Developer in Kigali, Rwanda. Phone / WhatsApp: +250 786974250, Email: stevenmwizerwa1@gmail.com.",
};

const DIRECT_LINKS = [
  {
    title: "WhatsApp & Phone",
    value: "+250 786974250",
    href: "https://wa.me/250786974250",
    icon: WhatsAppIcon,
    color: "text-emerald-500",
    description: "Instant chat and voice calls via WhatsApp or direct phone.",
  },
  {
    title: "Direct Email",
    value: "stevenmwizerwa1@gmail.com",
    href: "mailto:stevenmwizerwa1@gmail.com",
    icon: Mail,
    color: "text-rose-500",
    description: "Best for formal proposals, job opportunities, and inquiries.",
  },
  {
    title: "GitHub Profile",
    value: "github.com/Mustivo",
    href: "https://github.com/Mustivo",
    icon: GithubIcon,
    color: "text-slate-900 dark:text-white",
    description: "Browse code repositories, Open Source Kigali tools, and projects.",
  },
  {
    title: "LinkedIn Network",
    value: "linkedin.com/in/mwizerwa-stiven-b7b5743a5",
    href: "https://www.linkedin.com/in/mwizerwa-stiven-b7b5743a5/",
    icon: LinkedinIcon,
    color: "text-sky-600",
    description: "Connect for professional networking and recommendations.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s Connect &amp; Collaborate
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Have an IT engineering role, web or mobile application project, or open-source inquiry? Reach out directly via WhatsApp, email, or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Send a Direct Message
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Direct to inbox
            </span>
          </div>

          <ContactForm />
        </div>

        {/* Right Column: Direct Channels & Availability Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Availability Card */}
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 backdrop-blur-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Availability</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Open for Full-Time Roles &amp; Contracts
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Available immediately for software engineering, IT engineering, and web development opportunities.
            </p>
            <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Kigali, Rwanda
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                CAT (UTC+2)
              </span>
            </div>
          </div>

          {/* Direct Communication Cards */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Direct Contact Options
            </h2>

            {DIRECT_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-150 backdrop-blur-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${link.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {link.title}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-xs font-mono text-sky-600 dark:text-sky-400 truncate mt-0.5">
                      {link.value}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick WhatsApp Action Button */}
          <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Prefer WhatsApp?
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Chat directly with Mwizerwa Steven on +250 786974250
              </p>
            </div>
            <a
              href="https://wa.me/250786974250"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Chat Now</span>
            </a>
          </div>

          {/* Guarantee Note */}
          <div className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>
              Your information is strictly protected. Fast turnaround and professional communication guaranteed.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
