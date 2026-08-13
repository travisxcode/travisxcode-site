import type { MediaKind } from "@/content/projects/types";

const aspect: Record<MediaKind, string> = {
  hero: "aspect-[16/10] sm:aspect-[2/1]",
  full: "aspect-[16/9]",
  split: "aspect-[4/3]",
  device: "aspect-[4/5] sm:aspect-[4/5]",
  browser: "aspect-[16/10]",
};

type MediaPlaceholderProps = {
  label: string;
  kind?: MediaKind;
  className?: string;
};

export function MediaPlaceholder({
  label,
  kind = "full",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`media-surface relative overflow-hidden border border-dashed border-line-strong bg-placeholder ${aspect[kind]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22,21,19,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,21,19,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-5 sm:p-7">
        <p className="section-kicker">Asset forthcoming</p>
        <p className="max-w-[16rem] text-lg leading-snug text-ink sm:text-xl">
          {label}
        </p>
      </div>
    </div>
  );
}
