"use client";

import { useId } from "react";
import { OverlayModal } from "@/components/overlay-modal";
import { CaseStudyArticle } from "@/components/work/case-study-article";
import { getNextProject, type Project } from "@/content/projects";

type CaseStudyModalProps = {
  project: Project;
  onClose: () => void;
  onOpen: (slug: string) => void;
};

export function CaseStudyModal({
  project,
  onClose,
  onOpen,
}: CaseStudyModalProps) {
  const titleId = useId();
  const next = getNextProject(project.slug);

  return (
    <OverlayModal titleId={titleId} title={project.title} onClose={onClose}>
      <CaseStudyArticle
        project={project}
        next={next}
        onNext={(slug) => {
          onOpen(slug);
        }}
      />
    </OverlayModal>
  );
}
