export type NavPage = {
  id: number;
  name: string;
  label: string;
};

export const navPages: NavPage[] = [
  { id: 1, name: "About-Me", label: "About Me" },
  { id: 2, name: "Skills", label: "Skills" },
  { id: 3, name: "Experience", label: "Experience" },
  { id: 4, name: "Projects", label: "Projects" },
];
