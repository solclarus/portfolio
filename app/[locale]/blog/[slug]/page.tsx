import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <main className="max-w-[600px] p-6 mx-auto">
      <h2 className="font-bold text-xl pb-4">Title</h2>
      <div className="flex pb-2">
        <h3 className="text-sm text-muted-foreground">July 01, 2024</h3>
        <span className="flex-1"></span>
        <h3 className="text-sm text-muted-foreground">7 min read</h3>
      </div>

      <div className="space-x-2">
        <Badge>Next.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Hobby</Badge>
        <Badge>Badge</Badge>
      </div>
      <Separator className="my-6" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus
        mollitia fuga earum suscipit nisi exercitationem voluptas harum
        voluptate temporibus dicta at reiciendis accusamus ullam doloremque
        sapiente aperiam, dolore voluptatem ut, officia sint incidunt ad! Odio
        harum voluptatum possimus nihil reprehenderit pariatur rerum ab quo
        recusandae officiis porro soluta blanditiis temporibus earum non ullam
        molestias repellat, odit ea ipsa modi dicta saepe atque. Culpa,
        voluptatum quo? Soluta ratione optio magni ex ut velit atque accusamus
        repellendus iure molestiae hic laboriosam dignissimos quas, quod,
        numquam illo vitae aut adipisci voluptas. Iusto molestias, quis placeat
        dolores corrupti delectus maxime rerum impedit illum?
      </p>
    </main>
  );
};

export default Page;
