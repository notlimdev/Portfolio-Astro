export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectStatus = "draft" | "in-progress" | "completed" | "archived";

export type ProjectContext = "personal" | "freelance" | "company" | "academic";

export type ProjectType = {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  description?: string;
  year: string;
  role: string;
  context: ProjectContext;
  technologies: string[];
  image?: string;
  featured: boolean;
  featuredOrder?: number;
  status: ProjectStatus;
  liveUrl?: string;
  repositoryUrl?: string;
  links?: ProjectLink[];
  highlights?: string[];
};

export const projectsData: ProjectType[] = [
  {
    id: 1,
    slug: "food-ordering-platform",
    category: "Full Stack / E-commerce",
    title: "Food Ordering Platform",
    excerpt:
      "Sistema full stack para gestión de pedidos, catálogo y flujo operativo con Next.js 15, Server Actions y Prisma.",
    description:
      "Plataforma web orientada a la operación de un quiosco de comida, con gestión de productos, pedidos y acciones del servidor sobre una arquitectura moderna basada en App Router.",
    year: "2024",
    role: "Full Stack Developer",
    context: "personal",
    technologies: ["Next.js 15", "TypeScript", "Prisma", "Zod", "TailwindCSS"],
    featured: true,
    featuredOrder: 1,
    status: "completed",
    liveUrl: "https://app-quiosco-nextjs15.vercel.app",
    repositoryUrl: "https://github.com/notlimdev/app-quiosco-nextjs15",
    links: [
      {
        label: "View Live",
        href: "https://app-quiosco-nextjs15.vercel.app",
      },
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/app-quiosco-nextjs15",
      },
    ],
    highlights: [
      "Flujo de pedidos con App Router y Server Actions",
      "Persistencia y modelado de datos con Prisma",
      "Validación tipada y UX orientada a producto",
    ],
  },
  {
    id: 2,
    slug: "commerce-admin-platform",
    category: "E-commerce / Backend",
    title: "Commerce Admin Platform",
    excerpt:
      "Sistema administrativo para operación de tienda virtual con Laravel 11 y servicios API orientados a escalabilidad.",
    description:
      "Plataforma para administración comercial con enfoque en catálogo, operación interna y crecimiento progresivo hacia una arquitectura híbrida con servicios API.",
    year: "2024",
    role: "Full Stack Developer",
    context: "personal",
    technologies: ["PHP", "Laravel 11", "REST API", "MySQL"],
    featured: true,
    featuredOrder: 2,
    status: "completed",
    repositoryUrl: "https://github.com/notlimdev/shop-store-app",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/shop-store-app",
      },
    ],
    highlights: [
      "Panel administrativo orientado a operación comercial",
      "Laravel 11 como base de dominio y gestión",
      "Preparado para integraciones API y crecimiento modular",
    ],
  },
  {
    id: 3,
    slug: "patient-management-system",
    category: "Frontend / Healthcare",
    title: "Patient Management System",
    excerpt:
      "Aplicación web para administrar registros clínicos y flujos de atención con React, TypeScript y estado moderno.",
    description:
      "Sistema frontend centrado en la gestión de pacientes, formularios y organización de información clínica con una UX clara y stack moderno de estado y validación.",
    year: "2024",
    role: "Frontend Developer",
    context: "personal",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Hook Form",
      "Toastify",
      "TailwindCSS",
    ],
    featured: true,
    featuredOrder: 3,
    status: "completed",
    repositoryUrl: "https://github.com/notlimdev/app-gestor-pacientes",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/app-gestor-pacientes",
      },
    ],
    highlights: [
      "Gestión clara de registros y formularios",
      "Estado global y experiencia de uso cuidada",
      "Stack frontend sólido aplicado a un dominio real",
    ],
  },
  {
    id: 4,
    slug: "image-processing-platform",
    category: "Full Stack / Computer Vision",
    title: "Image Processing Platform",
    excerpt:
      "Sistema full stack para análisis y procesamiento visual con Python, Flask, OpenCV y frontend en React.",
    description:
      "Proyecto técnico orientado al procesamiento de imágenes y análisis visual, integrando backend científico con una interfaz web para interacción y exploración de resultados.",
    year: "2024",
    role: "Full Stack Developer",
    context: "personal",
    technologies: ["Python", "Flask", "OpenCV", "NumPy", "React", "TypeScript"],
    featured: true,
    featuredOrder: 4,
    status: "completed",
    repositoryUrl:
      "https://github.com/notlimdev/Python-image-processing-Flask-React",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/Python-image-processing-Flask-React",
      },
    ],
    highlights: [
      "Procesamiento visual con OpenCV y NumPy",
      "Backend técnico conectado a interfaz React",
      "Proyecto diferenciador fuera del frontend tradicional",
    ],
  },
  {
    id: 5,
    slug: "folklore-wardrobe-app",
    category: "Mobile / Catalog Management",
    title: "Folklore Wardrobe Catalog",
    excerpt:
      "Aplicación móvil para catalogar y gestionar vestimentas folclóricas con una experiencia enfocada en organización y búsqueda.",
    description:
      "Aplicación nativa desarrollada con Flutter para administrar colecciones de vestimentas folclóricas, facilitando la clasificación, consulta y mantenimiento de registros desde una interfaz móvil.",
    year: "2023",
    role: "Mobile Developer",
    context: "academic",
    technologies: ["Flutter", "Dart", "Firebase", "Percent Indicator"],
    featured: true,
    featuredOrder: 5,
    status: "completed",
    repositoryUrl: "https://github.com/notlimdev/App_Vestimenta_Flutter",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/App_Vestimenta_Flutter",
      },
    ],
    highlights: [
      "Catálogo móvil orientado a colecciones culturales",
      "Interfaz enfocada en consulta y organización",
      "Implementación nativa con Flutter y Dart",
    ],
  },
];
