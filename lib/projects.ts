import projectsData from "@/data/projects.json";

export interface Metric {
  label: string;
  value: string;
}

export interface Screenshot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  thumbnail: string;
  featured: boolean;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
  problemStatement: string;
  role: string;
  architecture: string;
  metrics: Metric[];
  features: string[];
  screenshots: Screenshot[];
}

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const allTags = new Set<string>();
  (projectsData as Project[]).forEach((project) => {
    project.tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
}

export function getAdjacentProjects(currentSlug: string): {
  prevProject: Project | null;
  nextProject: Project | null;
} {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { prevProject: null, nextProject: null };
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return { prevProject, nextProject };
}
