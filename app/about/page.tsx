import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllSkillCategories } from "@/lib/skills";
import { SkillBadge } from "@/components/SkillBadge";
import {
  Download,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Languages,
  Phone,
  Mail,
} from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Mwizerwa Steven | IT Engineer & Developer",
  description:
    "Curriculum Vitae and background of Mwizerwa Steven — IT Engineer & Software Developer from Kigali, Rwanda. Mount Kigali University, Open Source Kigali, and Solvit Africa Fellow.",
};

const CAREER_TIMELINE = [
  {
    role: "IT Engineer",
    company: "WITH A MULTISERVICES LTD",
    location: "Muhanga, RW",
    period: "Sept 2024 – Aug 2025",
    description:
      "Delivered technical support, network and equipment administration, and client software assistance.",
    achievements: [
      "Attended and responded promptly to customer hardware, network, and software issues",
      "Assisted citizens with government services through the Irembo platform",
      "Maintained and managed IT equipment including computers, printers, and networking infrastructures",
      "Organized technology demonstrations, training sessions, and coaching programs",
      "Assisted customers with innovative design setups for their products and services",
    ],
  },
  {
    role: "Open Source Contributor & Developer",
    company: "OPEN SOURCE KIGALI",
    location: "Kigali, RW",
    period: "Ongoing",
    description:
      "Collaborating with fellow developers to improve practical software engineering skills and build community web platforms.",
    achievements: [
      "Contributing to open-source software development activities and community web portals",
      "Sharing knowledge, participating in coding sessions, and mentoring upcoming developers",
    ],
  },
  {
    role: "Computer & Software Trainer",
    company: "BRIGHT VISION TRAINING CENTER",
    location: "Rwanda",
    period: "Instructor",
    description:
      "Conducted training sessions guiding learners through practical computer literacy and software development fundamentals.",
    achievements: [
      "Assisted learners with hands-on programming exercises, real projects, and technical questions",
      "Prepared and explained training materials tailored to learners' skill levels",
      "Supported students during practical lab exercises to strengthen their technical abilities",
    ],
  },
  {
    role: "Mobile Software Fellow",
    company: "SOLVIT AFRICA – CODE2CONNECT CAREER FELLOWSHIP",
    location: "Kigali, RW",
    period: "Fellowship Graduate",
    description:
      "Intensive software development fellowship focused on practical cross-platform mobile application engineering.",
    achievements: [
      "Learned and applied React Native to build cross-platform mobile applications",
      "Developed mobile user interfaces using reusable React Native components",
      "Practiced JavaScript and TypeScript for robust application development",
      "Implemented mobile navigation, forms, state management, and REST API integrations",
      "Used Git and GitHub for collaborative version control and team code reviews",
    ],
  },
];

const EDUCATION_TIMELINE = [
  {
    degree: "Bachelor’s Degree in Computer Science",
    institution: "Mount Kigali University",
    location: "Kigali, RW",
    period: "Sept 2025 - Present",
    honors: "Pursuing advanced studies in Computer Science, Systems, and Software Engineering",
  },
  {
    degree: "A2 Certificate in Software Development",
    institution: "Ecole Technique Saint Kizito Musha",
    location: "Rwamagana, RW",
    period: "Sept 2021 – June 2024",
    honors: "Graduated with strong technical foundation in algorithms, databases, and application design",
  },
];

export default function AboutPage() {
  const skillCategories = getAllSkillCategories();

  return (
    <div className="max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Top Header & Bio Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Avatar Graphic */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
            <Image
              src="/images/avatar.jpg"
              alt="Mwizerwa Steven - IT Engineer & Software Developer"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IT Engineer &amp; Developer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Mwizerwa Steven
          </h1>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-500" />
              Kigali, Rwanda
            </span>
            <span>•</span>
            <a
              href="tel:+250786974250"
              className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 font-mono"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              +250 786974250
            </a>
            <span>•</span>
            <a
              href="mailto:stevenmwizerwa1@gmail.com"
              className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400"
            >
              <Mail className="w-4 h-4 text-rose-500" />
              stevenmwizerwa1@gmail.com
            </a>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am an <strong>IT Engineer</strong> and <strong>Software Developer</strong> from Kigali, Rwanda. I combine hands-on IT infrastructure and network management with practical full-stack web and mobile application development.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Currently pursuing my Bachelor&apos;s degree in Computer Science at <strong>Mount Kigali University</strong>, I have worked as an IT Engineer at <strong>WITH A MULTISERVICES LTD</strong>, completed the <strong>Solvit Africa Code2Connect Fellowship</strong> in React Native, and actively contribute to <strong>Open Source Kigali</strong>.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="https://wa.me/250786974250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="https://github.com/Mustivo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience &amp; Fellowships
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Roles in IT engineering, corporate services, open-source development, and mobile fellowships.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {CAREER_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-sky-500 bg-white dark:bg-slate-950 group-hover:bg-sky-500 transition-colors" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 opacity-70" />
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-sky-600 dark:text-sky-400 font-medium">
                  <span>{item.company}</span>
                  <span>•</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {item.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="space-y-6 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_TIMELINE.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                {edu.institution} ({edu.location})
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                {edu.honors}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Additional Info */}
      <section className="space-y-6 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <Languages className="w-4 h-4" />
            <span>Languages &amp; Licenses</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Languages &amp; Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Language</span>
            <div className="font-bold text-slate-900 dark:text-white text-base">Kinyarwanda</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Native / Fluent</div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Language</span>
            <div className="font-bold text-slate-900 dark:text-white text-base">English</div>
            <div className="text-xs text-sky-600 dark:text-sky-400 font-medium">Conversational Proficiency</div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Driver License</span>
            <div className="font-bold text-slate-900 dark:text-white text-base">Category B</div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Licensed Driver</div>
          </div>
        </div>
      </section>

      {/* Categorized Skills Inventory */}
      <section id="skills" className="space-y-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Technical Inventory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Complete technical competencies from web frameworks to network administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm space-y-4"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Resume Download Banner */}
      <section className="rounded-3xl border border-sky-500/20 bg-sky-50/50 dark:bg-sky-950/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Download My Complete CV
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Get the full curriculum vitae with references available upon request.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
          <a
            href="https://wa.me/250786974250"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
