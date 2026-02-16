import type {
  SiteConfig,
  NavLink,
  BootConfig,
  HeroData,
  AboutData,
  SkillCategory,
  Job,
  Project,
  EducationData,
} from "@/types";

import siteConfigJson from "./json/site.config.json";
import navJson from "./json/nav.json";
import bootSequenceJson from "./json/boot-sequence.json";
import heroJson from "./json/hero.json";
import aboutJson from "./json/about.json";
import skillsJson from "./json/skills.json";
import experienceJson from "./json/experience.json";
import projectsJson from "./json/projects.json";
import educationJson from "./json/education.json";

export const siteConfig = siteConfigJson as SiteConfig;
export const navLinks = navJson as NavLink[];
export const bootConfig = bootSequenceJson as BootConfig;
export const heroData = heroJson as HeroData;
export const aboutData = aboutJson as AboutData;
export const skillCategories = skillsJson as SkillCategory[];
export const jobs = experienceJson as Job[];
export const projects = projectsJson as Project[];
export const educationData = educationJson as EducationData;
