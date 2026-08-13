import { Container } from "@/components/container";
import { ProjectRow } from "@/components/project-row";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Container as="section" id="work" className="border-t border-line py-20 sm:py-28">
      <SectionHeading>SELECTED WORK</SectionHeading>
      <div>
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
