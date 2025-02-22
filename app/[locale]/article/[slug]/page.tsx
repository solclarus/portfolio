import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArticles, getArticleBySlug } from "@/lib/newt";
import type { Metadata } from "next";
import type { Article } from "@/types/article";
import { format } from "date-fns";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: "投稿詳細ページです",
  };
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return;

  return (
    <main className="max-w-[600px] px-6 py-10 mx-auto prose">
      <h2 className="font-bold text-3xl pb-4">{article.title}</h2>
      <div className="flex pb-2">
        <h3 className="text-sm text-muted-foreground">
          {format(article._sys.createdAt, "yyyy/MM/dd")}
        </h3>
      </div>
      <div className="space-x-2">
        {article.tags.map((tag) => {
          return <Badge key={tag.slug}>{tag.name}</Badge>;
        })}
      </div>
      <Separator className="my-6" />
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  );
}
