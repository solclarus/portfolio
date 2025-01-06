import { cn } from "@/lib/utils";
import Image from "next/image";

const favorites = {
  movies: [
    {
      title: "Joker",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      title: "RRR",
      image: "https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg",
    },
    {
      title: "Dune: Part Two",
      image: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    },
    // {
    //   title: "Interstellar",
    //   image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    // },
    // {
    //   title: "The Social Network",
    //   image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    // },
  ],
  manga: [
    {
      title: "ONE PIECE",
      image:
        "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088843148/1200/9784088843148.jpg",
    },
    {
      title: "嘘喰い",
      image:
        "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088908564/1200/9784088908564.jpg",
    },
    {
      title: "HUNTERxHUNTER",
      image:
        "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784088842790/1200/9784088842790.jpg",
    },
    {
      title: "STEEL BALL RUN ジョジョの奇妙な冒険 Part7 ",
      image:
        "https://dosbg3xlm0x1t.cloudfront.net/images/items/9784086196727/240/9784086196727.jpg",
    },
  ],
  music: [
    {
      title: "アルトコロニーの定理 - RADWIMPS",
      image: "https://i.scdn.co/image/ab67616d0000b273061f15144689bd1f9cabd9fd",
    },
    {
      title: "三毒史 - 椎名林檎",
      image: "https://i.scdn.co/image/ab67616d0000b273ed03107bacc03c4ee36ab694",
    },
    {
      title: "BOOTLEG - 米津玄師",
      image: "https://i.scdn.co/image/ab67616d00001e02f038f68827e437530b3a80a8",
    },
  ],
};

export const Hobby = () => {
  return (
    <section>
      <h2 className="font-bold text-xl pb-4 gradient-text">HOBBY</h2>
      <div className="grid grid-cols-3 place-content-center place-items-center gap-2">
        <HobbyCard emoji={"⚽️"} title={"Soccer"} />
        <HobbyCard emoji={"🏂"} title={"Snowboard"} />
        <HobbyCard emoji={"📕"} title={"Manga"} />
        <HobbyCard emoji={"🎬"} title={"Movie"} />
        <HobbyCard emoji={"🎰"} title={"Poker"} />
        <HobbyCard emoji={"👾"} title={"Pokémon"} />
      </div>
      <div className="space-y-16 mt-4">
        <FavoriteCategory title="MOVIE" items={favorites.movies} />
        <FavoriteCategory title="MANGA" items={favorites.manga} />
        <FavoriteCategory title="MUSIC" items={favorites.music} isMusic />
      </div>
    </section>
  );
};

const HobbyCard = ({ emoji, title }: { emoji: string; title: string }) => {
  return (
    <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
      <div className="text-2xl">{emoji}</div>
      <h3 className="text-sm text-muted-foreground">{title}</h3>
    </div>
  );
};

type FavoriteItem = {
  title: string;
  image: string;
};

type FavoriteCategoryProps = {
  title: string;
  items: FavoriteItem[];
  isMusic?: boolean;
};

const FavoriteCategory = ({
  title,
  items,
  isMusic = false,
}: FavoriteCategoryProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 gradient-text">{title}</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <div
              className={cn(
                "relative w-full mb-4",
                isMusic ? "aspect-square" : "aspect-[2/3]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full border aspect-auto rounded-lg p-4 before:pointer-events-none before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-r before:from-white/5 before:via-transparent before:to-transparent bg-white/10 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.08),_0_2px_6px_rgba(0,0,0,0.12)] dark:bg-zinc-900/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),_0_4px_8px_rgba(0,0,0,0.6)] dark:before:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-muted-foreground">
              <p className="text-center">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
