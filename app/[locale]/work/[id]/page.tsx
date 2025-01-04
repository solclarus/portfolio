import { works } from "@/data/work";
import Image from "next/image";
import Link from "next/link";

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const getWork = (id: string) =>
    works.find((work) => {
      return work.id === id;
    });

  const work = getWork(params.id);

  if (!work) return <div>no content</div>;

  return (
    <div className="mx-auto max-w-xl mt-10">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded-lg">
        <Image
          fill
          className="object-cover bg-muted/30"
          src={`/images/${work.id}.jpg`}
          alt=""
        />
      </div>
      <h2 className="text-xl font-bold">
        <Link href={work.href}>{work.title}</Link>
      </h2>
      <p className="text-muted-foreground">{work.description}</p>
    </div>
  );
}
