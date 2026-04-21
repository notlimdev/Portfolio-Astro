import { Card } from "@components/curriculum/ui/card";
import { HiOutlineCalendar } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "./cv-content";

export function CvFormationBlock() {
  const [label, ...rest] = education.note.split(":");

  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <FaGraduationCap className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg text-foreground">Formación académica</h2>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
          <FaGraduationCap className="w-3 h-3 text-white" />
        </div>
        <div className="flex-1 bg-linear-to-r from-emerald-50 dark:from-emerald-950/30 to-transparent p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-base text-foreground">{education.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
              <HiOutlineCalendar className="w-4 h-4" />
              <span>{education.period}</span>
            </div>
          </div>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">
            {education.school}
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            {education.description}
          </p>
          <div className="bg-emerald-100 dark:bg-emerald-950/30 p-2 rounded text-xs text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <strong>{label} :</strong> {rest.join(":").trim()}
          </div>
        </div>
      </div>
    </Card>
  );
}
