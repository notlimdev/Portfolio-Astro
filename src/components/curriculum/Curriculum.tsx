import { useState } from "react";
import { CvHeroPanel } from "./CvHeroPanel";
import { CvInfoRail } from "./CvInfoRail";
import { CvStoryDeck } from "./CvStoryDeck";

export default function Curriculum() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 p-4 md:p-8 transition-colors duration-500">
        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
          <CvHeroPanel isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

          <div className="grid md:grid-cols-3 gap-8 p-8">
            <CvInfoRail />
            <CvStoryDeck />
          </div>
        </div>
      </div>
    </div>
  );
}
