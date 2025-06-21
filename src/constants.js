// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.webp';
import canvaLogo from './assets/tech_logo/canva.png';
import Ui from './assets/gallery/watch.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/sparsh.jpg';
import vpsLogo from './assets/education_logo/svm.jpg';
import nodalLogo from './assets/education_logo/nodal.jpg';
import roshLogo from './assets/education_logo/rosh.jpeg';
import gvLogo from './assets/education_logo/graduvation.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

// constants.js
// src/constants.js
// src/constants.js

// src/constants.js
// src/constants.js
// src/constants.js
// src/constants/index.js
export const ADD_GALLERY_IMAGES = [
  {
    src: "public/assets/vps_logo.png",
    alt: "Gallery Image 1"
  },
  {
    src: "/assets/gallery2.jpg",
    alt: "Gallery Image 2"
  },
  {
    src: "/assets/gallery3.jpg",
    alt: "Gallery Image 3"
  }
  // ... add more images here
];


const AddGalleryPage = [
  { src: '/assets/image1.jpg', alt: 'Image 1' },
  { src: '/assets/image2.jpg', alt: 'Image 2' },
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/src/assets/profile2.png",
    alt: "Gallery Image 1",
  },
 

];

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Photoshop', logo: firebaseLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Capcut', logo: csharpLogo },
    ],
  },
];


export const experiences = [
 
];

export const education = [
  {
    id: 0,
    img: gvLogo,
    school: "Graduvation",
    date: "date",
    grade: "0.00 CGPA",
    desc: "Currently learning Full-Stack Web Development using tools like HTML, CSS, JavaScript, React (Front-end) and Node.js, MongoDB (Back-end). Building projects to develop practical skills.",
    degree: "Full Stack Web Development",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "TailwindCSS","NodeJS"]
  },
  {
    id: 1,
    img: roshLogo,
    school: "School of Passion",
    date: "date",
    desc: "I create creative Graphic Designs and professional posters and video edits that give your brand a unique identity.",
    degree: "Graphic Design with Marketing",
    skills: ["Photoshop", "Illustrator", "CapCut", "Canva", "Figma"]
  },
  {
    id: 2,
    img: bsaLogo,
    school: "Sparsh College, Brahmapur",
    date: "date",
    grade: "Maintaining 7.8 CGPA",
    desc: "I am currently pursuing BCA and I'm a second-year student with a strong interest in web development. I've built responsive websites using HTML, CSS, JavaScript and Tailwind CSS.",
    degree: "BCA - Bachelor of Computer Applications"
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Saraswati Vidya Mandir",
    date: "Apr 2021 - Mar 2023",
    grade: "54.4%",
    desc: "I completed my Class 12 education under the CBSE board, where I studied Economics and Education.",
    degree: "CBSE (XII) - Arts with Economics and Education"
  },
  {
    id: 4,
    img: nodalLogo,
    school: "Malusanta Govt. Nodal High School, Damanjodi",
    date: "Date - 2021",
    grade: "65.8%",
    desc: "I completed my Class 10 education under the CBSE board, where I studied Science with Computer Application.",
    degree: "CBSE (X) - Science with Computer Application"
  }
];

export const projects = [
  {
    id: 0,
    image:Ui,
    title: "Responsive-watches-website",
    description: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
    tags: ["HTML", "CSS", "JavaScript",],
    github: "https://github.com/narayanbadatya/Responsive-watches-website",
    webapp: "https://watches-web-iota.vercel.app/",
  },
  {
    id: 1,
    title: "Moblie-App",
    description: "Transforming Ideas into Innovative Mobile Apps",
    tags: [ "HTML", "CSS", "JavaScript"],
    github: "https://github.com/narayanbadatya/Moblie-App?tab=readme-ov-file",
    webapp: "moblie-app-eight.vercel.app",
  },
  {
    id: 2,
    title: "SolarSystem",
    description: "The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy.",
    tags: [ "HTML", "CSS", "JavaScript","Figma", "Canva",],
    github: "https://github.com/narayanbadatya/SolarSystem",
    webapp: "https://solar-system-by-narayan.vercel.app/",
  },
  {
    id: 3,
    title: "restaurant website",
    description: "For the love of delicious foodCome with family  feel the joy of mouthwatering food",
    tags: ["HTML", "CSS", "JavaScript","Figma"],
    github: "https://github.com/narayanbadatya/restaurant-website",
    webapp: "res-web-by.vercel.app",
  },
  {
    id: 4,
    
    title: "Responsive pet food website",
    description: "Beautiful UI. Modern Design. Fully Responsive.Built for all screens with style and performance in mind.",
    ImageBitmap: gvLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/narayanbadatya/Pawchews",
    webapp: "pawchews.vercel.app",
  },
  {
    id: 5,
    title: "slider by js ",
    description: "A fully responsive and functional vanilla js slider,Responsive for all devices, build using HTML, CSS, and vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/narayanbadatya/slider_by_js",
    webapp: "js-sliderr.vercel.app",
  },
  
];
