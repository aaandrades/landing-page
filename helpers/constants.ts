export const experiences = [
  {
    company: "Manulife",
    title: "Senior Software Engineer",
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
    title: "Software Developer",
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
