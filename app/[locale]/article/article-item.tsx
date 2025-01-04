import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { Article } from "@/types/article";
import { format } from "date-fns";

export const ArticleItem = ({ article }: { article: Article }) => {
  return (
    <div className="transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-accent">
      <h2 className="text-lg font-bold truncate">
        <Link href={`/article/${article.slug}`}>
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
