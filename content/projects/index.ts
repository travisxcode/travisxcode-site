import { centaures } from "./centaures";
import { pinterest } from "./pinterest";
import { snowball } from "./snowball";
import type { Project } from "./types";

export type { Project, ProjectMedia, CaseStudyBlock } from "./types";

export const projects: Project[] = [pinterest, snowball, centaures];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
