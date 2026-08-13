import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study/case-study";
import { getProject, getProjectSlugs } from "@/content/projects";
import { site } from "@/content/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Work" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}/`,
      type: "article",
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="content">
      <CaseStudy project={project} />
    </main>
  );
}

export const dynamicParams = false;
