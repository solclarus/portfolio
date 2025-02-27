"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { CircleFlagLanguage } from "react-circle-flags";

export const LangSwitcher = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="*:cursor-pointer">
        <DropdownMenuItem asChild>
          <Link href={`/ja${pathname}`}>
            <CircleFlagLanguage languageCode={"ja"} height={20} width={20} className="mr-2" />
            日本語
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/en${pathname}`}>
            <CircleFlagLanguage languageCode={"en"} height={20} width={20} className="mr-2" />
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
