import { MediaGrid } from "@/components/media/project-media";
import type { CaseStudyBlock } from "@/content/projects";

type CaseStudySectionProps = {
  block: CaseStudyBlock;
};

export function CaseStudySection({ block }: CaseStudySectionProps) {
  return (
    <section className="border-t border-line py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
        <h2 className="display text-3xl text-ink sm:text-4xl">{block.title}</h2>
        <div>
          <div className="prose-site">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {block.todo ? <p className="todo-note">TODO · {block.todo}</p> : null}
          {block.media && block.media.length > 0 ? (
            <div className="mt-10">
              <MediaGrid items={block.media} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
