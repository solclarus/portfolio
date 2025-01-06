import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export const ProfileCard = () => {
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
        <p className="text-muted-foreground">Software Developer</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          aliquam.
        </p>
      </div>
      <div className="flex space-x-3">
        <Link href={"x.com"}>
          <Image
            src={`/images/github.svg`}
            alt={"github"}
            width={20}
            height={20}
          />
        </Link>
        <Link href={"github.com"}>
          <Image
            src={`/images/instagram.svg`}
            alt={"instagram"}
            width={20}
            height={20}
          />
        </Link>
        <Link href={""}>
          <Image src={`/images/x.svg`} alt={"x"} width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
