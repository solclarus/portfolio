import { getArticles } from "@/lib/newt";
import { BlogItem } from "./blog-item";

const BlogPage = async () => {
  const articles = await getArticles();

  return (
    <main className="max-w-[600px] p-6 mx-auto space-y-4">
      {articles.map((article) => {
        return <BlogItem key={article._id} article={article} />;
      })}
    </main>
  );
};

export default BlogPage;
