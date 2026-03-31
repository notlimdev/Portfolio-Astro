import type { ExperienceType } from "@data/experience";
import styles from "./styles-experience.module.css";
import { useIsMobile } from "@hooks/useIsMobile";

type CardPropsT = {
  index: number;
  experience: ExperienceType;
};

export const Card = ({ index, experience }: CardPropsT) => {
  const isMobile = useIsMobile();
  const cardStyle = isMobile
    ? styles.cardLeft
    : index % 2 === 0
      ? styles.cardLeft
      : styles.cardRigth;

  return (
    <div className={`${cardStyle}`}>
      <div className="flex flex-col justify-center items-start p-2 gap-2">
        {/* Cargo y empresa */}
        <h1 className="text-2xl max-sm:text-xl text-white font-bold uppercase">
          {experience.role}
        </h1>
        <h3 className="text-lg text-purple-400 font-semibold">
          {experience.company}
        </h3>

        {/* Período */}
        <p className="text-sm text-slate-400 font-medium">
          {experience.period.start} — {experience.period.end}
        </p>

        {/* Descripción */}
        <p className="text-sm font-bold text-slate-300">
          {experience.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full
      bg-slate-700 text-slate-200
      border border-slate-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
