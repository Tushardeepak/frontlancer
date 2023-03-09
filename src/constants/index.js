import {
  appwrite,
  arc,
  aws,
  css,
  des,
  fan,
  figma,
  firebase,
  git,
  html,
  java,
  javascript,
  lead,
  mob,
  mongodb,
  newLogo2,
  nodejs,
  per,
  reach,
  reactImage,
  reactjs,
  redux,
  sass,
  scale,
  software,
  typescript,
  world,
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
    title: "React",
    icon: reactImage,
    hide: false,
  },
  {
    title: "Frontend",
    icon: fan,
    hide: false,
  },
  {
    title: "UI/UX",
    icon: des,
    hide: false,
  },
  {
    title: "Reach",
    icon: reach,
    hide: true,
  },
  {
    title: "Architecture",
    icon: arc,
    hide: true,
  },
  {
    title: "Responsive",
    icon: mob,
    hide: false,
  },
  {
    title: "Scalable",
    icon: scale,
    hide: true,
  },
  {
    title: "Performance",
    icon: per,
    hide: true,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SASS",
    icon: sass,
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
    name: "Firebase",
    icon: firebase,
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
    name: "Appwrite",
    icon: appwrite,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Frontend/UI-UX Freelancer",
    company_name: "10+ projects",
    icon: newLogo2,
    iconBg: "black",
    date: "July 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Hyderabad",
    icon: software,
    iconBg: "black",
    date: "July 2022 - Present",
    points: [
      "Implementing agents and process automation by utilizing Java, Hibernate, and SQL.",
      "Development of UI dashboards and React components using highcharts and materialUI.",
      "Working on a Front-end framework that creates customizable dashboards in accordance with the various needs transmitted through JSON files.",
      "Working on design architectures and improving code quality",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company_name: "Startup",
    icon: lead,
    iconBg: "black",
    date: "Oct 2020 - Feb 2022",
    points: [
      "Developed and maintained the whole front-end framework.",
      "API Integration, Authentication and Authorization using AWS, State management.",
      "UI Development, Optimizations, debugging, testing and designs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open source contributor",
    company_name: "3+ Projects",
    icon: world,
    iconBg: "black",
    date: "Nov 2020 - March 2021",
    points: [
      "Contributed as a student developer as Google developer member",
      "Contributed in DA-IICT events.",
      "Contributed to many startups",
      "Improvising code quality and designs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tushar proved me wrong.",
    name: "Ayush Agrawal",
    designation: "Tech Lead",
    company: "NONA Lifestyle",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tushar does.",
    name: "Jatin Virmani",
    designation: "Co-fonder",
    company: "Coding minutes",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tushar designed our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Amit Singh",
    designation: "Founder/Freelancer",
    company: "Siteguide",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Slogger",
    description:
      "All in one progressive web app for team management and personal work. Effortless collaborations, chats, video meetings, day planner,list and board views for clear timeline, calender management, feedback, and endorsements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "optimization",
        color: "green-text-gradient",
      },
      {
        name: "pwa",
        color: "pink-text-gradient",
      },
      {
        name: "design",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/slogger.png?alt=media&token=a94e5d4f-ff92-45f6-9902-1af40db9ca2e",
    source_code_link: "https://withslogger.web.app/",
  },
  {
    name: "JEE Simplified",
    description:
      "Fully functional framework with admin screens, Admins can configure anything in the live sites including CURD of courses, discounts, notifications etc. Client side views where clients can purchase course and watch them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay",
        color: "green-text-gradient",
      },
      {
        name: "design/UI-UX",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/jee.png?alt=media&token=a0f5c0f2-7240-48a5-9986-2a2f0e78ad5b",
    source_code_link: "https://jeesimplified-5c8e2.web.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A clone of original Netflix, with authentication, authorization, separate list every individual. Listing of all latest series and movies. Segregated in different genres. Also have search and save functionality. Build with firebase and is mobile responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/net.png?alt=media&token=e5164c8d-2848-4bfb-8982-015115b4b8ed",
    source_code_link: "https://github.com/Tushardeepak/netflixclone",
  },
  {
    name: "Skolar",
    description:
      "The whole frontend pages were made by me, The project consists of 15 to 20 pages of complex designs and CSS works. The website is fully mobile responsive. Made with React, JavaScript and CSS and other react libraries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/sko.png?alt=media&token=39e25d14-25eb-472a-8385-0bd87784f624",
    source_code_link:
      "https://drive.google.com/file/d/1yXTPQy49sOZyAPu7d9g0C9RLN_dfQnLh/view",
  },
  {
    name: "Tuitionbud",
    description:
      "Developed and maintained front-end framework with API Integration, AWS, State management, UI Development, Optimizations, debugging, testing and designs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "optimization",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/tui.png?alt=media&token=f0db4d29-758f-43a3-9532-952cda361ff8",
    source_code_link:
      "https://drive.google.com/file/d/1yXTPQy49sOZyAPu7d9g0C9RLN_dfQnLh/view",
  },
  {
    name: "English Expert",
    description:
      "Its and app to learn english, The whole admin panel from which anything can be configured on app based on roles is done by me, Admins can also the stats and analytics . Made with React, Javascript, CSS, AppWrite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "admin-panel",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/eng.png?alt=media&token=1336f897-d138-4cc3-96e5-6145b343052d",
    source_code_link:
      "https://drive.google.com/file/d/1yXTPQy49sOZyAPu7d9g0C9RLN_dfQnLh/view",
  },
];

export { services, technologies, experiences, testimonials, projects };
