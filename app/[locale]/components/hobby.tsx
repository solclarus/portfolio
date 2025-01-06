import { MovieCarousel } from "./movie-carousel";

export type Favorite = {
  title: string;
  image: string;
};

export const favorites = {
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
    {
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Social Network",
      image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    },
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
    {
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Social Network",
      image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    },
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
      <h2 className="font-bold text-xl pb-4 text-gradient">HOBBY</h2>
      <MovieCarousel title="MOVIE" items={favorites.movies} type={"movie"} />
      <MovieCarousel title="MANGA" items={favorites.manga} type={"manga"} />
      <MovieCarousel title="MUSIC" items={favorites.music} type={"music"} />
    </section>
  );
};
