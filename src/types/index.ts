export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  location: string;
  focus: string;
  status: string;
  email: string;
  website: string;
  socials: SocialLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BootLine {
  text: string;
  delay: number;
  color: string;
}

export interface BootConfig {
  lines: BootLine[];
  totalDuration: number;
}

export interface HeroData {
  terminalTitle: string;
  command: string;
}

export interface AboutItem {
  text: string;
}

export interface AboutData {
  introParagraphs: string[];
  whatIDo: AboutItem[];
  footnote: string;
  footnoteLink: { text: string; url: string };
}

export interface SkillCategory {
  name: string;
  color: string;
  items: string[];
}

export interface Job {
  date: string;
  role: string;
  company: string;
  description: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  details: string;
  link?: string;
}

export interface Degree {
  title: string;
  school: string;
  year: string;
}

export interface Cert {
  name: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface EducationData {
  degrees: Degree[];
  certs: Cert[];
}
