import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { getFeaturedSkills } from "@/lib/skills";
import { SkillBadge } from "@/components/SkillBadge";
import { ArrowRight, Sparkles, CheckCircle2, Layers } from "lucide-react";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredSkills = getFeaturedSkills().slice(0, 10);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Preview Section */}
      <section className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects &amp; Case Studies
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Web applications and community portals built with Next.js, React, and TypeScript.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index === 0} />
          ))}
        </div>
      </section>

      {/* Engineering Philosophy & Skills Snapshot */}
      <section className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/80 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/60 dark:to-slate-950/60 p-8 sm:p-12 backdrop-blur-md shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Layers className="w-3.5 h-3.5" />
                <span>My Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Practical engineering for local and global impact.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Whether architecting educational portals like Bright Vision, engineering digital platforms like InzuHub, or contributing to community initiatives with Open Source Kigali, I am driven by the motto <strong>&quot;Work Hard&quot;</strong>. I craft software that is responsive, accessible, and dependable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Next.js &amp; React Modern Architectures</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Mobile-First Responsive Design</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>REST API &amp; Database Integration</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Open Source Community Contributor</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <span>Learn more about my background &amp; journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Skills Pills Snapshot */}
            <div className="lg:col-span-5 bg-white/60 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Highlighted Skills
                </span>
                <Link
                  href="/about#skills"
                  className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline"
                >
                  All Skills
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredSkills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    size="sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to collaborate on your next web application?
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              I am open to full-time opportunities, freelance projects, and collaborations. Let&apos;s build something great.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors shadow-md"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors backdrop-blur-sm border border-white/20"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
