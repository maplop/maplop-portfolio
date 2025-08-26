export type ProjectCategory = "real" | "practice" | "exam";

export type ProjectType = {
  images: Array<string>;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: Array<string>;
  projectUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectType[] = [
  {
    images: [
      "/projects/squarity/squarity-1.png",
      "/projects/squarity/squarity-2.png",
      "/projects/squarity/squarity-3.png",
      "/projects/squarity/squarity-4.png",
      "/projects/squarity/squarity-5.png",
      "/projects/squarity/squarity-6.png",
      "/projects/squarity/squarity-7.png",
      "/projects/squarity/squarity-8.png",
      "/projects/squarity/squarity-9.png",
    ],
    title: "Squarity",
    description:
      "Un ecosistema en crecimiento de herramientas NFT para creadores, coleccionistas y comerciantes.",
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://www.squarity.app",
    githubUrl: undefined,
  },
  {
    images: [
      "/projects/telosians/telosians-1.png",
      "/projects/telosians/telosians-2.png",
      "/projects/telosians/telosians-3.png",
      "/projects/telosians/telosians-4.png",
      "/projects/telosians/telosians-5.png",
      "/projects/telosians/telosians-6.png",
    ],
    title: "Telosians Club",
    description:
      "Plataforma creativa enfocada en mostrar y dar vida a los Telosians dentro del ecosistema Telos.",
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://telosians.club",
    githubUrl: undefined,
  },
  {
    images: [
      "/projects/staking-club/staking-club-1.png",
      "/projects/staking-club/staking-club-2.png",
      "/projects/staking-club/staking-club-3.png",
      "/projects/staking-club/staking-club-4.png",
      "/projects/staking-club/staking-club-5.png",
      "/projects/staking-club/staking-club-6.png",
    ],
    title: "Staking Club",
    description:
      "Prototipo de plataforma web para conectar wallets y generar ingresos pasivos con NFTs.",
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://staking-club.vercel.app",
    githubUrl: undefined,
  },
  {
    images: [
      "/projects/poke-planet/poke-planet-1.png",
      "/projects/poke-planet/poke-planet-2.png",
      "/projects/poke-planet/poke-planet-3.png",
      "/projects/poke-planet/poke-planet-4.png",
    ],
    title: "Poke Planet",
    description:
      "Poke Planet es una app interactiva que permite descubrir Pokémon, conocer sus características y guardar tus favoritos.",
    category: "practice",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://poke-planet.netlify.app",
    githubUrl: "https://github.com/maplop/pokemon-list",
  },
  {
    images: [
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-1.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-2.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-3.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-4.png",
    ],
    title: "Dashboard VoyPaTi",
    description:
      "Desarrollo de pantallas de un dashboard como prueba técnica, demostrando maquetación, interacción y uso de React/Front-end moderno.",
    category: "exam",
    technologies: ["React", "Materia UI", "TypeScript"],
    projectUrl: "https://nox-exam-voypati.vercel.app/dashboard",
    githubUrl: "https://github.com/maplop/nox-exam",
  },
  {
    images: ["/projects/pidra-papel-tijera/pidra-papel-tijera.png"],
    title: "Piedra Papel Tijera",
    description:
      "Juego de práctica que permite al usuario jugar Piedra, Papel o Tijera, diseñado para mejorar habilidades en lógica y desarrollo web.",
    category: "practice",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://main--papel-piedra-tijera.netlify.app",
    githubUrl: "https://github.com/maplop/piedra-papel-tijera",
  },
];
