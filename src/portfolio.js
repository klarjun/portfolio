/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Kempanahalli_L_Arjun",
  title: "Hi all, I'm Arjun",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FIyNsMuKhtVb3ZPguOA4c9PBs1iW_F3O/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/klarjun",
  gmail: "klarjun07@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE AND PROVIDE SOFTWARE SOLUTIONS TO VARIOUS PROBLEMS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Alabama in Huntsville",
      logo: require("./assets/images/uah.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2018 - May 2021"
    },
    {
      schoolName: "Visveshvaraya Technological University",
      logo: require("./assets/images/vtu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "The University of Alabama in Huntsville",
      companylogo: require("./assets/images/uah.png"),
      date: "August 2020 – May 2021",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Assisting professors by conducting teaching or teaching-related activity such as lab sessions, grading assignments and tests, proctoring tests, and monitoring about 120 undergraduate students for various courses.",
        "The courses include Introduction to Java (CS 103), Data Structures (CS 221), Design and Analysis of Algorithms (CS317)",
        "Worked on the course website and improved UI/UX experience from the ground up, students could navigate entire course contents from the homepage and 96% had a positive feedback"
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "The University of Alabama in Huntsville",
      companylogo: require("./assets/images/uah.png"),
      date: "December 2020 – August 2021",
      descBullets: [
        "Developed web dashboard UI for TCCC caseworkers to make monitoring of people on parole(from their phones) easier by 70% and was far more intuitive than their previous tool",
        "Communicated and discussed with the higher level non-technical team, got the specific requirements and built a web dashboard comprising of Data Visualization, progress report widget, analytics of GPS data, an assessment tool.",
        "Used D3.js, Sigma.js, Chart.js, JavaScript library React to combine the Front-end interface"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      companylogo: require("./assets/images/freelance.png"),
      date: "July 2015 – August 2018",
      descBullets: [
        "Built user interface, data visualizations and designed overall UX and UI for various small and medium-size businesses.",
        "Constructed an e-commerce web application for a local Restaurant Ruchi that lets customers virtually design their own recipe and order directly; led to an increase in sales by 80%.",
        "Collaborated with the customers & visited their locations to understand their vision & gather specifications to build the company's website. Bolstered overall user experience by 60% and achieved 98% customer satisfaction.",
        "Investigating the traffic and enhancing the page ranking of customer websites by improving website structure, performing SEO, and SEM for local improvements. Increased email list by avg of 10% each month since database restructuring"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  //subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "A Destination Tour App",
      projectDesc:
        "A MERN Full Stack Backend focused application using Node.js based Express.js framework, Mongo DB (NoSQL) based Mongoose library for the Database system and React library for Front-End. The users are authenticated using JWT and can select and book across various packages for the tour and checkout by making payments through a secured and popular Stripe API, express their experience through a review by uploading images using the Multer package. A complete email handler using Pug email templates and SendGrid email API for queries and contacts.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Video Game Info Website",
      projectDesc:
        "A Responsive, React, and Redux library-based website fletch data using Axios from RAWG Video Games API. Automatically display and update details of the popular and upcoming games, and the platforms it’s been supported on.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Word-Search Game API",
      projectDesc:
        "A Java, and JavaScript based full stack application using Spring Boot for the back end and HTML, CSS for UI. Users input the words which would be placed in a rectangular grid and then they find and mark all the words hidden inside the box",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Resume Portal Building App",
      projectDesc:
        "A Spring Boot based resume portal where users can build their resume by inputting data in various form templates. Spring Security is for user authentication, user profiles are JPA based and is used to connect and communicate with MySQL database.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificates 🏆 "),
  //subtitle:"",

  achievementsCards: [
    {
      title: "JavaScript Algorithms and Data Structures Masterclass",
      image: require("./assets/images/dataStructure.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-ee76fa55-5653-400f-bb15-d8f8f780d659/"
        }
      ]
    },
    {
      title: "The Modern React Bootcamp (Hooks, Context, NextJS, Router)",
      image: require("./assets/images/React.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-dca15564-37a3-4e7a-bbc3-3f999999050a/"
        }
      ]
    },

    {
      title: "The Modern Javascript Bootcamp Course (2021)",
      image: require("./assets/images/JavaScript.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-05aa19b9-64a3-4e15-a1c7-97c6ccef33d8/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 256-3468-7710",
  email_address: "klarjun07@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
