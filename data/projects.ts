export type ProjectCategory = "real" | "practice" | "exam";

export type ProjectType = {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  images: Array<string>;
  category: ProjectCategory;
  technologies: Array<string>;
  projectUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectType[] = [
  {
    title: {
      es: "Squarity",
      en: "Squarity",
    },
    description: {
      es: "Este proyecto es un ecosistema de herramientas NFT en constante crecimiento, pensado para creadores, coleccionistas y comerciantes. Yo construí el sitio a detalle siguiendo el diseño en Figma, me encargué del diseño responsive, gestioné el estado de la aplicación con React Query, integré la comunicación con APIs REST y añadí interacción con Web3.",
      en: "This project is a growing ecosystem of NFT tools designed for creators, collectors, and traders. I built the site in detail following the Figma design, handled the responsive layout, managed the app state with React Query, integrated communication with REST APIs, and added Web3 interaction.",
    },
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
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://www.squarity.app",
  },
  {
    title: {
      es: "Innovación Fiscal MX",
      en: "Innovación Fiscal MX",
    },
    description: {
      es: "Desarrollé el frontend de una plataforma web para la descarga y gestión masiva de CFDI (XML). Implementé autenticación con JWT, control de permisos y rutas protegidas. Integré descargas en tiempo real mediante WebSockets con seguimiento de progreso dinámico, además de almacenamiento local con IndexedDB y generación automática de PDF y ZIP a partir de XML.",
      en: "I developed the frontend of a web platform for bulk download and management of CFDI (XML). I implemented JWT authentication, permission control and protected routes. I integrated real-time downloads using WebSockets with dynamic progress tracking, as well as local storage with IndexedDB and automatic PDF and ZIP generation from XML.",
    },
    images: [
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-1.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-2.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-3.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-4.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-5.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-6.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-7.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-8.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-9.png",
      "/projects/innovacion-fiscal-mx/innovacion-fiscal-mx-10.png",
    ],
    category: "real",
    technologies: ["React", "Material UI", "JavaScript"],
  },
  {
    title: {
      es: "GOPCED",
      en: "GOPCED",
    },
    description: {
      es: "Diseñé y desarrollé una aplicación de escritorio para la asignación de cupos universitarios. Modelé la base de datos en SQLite y desarrollé la lógica de negocio en múltiples fases. Implementé módulos de gestión, dashboards con KPIs, generación de reportes en PDF y un sistema de usuarios con roles y control de acceso.",
      en: "I designed and developed a desktop application for university seat allocation. I modeled the database using SQLite and implemented the business logic across multiple phases. I built management modules, KPI dashboards, PDF report generation, and a user system with roles and access control.",
    },
    images: [
      "/projects/gopced/gopced-1.png",
      "/projects/gopced/gopced-2.png",
      "/projects/gopced/gopced-3.png",
      "/projects/gopced/gopced-4.png",
      "/projects/gopced/gopced-5.png",
      "/projects/gopced/gopced-6.png",
      "/projects/gopced/gopced-7.png",
      "/projects/gopced/gopced-8.png",
      "/projects/gopced/gopced-9.png",
      "/projects/gopced/gopced-10.png",
      "/projects/gopced/gopced-11.png",
      "/projects/gopced/gopced-12.png",
      "/projects/gopced/gopced-13.png",
      "/projects/gopced/gopced-14.png",
      "/projects/gopced/gopced-15.png",
    ],
    category: "real",
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/maplop/sigaced",
  },
  {
    title: {
      es: "Telosians Club",
      en: "Telosians Club",
    },
    description: {
      es: "Esta es una plataforma creativa pensada para mostrar y dar vida a los Telosians dentro del ecosistema Telos. Construí el sitio a detalle siguiendo el diseño en Figma, me aseguré de que fuera completamente responsive y añadí interacción con Web3.",
      en: "This is a creative platform designed to showcase and bring the Telosians to life within the Telos ecosystem. I built the site in detail following the Figma design, ensured it was fully responsive, and added Web3 interaction.",
    },
    images: [
      "/projects/telosians/telosians-1.png",
      "/projects/telosians/telosians-2.png",
      "/projects/telosians/telosians-3.png",
      "/projects/telosians/telosians-4.png",
      "/projects/telosians/telosians-5.png",
      "/projects/telosians/telosians-6.png",
    ],
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://telosians.club",
  },
  {
    title: {
      es: "ClaySlicer",
      en: "ClaySlicer",
    },
    description: {
      es: "ClaySlicer es una herramienta que facilita todo el proceso de impresión 3D en arcilla, desde modelar hasta cortar, sin perder el control que se necesita para obtener buenos resultados. Yo me encargué de maquetar completamente la aplicación siguiendo un diseño en Figma, añadí algunas funcionalidades usando Three.js y me aseguré de que el estado de la app se manejara correctamente con LocalStorage.",
      en: "ClaySlicer is a tool that makes the entire clay 3D printing process easier, from shaping to slicing, while still giving you the control needed for precise results. I handled the full layout of the application based on a Figma design, added some features using Three.js, and ensured the app's state was properly managed with LocalStorage.",
    },
    images: [
      "/projects/clay-slicer/clay-slicer-1.png",
      "/projects/clay-slicer/clay-slicer-2.png",
      "/projects/clay-slicer/clay-slicer-3.png",
      "/projects/clay-slicer/clay-slicer-4.png",
    ],
    category: "real",
    technologies: ["Electron", "React", "Material UI", "TypeScript"],
  },
  {
    title: {
      es: "Vector to Gcode",
      en: "Vector to Gcode",
    },
    description: {
      es: "Vector to Gcode es un software que transforma diseños vectoriales en instrucciones exactas para plotters, láseres y otros equipos de fabricación digital. En este proyecto, me encargué de maquetar la aplicación siguiendo el diseño en Figma, implementé funcionalidades con Three.js y aseguré un manejo correcto del estado de la app mediante LocalStorage",
      en: "Vector to Gcode is software that transforms vector designs into precise instructions for plotters, lasers, and other digital fabrication devices. In this project, I was responsible for fully implementing the application layout based on a Figma design, added functionalities using Three.js, and ensured proper state management with LocalStorage.",
    },
    images: [
      "/projects/vector-to-gcode/vector-to-gcode-1.png",
      "/projects/vector-to-gcode/vector-to-gcode-2.png",
      "/projects/vector-to-gcode/vector-to-gcode-3.png",
    ],
    category: "real",
    technologies: ["Electron", "React", "Material UI", "TypeScript"],
  },
  {
    title: {
      es: "Staking Club",
      en: "Staking Club",
    },
    description: {
      es: "Prototipo de plataforma web que permite conectar wallets y generar ingresos pasivos con NFTs. Me encargué de construir el sitio siguiendo fielmente el diseño en Figma, garantizar su diseño responsive y agregar interacción con Web3.",
      en: "Web platform prototype that allows users to connect wallets and generate passive income with NFTs. I was responsible for building the site following the Figma design in detail, ensuring a fully responsive layout, and adding Web3 interaction.",
    },
    images: [
      "/projects/staking-club/staking-club-1.png",
      "/projects/staking-club/staking-club-2.png",
      "/projects/staking-club/staking-club-3.png",
      "/projects/staking-club/staking-club-4.png",
      "/projects/staking-club/staking-club-5.png",
      "/projects/staking-club/staking-club-6.png",
      "/projects/staking-club/staking-club-7.png",
      "/projects/staking-club/staking-club-8.png",
      "/projects/staking-club/staking-club-9.png",
      "/projects/staking-club/staking-club-10.png",
    ],
    category: "real",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://staking-club.vercel.app",
  },
  {
    title: {
      es: "Poke Planet",
      en: "Poke Planet",
    },
    description: {
      es: "App interactiva para descubrir Pokémon, explorar sus características y guardar tus favoritos. Construí la aplicación desde cero con un diseño completamente responsive, integré consumo de API REST, añadí paginación y gestioné el estado con LocalStorage y React Query.",
      en: "Interactive app to discover Pokémon, explore their characteristics, and save your favorites. I built the application from scratch with a fully responsive design, integrated REST API consumption, added pagination, and managed state using LocalStorage and React Query.",
    },
    images: [
      "/projects/poke-planet/poke-planet-1.png",
      "/projects/poke-planet/poke-planet-2.png",
      "/projects/poke-planet/poke-planet-3.png",
      "/projects/poke-planet/poke-planet-4.png",
    ],
    category: "practice",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://poke-planet.netlify.app",
    githubUrl: "https://github.com/maplop/pokemon-list",
  },
  {
    title: {
      es: "Dashboard VoyPaTi",
      en: "VoyPaTi Dashboard",
    },
    description: {
      es: "Desarrollo de un dashboard como prueba técnica, demostrando maquetación precisa, interactividad, diseño responsive y manejo moderno de React y estado de la aplicación.",
      en: "Development of a dashboard as a technical challenge, showcasing precise layout, interactivity, responsive design, and modern React practices with application state management.",
    },
    images: [
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-1.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-2.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-3.png",
      "/projects/voy-pa-ti-dashboard/voy-pa-ti-dashboard-4.png",
    ],
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
      es: "Desarrollé un juego interactivo de Piedra, Papel o Tijera que permite a los usuarios competir contra la computadora. Lo diseñé para practicar y mejorar mis habilidades en lógica de programación y desarrollo web, manejando el estado de la aplicación e implementando una interfaz simple e intuitiva.",
      en: "I developed an interactive Rock, Paper, Scissors game that allows users to compete against the computer. I designed it to practice and enhance my programming logic and web development skills, managing application state and implementing a simple, intuitive user interface.",
    },
    category: "practice",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://main--papel-piedra-tijera.netlify.app",
    githubUrl: "https://github.com/maplop/piedra-papel-tijera",
  },
  {
    title: {
      es: "Notes Space",
      en: "Notes Space",
    },
    description: {
      es: "Desarrollé una aplicación práctica para crear, organizar y categorizar notas, incluyendo la gestión de perfil del usuario. Me encargué del diseño de la interfaz, la gestión del estado de la aplicación y de que fuera funcional e intuitiva.",
      en: "I developed a practical app for creating, organizing, and categorizing notes, including user profile management. I handled the interface design, application state management, and ensured it was functional and intuitive.",
    },
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
    category: "practice",
    technologies: ["React", "Material UI", "TypeScript"],
    projectUrl: "https://notes-space.netlify.app",
    githubUrl: "https://github.com/maplop/to-do-list",
  },
  {
    title: {
      es: "Landing Page XML Download",
      en: "Landing Page XML Download",
    },
    description: {
      es: "Desarrollé una landing page de práctica, enfocándome en la maquetación, los estilos y la optimización visual para ofrecer una experiencia de usuario fluida e intuitiva.",
      en: "I built a practice landing page, focusing on layout, styling, and visual optimization to deliver a smooth and intuitive user experience.",
    },
    images: [
      "/projects/landing-page-xml-download/landing-page-xml-download-1.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-2.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-3.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-4.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-5.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-6.png",
      "/projects/landing-page-xml-download/landing-page-xml-download-7.png",
    ],
    category: "exam",
    technologies: ["React", "Material UI", "JavaScript"],
    projectUrl: "https://landing-page-xml-download-cyan.vercel.app",
    githubUrl: "https://github.com/maplop/landing-page-xml-download",
  },
  {
    title: {
      es: "ArtBitX",
      en: "ArtBitX",
    },
    description: {
      es: "Estoy desarrollando una simulación de un marketplace de NFTs donde los usuarios pueden autenticarse mediante su wallet y gestionar sus colecciones utilizando Thirdweb. Me encargo de la maquetación, la experiencia de usuario y la integración con Web3, asegurando que la aplicación sea interactiva y dinámica mientras sigue en desarrollo.",
      en: "I am developing a simulation of an NFT marketplace where users can authenticate using their wallet and manage their collections with Thirdweb. I am responsible for the layout, user experience, and Web3 integration, ensuring the application is interactive and dynamic while still in development.",
    },
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
    category: "practice",
    technologies: ["Nextjs", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/maplop/thirdweb-marketplace",
  },
  {
    title: {
      es: "Portafolio",
      en: "Portfolio",
    },
    description: {
      es: "Aquí se muestran proyectos desarrollados con tecnologías modernas, donde combino diseño, funcionalidad y rendimiento para ofrecer aplicaciones web completas y profesionales.",
      en: "This portfolio showcases projects developed with modern technologies, where I combine design, functionality, and performance to deliver complete and professional web applications.",
    },
    images: ["/projects/portfolio/portfolio-1.png"],
    category: "practice",
    technologies: ["Nextjs", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://maplop-portfolio.vercel.app",
    githubUrl: "https://github.com/maplop/maplop-portfolio",
  },
];
