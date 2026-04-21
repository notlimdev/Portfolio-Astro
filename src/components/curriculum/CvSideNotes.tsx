import { Card } from "@components/curriculum/ui/card";
import {
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { FaAward, FaFlask, FaGamepad, FaMusic } from "react-icons/fa";
import { certifications, interests, languages } from "./cv-content";

export function CvSideNotes() {
  return (
    <>
      <Card className="p-6 shadow-lg border-l-4 border-l-rose-500 hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center">
            <HiOutlineHeart className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg text-foreground">Áreas de interés</h2>
        </div>
        <div className="space-y-3">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  interest.color === "green"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : interest.color === "purple"
                      ? "bg-purple-100 dark:bg-purple-900/30"
                      : "bg-blue-100 dark:bg-blue-900/30"
                }`}
              >
                {interest.label === "UI / UX" ? (
                  <HiOutlineTrophy className="w-4 h-4 text-green-600" />
                ) : interest.label === "Arquitectura Web" ? (
                  <FaMusic className="w-4 h-4 text-purple-600" />
                ) : (
                  <FaGamepad className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <span className="text-sm text-foreground">{interest.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 shadow-lg border-l-4 border-l-green-500 hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <FaAward className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg text-foreground">Ruta de especialización</h2>
        </div>
        {certifications.map((certification) => (
          <div
            key={certification.title}
            className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800"
          >
            <FaFlask className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-foreground">{certification.title}</p>
              <p className="text-xs text-muted-foreground">
                {certification.date}
              </p>
            </div>
          </div>
        ))}
      </Card>

      <Card className="p-6 shadow-lg border-l-4 border-l-indigo-500 hover:shadow-xl transition-shadow duration-300 bg-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <HiOutlineGlobeAlt className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg text-foreground">Idiomas</h2>
        </div>
        {languages.map((language) => (
          <div
            key={language.name}
            className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <span className="text-lg">{language.flag}</span>
            <div>
              <p className="text-sm text-foreground">{language.name}</p>
              <p className="text-xs text-muted-foreground">{language.level}</p>
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}
