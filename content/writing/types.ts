export type ArticleTag = "SwiftUI" | "TCA";

export type ArticleInline =
  | string
  | { code: string }
  | { bold: string }
  | { href: string; text: string };

export type ArticleBlock =
  | { type: "p"; parts: ArticleInline[] }
  | { type: "h2"; text: string }
  | { type: "image"; src: string; alt: string; compact?: boolean }
  | { type: "code"; code: string }
  | { type: "callout"; parts: ArticleInline[] };

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  dateLabel: string;
  readTime: string;
  tag: ArticleTag;
  hero: string;
  heroAlt: string;
  repo?: { href: string; label: string };
  blocks: ArticleBlock[];
};
