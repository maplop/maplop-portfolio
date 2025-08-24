export const dictionaries = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Desarrollador Frontend",
      description:
        "Especializado en crear experiencias web modernas y responsivas con React, Tailwind CSS y TypeScript. Apasionado por el código limpio y el diseño intuitivo.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
    },
    about: {
      title: "Sobre mí",
      description: `Inicié mi carrera profesional en el área de sistemas, donde adquirí experiencia en redes, ciberseguridad e infraestructura tecnológica. Esa etapa me permitió construir una base sólida en la gestión de entornos críticos y en la resolución de problemas técnicos.

Con el tiempo descubrí mi verdadera pasión en el desarrollo web, especialmente en el frontend. En este campo encontré el equilibrio perfecto entre la precisión técnica y la creatividad, transformando diseños en interfaces claras, funcionales y centradas en la experiencia del usuario.

A lo largo de mi trayectoria he trabajado con tecnologías como HTML, CSS, JavaScript y TypeScript, así como con frameworks y librerías modernas como React, Next.js y Astro. Actualmente busco oportunidades que me permitan seguir creciendo como profesional y aportar soluciones innovadoras y de calidad.`,
      experience: "Años de experiencia",
      projects: "Proyectos completados",
      clients: "Clientes satisfechos",
    },
    skills: {
      title: "Habilidades Técnicas",
      description:
        "Tecnologías y herramientas que domino para crear experiencias web excepcionales.",
    },
    projects: {
      title: "Proyectos Destacados",
      description: "Una selección de mis trabajos más recientes y destacados.",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      project1: {
        title: "Plataforma de E-commerce",
        description:
          "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      },
      project2: {
        title: "App de Gestión de Tareas",
        description:
          "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
      },
      project3: {
        title: "Sitio Web Portfolio",
        description:
          "Sitio web portfolio responsivo con modo oscuro, animaciones y optimización SEO.",
      },
    },
    contact: {
      title: "Trabajemos Juntos",
      description:
        "Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos!",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      and: "y",
    },
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Frontend Developer",
      description:
        "Specialized in building modern and responsive web experiences with React, Tailwind CSS, and TypeScript. Passionate about clean code and intuitive design.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      description: `I began my professional career in the systems field, where I gained experience in networking, cybersecurity, and technological infrastructure. That period allowed me to build a solid foundation in managing critical environments and solving technical challenges.

Over time, I discovered my true passion in web development, particularly in frontend. In this area, I found the perfect balance between technical precision and creativity, turning designs into clear, functional, and user-centered interfaces.

Throughout my journey, I have worked with technologies such as HTML, CSS, JavaScript, and TypeScript, as well as modern frameworks and libraries like React, Next.js, and Astro. I am currently seeking opportunities that allow me to continue growing as a professional and contribute with innovative and high-quality solutions.`,
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Satisfied Clients",
    },

    skills: {
      title: "Technical Skills",
      description:
        "Technologies and tools I master to craft outstanding web experiences.",
    },
    projects: {
      title: "Featured Projects",
      description: "A selection of my most recent and highlighted work.",
      viewProject: "View Project",
      viewCode: "View Code",
      project1: {
        title: "E-commerce Platform",
        description:
          "A complete e-commerce platform with shopping cart, payments, and an admin dashboard.",
      },
      project2: {
        title: "Task Management App",
        description:
          "A task management application with drag & drop, real-time collaboration, and notifications.",
      },
      project3: {
        title: "Portfolio Website",
        description:
          "Responsive portfolio website with dark mode, animations, and SEO optimization.",
      },
    },
    contact: {
      title: "Let's Work Together",
      description: "I'm open to new projects and opportunities. Let's talk!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      and: "and",
    },
  },
};

export type Dictionary = typeof dictionaries.es;
