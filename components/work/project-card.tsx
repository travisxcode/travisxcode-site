import Image from "next/image";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: (slug: string) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const glow = `radial-gradient(120% 90% at 20% 10%, ${project.glow.via ?? project.glow.from} 0%, transparent 55%), linear-gradient(160deg, ${project.glow.from} 0%, ${project.glow.via ?? project.glow.from} 42%, ${project.glow.to} 100%)`;

  return (
    <article className="project-card">
      <button
        type="button"
        onClick={() => onOpen(project.slug)}
        className="group relative block w-full overflow-hidden rounded-[24px] text-left"
        aria-haspopup="dialog"
      >
        <div
          className="grain relative h-[18rem] overflow-hidden sm:h-[22rem]"
          style={{ background: glow }}
        >
          {project.hero.src ? (
            project.hero.kind === "device" ? (
              <div className="absolute inset-y-0 left-0 flex w-full items-end justify-center px-6 pb-4 pt-6 sm:w-[58%] sm:items-center sm:pb-6">
                <Image
                  src={project.hero.src}
                  alt={project.hero.alt}
                  width={600}
                  height={1200}
                  className="project-visual h-full max-h-[15.5rem] w-auto object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:max-h-[18.5rem]"
                />
              </div>
            ) : (
              <div className="absolute inset-0">
                <Image
                  src={project.hero.src}
                  alt={project.hero.alt}
                  width={1600}
                  height={1000}
                  className="project-visual h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-black/10 sm:to-black/50" />
              </div>
            )
          ) : (
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <p className="display max-w-md text-[clamp(2rem,5vw,3.4rem)] text-white/90">
                {project.title}
              </p>
            </div>
          )}

          <div className="project-sheet absolute inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[22rem]">
            <div className="rounded-[18px] border border-white/10 bg-sheet p-4 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-ink">
                <span className="live-dot" aria-hidden="true" />
                {project.status}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[1.45rem]">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 font-mono text-[0.62rem] tracking-[0.08em] uppercase">
                <div>
                  <dt className="text-ink-faint">Shipped in</dt>
                  <dd className="mt-1 text-ink">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Platform</dt>
                  <dd className="mt-1 text-ink">{project.platform}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <span className="sr-only">Open {project.title} case study</span>
      </button>
    </article>
  );
}
