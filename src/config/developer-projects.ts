import { TechStack } from "@/config/developer-stack";

interface Projects {
  title: string;
  tagline: string;
  description: Array<string>;
  image: string;
  liveLink?: string;
  repo?: string;
  techStack?: Array<TechStack>;
}

export const ProjectsData: Projects[] = [
  {
    title: "Fastly",
    tagline: "SaaS Starter Kit",
    description: [
      "A SaaS starter kit for solo developers and startups.",
      "JWT Based Authentication and Authorization.",
      "User Management Dashboard",
      "Image Uploading with Uploadthing",
      "Builtin Vercel Deployment",
    ],
    image: "/projects/fastly.png",
    liveLink: "https://fastly.nabinkhair.com.np",
    repo: "https://github.com/nabinkhair42/fastly",
    techStack: [
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "MongoDB", icon: "/tech-icon/mongodb.svg" },
      { name: "Vercel", icon: "/tech-icon/vercel-dark.svg", hasDarkIcon: true },
      { name: "React Query", icon: "/tech-icon/react-query.svg" },
      { name: "Zod", icon: "/tech-icon/zod.svg", hasDarkIcon: true },
    ],
  },
  {
    title: "FlowMint",
    tagline: "Diagrams Made Effortless",
    description: [
      "A powerful diagramming tool for understanding and visualizing complex ideas.",
      "Create diagrams from simple text prompts using Gemini AI",
      "Export diagrams in multiple formats including PNG, SVG",
      "User authentication and management with JWT",
    ],
    image: "/projects/flowmint.png",
    liveLink: "https://flowmint.nabinkhair.com.np",
    repo: "https://github.com/nabinkhair42/flowmint",
    techStack: [
      { name: "Next.js", icon: "/tech-icon/nextjs.svg", hasDarkIcon: true },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech-icon/tailwindcss.svg" },
      { name: "MongoDB", icon: "/tech-icon/mongodb.svg" },
      { name: "Vercel", icon: "/tech-icon/vercel-dark.svg", hasDarkIcon: true },
      { name: "React Query", icon: "/tech-icon/react-query.svg" },
      { name: "Zod", icon: "/tech-icon/zod.svg", hasDarkIcon: true },
    ],
  },
];
