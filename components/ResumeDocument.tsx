"use client";

import React, { useState } from "react";
import { Download, Printer, Check, Copy, ExternalLink, FileText } from "lucide-react";

export function ResumeDocument() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "Mwizerwa Steven | IT Engineer & Software Developer | Kigali, Rwanda | +250 786 974 250 | stevenmwizerwa1@gmail.com | github.com/Mustivo"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm print:hidden">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Curriculum Vitae (Official Format)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formatted according to standard industry structure with full credentials
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
            title="Copy contact details to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Summary</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
            title="Print or Save as PDF via browser"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print View</span>
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-sm transition-all"
            title="Download the compiled PDF file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Sheet / Document Container */}
      <div className="relative mx-auto max-w-[850px] w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-12 shadow-md dark:shadow-2xl print:border-none print:shadow-none print:p-0 print:m-0 text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
        {/* Header */}
        <header className="text-center pb-4 border-b-2 border-slate-900 dark:border-slate-100">
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
            MWIZERWA STEVEN
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 font-medium">
            Kigali, Rwanda &bull; +250 786 974 250 &bull;{" "}
            <a
              href="mailto:stevenmwizerwa1@gmail.com"
              className="text-sky-600 dark:text-sky-400 hover:underline"
            >
              stevenmwizerwa1@gmail.com
            </a>
          </p>
          <p className="text-xs text-sky-600 dark:text-sky-400 mt-1 font-mono flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://github.com/Mustivo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <span>GitHub: github.com/Mustivo</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
            <span>&bull;</span>
            <a
              href="https://www.linkedin.com/in/mwizerwa-stiven-b7b5743a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
            <span>&bull;</span>
            <span className="text-slate-500 dark:text-slate-400">
              IT Engineer &amp; Full-Stack Developer
            </span>
          </p>
        </header>

        {/* EXPERIENCE Section */}
        <section className="pt-6 space-y-4">
          <div className="border-b border-slate-300 dark:border-slate-800 pb-1">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              EXPERIENCE
            </h2>
          </div>

          {/* Job 1: WITH A MULTISERVICES LTD */}
          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                WITH A MULTISERVICES LTD
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Muhanga, Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-sky-700 dark:text-sky-400 font-medium italic">
              <span>IT Engineer</span>
              <span className="text-slate-500 dark:text-slate-400 not-italic font-normal">
                Sept 2024 &ndash; Aug 2025
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Delivered direct technical support, equipment troubleshooting, and local network maintenance.
              </li>
              <li>
                Assisted Rwandan citizens and clients with digital government administrative workflows via the Irembo platform.
              </li>
              <li>
                Maintained and managed office technology equipment including workstations, printers, routers, and switches.
              </li>
              <li>
                Conducted technology demonstrations, coaching sessions, and client digital service setups.
              </li>
            </ul>
          </div>

          {/* Job 2: Bright Vision Training Center */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Bright Vision Training Center
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-sky-700 dark:text-sky-400 font-medium italic">
              <span>Computer &amp; Software Trainer</span>
              <span className="text-slate-500 dark:text-slate-400 not-italic font-normal">
                2024 &ndash; Present
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Conducted training sessions guiding learners through practical computer literacy and programming fundamentals.
              </li>
              <li>
                Designed course materials, exercises, and tailored curriculum resources for student cohorts.
              </li>
              <li>
                Supervised laboratory practical sessions, providing 1-on-1 code debugging and problem-solving support.
              </li>
            </ul>
          </div>

          {/* Job 3: Open Source Kigali */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Open Source Kigali
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Kigali, Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-sky-700 dark:text-sky-400 font-medium italic">
              <span>Open Source Contributor</span>
              <span className="text-slate-500 dark:text-slate-400 not-italic font-normal">
                2024 &ndash; Present
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Collaborated with local developers to build community web portals and open-source backend services.
              </li>
              <li>
                Participated in technical workshops, hackathons, and contributor onboarding sessions.
              </li>
              <li>
                Practiced collaborative version control with feature branches, code reviews, and Git workflows.
              </li>
            </ul>
          </div>

          {/* Job 4: Solvit Africa */}
          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Solvit Africa &ndash; Code2Connect Career Fellowship
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Kigali, Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-sky-700 dark:text-sky-400 font-medium italic">
              <span>Software Engineering Fellow</span>
              <span className="text-slate-500 dark:text-slate-400 not-italic font-normal">
                2024
              </span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Completed intensive fellowship focused on modern JavaScript, TypeScript, and React application development.
              </li>
              <li>
                Implemented reusable component architectures, state management hooks, and REST API integrations.
              </li>
              <li>
                Collaborated in agile team sprints adhering to clean code standards and peer reviews.
              </li>
            </ul>
          </div>
        </section>

        {/* EDUCATION Section */}
        <section className="pt-6 space-y-4">
          <div className="border-b border-slate-300 dark:border-slate-800 pb-1">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              EDUCATION
            </h2>
          </div>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Mount Kigali University
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Kigali, Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Bachelor&apos;s Degree in Computer Science
              </span>
              <span>Sept 2025 &ndash; Present</span>
            </div>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Focused on algorithms, software architecture, data structures, and computer networking.
              </li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Ecole Technique Saint Kizito Musha
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Rwamagana, Rwanda
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                A2 Certificate in Software Development
              </span>
              <span>Sept 2021 &ndash; June 2024</span>
            </div>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-1">
              <li>
                Graduated with practical foundation in web development, database management, and programming logic.
              </li>
            </ul>
          </div>
        </section>

        {/* AWARDS AND HONORS Section */}
        <section className="pt-6 space-y-4">
          <div className="border-b border-slate-300 dark:border-slate-800 pb-1">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              AWARDS AND HONORS (OR ACHIEVEMENTS)
            </h2>
          </div>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                Solvit Africa Code2Connect Fellowship
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Kigali, Rwanda
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-item">
              Awarded fellowship graduation distinction for project milestones and teamwork.
            </p>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                WITH A MULTISERVICES LTD
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Muhanga, Rwanda
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-item">
              Commended for exceptional technical service delivery, equipment uptime, and public Irembo support.
            </p>
          </div>
        </section>

        {/* SKILLS Section */}
        <section className="pt-6 space-y-3">
          <div className="border-b border-slate-300 dark:border-slate-800 pb-1">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              SKILLS
            </h2>
          </div>

          <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>
              &bull; <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS
            </div>
            <div>
              &bull; <strong>Backend:</strong> Node.js, Express.js, PHP, RESTful APIs, JWT Authentication
            </div>
            <div>
              &bull; <strong>Databases:</strong> PostgreSQL, MySQL, Prisma ORM, MongoDB, Firebase
            </div>
            <div>
              &bull; <strong>Tools:</strong> Git, GitHub, Docker, VS Code, npm, Turbopack
            </div>
            <div>
              &bull; <strong>Software &amp; IT:</strong> Computer Networking, Hardware Diagnostics, Irembo Services, MS Office (Word, Excel, PowerPoint)
            </div>
            <div>
              &bull; <strong>Languages:</strong> Kinyarwanda &mdash; Native &bull; English &mdash; Fluent / Professional &bull; French &mdash; Elementary
            </div>
            <div>
              &bull; <strong>Driver License:</strong> Category B (Licensed Driver)
            </div>
          </div>
        </section>

        {/* Sign-off Footer */}
        <footer className="pt-8 mt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
          <p>Thanks For Your Time &bull; References: Available Upon Request</p>
        </footer>
      </div>
    </div>
  );
}
