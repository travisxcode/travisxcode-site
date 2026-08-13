"use client";

import { useId } from "react";
import { OverlayModal } from "@/components/overlay-modal";
import { ArticleBody } from "@/components/writing/article-body";
import { getNextArticle, type Article } from "@/content/writing";

type ArticleModalProps = {
  article: Article;
  onClose: () => void;
  onOpen: (slug: string) => void;
};

export function ArticleModal({ article, onClose, onOpen }: ArticleModalProps) {
  const titleId = useId();
  const next = getNextArticle(article.slug);

  return (
    <OverlayModal titleId={titleId} title={article.title} onClose={onClose}>
      <ArticleBody article={article} next={next} onNext={onOpen} />
    </OverlayModal>
  );
}
