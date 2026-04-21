import { Badge } from "@components/curriculum/ui/badge";
import { Card } from "@components/curriculum/ui/card";
import { HiOutlineCog } from "react-icons/hi2";
import { FaCode, FaCodeBranch, FaFlask } from "react-icons/fa";
import { skillGroups } from "./cv-content";

const groupStyles: Record<string, string> = {
  green:
    "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50",
  blue:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50",
  orange:
    "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50",
  purple:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50",
  indigo:
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50",
};

const groupIcons = {
  Frontend: <FaFlask className="w-4 h-4 text-green-600" />,
  Backend: <FaCode className="w-4 h-4 text-blue-600" />,
  "Bases de datos": <HiOutlineCog className="w-4 h-4 text-orange-600" />,
  Herramientas: <FaCode className="w-4 h-4 text-purple-600" />,
  Enfoque: <FaCodeBranch className="w-4 h-4 text-indigo-600" />,
};

export function CvSkillMatrix() {
  return (
    <Card className="p-6 shadow-lg border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300 bg-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
          <HiOutlineCog className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg text-foreground">Stack principal</h2>
      </div>
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm mb-2 text-foreground flex items-center gap-2">
              {groupIcons[group.title as keyof typeof groupIcons]}
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className={`text-xs ${groupStyles[group.color]}`}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
