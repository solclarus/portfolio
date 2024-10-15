export const Hobby = () => {
  return (
    <section>
      <h2 className="font-bold text-xl pb-4">HOBBY</h2>
      <div className="grid grid-cols-3 place-content-center place-items-center gap-2">
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">⚽️</div>
          <h3 className="text-sm text-muted-foreground">Soccer</h3>
        </div>
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">🏂</div>
          <h3 className="text-sm text-muted-foreground">Snowboard</h3>
        </div>
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">📕</div>
          <h3 className="text-sm text-muted-foreground">Manga</h3>
        </div>
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">🎬</div>
          <h3 className="text-sm text-muted-foreground">Movie</h3>
        </div>
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">🎰</div>
          <h3 className="text-sm text-muted-foreground">Poker</h3>
        </div>
        <div className="bg-card aspect-square rounded-xl border flex flex-col justify-center items-center place-self-stretch">
          <div className="text-2xl">👾</div>
          <h3 className="text-sm text-muted-foreground">Pokémon</h3>
        </div>
      </div>
    </section>
  );
};
