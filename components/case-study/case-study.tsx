import Link from "next/link";
import { Container } from "@/components/container";
import { CaseStudyArticle } from "@/components/work/case-study-article";
import { getNextProject, type Project } from "@/content/projects";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({ project }: CaseStudyProps) {
  const next = getNextProject(project.slug);

  return (
    <div className="bg-paper py-8 sm:py-12">
      <Container className="max-w-4xl">
        <div className="mb-4 flex justify-end">
          <Link
            href="/#work"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-ink hover:bg-white/15"
            aria-label="Close case study"
          >
            <span aria-hidden="true">×</span>
          </Link>
        </div>
        <div className="overflow-hidden rounded-[28px]">
          <CaseStudyArticle project={project} next={next} />
        </div>
      </Container>
    </div>
  );
}
