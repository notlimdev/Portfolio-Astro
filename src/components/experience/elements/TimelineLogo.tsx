import { useIsMobile } from "@hooks/useIsMobile";
import { Card } from "./Card";
import type { ExperienceType } from "@data/experience";

type TimelineLogoProps = {
  index: number;
  experience: ExperienceType;
};

export const TimelineLogo = ({ index, experience }: TimelineLogoProps) => {
  const isMobile = useIsMobile();
  const isEven = index % 2 === 0;
  const datePosition =  isMobile 
    ? "right-0 flex justify-start"
    :isEven
    ? "right-0 flex justify-start"
    : "left-0 flex justify-end";

  const year = experience.period.start.split(" ")[1];

  return (
    <div className="relative w-full min-h-100 lg:w-250 flex-1 flex  flex-row justify-center items-center">
      <Card index={index} experience={experience} />

      <div className="absolute bg-slate-600 max-lg:right-13 max-sm:right-0.5  top-25 rounded-full max-w-16 max-h-16 max-sm:max-w-10 max-sm:max-h-10 max-sm:top-28">
        <img
          src="/logo/logo_portfolio.svg"
          alt="Timeline logo"
          width={60}
          height={60}
          loading="lazy"
        />
      </div>

      {/* Fecha — solo visible en desktop */}
      <div
        className={`w-2/5 top-28 absolute  hidden sm:flex ${datePosition} `}
      >
        <p className="text-white font-bold text-3xl">{year}</p>
      </div>
    </div>
  );
};
