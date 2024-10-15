import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";

export const BlogItem = ({ slug, title }: { slug: string; title: string }) => {
  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10">
      <h2 className="text-lg font-bold truncate">
        <Link href={`/blog/${slug}`} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex">
        <h3 className="text-sm text-muted-foreground">2024-07-01</h3>
        <span className="flex-1"></span>
        <h3 className="text-sm text-muted-foreground">7 min read</h3>
      </div>
      <p className="py-2 text-ellipsis line-clamp-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        consect
      </p>
      <div className="space-x-1">
        <Badge>Next.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Hobby</Badge>
        <Badge>Badge</Badge>
      </div>
    </div>
  );
};
