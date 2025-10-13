import { TechStack } from "@/config/developer-stack";

interface Experience {
  company: string;
  logo?: string;
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
    startDate: "08.2023",
    endDate: "Present",
    isCurrent: true,
    description: [],
    skills: [
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "PostgreSQL", icon: "/tech-icon/postgresql.svg" },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
      { name: "Nest.js", icon: "/tech-icon/nestjs.svg", hasDarkIcon: true },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "React Query", icon: "/tech-icon/react-query.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "Zod", icon: "/tech-icon/zod.svg" },
    ],
  },
  {
    company: "Truly Care",
    logo: "/company/trulycare.webp",
    designation: "Frontend Developer",
    type: "Part-time",
    startDate: "06.2023",
    endDate: "08.2023",
    isCurrent: false,
    description: [],
    skills: [
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
    description: [],
    skills: [
      { name: "Figma", icon: "/tech-icon/figma.svg" },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "React.js", icon: "/tech-icon/react.svg" },
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
    endDate: "05.2024",
    isCurrent: false,
    description: [],
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
      { name: "React.js", icon: "/tech-icon/react.svg" },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "Vercel", icon: "/tech-icon/vercel.svg", hasDarkIcon: true },
      { name: "Zod", icon: "/tech-icon/zod.svg" },
    ],
  },
];
