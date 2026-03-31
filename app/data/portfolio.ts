import data from "./portfolio.json";

export interface Project {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  color: string;
  overview: string;
  challenge: string;
  process: string[];
  solutions: { title: string; description: string }[];
  results: { metric: string; label: string }[];
  lessons: string[];
  teamSize: string;
  screenshot?: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  about: string;
  linkedin: string;
  email: string;
  tools: string[];
  frameworks: string[];
  certifications: string[];
}

export const profile: Profile = data.profile;
export const projects: Project[] = data.projects;
