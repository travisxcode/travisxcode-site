import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/content/experience";
import { site } from "@/content/site";

export function ExperienceList() {
  return (
    <Container as="section" className="py-10 sm:py-14">
      <div className="mb-2 flex items-end justify-between gap-4">
        <SectionHeading>HIGHLIGHTED EXPERIENCES</SectionHeading>
        <a
          href={site.linkedin}
          className="mb-5 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-ink-faint transition-colors hover:text-ink sm:mb-6"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </div>
      <ul>
        {experiences.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <article className="experience-row grid gap-1 border-t border-line py-5 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)_auto] sm:items-baseline sm:gap-8 sm:py-6">
              <h3 className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-ink-soft">
                {item.role}
              </h3>
              <p className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-ink">
                {item.company}
              </p>
              <p className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-ink-faint sm:text-right">
                {item.date}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
}
