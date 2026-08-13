"use client";

import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyModal } from "@/components/work/case-study-modal";
import { ProjectCard } from "@/components/work/project-card";
import { getProject, projects } from "@/content/projects";

export function SelectedWork() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = openSlug ? getProject(openSlug) : undefined;

  const close = useCallback(() => {
    setOpenSlug(null);
    if (window.location.pathname.startsWith("/work/")) {
      window.history.pushState({}, "", "/#work");
    }
  }, []);

  const open = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  useEffect(() => {
    const onPop = () => setOpenSlug(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <Container as="section" id="work" className="py-16 sm:py-24">
      <SectionHeading>SELECTED WORKS</SectionHeading>
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={open} />
        ))}
      </div>
      {openProject ? (
        <CaseStudyModal
          project={openProject}
          onClose={close}
          onOpen={open}
        />
      ) : null}
    </Container>
  );
}
