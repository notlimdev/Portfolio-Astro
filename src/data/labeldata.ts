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
    title: "NotlimDev",
    description:
      "El Verdadero Trabajo de un profesional es asegurar la calidad de Software",
    position: { top: "45%", left: "35%" },
  },
  {
    id: "label_02",
    title: "Evolución",
    description: "Me Apasiona estar actualizado con las Nuevas tecnologías",
    position: { top: "35%", left: "35%" },
  },
  {
    id: "label_03",
    title: "Creatividad",
    description:
      "El punto clave en la tecnología es aportar nuevas y valisosas ideas.",
    position: { top: "35%", left: "25%" },
  },
  {
    id: "label_04",
    title: "Equipo",
    description:
      "La riqueza de cada Persona, crece al escuchar y ser participe de su grupo de Trabajo.",
    position: { top: "20%", left: "10%" },
  },
  {
    id: "label_05",
    title: "Relajación",
    description:
      "Despejar tu mente es saludable, Escoje lo que más te guste para Distraerte",
    position: { bottom: "25%", left: "15%" },
  },
];
