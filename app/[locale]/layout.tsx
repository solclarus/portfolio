import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IslandMenu } from "./components/island-menu";
import { Footer } from "./components/footer";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLCLARUS",
  description: "This is solclarus's site.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-dvh">
              <main className="mx-auto max-w-2xl my-40 px-6">{children}</main>
              <IslandMenu />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
