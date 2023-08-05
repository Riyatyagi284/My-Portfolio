import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  passwordGenerator,
  shoppingCart,
  weather,
  githubDetector,
  Blog,
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
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
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
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Weather App is a website which tells about the weather of current location of user as well as user can also search the city for which user wants to find out the weather.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Riyatyagi284/Weather-App",
    netlify_link:"https://riya-weather-app.netlify.app/",
  },
  {
    name: "GitHub Profile Detector",
    description:
      "Dev Detective is a website in which we can find the information about the developer by searching the username of the developer on the GitHub,Here data directly fetch through API's.When we search for the username it gives shows the GitHub profile information.It also have the feature of changing into dark mode and light mode.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: githubDetector,
    source_code_link: "https://github.com/Riyatyagi284/riya-Github-Profile-Detector",
    netlify_link:"https://riya-github-profile-detector-ktmd.vercel.app/",
  },
  {
    name: "Password Generator",
    description:
      "Password Generator is website which generates a random password. we can also copy the password on our clipboard and paste wherever we want. It generates the password based on the selection given by the user. It also tells the strength of the password generated.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: passwordGenerator,
    source_code_link: "https://github.com/Riyatyagi284/Password-Generator-js-project",
    netlify_link:"https://riya-password-generator-project.netlify.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Front-end design using React/Redux.It is website haave two fully functional page[cart page and wishlist Page] multiple items on its Home page and we can add them into the our cart.In cart we can see our selected items and also total items with total amount.and also by clicking on heart button we can add our product to wishlist page and from wishlist paage user can easily add that product to cart. It is fully responsive and Designing is done using Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingCart,
    source_code_link: "https://github.com/Riyatyagi284/shopping-cart-redux-project",
    netlify_link:"https://riya-shopping-cart.netlify.app/",
  },
  {
    name: "React(Blog Website)",
    description:
      "I made this website using Context API ,useEffect and  useState Hook. Here,in this  there are six pages and all six pages data updated dynamically .Whole data i used in this is using API's. In this website I also added a pagination functionality for improved user experience. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/Riyatyagi284/react-blog1",
    netlify_link:"https://riya-blog1-website.netlify.app/"
  },
];

export { services, technologies,projects };
