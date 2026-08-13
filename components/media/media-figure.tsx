"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { ProjectMedia } from "@/content/projects/types";

type MediaFigureProps = {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
};

export function MediaFigure({
  media,
  priority = false,
  className = "",
}: MediaFigureProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!media.src) {
    return null;
  }

  const isDevice = media.kind === "device";

  return (
    <figure
      className={`${isDevice ? "mx-auto w-full max-w-[18rem]" : "w-full"} ${className}`}
    >
      <button
        type="button"
        className="media-hover mx-auto block w-full overflow-hidden rounded-[18px] border border-line bg-placeholder text-left"
        onClick={() => setOpen(true)}
        aria-label={`Expand image: ${media.alt}`}
      >
        <Image
          src={media.src}
          alt={media.alt}
          width={isDevice ? 750 : 1600}
          height={isDevice ? 1624 : 1000}
          priority={priority}
          className="mx-auto h-auto w-full object-contain"
        />
      </button>
      {media.caption ? (
        <figcaption className="mt-3 text-center text-sm text-ink-faint">
          {media.caption}
        </figcaption>
      ) : null}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <p id={titleId} className="sr-only">
            {media.alt}
          </p>
          <Image
            src={media.src}
            alt={media.alt}
            width={1800}
            height={1200}
            className="max-h-[90vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
    </figure>
  );
}
