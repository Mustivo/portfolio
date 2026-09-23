import skillsData from "@/data/skills.json";

export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export function getAllSkillCategories(): SkillCategory[] {
  return skillsData as SkillCategory[];
}

export function getFeaturedSkills(): Skill[] {
  const featured: Skill[] = [];
  (skillsData as SkillCategory[]).forEach((cat) => {
    cat.skills.forEach((skill) => {
      if (skill.featured) {
        featured.push(skill);
      }
    });
  });
  return featured;
}
