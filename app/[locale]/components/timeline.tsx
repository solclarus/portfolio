import { useTranslations } from "next-intl";

export const Timeline = () => {
  const t = useTranslations("home.experience");
  const keys = ["born", "highSchool", "university"];

  return (
    <section>
      <h2 className="font-bold text-xl pb-4">HISTORY</h2>
      <ol>
        {keys.map((key) => (
          <li className="flex gap-x-3" key={key}>
            <div className="w-20 text-end">
              <span className="text-xs text-gray-500">{t(`${key}.date`)}</span>
            </div>
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
            <div className="w-24 grow pb-8 space-y-1">
              <h3 className="flex gap-x-1.5 font-semibold">
                {t(`${key}.title`)}
              </h3>
              <p className="text-sm text-gray-500">{t(`${key}.content`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
