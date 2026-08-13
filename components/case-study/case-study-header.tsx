import { ProjectMediaBlock } from "@/components/media/project-media";
import type { Project } from "@/content/projects";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const meta = [
    project.status,
    project.role,
    project.platform,
    project.year,
  ];

  return (
    <header className="pb-12 pt-14 sm:pb-16 sm:pt-20">
      <p className="section-kicker mb-6">
        {project.number}
        <span aria-hidden="true"> · </span>
        {project.category}
      </p>
      <h1 className="display text-[clamp(3.2rem,10vw,7rem)] text-ink">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
        {project.description}
      </p>
      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-[0.08em] uppercase text-ink-faint">
        {meta.map((item) => (
          <div key={item}>
            <dt className="sr-only">Detail</dt>
            <dd>{item}</dd>
          </div>
        ))}
      </dl>
      <div className="media-hover mt-12 overflow-hidden">
        <ProjectMediaBlock media={project.hero} priority />
      </div>
    </header>
  );
}
