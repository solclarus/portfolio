import { Portfolio } from "@/types/portfolio";
import { PortfolioItem } from "./portfolio-item";
import { portfolios } from "@/data/portfolio";

const PortfolioPage = () => {
  return (
    <main className="max-w-[600px] p-6 mx-auto">
      <article className="space-y-4">
        {portfolios.map((portfolio: Portfolio) => (
          <PortfolioItem key={portfolio.id} portfolio={portfolio} />
        ))}
      </article>
    </main>
  );
};

export default PortfolioPage;
