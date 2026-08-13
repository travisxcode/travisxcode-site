import Image from "next/image";
import { MermaidDiagram } from "@/components/media/mermaid-diagram";
import { MediaGrid, ProjectMediaBlock } from "@/components/media/project-media";
import { TextLink } from "@/components/text-link";
import type { Project } from "@/content/projects";

type CaseStudyArticleProps = {
  project: Project;
  next?: Project;
  onNext?: (slug: string) => void;
};

export function CaseStudyArticle({
  project,
  next,
  onNext,
}: CaseStudyArticleProps) {
  return (
    <article className="case-modal px-5 pb-8 pt-14 sm:px-10 sm:pb-12 sm:pt-16">
      <p className="inline-flex items-center gap-2 rounded-full bg-black/5 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-zinc-600">
        {project.status === "LIVE" ? (
          <span className="live-dot" aria-hidden="true" />
        ) : null}
        {project.status}
        {project.status === "LIVE" ? (
          <>
            <span aria-hidden="true"> · </span>
            {project.year}
          </>
        ) : null}
      </p>
      <p className="mt-4 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-zinc-400">
        {project.role}
        <span aria-hidden="true"> · </span>
        {project.platform}
      </p>
      <h1 className="display mt-5 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-zinc-950">
        {project.thesis}
      </h1>
      <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-zinc-600">
        {project.description}
      </p>

      <div className="mt-8 flex justify-center overflow-hidden rounded-[24px] bg-[#f3f3ef] p-5 sm:p-8">
        <ProjectMediaBlock media={project.hero} priority />
      </div>

      {project.sections.map((block) => (
        <section
          key={block.id}
          className="border-t border-zinc-200 py-10 sm:py-12"
        >
          <p className="section-kicker mb-4">[{block.title}]</p>
          <div className="prose-site">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {block.diagrams?.map((diagram) => (
            <MermaidDiagram
              key={diagram.chart}
              chart={diagram.chart}
              caption={diagram.caption}
            />
          ))}
          {block.media && block.media.length > 0 ? (
            <div className="mt-8">
              <MediaGrid items={block.media} />
            </div>
          ) : null}
        </section>
      ))}

      {project.gallery.length > 0 &&
      !project.sections.some((block) => (block.media?.length ?? 0) > 0) ? (
        <section className="border-t border-zinc-200 py-10">
          <p className="section-kicker mb-4">[PRODUCT]</p>
          <MediaGrid items={project.gallery} />
        </section>
      ) : null}

      {project.technologies.length > 0 ? (
        <section className="border-t border-zinc-200 py-10">
          <p className="section-kicker mb-4">[CONTEXT]</p>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.links.length > 0 ? (
        <section className="border-t border-zinc-200 py-8">
          <ul className="flex flex-wrap items-center gap-6">
            {project.links.map((link) => (
              <li key={link.href}>
                {link.kind === "app-store" ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block"
                  >
                    <Image
                      src="/images/badges/download-on-the-app-store.svg"
                      alt={link.label}
                      width={160}
                      height={54}
                      className="h-[40px] w-auto"
                    />
                  </a>
                ) : (
                  <TextLink href={link.href} external={link.external}>
                    {link.label}
                  </TextLink>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {next ? (
        <section className="border-t border-zinc-200 pt-10">
          <p className="section-kicker mb-3">[NEXT]</p>
          {onNext ? (
            <button
              type="button"
              onClick={() => onNext(next.slug)}
              className="group text-left"
            >
              <p className="display text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
                {next.title}
              </p>
              <p className="mt-2 max-w-md text-zinc-500">{next.summary}</p>
              <p className="mt-4 text-sm text-zinc-950 underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-950">
                Open case study →
              </p>
            </button>
          ) : (
            <TextLink href={`/work/${next.slug}/`}>
              {next.title}
            </TextLink>
          )}
        </section>
      ) : null}
    </article>
  );
}
