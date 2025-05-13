/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashfaq | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ashfaq',
  subtitle: 'FullStack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Software Engineer with 4+ years of experience, including as a founding engineer at an early-stage startup, specializing in building Micro SaaS products. Skilled in leading feature development with expertise in the MERN stack.",
  paragraphTwo: "I'm deeply passionate about coding and committed to honing my skills as a fullstack developer. I began my coding journey by learning React during the pandemic and haven't looked back since. During my college days, I earned NPTEL certifications and developed a Reddit bot.",
  paragraphThree: "Beyond coding, I have a keen interest in Anime, Psychology, and Product Design. I hold NPTEL certifications and completed a Reddit bot project during my college days.",
  resume: 'https://rxresu.me/ashfaqhaq94/ashfaq',


};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Podcast Keep',
    info:
      'Your notebook for podcasts, podcast keep provides you with an interactive interface to take down notes while listening to your favorite podcast.',
    info2: ' The tech stack was React+Redux, Tailwindcss,and Firebase for the backend.',
    url: 'https://dev9823.d20d8jqjompjzi.amplifyapp.com',
    repo: 'https://github.com/ashfaqhaq/podcast-notes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Reddit bot',
    info:
      'Designed, developed, and deployed an automated system integrating Youtube API and Reddit API (PRAW) to process and    generate content and extend functionality for a major online    social networking platform that was hosted on heroku.',
    info2: '',
    url: 'https://www.reddit.com/user/PewdStatus',
    repo: 'https://github.com/waleedj99/Redditbot/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1630493773975/hqqREwJjI.png?auto=compress,format&format=webp',
    title: 'Curate-Roadmaps',
    info:
      'Built an open-source application for structured learning and resource sharing using React, Auth0, Nestjs, and MongoDB. Designed to provide a seamless user experience.',
    info2: 'The landing page includes an informative animation, with a simple and intuitive interface for users. Upon joining, users can explore resources.',
    url: 'https://curate-roadmaps.netlify.app',
    repo: 'https://github.com/ashfaqhaq/curate-frontend',
  },


  {
    id: nanoid(),
    img: 'project5.png',
    title: 'Lifo-Afterflow',
    info:
      'A social media to share your wins after tackling it for hours . The title is word play on the popular ',
    info2: 'The tech stack was MERN Stack with Apollo Graphql and semantic UI for layout.',
    url: 'https://lifo-afterflow.netlify.app',
    repo: 'https://github.com/ashfaqhaq/lifo-afterflow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Ye Dekho',
    info:
      'A personalised iMDB page where you can list all of your watched titles. You can also share the link with your friends!.',
    info2: 'The tech stack was React, Semantic UI,and Firebase for the backend',
    url: 'https://ye-dekho.netlify.app',
    repo: 'https://github.com/ashfaqhaq/ye-dekho', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Bitcoin Rate',
    info:
      'Real-time bitcoin price Web Application with the  exibility in 160+  currencies and a graph visualization with chartjs for the recent  price history.',
    info2: '',
    url: 'https://bitcoinrate.netlify.app',
    repo: 'https://github.com/ashfaqhaq/bitcoinProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Bookquest',
    info:
      'A responsive web application designed to aid searching of books by their title consuming Goodreads API',
    info2: '',
    url: 'https://bookquest.netlify.app',
    repo: 'https://github.com/ashfaqhaq/BookQuest', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ashfaqhaq94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ashfaq_ulhaq',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashfaqhaq',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/ashfaqhaq',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
