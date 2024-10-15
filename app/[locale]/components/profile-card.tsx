import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

export const ProfileCard = () => {
  const t = useTranslations("home.profile");

  return (
    <div className="border flex flex-col rounded-xl relative p-8 lg:p-10 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-r before:from-white/5 before:via-transparent before:to-transparent bg-white/10 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.08),_0_2px_6px_rgba(0,0,0,0.12)] dark:bg-zinc-900/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),_0_4px_8px_rgba(0,0,0,0.6)] dark:before:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-muted-foreground text-center">
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
  );
};
