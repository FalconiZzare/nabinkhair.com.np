import type { TechStack } from "@/config/developer-stack";

interface Experience {
  company: string;
  logo: string;
  designation: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract";
  startDate: string;
  endDate: string;
  description: string[];
  skills: Array<TechStack>;
  isCurrent: boolean;
}

export const ExperienceData: Experience[] = [
  {
    company: "Tulio Health",
    logo: "/company/tulio-health.svg",
    designation: "Software Engineer",
    type: "Part-time",
    startDate: "08.2025",
    endDate: "Present",
    isCurrent: true,
    description: [
      "Developed AI-powered healthcare dashboard and playground, enhancing doctor and patient interactions.",
      "Implemented robust authentication and authorization mechanisms using Clerk",
    ],
    skills: [
      { name: "Clerk", icon: "/tech-icon/clerk.svg" },
      { name: "Nest.js", icon: "/tech-icon/nestjs.svg" },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
      { name: "PostgreSQL", icon: "/tech-icon/postgresql.svg" },
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "React Query", icon: "/tech-icon/reactquery.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Zod", icon: "/tech-icon/zod.svg" },
    ],
  },
  {
    company: "Truly Care",
    logo: "/company/truly-care.webp",
    designation: "Frontend Developer",
    type: "Part-time",
    startDate: "06.2025",
    endDate: "08.2025",
    isCurrent: false,
    description: [
      "Improved the design pattern of the existing codebase for better maintainability and scalability.",
      "Developed performance optimized onboarding forms with better user interaction.",
      "Collaborated with backend developers to integrate RESTful APIs and ensure seamless functionality.",
    ],
    skills: [
      { name: "Clerk", icon: "/tech-icon/clerk.svg" },
      {
        name: "Express.js",
        icon: "/tech-icon/expressjs.svg",
        hasDarkIcon: true,
      },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "Zod", icon: "/tech-icon/zod.svg" },
    ],
  },
  {
    company: "FinFox",
    logo: "/company/fin-fox.svg",
    designation: "Frontend Developer and UI/UX Designer",
    type: "Full-time",
    startDate: "05.2025",
    endDate: "08.2025",
    isCurrent: false,
    description: [
      "Led the frontend development and UI/UX design for a fintech SaaS platform, enhancing user experience and engagement.",
      "Worked closely with backend developers to integrate APIs and ensure seamless functionality.",
    ],
    skills: [
      { name: "Figma", icon: "/tech-icon/figma.svg" },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "shadcn/ui", icon: "/tech-icon/shadcnui.svg", hasDarkIcon: true },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
    ],
  },

  {
    company: "Uncle Sams Tech",
    logo: "/company/ust.webp",
    designation: "Web Developer",
    type: "Part-time",
    startDate: "03.2024",
    endDate: "05.2025",
    isCurrent: false,
    description: [
      "Developed strong backend for short videos sharing mobile application.",
      "Improved webapp performance and improved SEO using best practices.",
      "Worked on multiple web development projects for clients with diverse requirements.",
      "Designed UI/UX mockups and prototypes multiple mobile and web applications.",
    ],
    skills: [
      { name: "AWS", icon: "/tech-icon/aws.svg", hasDarkIcon: true },
      { name: "Cloudflare", icon: "/tech-icon/cloudflare.svg" },
      {
        name: "Express.js",
        icon: "/tech-icon/expressjs.svg",
        hasDarkIcon: true,
      },

      { name: "Figma", icon: "/tech-icon/figma.svg" },
      { name: "MongoDB", icon: "/tech-icon/mongodb.svg" },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "shadcn/ui", icon: "/tech-icon/shadcnui.svg", hasDarkIcon: true },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "Vercel", icon: "/tech-icon/vercel.svg", hasDarkIcon: true },
      { name: "Zod", icon: "/tech-icon/zod.svg" },
    ],
  },
];
