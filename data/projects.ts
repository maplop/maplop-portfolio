export type ProjectCategory = "real" | "practice" | "exam";

export type ProjectType = {
  images: Array<string>;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
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
    title: {
      es: "Squarity",
      en: "Squarity",
    },
    description: {
      es: "Un ecosistema en crecimiento de herramientas NFT para creadores, coleccionistas y comerciantes.",
      en: "A growing ecosystem of NFT tools for creators, collectors, and traders.",
    },
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://www.squarity.app",
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
    title: {
      es: "Telosians Club",
      en: "Telosians Club",
    },
    description: {
      es: "Plataforma creativa enfocada en mostrar y dar vida a los Telosians dentro del ecosistema Telos.",
      en: "Creative platform focused on showcasing and bringing the Telosians to life within the Telos ecosystem.",
    },
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://telosians.club",
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
    title: {
      es: "Staking Club",
      en: "Staking Club",
    },
    description: {
      es: "Prototipo de plataforma web para conectar wallets y generar ingresos pasivos con NFTs.",
      en: "Prototype of a web platform to connect wallets and generate passive income with NFTs.",
    },
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://staking-club.vercel.app",
  },
  {
    images: [
      "/projects/poke-planet/poke-planet-1.png",
      "/projects/poke-planet/poke-planet-2.png",
      "/projects/poke-planet/poke-planet-3.png",
      "/projects/poke-planet/poke-planet-4.png",
    ],
    title: {
      es: "Poke Planet",
      en: "Poke Planet",
    },
    description: {
      es: "App interactiva que permite descubrir Pokémon, conocer sus características y guardar tus favoritos.",
      en: "Interactive app that lets you discover Pokémon, explore their features, and save your favorites.",
    },
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
    title: {
      es: "Dashboard VoyPaTi",
      en: "VoyPaTi Dashboard",
    },
    description: {
      es: "Desarrollo de pantallas de un dashboard como prueba técnica, demostrando maquetación, interacción y uso de React/Front-end moderno.",
      en: "Development of dashboard screens as a technical test, showcasing layout, interaction, and use of modern React/Front-end.",
    },
    category: "exam",
    technologies: ["React", "Material UI", "TypeScript"],
    projectUrl: "https://nox-exam-voypati.vercel.app/dashboard",
    githubUrl: "https://github.com/maplop/nox-exam",
  },
  {
    images: ["/projects/pidra-papel-tijera/pidra-papel-tijera.png"],
    title: {
      es: "Piedra Papel Tijera",
      en: "Rock Paper Scissors",
    },
    description: {
      es: "Juego de práctica que permite al usuario jugar Piedra, Papel o Tijera, diseñado para mejorar habilidades en lógica y desarrollo web.",
      en: "Practice game that allows users to play Rock, Paper, Scissors, designed to improve logic and web development skills.",
    },
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
    title: {
      es: "Notes Space",
      en: "Notes Space",
    },
    description: {
      es: "App práctica para crear, organizar y categorizar notas, con gestión de perfil incluida.",
      en: "Practice app to create, organize, and categorize notes, including profile management.",
    },
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
    title: {
      es: "Landing Page XML Download",
      en: "Landing Page XML Download",
    },
    description: {
      es: "Landing page de práctica donde trabajé maquetación, estilos y optimización visual para una experiencia de usuario fluida.",
      en: "Practice landing page where I worked on layout, styling, and visual optimization for a smooth user experience.",
    },
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
    title: {
      es: "ArtBitX",
      en: "ArtBitX",
    },
    description: {
      es: "Simulación de un marketplace de NFTs con autenticación mediante wallet y gestión de colecciones usando Thirdweb (en desarrollo).",
      en: "Simulation of an NFT marketplace with wallet authentication and collection management using Thirdweb (in development).",
    },
    category: "practice",
    technologies: ["Nextjs", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/maplop/thirdweb-marketplace",
  },
];
