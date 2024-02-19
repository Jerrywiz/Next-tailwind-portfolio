// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

import { GrMail } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Frontend Developer",

    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Software development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Javascript",
        logo: figma,
      },
      {
        name: "Typescript",
        logo: nodejs,
      },

      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "React Native",
        logo: reactjs,
      },
      {
        name: "Next Js",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Projects",
    subtitle: "Recent Projects",
    service_content: [
      {
        title: "React Js",
        para: "The project allows to track and analyze voter behavior and preferences in real time, providing valuable insights to target audience.",
        logo: services_logo4,
        demoLink: "https://polleasy.netlify.app/login",
        repoLink: "https://github.com/Prunedge-Dev-Team/polleasy-web",
      },
      {
        title: "React Ts",
        para: "A driven management system that enhance learning among college students",
        logo: services_logo1,
        demoLink: "https://ilimi-kit-dev.netlify.app/signin",
        repoLink: "https://github.com/Prunedge-Dev-Team/ilimi-kit-web",
      },
      {
        title: "React Js",
        para: "End-to-end automation solution that digitizes the user journey of users within the digital literacy program management value chain.",
        logo: services_logo2,
        demoLink: "https://nakise-dev.netlify.app/",
        repoLink: "https://github.com/Prunedge-Dev-Team/ilimikit-web-ts",
      },
      {
        title: "React Native",
        para: "A clone Of Acess Bank Pension Application, just a static native ap with no integration",
        logo: "Access Clone",
        repoLink: "https://github.com/Jerrywiz/AcessClone",
      },
      {
        title: "Next Js",
        para: "My Personal built with Next Js and Tailwind Css it includs my resume and my achievement over the past years",
        logo: services_logo3,
        demoLink: "https://jerrry-portfolio.netlify.app/",
        repoLink: "https://github.com/Jerrywiz/My-portfolio",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person_project,
  },
  Testimonials: {
    title: "Education",
    subtitle: "Certification",
    testimonials_content: [
      {
        review: "Bachelor Of Science, Mass Communication",
        img: avatar1,
        name: "Lagos State University",
      },
      {
        review: "DIGITAL SKILLS FOR THE WORKPLACE TRAINING",
        img: avatar4,
        name: "TECH4DEV AND GIZ",
      },
      {
        review: "Participant, Cloud Service Management",
        img: avatar2,
        name: " Cloud Service",
      },
    ],
  },
  Hireme: {
    title: "Get to meet me",
    subtitle: "Check My Github For Recent Works",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: ` I have years of experience designing and building responsive web design and mobile
    apps.  with extensive knowledge of UX and
    user psychology. Passionate about learning and eager to tackle more complex
    problems and continue to find ways to maximize user efficiency`,
    btnText: "Check Github",
  },
  Contact: {
    title: "Connnect with  Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "jeremiahaimiton@gmail.com",
        icon: GrMail,
        link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
      },
      {
        text: "+2349013745815",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "jeremiah aimiton",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/jeremiah-aimiton-76861a238/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
