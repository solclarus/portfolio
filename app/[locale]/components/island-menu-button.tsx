"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { LucideIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { ReactNode } from "react";

export const IslandMenuButton = ({
  href,
  icon,
}: {
  href: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();
  const locale = useParams().locale;
  const IconSlot = Slot as LucideIcon;

  return (
    <Button
      asChild
      className={cn(
        "rounded-full",
        pathname === `/${locale}${href}` && "bg-muted border"
      )}
      variant="ghost"
      size="icon"
    >
      <Link href={href}>
        <IconSlot className="h-[1.2rem] w-[1.2rem]">{icon}</IconSlot>
      </Link>
    </Button>
  );
};
