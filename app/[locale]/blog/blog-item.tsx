import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { Article } from "@/types/article";
import { format } from "date-fns";

export const BlogItem = ({ article }: { article: Article }) => {
  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10">
      <h2 className="text-lg font-bold truncate">
        <Link href={`/blog/${article.slug}`} target="_blank">
          {article.title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <time className="text-sm text-muted-foreground">
        {format(new Date(article._sys.createdAt), "yyyy年MM月dd日")}
      </time>
      <div className="space-x-1">
        {article.tags.map((tag) => {
          return <Badge key={tag._id}>{tag.name}</Badge>;
        })}
      </div>
    </div>
  );
};
