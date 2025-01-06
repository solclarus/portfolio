"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Favorite } from "./hobby";

type MovieCarouselProps = {
  title?: string;
  link?: string;
  type: "movie" | "manga" | "music";
  items: Favorite[];
};

export const MovieCarousel = ({
  title,
  link,
  items,
  type,
}: MovieCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  function nextSlide() {
    api?.scrollNext();
  }

  function previousSlide() {
    api?.scrollPrev();
  }

  return (
    <Carousel opts={{ dragFree: true }} setApi={setApi}>
      <div className="mb-4 flex items-center justify-between gap-4 md:justify-start">
        <h2 className="font-bold md:text-lg text-muted-foreground">{title}</h2>
        {link && (
          <Link
            href={link}
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
            prefetch={false}
          >
            Explore more
          </Link>
        )}

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button onClick={previousSlide} size="sm" variant="outline">
            <ArrowLeft className="size-3" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button onClick={nextSlide} size="sm" variant="outline">
            <ArrowRight className="size-3" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <div
              className={cn(
                "relative w-full mb-4 aspect-[2/3]",
                type === "music" && "aspect-square"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};