import React from "react";
import Link from "next/link";
import { Mail, Heart, ArrowUpRight, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 mt-auto transition-colors">
      <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Narrative */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Mwizerwa Steven
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-400 font-medium border border-emerald-300 dark:border-emerald-800">
                IT Engineer &amp; Developer
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              IT Engineer and Software Developer based in Kigali, Rwanda. Mount Kigali University student, Open Source Kigali contributor, and Solvit Africa Fellow.
            </p>
            {/* Social & Contact Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/250786974250"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +250 786974250"
                title="WhatsApp: +250 786974250"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 bg-white/50 dark:bg-slate-900/50 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Mustivo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile @Mustivo"
                title="GitHub: Mustivo"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mwizerwa-stiven-b7b5743a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:stevenmwizerwa1@gmail.com"
                aria-label="Email Mwizerwa Steven"
                title="Email: stevenmwizerwa1@gmail.com"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-500 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+250786974250"
                aria-label="Call +250 786974250"
                title="Call: +250 786974250"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  About &amp; Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Contact &amp; WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Highlight Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Featured GitHub Projects
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projects/open-source-kigali"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>Open Source Kigali (Frontend)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/movie-application"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>MovieApplication (Expo / React Native)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/zorashop-rwanda"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>ZoraShop Rwanda</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline font-medium pt-1"
                >
                  <span>Download CV (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Mwizerwa Steven. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Kigali, Rwanda · Phone: +250 786974250 · stevenmwizerwa1@gmail.com <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
