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
  paragraphOne:
    'I am final year undergraduate student, my passion for coding has been developed as I stuck around playing games when I was in school.',
  paragraphTwo:
    "Currently focussing on being a fullstack developer to convert my ideas into products. I started learning React during the pandemic and haven't turned back yet!",
  paragraphThree:
    "My other interests include watching Anime, reading about Psychology and Product Design. I am also the current Creative Lead of college's founding developer club.",
  resume: 'https://drive.google.com/file/d/1gL652blMPcocKM9vSE0TMppK8b-x6SAO/view?usp=sharing', // if no resume, the button will not show up
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
