export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectStatus = "draft" | "in-progress" | "completed";

export type ProjectType = {
  id: number;
  category: string;
  title: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  status: ProjectStatus;
  links: ProjectLink[];
};

export const projectsData: ProjectType[] = [
  {
    id: 1,
    category: "Feature Project",
    title: "Admin Projects",
    summary:
      "Proyecto demo inicial para preparar la futura integración de contenido real en la sección Projects del portafolio.",
    technologies: ["React", "TypeScript", "TailwindCSS", "GSAP"],
    featured: true,
    status: "draft",
    links: [
      {
        label: "Go To Project",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    category: "Feature Project",
    title: "Dashboard Analytics",
    summary:
      "Registro provisional para validar la estructura de datos, estados y tecnologías antes de reemplazar el contenido mock actual.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    featured: true,
    status: "draft",
    links: [
      {
        label: "Go To Project",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    category: "Feature Project",
    title: "Platform Redesign",
    summary:
      "Entrada temporal pensada para probar el mapeo futuro de cards sin depender todavía de datos finales del portafolio.",
    technologies: ["Astro", "React", "TailwindCSS", "Zustand"],
    featured: false,
    status: "draft",
    links: [
      {
        label: "Go To Project",
        href: "#",
      },
    ],
  },
];
