import Image from "next/image";
import type { Article } from "@/content/writing";

type ArticleCardProps = {
  article: Article;
  onOpen: (slug: string) => void;
};

export function ArticleCard({ article, onOpen }: ArticleCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(article.slug)}
      className="group grid w-full gap-4 rounded-[20px] border border-line p-3 text-left transition-colors hover:border-accent/50 hover:bg-accent-wash sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center sm:p-4"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-paper-raised">
        <Image
          src={article.hero}
          alt=""
          width={480}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div>
        <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-ink-faint">
          {article.tag}
          <span aria-hidden="true"> · </span>
          {article.dateLabel}
          <span aria-hidden="true"> · </span>
          {article.readTime}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-[1.35rem]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {article.summary}
        </p>
      </div>
    </button>
  );
}
