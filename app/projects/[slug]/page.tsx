import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Calendar,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectJsonLd } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Mwizerwa Steven`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mwizerwa Steven`,
      description: project.shortDescription,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prevProject, nextProject } = getAdjacentProjects(slug);

  return (
    <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 py-10 lg:py-16 space-y-12">
      <ProjectJsonLd project={project} />
      {/* Back to all projects link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            Case Study
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons: Live Demo & GitHub */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all duration-200"
            >
              <span>Visit Application / Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Thumbnail Showcase */}
      <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 shadow-2xl bg-slate-950">
        <Image
          src={project.thumbnail}
          alt={`Main preview of ${project.title}`}
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="object-cover object-top"
        />
      </div>

      {/* Measurable Results & Key Metrics Cards */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <TrendingUp className="w-4 h-4" />
            <span>Key Results &amp; Impact Metrics</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-center sm:text-left space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Problem Statement & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        {/* Problem Statement */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Problem Statement</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* My Role */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-sky-500" />
            <span>My Role &amp; Responsibilities</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.role}
          </p>
        </div>
      </div>

      {/* Architecture Decisions */}
      <section className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-500" />
          <span>System Architecture &amp; Implementation Decisions</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.architecture}
        </p>
      </section>

      {/* Engineering Features Checklist */}
      {project.features && project.features.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-500" />
            <span>Core Features &amp; Technical Highlights</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="space-y-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Visual Highlights &amp; Screenshots
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Interface and architectural views from production builds.
            </p>
          </div>

          <div className="space-y-8">
            {project.screenshots.map((shot, idx) => (
              <figure
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-950 shadow-md"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={shot.url}
                    alt={shot.caption || `Screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    className="object-cover object-top"
                  />
                </div>
                {shot.caption && (
                  <figcaption className="p-4 bg-slate-900/90 text-xs text-slate-300 border-t border-slate-800 text-center">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next Project Navigation Footer */}
      <nav
        aria-label="Adjacent projects navigation"
        className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-colors group space-y-1 text-left"
          >
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Previous Case Study
            </span>
            <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {prevProject.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-colors group space-y-1 text-right sm:col-start-2"
          >
            <span className="text-xs font-semibold text-slate-400 flex items-center justify-end gap-1">
              Next Case Study
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {nextProject.title}
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}
