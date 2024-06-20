export const LANGUAGES = [
  {
    name: "javascript",
    src: "https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=F7DF1E",
    file: "/javascript.svg",
    height: 24,
    width: 145,
  },
  {
    name: "java",
    src: "https://img.shields.io/badge/Code-Java-informational?style=flat&logo=gradle&logoColor=white&color=007396",
    file: "/java.svg",
    height: 24,
    width: 115,
  },
  {
    name: "typescript",
    src: "https://img.shields.io/badge/Code-TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=3178C6",
    file: "/typescript.svg",
    height: 24,
    width: 153,
  },
];

export const FRONTEND = [
  {
    name: "react",
    src: "https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&logoColor=white&color=61DAFB",
    file: "/react.svg",
    height: 24,
    width: 125,
  },
  {
    name: "angular",
    src: "https://img.shields.io/badge/Code-Angular-informational?style=flat&logo=angular&logoColor=white&color=DD0031",
    file: "/angular.svg",
    height: 24,
    width: 127,
  },
  {
    name: "ionic",
    src: "https://img.shields.io/badge/Code-Ionic-informational?style=flat&logo=ionic&logoColor=white&color=3880FF",
    file: "/ionic.svg",
    height: 24,
    width: 121,
  },
  {
    name: "Android",
    src: "https://img.shields.io/badge/Code-Android-informational?style=flat&logo=android&logoColor=white&color=3DDC84",
    file: "/android.svg",
    height: 24,
    width: 137,
  },
];

export const BACKEND = [
  {
    name: "nodejs",
    src: "https://img.shields.io/badge/Code-NodeJS-informational?style=flat&logo=node.js&logoColor=white&color=339933",
    file: "/nodejs.svg",
    height: 24,
    width: 135,
  },
  {
    name: "spring",
    src: "https://img.shields.io/badge/Code-Spring-informational?style=flat&logo=spring&logoColor=white&color=6DB33F",
    file: "/spring.svg",
    height: 24,
    width: 129,
  },
  {
    name: "nestjs",
    src: "https://img.shields.io/badge/Code-NestJS-informational?style=flat&logo=nestjs&logoColor=white&color=E0234E",
    file: "/nestjs.svg",
    height: 24,
    width: 131,
  },
  {
    name: "express",
    src: "https://img.shields.io/badge/Code-Express-informational?style=flat&logo=express&logoColor=white&color=000000",
    file: "/express.svg",
    height: 24,
    width: 137,
  },
];

export const DB = [
  {
    name: "mongodb",
    src: "https://img.shields.io/badge/DB-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=47A248",
    file: "/mongodb.svg",
    height: 24,
    width: 130,
  },
  {
    name: "postgresql",
    src: "https://img.shields.io/badge/DB-PostgreSQL-informational?style=flat&logo=postgresql&logoColor=white&color=336791",
    file: "/postgresql.svg",
    height: 24,
    width: 137,
  },
];

export const experiences = [
  {
    company: "Manulife",
    title: "Frontend Software Engineer",
    description:
      "Developed financial and investment solutions with a focus on user experience and scalable architecture. Contributed to various projects aimed at enhancing customer interactions and improving system performance.",
    date: "2023 - Present",
    href: "https://www.manulife.com/",
    image: {
      src: "/manulife.png",
      width: 130,
      height: 25,
    },
  },
  {
    company: "Mercadolibre",
    title: "Software Engineer",
    description:
      "Built multiple internal web applications to support data processing and standardization, including KPIs and metrics. Coordinated with multiple teams for requirements gathering and product design to ensure cohesive and functional solutions.",
    date: "2021 - 2022",
    href: "https://www.mercadolibre.com.co/",
    image: {
      src: "/mercadolibre.png",
      width: 120,
      height: 28,
    },
  },
  {
    company: "Banco de Bogota",
    title: "Software Engineer",
    description:
      "Developed a top-rated mobile banking application, emphasizing security, scalability, system design, and responsive design. Played a key role in creating a user-friendly and secure banking experience.",
    date: "2020 - 2021",
    href: "https://www.bancodebogota.com/",
    image: {
      src: "/bancobogota.png",
      width: 120,
      height: 38,
    },
  },
];

export const otherCompanies = [
  {
    company: "Triskel software solutions",
    src: "/triskel.png",
    href: "https://www.triskelss.com/",
    width: 120,
    height: 40,
  },
  {
    company: "Lonja nacional de propiedad raiz",
    src: "/lonja.png",
    href: "https://lonja-nacional.co/",
    width: 120,
    height: 38,
  },
];

export const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

export const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export const fixedCanvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "30%",
  height: "30%",
  top: 0,
  right: 0,
};
