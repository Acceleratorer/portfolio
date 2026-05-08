export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export type ProjectStatus = "featured" | "building" | "research" | "automation" | "web";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  status: ProjectStatus;
  cover: string;
  github?: string;
  demo?: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "data" | "tools";
  level: number;
  note: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}
