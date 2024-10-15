import { BlogItem } from "./blog-item";

const BlogPage = () => {
  return (
    <main className="max-w-[600px] p-6 mx-auto space-y-4">
      <BlogItem slug={"aaa"} title={"こんにちは"} />
      <BlogItem slug={"bbb"} title={"BBB"} />
    </main>
  );
};

export default BlogPage;
