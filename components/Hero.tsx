import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, ShieldCheck, Zap } from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const TECH_STACK_ROW = [
    { name: "React.js & React Native", color: "text-sky-500" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "Next.js", color: "text-slate-900 dark:text-white" },
    { name: "Tailwind CSS", color: "text-cyan-500" },
    { name: "Node.js & Express", color: "text-emerald-500" },
    { name: "PHP & MySQL", color: "text-indigo-400" },
    { name: "REST APIs & Firebase", color: "text-amber-500" },
    { name: "Network Administration", color: "text-purple-400" },
  ];

  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-500/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles &amp; Contracts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500">
                  {siteConfig.name}
                </span>
                .
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {siteConfig.title}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Based in {siteConfig.location}. I build modern, scalable web applications and manage IT systems and network infrastructure. From developing educational platforms like <strong>Bright Vision</strong> to engineering systems like <strong>InzuHub</strong> and <strong>ZoraShop</strong>, I bring a commitment to hard work and practical technical excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-md shadow-sky-500/10 hover:shadow-lg transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp ({siteConfig.phone})</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 opacity-70" />
                <span>Email Me</span>
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
                title="Download CV in PDF format"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-bold text-slate-900 dark:text-white">
                  IT
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Engineer &amp; Web Dev
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-sky-600 dark:text-sky-400">
                  OSK
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Open Source Contributor
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  Solvit
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  React Native Fellow
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Profile Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 to-indigo-600 opacity-20 blur-xl"></div>
              
              <div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                {/* Avatar and Info Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-sky-500/50 shadow-md bg-slate-900">
                    <Image
                      src="/images/avatar.jpg"
                      alt={`${siteConfig.name} - ${siteConfig.title}`}
                      fill
                      sizes="80px"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {siteConfig.name}
                    </h2>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                      <WhatsAppIcon className="w-3.5 h-3.5 inline" />
                      {siteConfig.phone}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {siteConfig.location} · {siteConfig.email}
                    </p>
                  </div>
                </div>

                {/* Code Terminal Snippet */}
                <div className="mt-6 rounded-xl bg-slate-950 p-4 font-mono text-xs border border-slate-800 text-slate-300 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10px]">steven.config.ts</span>
                  </div>
                  <pre className="mt-3 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
                    <code>
                      <span className="text-purple-400">const</span> engineer = &#123;{"\n"}
                      {"  "}name: <span className="text-emerald-400">&apos;{siteConfig.name}&apos;</span>,{"\n"}
                      {"  "}title: <span className="text-sky-300">&apos;{siteConfig.title}&apos;</span>,{"\n"}
                      {"  "}motto: <span className="text-amber-300">&apos;Work Hard&apos;</span>,{"\n"}
                      {"  "}stack: [<span className="text-sky-300">&apos;React&apos;</span>, <span className="text-sky-300">&apos;React Native&apos;</span>, <span className="text-sky-300">&apos;TS&apos;</span>, <span className="text-sky-300">&apos;PHP&apos;</span>],{"\n"}
                      {"  "}whatsapp: <span className="text-emerald-400">&apos;{siteConfig.phone}&apos;</span>{"\n"}
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Highlight badges */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="font-medium">Web &amp; Mobile Apps</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-medium">IT &amp; Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Icon / Badge Row */}
        <div className="mt-16 pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center mb-6">
            Core Technologies &amp; Working Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {TECH_STACK_ROW.map((item) => (
              <div
                key={item.name}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:border-sky-500/50 hover:scale-105 transition-all duration-150 cursor-default"
              >
                <span className={item.color}>● </span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
