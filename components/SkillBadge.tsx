import React from "react";
import {
  Code2,
  Layers,
  FileCode,
  Palette,
  Sparkles,
  Layout,
  Cpu,
  Eye,
  Server,
  Network,
  Share2,
  Zap,
  Terminal,
  Activity,
  ShieldCheck,
  Database,
  Binary,
  Boxes,
  Cloud,
  Box,
  GitBranch,
  CloudRain,
  Gauge,
  Compass,
  GaugeCircle,
  CheckCircle2,
  CheckCheck,
  Users,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Layers,
  FileCode,
  Palette,
  Sparkles,
  Layout,
  Cpu,
  Eye,
  Server,
  Network,
  Share2,
  Zap,
  Terminal,
  Activity,
  ShieldCheck,
  Database,
  Binary,
  Boxes,
  Cloud,
  Box,
  GitBranch,
  CloudRain,
  Gauge,
  Compass,
  GaugeCircle,
  CheckCircle2,
  CheckCheck,
  Users,
};

interface SkillBadgeProps {
  name: string;
  level?: "Expert" | "Advanced" | "Intermediate";
  icon?: string;
  size?: "sm" | "md";
}

export function SkillBadge({
  name,
  level,
  icon,
  size = "md",
}: SkillBadgeProps) {
  const IconComponent = icon && ICON_MAP[icon] ? ICON_MAP[icon] : Code2;

  const levelStyles: Record<string, string> = {
    Expert: "border-sky-500/30 text-sky-600 dark:text-sky-400 bg-sky-50/60 dark:bg-sky-950/40",
    Advanced: "border-indigo-500/30 text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40",
    Intermediate: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/40",
  };

  const defaultStyle =
    "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl font-medium border transition-all duration-150 backdrop-blur-sm shadow-xs ${
        level ? levelStyles[level] || defaultStyle : defaultStyle
      } ${
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
      }`}
    >
      <IconComponent className={size === "sm" ? "w-3.5 h-3.5 shrink-0 opacity-80" : "w-4 h-4 shrink-0 opacity-85"} />
      <span>{name}</span>
      {level && (
        <span className="text-[10px] uppercase font-semibold opacity-60 ml-0.5 tracking-wider">
          {level}
        </span>
      )}
    </div>
  );
}
