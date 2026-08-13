import Image from "next/image";
import type { ReactNode } from "react";
import { TextLink } from "@/components/text-link";
import type { Article, ArticleInline } from "@/content/writing";

type ArticleBodyProps = {
  article: Article;
  next?: Article;
  onNext?: (slug: string) => void;
};

function Inline({ parts }: { parts: ArticleInline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }
        if ("code" in part) {
          return (
            <code
              key={index}
              className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.86em] text-zinc-800"
            >
              {part.code}
            </code>
          );
        }
        if ("bold" in part) {
          return (
            <strong key={index} className="font-semibold text-zinc-900">
              {part.bold}
            </strong>
          );
        }
        return (
          <a
            key={index}
            href={part.href}
            className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950"
            target="_blank"
            rel="noreferrer noopener"
          >
            {part.text}
          </a>
        );
      })}
    </>
  );
}

export function ArticleBody({ article, next, onNext }: ArticleBodyProps) {
  return (
    <article className="case-modal px-5 pb-10 pt-14 sm:px-10 sm:pb-12 sm:pt-16">
      <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-zinc-500">
        {article.tag}
        <span aria-hidden="true"> · </span>
        {article.dateLabel}
        <span aria-hidden="true"> · </span>
        {article.readTime}
      </p>
      <h1 className="display mt-5 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-zinc-950">
        {article.title}
      </h1>
      <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-zinc-600">
        {article.summary}
      </p>

      <div className="mt-8 overflow-hidden rounded-[20px] bg-[#f3f3ef]">
        <Image
          src={article.hero}
          alt={article.heroAlt}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="prose-article mt-10 space-y-6">
        {article.blocks.map((block, index) => {
          let node: ReactNode = null;
          if (block.type === "p") {
            node = (
              <p className="max-w-2xl text-[1.05rem] leading-[1.7] text-zinc-600">
                <Inline parts={block.parts} />
              </p>
            );
          } else if (block.type === "h2") {
            node = (
              <h2 className="pt-4 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-zinc-400">
                [{block.text}]
              </h2>
            );
          } else if (block.type === "image") {
            node = (
              <figure
                className={`overflow-hidden rounded-[18px] bg-[#f3f3ef] ${block.compact ? "max-w-sm" : ""}`}
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.compact ? 640 : 1400}
                  height={block.compact ? 1280 : 900}
                  className="h-auto w-full object-contain"
                  unoptimized={block.src.endsWith(".gif")}
                />
              </figure>
            );
          } else if (block.type === "code") {
            node = (
              <pre className="overflow-x-auto rounded-[16px] bg-zinc-950 p-4 text-[0.78rem] leading-relaxed text-zinc-100 sm:p-5">
                <code className="font-mono">{block.code}</code>
              </pre>
            );
          } else {
            node = (
              <p className="max-w-2xl rounded-[14px] border border-dashed border-zinc-300 px-4 py-3 text-sm leading-relaxed text-zinc-600">
                <Inline parts={block.parts} />
              </p>
            );
          }
          return <div key={`${article.slug}-${index}`}>{node}</div>;
        })}
      </div>

      {article.repo ? (
        <section className="mt-10 border-t border-zinc-200 pt-8">
          <TextLink href={article.repo.href} external>
            {article.repo.label}
          </TextLink>
        </section>
      ) : null}

      {next ? (
        <section className="mt-8 border-t border-zinc-200 pt-10">
          <p className="section-kicker mb-3">[NEXT]</p>
          {onNext ? (
            <button type="button" onClick={() => onNext(next.slug)} className="group text-left">
              <p className="display text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
                {next.title}
              </p>
              <p className="mt-2 max-w-md text-zinc-500">{next.summary}</p>
              <p className="mt-4 text-sm text-zinc-950 underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-950">
                Open article →
              </p>
            </button>
          ) : (
            <TextLink href={`/writing/${next.slug}/`}>{next.title}</TextLink>
          )}
        </section>
      ) : null}
    </article>
  );
}
