import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail Container */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnail}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-medium text-white flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-1.5 py-0.5 rounded-md text-slate-500 dark:text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
          <Link
            href={`/projects/${project.slug}`}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            {project.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Metrics Highlight (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="block text-slate-400 dark:text-slate-500">
                {project.metrics[0].label}
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {project.metrics[0].value}
              </span>
            </div>
            {project.metrics[1] && (
              <div>
                <span className="block text-slate-400 dark:text-slate-500">
                  {project.metrics[1].label}
                </span>
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  {project.metrics[1].value}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Actions Row */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 group/link"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                title="View Source on GitHub"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo for ${project.title}`}
                title="Live Demo"
                className="p-1.5 rounded-lg text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
