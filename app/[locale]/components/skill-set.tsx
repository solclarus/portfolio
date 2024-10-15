import Nextjs from "./logo/nextjs";
import Supabase from "./logo/supabase";

export const SkillSet = () => {
  return (
    <section>
      <h2 className="font-bold text-xl pb-4">SKILL</h2>
      <div className="grid grid-cols-4 md:grid-cols-6 place-items-center place-content-center gap-2">
        <div className="bg-card aspect-square rounded-xl border flex justify-center items-center place-self-stretch">
          <Nextjs />
        </div>
        <div className="bg-card aspect-square rounded-xl border flex justify-center items-center place-self-stretch">
          <Supabase />
        </div>
      </div>
    </section>
  );
};
