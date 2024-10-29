import { Content } from "newt-client-js";
import { Tag } from "@/types/tag";

export type Article = {
  title: string;
  slug: string;
  body: string;
  tags: Tag[];
} & Content;
