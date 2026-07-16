export interface Project {
  id: string;
  name: string;
  description: string;
  githubLink: string;
  demoLink: string;
  planetColor: string;
  planetSize: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  thumbnail: string;
  techStack: string[];
  isClickable?: boolean;
}

// Relative orbital periods in Earth years:
// Mercury: 0.24, Venus: 0.62, Earth: 1.00, Mars: 1.88
// Jupiter: 11.86, Saturn: 29.46, Uranus: 84.01, Neptune: 164.8
// We use a base speed for Earth and divide by the period to get relative speed.
const baseEarthSpeed = 0.08; 

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Jewel Palace",
    description: "A full-stack e-commerce platform for an artificial jewellery business using the MERN stack (Next.js, Node.js, MongoDB), featuring secure Firebase authentication and a high-performance product catalog.",
    githubLink: "https://github.com/AvgNewton03/Jewel-Palace",
    demoLink: "https://jewel-palace.vercel.app/",
    planetColor: "#3b82f6", // blue
    planetSize: 1.2,
    orbitRadius: 8,
    orbitSpeed: baseEarthSpeed / 0.24, // Mercury
    rotationSpeed: 0.01,
    thumbnail: "/project1.png",
    techStack: ["Next.js", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    isClickable: true,
  },
  {
    id: "project-2",
    name: "Itihasik",
    description: "A responsive historical documentation portal using a modular HTML5/CSS3 framework designed to host and organize large-scale cultural datasets with an intuitive semantic hierarchy.",
    githubLink: "https://github.com/AvgNewton03/Itihasik",
    demoLink: "https://itihasik-git-master-deepams-projects-8c8329c1.vercel.app/",
    planetColor: "#a855f7", // purple
    planetSize: 0.8,
    orbitRadius: 12,
    orbitSpeed: baseEarthSpeed / 0.62, // Venus
    rotationSpeed: 0.015,
    thumbnail: "/project2.png",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    isClickable: true,
  },
  {
    id: "project-3",
    name: "Virtual Whiteboard",
    description: "A gesture-controlled virtual whiteboard using Python, OpenCV, and MediaPipe, enabling users to draw in 3D space via real-time hand tracking and webcam input.",
    githubLink: "https://github.com/AvgNewton03/Virtual-Whitboard",
    demoLink: "",
    planetColor: "#06b6d4", // cyan
    planetSize: 1.5,
    orbitRadius: 16,
    orbitSpeed: baseEarthSpeed / 1.00, // Earth
    rotationSpeed: 0.02,
    thumbnail: "",
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    isClickable: true,
  },
  {
    id: "project-4",
    name: "Project Four",
    description: "An immersive e-commerce experience with 3D product visualization.",
    githubLink: "#",
    demoLink: "#",
    planetColor: "#f97316", // orange
    planetSize: 0.9,
    orbitRadius: 20,
    orbitSpeed: baseEarthSpeed / 1.88, // Mars
    rotationSpeed: 0.018,
    thumbnail: "/placeholders/project4.jpg",
    techStack: ["React", "Three.js", "Tailwind"],
    isClickable: true,
  },
  {
    id: "project-5",
    name: "Project Five",
    description: "A real-time collaboration tool for creative teams.",
    githubLink: "#",
    demoLink: "#",
    planetColor: "#10b981", // emerald
    planetSize: 1.1,
    orbitRadius: 24,
    orbitSpeed: baseEarthSpeed / 11.86, // Jupiter
    rotationSpeed: 0.04,
    thumbnail: "/placeholders/project5.jpg",
    techStack: ["React", "Node.js", "Socket.io"],
    isClickable: false,
  },
  {
    id: "project-6",
    name: "Project Six",
    description: "A modern, minimalist blogging platform built for performance.",
    githubLink: "#",
    demoLink: "#",
    planetColor: "#ec4899", // pink
    planetSize: 0.7,
    orbitRadius: 28,
    orbitSpeed: baseEarthSpeed / 29.46, // Saturn
    rotationSpeed: 0.035,
    thumbnail: "/placeholders/project6.jpg",
    techStack: ["Next.js", "MDX", "Tailwind"],
    isClickable: false,
  },
  {
    id: "project-7",
    name: "Project Seven",
    description: "A fitness tracking application with personalized workout plans.",
    githubLink: "#",
    demoLink: "#",
    planetColor: "#ef4444", // red
    planetSize: 1.3,
    orbitRadius: 32,
    orbitSpeed: baseEarthSpeed / 84.01, // Uranus
    rotationSpeed: 0.025,
    thumbnail: "/placeholders/project7.jpg",
    techStack: ["React Native", "Firebase", "Redux"],
    isClickable: false,
  },
  {
    id: "project-8",
    name: "Project Eight",
    description: "A comprehensive portfolio template for developers and designers.",
    githubLink: "#",
    demoLink: "#",
    planetColor: "#eab308", // yellow
    planetSize: 1.0,
    orbitRadius: 36,
    orbitSpeed: baseEarthSpeed / 164.8, // Neptune
    rotationSpeed: 0.03,
    thumbnail: "/placeholders/project8.jpg",
    techStack: ["React", "Framer Motion", "Styled Components"],
    isClickable: false,
  }
];
