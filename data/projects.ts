export type ProjectType = {
  images: Array<string>;
  title: string;
  description: string;
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
    ],
    title: "Squarity",
    description:
      "Un ecosistema en crecimiento de herramientas NFT para creadores, coleccionistas y comerciantes.",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://www.squarity.app",
    githubUrl: undefined,
  },
  {
    images: ["/projects/ecommerce-1.png"],
    title: "Telosians Club",
    description:
      "Plataforma creativa enfocada en mostrar y dar vida a los Telosians dentro del ecosistema Telos.",
    technologies: ["Next.js", "Material UI", "TypeScript"],
    projectUrl: "https://telosians.club",
    githubUrl: undefined,
  },
  {
    images: ["/projects/chatapp-1.png", "/projects/chatapp-2.png"],
    title: "Real-time Chat App",
    description:
      "Real-time chat application with authentication, chat rooms, and message persistence.",
    technologies: ["Next.js", "Socket.io", "Firebase"],
    projectUrl: "https://staking-club.vercel.app",
    githubUrl: undefined,
  },
  {
    images: ["/projects/dashboard.png"],
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with charts, filters, and data visualization for business metrics.",
    technologies: ["React", "Recharts", "Tailwind CSS", "Vercel"],
    projectUrl: "https://analyticsdashboard.com",
    githubUrl: "https://github.com/usertitle/analytics-dashboard",
  },
  {
    images: ["/projects/blog.png"],
    title: "Tech Blog",
    description:
      "A blog platform with Markdown support, categories, and an admin panel.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    projectUrl: "https://mytechblog.com",
    githubUrl: "https://github.com/usertitle/tech-blog",
  },
];
