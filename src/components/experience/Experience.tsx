// src/components/experience/Experience.tsx
import { useEffect, useRef } from "react";
import { TimelineLogo } from "./elements/TimelineLogo";
import { useDivRefsStore } from "@store/store-sections";
import { experienceData } from "@data/experience";

export default function Experience() {
  const sectionExperience = useRef<HTMLDivElement>(null);
  const setDivRef = useDivRefsStore((state) => state.setDivRef);

  useEffect(() => {
    if (sectionExperience.current) {
      setDivRef("Experience", sectionExperience);
    }
  }, [setDivRef]);

  return (
    <div
      ref={sectionExperience}
      id="Experience"
      className="gap-y-3.5 w-full min-h-screen flex flex-col justify-start items-center"
    >
      <div className=" w-3/4 flex flex-row justify-center items-center">
        <h1 className="w-[90%] text-white text-4xl font-bold text-center border-b-2 border-t-2 border-dashed">
          Experience
        </h1>
      </div>

      <div className="w-full flex-1 relative flex flex-col justify-center items-center">
        <div className=" absolute max-lg:right-20 max-sm:right-5 w-1 h-[95%]  border-2 border-slate-600 z-0"></div>

        <div className="py-2 gap-2 w-full flex-1 relative top-0 left-0 flex flex-col justify-center items-center">
          {experienceData.map((experience, index) => (
            <TimelineLogo
              key={experience.id}
              index={index}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
