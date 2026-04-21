import { Card } from "@components/curriculum/ui/card";
import { HiOutlineUser } from "react-icons/hi2";
import { FaCrosshairs } from "react-icons/fa";
import { curriculumProfile } from "./cv-content";

export function CvProfileCard() {
  return (
    <Card className="p-6 shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow duration-300 bg-card dark:bg-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <HiOutlineUser className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg text-foreground">Perfil profesional</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg text-center border border-blue-200 dark:border-blue-800">
          <div className="text-lg text-blue-600 dark:text-blue-400">React</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Frontend moderno
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg text-center border border-green-200 dark:border-green-800">
          <div className="text-lg text-green-600 dark:text-green-400">Node</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Backend y APIs
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {curriculumProfile.summary}
      </p>

      <div className="space-y-2">
        <h4 className="text-sm text-foreground flex items-center gap-2">
          <FaCrosshairs className="w-4 h-4 text-blue-600" />
          Fortalezas clave
        </h4>
        <div className="space-y-2">
          {curriculumProfile.strengths.map((strength) => (
            <div key={strength} className="flex items-center gap-2 text-xs">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
