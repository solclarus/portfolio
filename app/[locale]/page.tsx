import { Hobby } from "./components/hobby";
import { ProfileCard } from "./components/profile-card";
import { SkillSet } from "./components/skill-set";
import { Timeline } from "./components/timeline";

export default function HomePage() {
  return (
    <main className="max-w-[600px] px-6 pt-10 mx-auto space-y-10">
      <ProfileCard />
      <SkillSet />
      <Timeline />
      <Hobby />
    </main>
  );
}
