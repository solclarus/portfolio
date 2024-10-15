"use client";

import * as React from "react";
import { ArrowBigUpDash } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      className="rounded-full"
      onClick={scrollToTop}
      variant="outline"
      size="icon"
    >
      <ArrowBigUpDash className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};
