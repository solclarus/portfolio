import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

export const ProfileCard = () => {
  const t = useTranslations("home.profile");

  return (
    <section className="rounded-xl border bg-card">
      <div className="p-6 space-y-4 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Avatar className="size-16">
            <AvatarImage
              src={
                "https://pbs.twimg.com/profile_images/1755179821687279616/84mo1RyV_400x400.jpg"
              }
              alt={"Yoh"}
            />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold"> {t("name")}</h2>
            <p className="text-muted-foreground"> {t("occupation")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
