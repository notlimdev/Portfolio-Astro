// src/data/labeldata.ts
export type LabelsDataTypes = {
  id: string;
  title: string;
  description: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
};

export const labelsData: LabelsDataTypes[] = [
  {
    id: "label_01",
    title: "notlimdev",
    description:
      "Mi identidad digital. Más que un apodo, es un recordatorio personal de mi compromiso con la curiosidad, el esfuerzo y el profesionalismo en cada línea de código.",
    position: { top: "45%", left: "30%" },
  },
  {
    id: "label_02",
    title: "Código Sostenible",
    description:
      "No me conformo con que algo simplemente 'funcione'. Busco optimizar el código para que sea sólido, testeable y fácil de entender para quienes vengan después.",
    position: { top: "35%", left: "30%" },
  },
  {
    id: "label_03",
    title: "Eterno Aprendiz",
    description:
      "La tecnología cambia, pero los fundamentos quedan. Sé que nunca lo sé todo, por eso mi mayor herramienta es la disposición para escuchar, aprender y evolucionar.",
    position: { top: "35%", left: "20%" },
  },
  {
    id: "label_04",
    title: "Visión de Producto",
    description:
      "Programo para personas, no para máquinas. Me involucro en UX y diseño porque entiendo que la mejor arquitectura no sirve si la experiencia del usuario falla.",
    position: { top: "20%", left: "10%" },
  },
  {
    id: "label_05",
    title: "Trabajo en Equipo",
    description:
      "Ningún sistema grande se construye en solitario. Valoro la comunicación honesta, aprender de las críticas en los code reviews y crecer junto a mis compañeros.",
    position: { bottom: "25%", left: "15%" },
  },
];
