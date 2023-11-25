import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  java,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  quantum,
  nobleprog,
  carrent,
  jobit,
  tripguide,
  threejs,
  symliq,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Odoo Developer",
    icon: backend
  },
  {
    title: "Google Cloud Engineer",
    icon: backend
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Quantum Group Limited, Ghana",
    icon: quantum,
    iconBg: "#383E56",
    date: "July 2019 - Present",
    points: [
      "Building, extending and deploying Enterprise Resource Planning software which increased overall productivity across the group by over 40%.",
      "Spearheaded the migration team that migrated the core business system from one major version to another with zero downtime.",
      "Delivered a real-time Fuel Station Management and Monitoring system that reduced average reporting time and station losses by 90% and 23% respectively.",
      "Mentoring junior developers to solve problems and resolve issues(fixing of bugs).",
      "Liasing with business analysts to design and design sophisticated end user reports using the Business Intelligence and Analytics platform.",
      "Actively brainstorming and elaborating on various ideas to help make applications efficient and more easy to use."
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Nobleprog Limited",
    icon: nobleprog,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Contributed to the development and enhancement of the Nobleprog Kuwait/Dubai website by adding new features and optimizing existing ones.",
      "Migrated data from an old MariaDB database to a new instance with a PHP script, ensuring that data integrity was maintained during the process.",
      "Built robust and scalable web solutions that improved user engagement and overall site performance",
      "Added new features to the Drupal website and leveraging my skills in jQuery, AJAX, and Bootstrap CSS to enhance the website's user interface and experience.",
    ],
  },
  {
    title: "Lead Backend Developer",
    company_name: "Symliq",
    icon: symliq,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built the entire backend system for a cold store application for seamless communication with the front-end, delivering a highly functional and user-friendly application.",
      "Developed and executed detailed designs, ensuring that the backend met the highest standards of performance, scalability and reliability.",
      "Designed databases and oversaw the deployment of the application on GCP, ensuring that all elements of the backend were in sync and working harmoniously.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
