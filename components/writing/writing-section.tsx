"use client";

import { useCallback, useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/writing/article-card";
import { ArticleModal } from "@/components/writing/article-modal";
import { articles, getArticle } from "@/content/writing";

export function WritingSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openArticle = openSlug ? getArticle(openSlug) : undefined;

  const close = useCallback(() => {
    setOpenSlug(null);
  }, []);

  const open = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  return (
    <Container as="section" id="writing" className="py-10 sm:py-14">
      <SectionHeading>WRITING</SectionHeading>
      <div className="space-y-3 sm:space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} onOpen={open} />
        ))}
      </div>
      {openArticle ? (
        <ArticleModal article={openArticle} onClose={close} onOpen={open} />
      ) : null}
    </Container>
  );
}
