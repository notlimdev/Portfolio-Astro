import { CvCareerTimeline } from "./CvCareerTimeline";
import { CvFormationBlock } from "./CvFormationBlock";
import { CvProjectShelf } from "./CvProjectShelf";

export function CvStoryDeck() {
  return (
    <div className="md:col-span-2 space-y-6">
      <CvCareerTimeline />
      <CvFormationBlock />
      <CvProjectShelf />
    </div>
  );
}
