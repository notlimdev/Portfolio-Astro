export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectStatus =
  | "draft"
  | "in-progress"
  | "completed"
  | "archived";

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
    slug: "portfolio-astro",
    category: "Portfolio / 3D Web",
    title: "Portfolio Astro",
    excerpt:
      "Portafolio migrado a Astro con React 19 y experiencia visual 3D.",
    description:
      "Portafolio personal construido sobre Astro con integración de React 19, Three.js, React Three Fiber y una arquitectura orientada a performance y escalabilidad visual.",
    year: "2025",
    role: "Frontend / Creative Developer",
    context: "personal",
    technologies: ["Astro", "React 19", "TypeScript", "Three.js", "R3F", "GSAP"],
    featured: true,
    featuredOrder: 1,
    status: "in-progress",
    repositoryUrl: "https://github.com/notlimdev/Portfolio-Astro",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/Portfolio-Astro",
      },
    ],
    highlights: [
      "Migración del portafolio a Astro",
      "Integración de React 19 y escenas 3D",
      "Base para una experiencia visual más optimizada",
    ],
  },
  {
    id: 2,
    slug: "quiosco-nextjs15",
    category: "Full Stack / E-commerce",
    title: "Quiosco de Comida",
    excerpt:
      "Sistema de pedidos con Next.js 15, Server Actions y Prisma.",
    description:
      "Aplicación full stack para gestionar pedidos de comida construida con Next.js 15, App Router, Server Actions, Prisma ORM y validación con Zod.",
    year: "2024",
    role: "Full Stack Developer",
    context: "personal",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "Zod",
      "TailwindCSS",
    ],
    featured: true,
    featuredOrder: 2,
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
      "Uso de Next.js 15 con App Router",
      "Server Actions para operaciones del servidor",
      "Prisma ORM y validación con Zod",
    ],
  },
  {
    id: 3,
    slug: "shop-store-app",
    category: "E-commerce / Backend",
    title: "Shop Store App",
    excerpt:
      "Sistema administrativo para tienda virtual con Laravel 11 y API REST.",
    description:
      "Proyecto orientado a la gestión de una tienda virtual con arquitectura híbrida: administración centralizada y servicios API para escalabilidad.",
    year: "2024",
    role: "Full Stack Developer",
    context: "personal",
    technologies: ["PHP", "Laravel 11", "REST API", "MySQL"],
    featured: true,
    featuredOrder: 3,
    status: "completed",
    repositoryUrl: "https://github.com/notlimdev/shop-store-app",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/shop-store-app",
      },
    ],
    highlights: [
      "Arquitectura híbrida para e-commerce",
      "Laravel 11 para gestión administrativa",
      "Base API para futuras integraciones",
    ],
  },
  {
    id: 4,
    slug: "python-image-processing",
    category: "Full Stack / Computer Vision",
    title: "Python Image Processing",
    excerpt:
      "Procesamiento y análisis de imágenes con Python, Flask, OpenCV y React.",
    description:
      "Sistema full stack para procesamiento de imágenes con backend en Flask, uso de OpenCV y NumPy para análisis visual, y frontend en React con TypeScript.",
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
      "Uso de OpenCV para procesamiento visual",
      "Backend en Flask con integración full stack",
      "Proyecto técnico distinto al frontend tradicional",
    ],
  },
  {
    id: 5,
    slug: "rest-api-express",
    category: "Backend / API",
    title: "REST API Express",
    excerpt:
      "API backend con Node.js, Express, TypeScript y PostgreSQL.",
    description:
      "Implementación de una REST API con Express y Sequelize orientada a una arquitectura backend mantenible, tipada y conectada a PostgreSQL.",
    year: "2024",
    role: "Backend Developer",
    context: "personal",
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Sequelize",
      "PostgreSQL",
    ],
    featured: true,
    featuredOrder: 5,
    status: "completed",
    repositoryUrl: "https://github.com/notlimdev/app-RestAPI-Express",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/notlimdev/app-RestAPI-Express",
      },
    ],
    highlights: [
      "API REST construida con TypeScript",
      "Persistencia con Sequelize y PostgreSQL",
      "Buen respaldo para mostrar perfil full stack",
    ],
  },
];
