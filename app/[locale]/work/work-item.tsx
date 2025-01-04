import { Link } from "@/i18n/routing";
import { Work } from "@/types/work";
import Image from "next/image";

export const WorkItem = ({ work }: { work: Work }) => {
  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded-md">
        <Image
          fill
          className="object-cover bg-muted/30"
          src={`/images/${work.id}.jpg`}
          alt=""
        />
      </div>
      <h2 className="text-md font-semibold">
        <Link href={`/work/${work.id}`}>
          {work.title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <p className="text-muted-foreground text-ellipsis line-clamp-1">
        {work.description}
      </p>
    </div>
  );
};
