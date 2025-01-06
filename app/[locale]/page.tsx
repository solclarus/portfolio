import { Hobby } from "./components/hobby";
import { Profile } from "./components/profile";
import { SkillSet } from "./components/skill-set";
import { Timeline } from "./components/timeline";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Profile />
      <SkillSet />
      <Timeline />
      <Hobby />
    </div>
  );
}
