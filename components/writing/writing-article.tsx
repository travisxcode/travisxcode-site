import Link from "next/link";
import { Container } from "@/components/container";
import { ArticleBody } from "@/components/writing/article-body";
import { getNextArticle, type Article } from "@/content/writing";

type WritingArticleProps = {
  article: Article;
};

export function WritingArticle({ article }: WritingArticleProps) {
  const next = getNextArticle(article.slug);

  return (
    <div className="bg-paper py-8 sm:py-12">
      <Container className="max-w-4xl">
        <div className="mb-4 flex justify-end">
          <Link
            href="/#writing"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-ink hover:bg-white/15"
            aria-label="Close article"
          >
            <span aria-hidden="true">×</span>
          </Link>
        </div>
        <div className="overflow-hidden rounded-[28px]">
          <ArticleBody article={article} next={next} />
        </div>
      </Container>
    </div>
  );
}
