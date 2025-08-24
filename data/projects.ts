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
    images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built to showcase projects, skills, and experience.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://myportfolio.com",
    githubUrl: "https://github.com/usertitle/portfolio",
  },
  {
    images: ["/projects/ecommerce-1.png"],
    title: "E-commerce Store",
    description:
      "Full-stack e-commerce application with shopping cart, checkout process, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    projectUrl: "https://myecommerce.com",
    githubUrl: "https://github.com/usertitle/ecommerce",
  },
  {
    images: ["/projects/chatapp-1.png", "/projects/chatapp-2.png"],
    title: "Real-time Chat App",
    description:
      "Real-time chat application with authentication, chat rooms, and message persistence.",
    technologies: ["Next.js", "Socket.io", "Firebase"],
    projectUrl: "https://mychatapp.com",
    githubUrl: "https://github.com/usertitle/chat-app",
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
