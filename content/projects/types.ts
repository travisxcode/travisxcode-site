export type ProjectStatus = "LIVE" | "LIVE / DEMO" | "IN PROGRESS";

export type MediaKind = "hero" | "full" | "split" | "device" | "browser";

export type ProjectMedia = {
  kind: MediaKind;
  alt: string;
  src?: string;
  caption?: string;
  label?: string;
};

export type CaseStudyBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  media?: ProjectMedia[];
  todo?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectGlow = {
  from: string;
  via?: string;
  to: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  thesis: string;
  category: string;
  status: ProjectStatus;
  year: string;
  role: string;
  platform: string;
  type?: string;
  summary: string;
  description: string;
  glow: ProjectGlow;
  hero: ProjectMedia;
  gallery: ProjectMedia[];
  technologies: string[];
  links: ProjectLink[];
  sections: CaseStudyBlock[];
};
