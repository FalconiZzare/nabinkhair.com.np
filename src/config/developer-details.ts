export interface DeveloperConfig {
  name: string
  designation: string
  portfolio: string
  email: string
  phone?: string
  bio: string
  avatar: string
  resume: string
  socialLinks: {
    name: string
    url: string
    icon: string
    hasDarkIcon: boolean
    handle: string
  }[]

  location: {
    city: string
    country: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
  }

  education: Array<{
    degree: string
    institution: string
    startDate: string
    endDate: string
    location: string
  }>
}

export const DeveloperDetails: DeveloperConfig = {
  name: "Nabin Khair",
  designation: "Frontend Developer",
  portfolio: "http://nabinkhair.com.np",
  email: "nabinkhair12@gmail.com",
  bio: "Hello, World! I am Nabin Khair, full-stack developer from Nepal with more than 2 years of experience in web development. I love to create beautiful, functional, and user-friendly websites and applications.",
  avatar: "/nabin_khair.webp",
  resume: "https://nabinkhair.com.np/nabin_khair.pdf",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nabinkhair42/",
      icon: "/social/linkedin.svg",
      hasDarkIcon: false,
      handle: "nabinkhair42"
    },
    {
      name: "GitHub",
      url: "https://github.com/nabinkhair42",
      icon: "/social/github.svg",
      hasDarkIcon: true,
      handle: "nabinkhair42"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/khairnabin",
      icon: "/social/twitter.svg",
      hasDarkIcon: false,
      handle: "khairnabin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nabinkhair2",
      icon: "/social/instagram.svg",
      hasDarkIcon: false,
      handle: "nabinkhair2"
    }
  ],
  location: {
    city: "Dharan",
    country: "Nepal"
  },
  seo: {
    title: "Nabin Khair — Frontend Developer",
    description: "Nabin Khair — Frontend developer building accessible, high-performance web apps.",
    keywords: ["frontend", "developer", "react", "nextjs", "typescript"]
  },
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "IOE Purwanchal Campus",
      startDate: "2023",
      endDate: "2027",
      location: "Dharan, Nepal"
    },
    {
      degree: "Higher Secondary Education (10+2)",
      institution: "Galaxy Secondary School",
      startDate: "2021",
      endDate: "2023",
      location: "Dhangadhi, Nepal"
    }
  ]
}
