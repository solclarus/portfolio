import { getArticles } from "@/lib/newt";
import { ArticleItem } from "./article-item";

export default async function Page() {
  const articles = await getArticles();

  return (
    <main className="max-w-[600px] p-6 mx-auto space-y-4">
      {articles.map((article) => {
        return <ArticleItem key={article._id} article={article} />;
      })}
    </main>
  );
}
