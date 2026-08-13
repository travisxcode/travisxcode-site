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
        className="group relative block w-full overflow-hidden rounded-[28px] text-left"
        aria-haspopup="dialog"
      >
        <div
          className="grain relative min-h-[78vh] overflow-hidden sm:min-h-[84vh]"
          style={{ background: glow }}
        >
          {project.hero.src ? (
            <div className="absolute inset-0 flex items-center justify-center px-6 pb-44 pt-10 sm:px-16 sm:pb-40">
              <Image
                src={project.hero.src}
                alt={project.hero.alt}
                width={900}
                height={1400}
                className="project-visual max-h-[58vh] w-auto max-w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center px-8 pb-40 sm:px-14">
              <p className="display max-w-xl text-[clamp(2.6rem,8vw,6rem)] text-white/90">
                {project.title}
              </p>
            </div>
          )}

          <div className="project-sheet absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[min(100%-3rem,24.5rem)]">
            <div className="rounded-[22px] border border-white/10 bg-sheet p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-ink">
                <span className="live-dot" aria-hidden="true" />
                {project.status}
              </p>
              <h3 className="mt-4 text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[1.85rem]">
                {project.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {project.summary}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 font-mono text-[0.65rem] tracking-[0.08em] uppercase">
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
