import { getArticles } from "@/lib/newt";
import { ArticleItem } from "./article-item";

export default async function Page() {
  const articles = await getArticles();

  return (
    <article className="space-y-4">
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />;
      })}
    </article>
  );
}
