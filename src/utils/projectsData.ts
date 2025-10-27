import ThumbGen from "../../public/projects/ThumbGen.png";
import Portfolio from "../../public/projects/Portfolio.png";

type ProjectData = {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  videoUrl: string;
  github: string;
  demo: string;
  demoCredentials?: {
    email: string;
    password: string;
  };
  techStack: {
    name: string;
    category: string;
    description: string;
  }[];
  features: string[];
};

type ProjectsData = {
  [key: string]: ProjectData;
};

export default function getProjectsData(projectName: string) {
  const projectsData: ProjectsData = {
    "youtube-thumbnail-generator": {
      title: "YouTube Thumbnail Generator",
      tagline: "AI-Powered Thumbnail Creation Platform",
      description:
        "A full-stack web application that leverages generative AI to create compelling YouTube thumbnails. Built with modern technologies and optimized for performance with real-time updates using WebSockets.",
      longDescription:
        "This project addresses the challenge of creating eye-catching YouTube thumbnails quickly and efficiently. It features an intuitive interface where users can input their video details and receive AI-generated thumbnail suggestions. The application uses a queue system for handling multiple requests and WebSockets for real-time progress updates.",
      image: ThumbGen,
      videoUrl:
        "https://ik.imagekit.io/shashi/Project%20Demo/ThumbGen_Demo_Video.mp4",
      github: "https://github.com/shashivardhan-dev/ThumbGen",
      demo: "http://43.204.220.56/",
      demoCredentials: {
        email: "shashiavardhan.dev@gmail.com",
        password: "demo123",
      },
      techStack: [
        {
          name: "Next.js",
          category: "Frontend",
          description: "React framework for production",
        },
        {
          name: "TypeScript",
          category: "Language",
          description: "Type-safe JavaScript",
        },
        {
          name: "PostgreSQL",
          category: "Database",
          description: "Relational database",
        },
        {
          name: "Gen AI",
          category: "AI/ML",
          description: "Generative AI models",
        },
        {
          name: "WebSockets",
          category: "Real-time",
          description: "Bi-directional communication",
        },
        {
          name: "Queues",
          category: "Infrastructure",
          description: "Task management system",
        },
        {
          name: "Tailwind CSS",
          category: "Styling",
          description: "Utility-first CSS framework",
        },
        {
          name: "AWS",
          category: "Infrastructure",
          description: "Amazon Web Services",
        },
        {
          name: "AWS S3",
          category: "Storage",
          description: "Amazon Simple Storage Service",
        },
        {
          name: "Github Actions",
          category: "Infrastructure",
          description:
            "GitHub Actions for continuous integration and deployment",
        },
        {
          name: "Clerk",
          category: "Authentication",
          description: "Authentication and user management",
        },
        {
          name: "Prisma",
          category: "Database",
          description: "Type-safe database access",
        },
        {
          name: "Gemini Nano Banana",
          category: "AI/ML",
          description: "Image generation AI",
        },
        {
          name: "Docker",
          category: "Infrastructure",
          description: "Containerization and orchestration",
        },
        {
          name: "Nginx",
          category: "Infrastructure",
          description: "Web server and reverse proxy",
        },
      ],
      features: [
        "AI-powered thumbnail generation",
        "Real-time progress updates",
        "Queue-based request handling",
        "Responsive design for all devices",
        "User authentication and history",
      ],
    },
    portfolio: {
      title: "Portfolio",
      tagline: "Personal Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects. Built with React, Tailwind CSS, and TypeScript.",
      longDescription:
        "This project is a personal portfolio website that showcases my skills and projects. It is built with React, Tailwind CSS, and TypeScript.",
      image: Portfolio,
      videoUrl:"https://res.cloudinary.com/dl8o44rev/video/upload/v1761539733/Portfolio_Demo_Video_biisrk.mp4",
      github: "https://github.com/shashivardhan-dev/portfolio",
      demo: "https://shashivardhan.is-a.dev",
      techStack: [
        {
          name: "React",
          category: "Frontend",
          description: "JavaScript library for building user interfaces",
        },
        {
          name: "Tailwind CSS",
          category: "Styling",
          description: "Utility-first CSS framework",
        },
        {
          name: "TypeScript",
          category: "Language",
          description: "Type-safe JavaScript",
        },
        {
          name: "Vercel",
          category: "Infrastructure",
          description: "Serverless platform for web development",
        },
        {
          name: "Framer Motion",
          category: "Animation",
          description: "Animation library for React",
        },
        {
          name: "ImagKit",
          category: "Storage",
          description: "Image/video hosting service",
        },
      ],
      features: [
        "Responsive design for all devices",
        "Framer Motion for animations",
        "Image/video hosting service",
        "Deployment on Vercel",
        "Demo video",
        "Github Links",
        "Hosted Projects",
        "Projects Demo credentials",
      ],
    },
  };

  return projectsData[projectName];
}
