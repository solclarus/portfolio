import type {
	apiResponseSchema,
	errorResponseSchema,
	feedItemSchema,
	feedSchema,
	formSchema,
} from "@lab/feed-matrix/schema";
import type { z } from "zod";

export type Article = FeedItem & {
	feedTitle: string;
	feedUrl: string;
};

export type FormValues = z.infer<typeof formSchema>;
export type FeedItem = z.infer<typeof feedItemSchema>;
export type Feed = z.infer<typeof feedSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
