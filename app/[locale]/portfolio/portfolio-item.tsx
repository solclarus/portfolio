import Link from "next/link";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";

type PortfolioPageProps = {
  portfolio: Portfolio;
};

export const PortfolioItem = ({ portfolio }: PortfolioPageProps) => {
  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-lg shadow-sm bg-card hover:bg-card/10">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded-md">
        <Image
          fill
          className="object-cover bg-muted/30"
          src={`/images/${portfolio.id}.jpg`}
          alt=""
        />
      </div>
      <h2 className="text-md font-semibold">
        <Link href={portfolio.href} target="_blank">
          {portfolio.title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <p className="text-muted-foreground text-ellipsis line-clamp-3">
        {portfolio.description}
      </p>
    </div>
  );
};
