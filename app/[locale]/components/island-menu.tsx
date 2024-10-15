import { Book, Home, Rocket } from "lucide-react";

import { IslandMenuButton } from "./island-menu-button";
import { Suspense } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { LangSwitcher } from "./lang-switcher";
import { ScrollToTopButton } from "./scroll-to-top-button";

export const IslandMenu = () => {
  return (
    <nav className="fixed flex gap-2 p-2 bottom-16 md:bottom-20 z-100 left-1/2 -translate-x-1/2 shadow-lg rounded-full bg-card/10 backdrop-blur border">
      <IslandMenuButton href={"/"} icon={<Home />} />
      <IslandMenuButton href={"/portfolio"} icon={<Rocket />} />
      <IslandMenuButton href={"/blog"} icon={<Book />} />
      <Suspense>
        <ThemeSwitcher />
      </Suspense>
      <LangSwitcher />
      <ScrollToTopButton />
    </nav>
  );
};
