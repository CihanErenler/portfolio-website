export const skills = [
  { id: 1, desc: "HTML", icon: "fab icon fa-html5 html" },
  { id: 2, desc: "CSS", icon: "fab icon fa-css3-alt css" },
  { id: 3, desc: "Javascript", icon: "fab icon fa-js-square js" },
  { id: 4, desc: "React.js", icon: "fab icon fa-react react" },
  { id: 5, desc: "Vue.js", icon: "fab icon fa-vuejs vue" },
  { id: 6, desc: "Node.js", icon: "fab icon fa-node-js node" },
];

export const projects = [
  {
    id: 1,
    title: "Movie Search App",
    desc: "An app that allows users to display trending movies & tv shows, the films are being shown at the theater at the moment, indicating specific movie details and searching movies by query",
    img: "src/assets/img/projects/project-4.jpg",
    github: "https://github.com/CihanErenler/react-movie-app",
    preview: "https://cihan-react-movieapp.netlify.app/",
    react: true,
    languages: [
      { lang: "js", class: "js-group", per: 65.1 },
      { lang: "html", class: "html-group", per: 4.3 },
      { lang: "css", class: "css-group", per: 30.6 },
    ],
  },
  {
    id: 2,
    title: "Color Generator",
    desc: "This react tool allows you to generate tints and shades from the color you pick. It also allows you to copy any color that is generated.",
    img: "src/assets/img/projects/project-2.jpg",
    github: "https://github.com/CihanErenler/react-color-generator",
    preview: "https://c-react-color-generator.netlify.app/",
    react: true,
    languages: [
      { lang: "js", class: "js-group", per: 52.6 },
      { lang: "html", class: "html-group", per: 10.5 },
      { lang: "css", class: "css-group", per: 36.9 },
    ],
  },
  {
    id: 3,
    title: "Stripe Landing Page Clone",
    desc: "This is a react project in which I have built Stripe's landing page from scratch. The main intention was to replicate the same transition effect while hovering over the navigation links.",
    img: "src/assets/img/projects/project-1.jpg",
    github: "https://github.com/CihanErenler/react-stripe-clone",
    preview: "https://react-stripe-clone.netlify.app/",
    react: true,
    languages: [
      { lang: "js", class: "js-group", per: 57.3 },
      { lang: "html", class: "html-group", per: 9.3 },
      { lang: "css", class: "css-group", per: 33.4 },
    ],
  },
  {
    id: 4,
    title: "Weather App",
    desc: "An app which you can search cities for the real time weather conditions. You can get the informations such as temperture, humidity and pressure.",
    img: "src/assets/img/projects/project-3.jpg",
    github: "https://github.com/CihanErenler/weatherApp",
    preview: "https://cihanweatherapp.netlify.app/",
    react: false,
    languages: [
      { lang: "js", class: "js-group", per: 55.4 },
      { lang: "html", class: "html-group", per: 16.8 },
      { lang: "css", class: "css-group", per: 27.8 },
    ],
  },
];
