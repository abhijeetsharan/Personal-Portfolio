import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { TbBrandCpp } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaGithubSquare, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaSquareGit } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "ABHIJEET SHARAN",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate software developer skilled in crafting efficient solutions using modern technologies. I enjoy transforming ideas into impactful projects.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/abhijeetsharan/personal-portfolio",
  },
  {
    id: 2,
    name: "BIT Care - College Dispensary App",
    description:
      "Developed a MERN-stack web app improving healthcare access for 5,000+ users with streamlined appointment management.",
    image: projectImage2,
    githubLink: "https://github.com/abhijeetsharan/Bit-Care",
  },
  {
    id: 3,
    name: "Hostel Room Allotment System",
    description:
      "The Hostel Room Allotment System simplifies room allocation for students and administrators, improving efficiency with an automated, user-friendly interface.",
    image: projectImage3,
    githubLink: "https://github.com/abhijeetsharan/hostel-room-allotment",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/abhijeetsharan/My-Weather-App",
  },
  {
    id: 5,
    name: "Weather Prediction Using Images",
    description:
      "Weather prediction using image classification with a CNN in TensorFlow for accurate forecasts.",
    image: projectImage5,
    githubLink: "https://github.com/abhijeetsharan/Weather-Prediction-using-Images",
  },
  {
    id: 6,
    name: "PyShooter",
    description:
      "Developed a 2D platformer game using Pygame, leading to a 40% increase in player retention due to engaging gameplay mechanics.",
    image: projectImage6,
    githubLink: "https://github.com/abhijeetsharan/PyShooter",
  },
  {
    id: 7,
    name: "Go Notes",
    description:
      "Developed a Notes App using Golang in Backend And React.js in the frontend including Redux for state management.",
    image: projectImage6,
    githubLink: "https://github.com/abhijeetsharan/Go-Notes",
  },
];

export const BIO = [
  "Abhijeet Sharan embarked on his computer science journey at the Birla Institute of Technology, Mesra, where he earned his Bachelor’s of Computer Applications (BCA) in 2023. Currently, he is advancing his knowledge with a Master’s of Computer Applications (MCA) at the same esteemed institution.",
  "In 2024, Abhijeet showcased his passion for technology and user-centric solutions by developing BIT Care, a dispensary web app that significantly improved healthcare accessibility for over 5,000 users. This project demonstrated his ability to seamlessly combine creativity with functionality, reducing scheduling errors by 40% and transforming user engagement with its intuitive interface.",
  "Abhijeet is a versatile developer with a robust skill set in React.js, Tailwind CSS, TensorFlow, and modern web development practices. His expertise spans designing scalable applications, optimizing algorithms, and delivering innovative software solutions that drive meaningful results, underscoring his commitment to advancing technology and user experiences.",
];

export const SKILLS = [
  {
    icon: <TbBrandCpp className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "C++",
    experience: "2+ year",
  },
  {
    icon: <FaGolang className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Golang",
    experience: "3 months",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1 year",
  },
  {
    icon: <FaPython className="text-4xl text-white lg:text-5xl" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "6 months",
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "1+ year",
  },
  {
    icon: <TbSql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
    experience: "2+ year",
  },
  {
    icon: <FaSquareGit className="text-4xl text-white lg:text-5xl" />,
    name: "Git",
    experience: "2+ year",
  },
  {
    icon: <FaNode className="text-4xl text-white lg:text-5xl" />,
    name: "Node.js",
    experience: "6 months",
  },
  {
    icon: <FaGithubSquare className="text-4xl text-white lg:text-5xl" />,
    name: "Github",
    experience: "2+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Software Developer Intern",
    company: "Aarovate",
    duration: "January 2025 - Present",
    description:
      "As the SDE Intern, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Application",
    institution: "Birla Institute of Technology, Mesra",
    duration: "August 2023 - May 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and ReactJS. Completed a minor project on developing an Doctor Appointment Booking System. I won the 1st prize in the Data Hunt event at the Data Science Summit '23.",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Birla Institute of Technology, Mesra",
    duration: "August 2020 - May 2023",
    description:
      "I completed  Bachelor’s of Computer Applications (BCA) from Birla Institute of Technology, Mesra, specializing in software development, programming, and computer science fundamentals. I won the 1st prize in the Speedster event at the Aurora '23.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  {
    href: "https://github.com/abhijeetsharan",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/abhijeetsharan1510/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
