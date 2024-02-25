type Link = {
  id: number;
  label: string;
  path?: string;
};

interface navLinks extends Link {
  children?: navLinks[];
}

export const navLinks: navLinks[] = [
  {
    id: 1,
    label: "Documentation",
    path: "/docs",
  },
  {
    id: 2,
    label: "Components",
    children: [
      {
        id: 21,
        label: "Servicii si pachete turistice",
        path: "/servicii",
      },
      {
        id: 22,
        label: "Alte Servicii si pachete turistice",
        path: "/alte-servicii",
        children: [
          {
            id: 211,
            label: "Servicii si pachete turistice",
            path: "/servicii",
          },
        ],
      },
    ],
  },
];
