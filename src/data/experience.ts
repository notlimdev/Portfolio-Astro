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
    company: "Pacífico IT Group",
    role: "Analista de Sistemas",
    period: {
      start: "Septiembre 2024",
      end: "Febrero 2025",
    },
    description:
      "Análisis de requerimientos y modelado de procesos de negocio (UML), con gestión de datos en SQL Server para soporte en decisiones.",
    technologies: ["UML", "SQL Server", "Jira", "Git"],
  },
  {
    id: 2,
    company: "Softtek",
    role: "Frontend Developer",
    period: {
      start: "Marzo 2024",
      end: "Agosto 2024",
    },
    description:
      "Desarrollo de interfaces con React y TypeScript, integración de APIs REST y creación de componentes reutilizables optimizados para UX.",
    technologies: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Figma",
      "TailwindCSS",
      "Zustand",
      "Axios",
      "Git",
    ],
  },
  {
    id: 3,
    company: "Rodriguez SAC",
    role: "Fullstack Developer",
    period: {
      start: "Abril 2023",
      end: "Diciembre 2023",
    },
    description:
      "Desarrollo fullstack con Next.js y Node.js, creación de APIs REST y despliegue en AWS con Docker.",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],
  },
];
