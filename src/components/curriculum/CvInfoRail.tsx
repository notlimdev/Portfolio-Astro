import { CvProfileCard } from "./CvProfileCard";
import { CvSideNotes } from "./CvSideNotes";
import { CvSkillMatrix } from "./CvSkillMatrix";

export function CvInfoRail() {
  return (
    <div className="md:col-span-1 space-y-6">
      <CvProfileCard />
      <CvSkillMatrix />
      <CvSideNotes />
    </div>
  );
}
