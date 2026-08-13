import { MediaFigure } from "@/components/media/media-figure";
import { MediaPlaceholder } from "@/components/media/media-placeholder";
import type { ProjectMedia } from "@/content/projects/types";

type ProjectMediaBlockProps = {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
};

export function ProjectMediaBlock({
  media,
  priority,
  className = "",
}: ProjectMediaBlockProps) {
  if (media.src) {
    return (
      <MediaFigure media={media} priority={priority} className={className} />
    );
  }

  return (
    <div className={className}>
      <MediaPlaceholder
        kind={media.kind}
        label={media.label ?? media.alt}
      />
      {media.caption ? (
        <p className="mt-3 text-sm text-ink-faint">{media.caption}</p>
      ) : null}
    </div>
  );
}

type MediaGridProps = {
  items: ProjectMedia[];
};

export function MediaGrid({ items }: MediaGridProps) {
  if (items.length === 0) {
    return null;
  }

  if (items.length === 1) {
    return <ProjectMediaBlock media={items[0]} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <ProjectMediaBlock
          key={`${item.alt}-${item.label ?? ""}`}
          media={item}
          className={item.kind === "full" ? "sm:col-span-2" : ""}
        />
      ))}
    </div>
  );
}
