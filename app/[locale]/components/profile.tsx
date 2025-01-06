import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { profiles } from "@/data/profile";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Profile = () => {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col space-y-3 justify-center items-center md:items-start w-full">
      <Avatar className="size-28 rounded-full border">
        <AvatarImage
          src={
            "https://pbs.twimg.com/profile_images/1755179821687279616/84mo1RyV_400x400.jpg"
          }
          alt={"SOLCLARUS"}
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-orange-500">solclarus</h2>
        <p className="text-muted-foreground text-center md:text-start">
          {t.rich("profile.greeting", {
            name: (name) => (
              <strong>
                <i className="text-foreground">{name}</i>
              </strong>
            ),
          })}
        </p>
      </div>
      <div className="flex space-x-3">
        {profiles.map((profile) => {
          return (
            <Link key={profile.id} href={profile.href} target="_blank">
              <Image
                src={`/images/${profile.id}.svg`}
                alt={profile.title}
                width={20}
                height={20}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
