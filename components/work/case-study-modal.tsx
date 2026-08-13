"use client";

import { useEffect, useId, useRef } from "react";
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
  const closeRef = useRef<HTMLButtonElement>(null);
  const next = getNextProject(project.slug);

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, project.slug]);

  return (
    <div
      className="modal-scrim fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal-panel relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-t-[28px] sm:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id={titleId} className="sr-only">
          {project.title}
        </h2>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="sticky top-4 z-10 ml-auto mr-4 flex size-10 items-center justify-center rounded-full bg-black/5 text-zinc-700 hover:bg-black/10"
          aria-label="Close case study"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
        <CaseStudyArticle
          project={project}
          next={next}
          onNext={(slug) => {
            onOpen(slug);
          }}
        />
      </div>
    </div>
  );
}
