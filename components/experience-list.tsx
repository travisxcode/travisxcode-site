import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/content/experience";
import { site } from "@/content/site";

export function ExperienceList() {
  return (
    <Container as="section" className="border-t border-line py-20 sm:py-28">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading>HIGHLIGHTED EXPERIENCES</SectionHeading>
        <a
          href={site.linkedin}
          className="text-[0.78rem] tracking-[0.18em] uppercase text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </div>
      <ul className="border-t border-line">
        {experiences.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <article className="experience-row grid gap-1 border-b border-line px-0 py-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_auto] sm:items-baseline sm:gap-8 sm:px-3 sm:py-7">
              <h3 className="text-lg text-ink sm:text-xl">{item.role}</h3>
              <p className="text-lg text-ink-soft sm:text-xl">{item.company}</p>
              <p className="text-sm tracking-[0.14em] uppercase text-ink-faint sm:text-right">
                {item.date}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
}
