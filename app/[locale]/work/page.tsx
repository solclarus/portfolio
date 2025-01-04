import { WorkItem } from "./work-item";
import { works } from "@/data/work";

export default function Page() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {works.map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
    </article>
  );
}
