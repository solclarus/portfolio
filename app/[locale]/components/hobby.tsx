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
