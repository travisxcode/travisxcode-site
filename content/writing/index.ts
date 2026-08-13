import { datepicker } from "./datepicker";
import { gifeed } from "./gifeed";
import { gifViewer } from "./gif-viewer";
import type { Article } from "./types";

export type { Article, ArticleBlock, ArticleInline, ArticleTag } from "./types";

export const articles: Article[] = [datepicker, gifeed, gifViewer];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getNextArticle(slug: string): Article {
  const index = articles.findIndex((article) => article.slug === slug);
  return articles[(index + 1) % articles.length];
}

export function getArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
