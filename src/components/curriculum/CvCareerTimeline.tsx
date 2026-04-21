import { Card } from "@components/curriculum/ui/card";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCog,
} from "react-icons/hi2";
import { FaCode, FaFlask } from "react-icons/fa";
import { experiences, extraExperiences } from "./cv-content";

const timelineAccent = {
  blue: {
    dot: "bg-blue-600",
    panel:
      "bg-linear-to-r from-blue-50 dark:from-blue-950/30 to-transparent border-blue-200 dark:border-blue-800",
    text: "text-blue-700 dark:text-blue-400",
    bullet: "bg-blue-600",
    icon: <FaFlask className="w-3 h-3 text-white" />,
  },
  purple: {
    dot: "bg-purple-600",
    panel:
      "bg-linear-to-r from-purple-50 dark:from-purple-950/30 to-transparent border-purple-200 dark:border-purple-800",
    text: "text-purple-700 dark:text-purple-400",
    bullet: "bg-purple-600",
    icon: <HiOutlineCog className="w-3 h-3 text-white" />,
  },
  green: {
    dot: "bg-green-600",
    panel:
      "bg-linear-to-r from-green-50 dark:from-green-950/30 to-transparent border-green-200 dark:border-green-800",
    text: "text-green-700 dark:text-green-400",
    bullet: "bg-green-600",
    icon: <FaCode className="w-3 h-3 text-white" />,
  },
} as const;

export function CvCareerTimeline() {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <HiOutlineBriefcase className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg text-foreground">Experiencia relevante</h2>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-gray-300 dark:to-gray-600"></div>

        {experiences.map((experience) => {
          const accent =
            timelineAccent[experience.color as keyof typeof timelineAccent];

          return (
            <div key={`${experience.title}-${experience.period}`} className="relative">
              <div className="flex items-start gap-4">
                <div
                  className={`w-8 h-8 ${accent.dot} rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10`}
                >
                  {accent.icon}
                </div>
                <div className={`flex-1 ${accent.panel} p-4 rounded-lg border`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-base text-foreground">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                      <HiOutlineCalendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  {experience.company && (
                    <p className={`text-sm mb-3 ${accent.text}`}>
                      {experience.company}
                    </p>
                  )}
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {experience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 ${accent.bullet} rounded-full mt-2 shrink-0`}
                        ></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        <div className="grid md:grid-cols-2 gap-4">
          {extraExperiences.map((experience) => (
            <div key={experience.title} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center border-2 border-background shadow z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 bg-muted p-3 rounded-lg border border-border">
                  <h3 className="text-sm text-foreground">{experience.title}</h3>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    {experience.company}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
