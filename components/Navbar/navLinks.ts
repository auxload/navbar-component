type link = { title: string; href: string; description?: string };
interface services {
  id: number;
  title: string;
  path?: string;
  children?: link[];
}
export const services: services[] = [
  {
    id: 1,
    title: "Acasa",
    path: "/",
  },
  {
    id: 2,
    title: "Despre",
    path: "/despre-noi",
  },
  {
    id: 3,
    title: "Servicii",
    children: [
      { title: "Servicii pachete turistice", href: "/d" },
      { title: "Servicii modelat", href: "/d" },
      { title: "Servicii montat panouri solare", href: "/d" },
    ],
  },
  {
    id: 4,
    title: "Produse",
    children: [
      { title: "Sug pula pe 50 de bani", href: "/d" },
      { title: "Video Chat", href: "/d" },
      { title: "Porno", href: "/d" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];
