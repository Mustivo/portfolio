import React from "react";
import { siteConfig } from "@/lib/site";
import type { Project } from "@/lib/projects";

export function PersonJsonLd() {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        jobTitle: siteConfig.title,
        description:
          "IT Engineer and Full-Stack Developer based in Kigali, Rwanda. Specialist in modern web architecture, Next.js, React, Node.js, and cloud systems.",
        url: baseUrl,
        image: `${baseUrl}/images/avatar.jpg`,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kigali",
          addressCountry: "Rwanda",
        },
        nationality: {
          "@type": "Country",
          name: "Rwanda",
        },
        sameAs: [
          siteConfig.githubUrl,
          siteConfig.linkedinUrl,
          siteConfig.whatsappUrl,
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Python",
          "Database Architecture",
          "PostgreSQL",
          "MongoDB",
          "IT Systems Engineering",
          "Cloud Computing",
          "Tailwind CSS",
          "REST APIs",
          "Software Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: `${siteConfig.name} | Portfolio`,
        alternateName: "Mwizerwa Stiven Portfolio",
        description:
          "Official personal portfolio and software engineering showcase of Mwizerwa Steven (Stiven) — IT Engineer and Full-Stack Developer in Kigali, Rwanda.",
        publisher: {
          "@id": `${baseUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: `${siteConfig.name} - Official Developer Portfolio`,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        mainEntity: {
          "@id": `${baseUrl}/#person`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const baseUrl = siteConfig.siteUrl.replace(/\/+$/, "");
  const projectUrl = `${baseUrl}/projects/${project.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.tagline || project.title,
    description: project.shortDescription,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    url: projectUrl,
    image: project.thumbnail.startsWith("http")
      ? project.thumbnail
      : `${baseUrl}${project.thumbnail}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords: project.tags?.join(", ") || "",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
