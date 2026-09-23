import React from "react";
import type { Metadata } from "next";
import { getAllProjects, getAllTags } from "@/lib/projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Applications | Mwizerwa Stiven",
  description:
    "Explore web applications, Open Source Kigali portals, e-commerce platforms, and developer tools built by Mwizerwa Stiven (@Mustivo).",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const allTags = getAllTags();

  return (
    <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Portfolio Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Projects &amp; Open Source Work
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          A showcase of full-stack web applications, Open Source Kigali initiatives, Rwandan commerce platforms, and developer tools. Filter by technology to explore specific case studies.
        </p>
      </div>

      {/* Interactive Gallery */}
      <ProjectsGallery initialProjects={projects} availableTags={allTags} />
    </div>
  );
}
