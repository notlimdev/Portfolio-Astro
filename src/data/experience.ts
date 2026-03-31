export type ExperienceType = {
  id: number;
  company: string;
  role: string;
  period: {
    start: string;
    end: string | "Presente";
  };
  description: string;
  technologies: string[];
};

export const experienceData: ExperienceType[] = [
  {
    id: 1,
    company: "TechSolutions SAC",
    role: "Frontend Developer",
    period: {
      start: "Febrero 2022",
      end: "Julio 2022",
    },
    description:
      "Desarrollo de interfaces de usuario con React y TypeScript. Implementación de diseños responsive y optimización de rendimiento en aplicaciones web.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    id: 2,
    company: "DataSoft Peru",
    role: "Fullstack Developer",
    period: {
      start: "Agosto 2022",
      end: "Diciembre 2022",
    },
    description:
      "Desarrollo de APIs REST con Laravel y PostgreSQL. Construcción de dashboards interactivos con React para visualización de datos empresariales.",
    technologies: ["Laravel", "React", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    company: "InnovateTech",
    role: "Fullstack Developer",
    period: {
      start: "Enero 2023",
      end: "Diciembre 2023",
    },
    description:
      "Arquitectura y desarrollo de sistemas web complejos. Liderazgo técnico en implementación de microservicios y automatización de procesos internos.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Docker", "AWS"],
  },
  {
    id: 4,
    company: "CreativeApps",
    role: "Senior Frontend Developer",
    period: {
      start: "Enero 2024",
      end: "Presente",
    },
    description:
      "Desarrollo de aplicaciones web con animaciones avanzadas y experiencias 3D interactivas. Optimización de rendimiento y arquitectura de componentes escalables.",
    technologies: ["React", "Three.js", "GSAP", "TypeScript", "Astro"],
  },
  {
    id: 5,
    company: "CreativeApps",
    role: "Senior Frontend Developer",
    period: {
      start: "Enero 2025",
      end: "Presente",
    },
    description:
      "Desarrollo de aplicaciones web con animaciones avanzadas y experiencias 3D interactivas. Optimización de rendimiento y arquitectura de componentes escalables.",
    technologies: ["React", "Three.js", "GSAP", "TypeScript", "Astro"],
  },

];
