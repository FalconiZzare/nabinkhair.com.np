export interface DeveloperConfig {
  name: string;
  designation?: string;
  portfolio?: string;
  email?: string;
  phone?: string;
  bio?: string;
  avatar: string;
  resume?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    [key: string]: string | undefined;
  };
  location: {
    city: string;
    country: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };

  education: Array<{
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    location: string;
  }>;
}

export const DeveloperDetails: DeveloperConfig = {
  name: "Nabin Khair",
  designation: "Frontend Developer",
  portfolio: "http://nabinkhair.com.np",
  email: "nabinkhair12@gmail.com",
  bio: "Hello, World! I am Nabin Khair, full-stack developer from Nepal with more than 2 years of experience in web development. I love to create beautiful, functional, and user-friendly websites and applications.",
  avatar: "/nabin_khair.webp",
  resume: "https://nabinkhair.com.np/nabin_khair.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/nabinkhair42/",
    github: "https://github.com/nabinkhair42",
    twitter: "https://twitter.com/khairnabin",
    facebook: "https://www.facebook.com/nabinkhair2",
    instagram: "https://www.instagram.com/nabinkhair2",
  },
  location: {
    city: "Dharan",
    country: "Nepal",
  },
  seo: {
    title: "Nabin Khair — Frontend Developer",
    description:
      "Nabin Khair — Frontend developer building accessible, high-performance web apps.",
    keywords: ["frontend", "developer", "react", "nextjs", "typescript"],
  },
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "IOE Purwanchal Campus",
      startDate: "2023",
      endDate: "2027",
      location: "Dharan, Nepal",
    },
    {
      degree: "Higher Secondary Education (10+2)",
      institution: "Galaxy Secondary School",
      startDate: "2021",
      endDate: "2023",
      location: "Dhangadhi, Nepal",
    },
  ],
};
