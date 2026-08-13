import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { NextProject } from "@/components/case-study/next-project";
import { Container } from "@/components/container";
import { TextLink } from "@/components/text-link";
import { getNextProject, type Project } from "@/content/projects";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({ project }: CaseStudyProps) {
  const next = getNextProject(project.slug);

  return (
    <article>
      <Container>
        <p className="pt-8">
          <TextLink href="/#work">Work</TextLink>
        </p>
        <CaseStudyHeader project={project} />
        {project.sections.map((block) => (
          <CaseStudySection key={block.id} block={block} />
        ))}
        {project.technologies.length > 0 ? (
          <section className="border-t border-line py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Context
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-3 py-1 text-sm text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
        {project.links.length > 0 ? (
          <section className="border-t border-line py-12">
            <ul className="flex flex-wrap gap-6">
              {project.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} external={link.external}>
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <NextProject project={next} />
      </Container>
    </article>
  );
}
