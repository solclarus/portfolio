"use client";

import { AddFeedForm } from "@lab/feed-matrix/components/add-feed-form";
import { FeedContent } from "@lab/feed-matrix/components/feed-content";
import { ReloadFeedButton } from "@lab/feed-matrix/components/reload-feed-button";
import { useFeeds } from "@lab/feed-matrix/store";
import { Skeleton } from "@ui/skeleton";
import { Toaster } from "sonner";

export default function FeedMatrix() {
	const { feeds, selectedUrl, isLoading, allArticles, selectFeed } = useFeeds();

	return (
		<div className="mx-auto max-w-4xl p-4 pt-40">
			<h1 className="mb-6 font-bold text-3xl">FeedMatrix</h1>
			<div className="mb-4 flex gap-2">
				<AddFeedForm />
				<ReloadFeedButton />
			</div>
			{isLoading ? (
				<div className="space-y-4">
					<Skeleton className="h-9 w-full" />
					{Array.from({ length: 5 }).map((_, i) => (
						<Skeleton key={i} className="h-24 w-full" />
					))}
				</div>
			) : (
				<FeedContent />
			)}
			<Toaster position="top-center" richColors />
		</div>
	);
}
