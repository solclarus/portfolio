import "@/styles/globals.css";
import { FloatingMenu } from "@/components/floating-menu";
import { Footer } from "@/components/footer";
import { routing } from "@/i18n/routing";
import { ScrollProgress } from "@ui/scroll-progress";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

export default async function MainLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<>
			<Toaster />
			<ScrollProgress />
			<div className="relative mx-auto max-w-3xl px-4 md:px-6">
				<div className="pointer-events-none absolute inset-x-4 top-0 bottom-0 border-x border-dashed md:inset-x-6" />
				<div className="flex min-h-dvh flex-col">
					<div className="flex-grow p-4 md:p-6">{children}</div>
					<Footer />
				</div>
				<FloatingMenu />
			</div>
		</>
	);
}
