import { ProjectMediaBlock } from "@/components/media/project-media";
import { TextLink } from "@/components/text-link";
import type { Project } from "@/content/projects";

type ProjectRowProps = {
  project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="border-t border-line py-12 sm:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-12">
        <p className="display text-4xl text-ink-faint lg:pt-2">{project.number}</p>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="display text-[clamp(2.4rem,6vw,4.4rem)] text-ink">
              {project.title}
            </h3>
            <p className="rounded-full bg-live-wash px-3 py-1 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-live">
              {project.status}
            </p>
          </div>
          <p className="mt-3 text-sm tracking-[0.08em] uppercase text-ink-faint">
            {project.category}
            <span aria-hidden="true"> · </span>
            {project.year}
          </p>
          <div className="media-hover mt-8 overflow-hidden">
            <ProjectMediaBlock media={project.hero} />
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.summary}
          </p>
          <p className="mt-6">
            <TextLink href={`/work/${project.slug}/`}>View case study</TextLink>
          </p>
        </div>
      </div>
    </article>
  );
}
