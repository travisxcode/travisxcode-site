import { TextLink } from "@/components/text-link";
import type { Project } from "@/content/projects";

type NextProjectProps = {
  project: Project;
};

export function NextProject({ project }: NextProjectProps) {
  return (
    <section className="border-t border-line py-16 sm:py-20">
      <p className="section-kicker mb-4">Next project</p>
      <h2 className="display text-[clamp(2.4rem,6vw,4rem)] text-ink">
        {project.title}
      </h2>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">{project.summary}</p>
      <p className="mt-6">
        <TextLink href={`/work/${project.slug}/`}>View case study</TextLink>
      </p>
    </section>
  );
}
