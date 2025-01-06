import { useTranslations } from "next-intl";

export const Timeline = () => {
  const t = useTranslations("home.history");
  const keys = ["born", "highSchool", "university"];

  return (
    <section>
      <h2 className="font-bold text-xl pb-4 text-gradient">HISTORY</h2>
      <ol>
        {keys.map((key) => (
          <li className="flex gap-x-3" key={key}>
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div className="w-24 grow pb-8 space-y-1">
              <h3 className="flex gap-x-1.5 font-semibold">
                {t(`${key}.title`)}
              </h3>
              <span className="text-xs text-muted-foreground">
                {t(`${key}.date`)}
              </span>
              <p className="text-sm">{t(`${key}.content`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
