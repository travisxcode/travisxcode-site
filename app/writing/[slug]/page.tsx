import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingArticle } from "@/components/writing/writing-article";
import { getArticle, getArticleSlugs } from "@/content/writing";
import { site } from "@/content/site";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Writing" };
  }

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/writing/${article.slug}/`,
    },
    openGraph: {
      title: `${article.title} — ${site.name}`,
      description: article.summary,
      url: `${site.url}/writing/${article.slug}/`,
      type: "article",
    },
  };
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="content">
      <WritingArticle article={article} />
    </main>
  );
}

export const dynamicParams = false;
