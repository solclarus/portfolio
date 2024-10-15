import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="max-w-[600px] p-6 mx-auto space-y-10">
      <div>
        <h1>{t("title")}</h1>
      </div>
    </main>
  );
}
