import { Badge } from "@components/curriculum/ui/badge";
import { Button } from "@components/curriculum/ui/button";
import {
  HiOutlineEnvelope,
  HiOutlineLink,
  HiOutlineMapPin,
  HiOutlineMoon,
  HiOutlinePhone,
  HiOutlineSun,
} from "react-icons/hi2";
import { FaFlask, FaLinkedin } from "react-icons/fa";
import { curriculumProfile } from "./cv-content";

type Props = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

export function CvHeroPanel({ isDarkMode, onToggleDarkMode }: Props) {
  return (
    <>
      <div className="absolute top-4 right-4 z-20">
        <Button
          onClick={onToggleDarkMode}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
        >
          {isDarkMode ? (
            <HiOutlineSun className="w-4 h-4" />
          ) : (
            <HiOutlineMoon className="w-4 h-4" />
          )}
        </Button>
      </div>

      <div className="relative bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-indigo-700 dark:via-purple-800 dark:to-slate-900 text-white p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-indigo-400 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white dark:bg-purple-400 rounded-full transform -translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white dark:bg-blue-400 rounded-full transform -translate-y-16"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-xl bg-linear-to-br from-white/20 to-white/10 backdrop-blur-sm">
                <img
                  src={curriculumProfile.image}
                  alt={curriculumProfile.name}
                  className="w-full h-full object-cover grayscale-0"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <FaFlask className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl mb-2 bg-linear-to-r from-white to-blue-100 bg-clip-text">
                {curriculumProfile.name}
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                {curriculumProfile.title}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {curriculumProfile.badges.map((badge) => (
                  <Badge
                    key={badge}
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm bg-white/10 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <HiOutlineMapPin className="w-4 h-4" />
              </div>
              <span>{curriculumProfile.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <HiOutlineEnvelope className="w-4 h-4" />
              </div>
              <span>{curriculumProfile.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <HiOutlinePhone className="w-4 h-4" />
              </div>
              <span>{curriculumProfile.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <FaLinkedin className="w-4 h-4" />
              </div>
              <span className="text-xs">{curriculumProfile.linkedin}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <HiOutlineLink className="w-4 h-4" />
              </div>
              <span>{curriculumProfile.website}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
