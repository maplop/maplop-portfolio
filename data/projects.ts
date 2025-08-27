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
  {
    images: [
      "/projects/notes-space/notes-space-1.png",
      "/projects/notes-space/notes-space-2.png",
      "/projects/notes-space/notes-space-3.png",
      "/projects/notes-space/notes-space-4.png",
      "/projects/notes-space/notes-space-5.png",
      "/projects/notes-space/notes-space-6.png",
      "/projects/notes-space/notes-space-7.png",
      "/projects/notes-space/notes-space-8.png",
      "/projects/notes-space/notes-space-9.png",
      "/projects/notes-space/notes-space-10.png",
    ],
    title: "Notes Space",
    description:
      "Notes Space es una app práctica para crear, organizar y categorizar notas, con gestión de perfil incluida.",
    category: "practice",
    technologies: ["React", "Material UI", "TypeScript"],
    projectUrl: "https://notes-space.netlify.app",
    githubUrl: "https://github.com/maplop/to-do-list",
  },
  {
    images: [
      "/projects/landing-page-xml-download/landing-page-xml-download-1.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-2.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-3.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-4.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-5.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-6.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-7.png",
    ],
    title: "Landing Page XML Download",
    description:
      "Landing page de práctica donde trabajé maquetación, estilos y optimización visual para una experiencia de usuario fluida.",
    category: "exam",
    technologies: ["React", "Material UI", "JavaScript"],
    projectUrl: "https://landing-page-xml-download-cyan.vercel.app",
    githubUrl: "https://github.com/maplop/landing-page-xml-download",
  },
  {
    images: [
      "/projects/art-bit-x/art-bit-x-1.png",
      "/projects/art-bit-x/art-bit-x-2.png",
      "/projects/art-bit-x/art-bit-x-3.png",
      "/projects/art-bit-x/art-bit-x-4.png",
      "/projects/art-bit-x/art-bit-x-5.png",
      "/projects/art-bit-x/art-bit-x-6.png",
      "/projects/art-bit-x/art-bit-x-7.png",
      "/projects/art-bit-x/art-bit-x-8.png",
    ],
    title: "ArtBitX",
    description:
      "Simulación de un marketplace de NFTs con autenticación mediante wallet y gestión de colecciones usando Thirdweb (en dearrollo).",
    category: "practice",
    technologies: ["Nextjs", "Material UI", "TypeScript"],
    projectUrl: undefined,
    githubUrl: "https://github.com/maplop/thirdweb-marketplace",
  },
];
