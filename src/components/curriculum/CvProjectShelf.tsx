import { Button } from "@components/curriculum/ui/button";
import { Card } from "@components/curriculum/ui/card";
import { HiOutlineLightBulb, HiOutlineLink } from "react-icons/hi2";
import { FaCode, FaCodeBranch, FaDatabase } from "react-icons/fa";
import { projects } from "./cv-content";

const projectAccent = {
  purple: {
    wrapper:
      "bg-linear-to-r from-purple-50 dark:from-purple-950/30 border-purple-200 dark:border-purple-800",
    iconBox: "bg-purple-100 dark:bg-purple-900/30",
    icon: <FaCode className="w-5 h-5 text-purple-600" />,
  },
  green: {
    wrapper:
      "bg-linear-to-r from-green-50 dark:from-green-950/30 border-green-200 dark:border-green-800",
    iconBox: "bg-green-100 dark:bg-green-900/30",
    icon: <FaDatabase className="w-5 h-5 text-green-600" />,
  },
  orange: {
    wrapper:
      "bg-linear-to-r from-orange-50 dark:from-orange-950/30 border-orange-200 dark:border-orange-800",
    iconBox: "bg-orange-100 dark:bg-orange-900/30",
    icon: <FaCodeBranch className="w-5 h-5 text-orange-600" />,
  },
} as const;

export function CvProjectShelf() {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
          <HiOutlineLightBulb className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg text-foreground">Proyectos seleccionados</h2>
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-3 text-xs"
          onClick={() => window.open(projects.portfolioUrl, "_blank")}
        >
          <HiOutlineLink className="w-3 h-3 mr-1" />
          Ver portafolio
        </Button>
      </div>
      <div className="grid gap-4">
        {projects.items.map((project) => {
          const accent =
            projectAccent[project.color as keyof typeof projectAccent];

          return (
            <div
              key={project.title}
              className={`flex items-start gap-4 p-4 to-transparent rounded-lg border ${accent.wrapper}`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent.iconBox}`}
              >
                {accent.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground mb-1">{project.title}</p>
                <p className="text-xs text-muted-foreground mb-2">
                  {project.subtitle}
                </p>
                {project.actionUrl && project.actionLabel && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 px-3 text-xs"
                    onClick={() => window.open(project.actionUrl, "_blank")}
                  >
                    <HiOutlineLink className="w-3 h-3 mr-1" />
                    {project.actionLabel}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
