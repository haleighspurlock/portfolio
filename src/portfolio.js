/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Haleigh Twohy",
  title: "Hi all, I'm Haleigh!",
  subTitle: emoji(
    "The Peachy Programmer 🍑  Taking the world of development by storm 🚀  Experience in building both Web and Mobile applications with ✨ Javascript, Reactjs, Nodejs✨ && more!"
  ),
  resumeLink:
  "https://docs.google.com/document/d/1wy2RJ95maT6Uqty5YPPKrWXedTkU4MogACJEMBmimWk/edit?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/haleighspurlock",
  linkedin: "https://www.linkedin.com/in/haleighspurlock/",
  gmail: "haleighspurlock@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I know?",
  skills: [
    emoji("⚡ Front End/UI for mobile and web"),
    emoji(
      "⚡ Very Comfortable with Back End, writing server scripts, APIs and business logic"
    ),
    emoji(
      "⚡ An incredible team player, friendly and ready to run the world of dev"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github-alt",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Carolina, Charlotte",
      logo: require("./assets/images/uncclogo.png"),
      subHeader: "Coding Certificate - Full Stack Web Development",
      duration: "February 2021 - April 2021",
      desc:
        "12-week intensive program focused on gaining technical programming skills in:",
      descBullets: [
        "HTML5, CSS3, Javascript, JQuery, Bootstrap",
        "Node JS, MySQL, MongoDB, Express, and ReactJS",
      ],
    },
    {
      schoolName: "Graceland University",
      logo: require("./assets/images/gracelandlogo.png"),
      subHeader: "Bachelor of Arts in Psychology",
      duration: "September 2011 - April 2014",
      desc: "Graduated with a 3.2 GPA. Minored in Sociology.",
      descBullets: ["Graceland Gadets Dance Team"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "50%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "EDRAY Collaborative Port Logistics",
      companylogo: require("./assets/images/edraylogo.png"),
      date: "April 2023 - Present",
      desc:
        "Development on a new generation of the logistics product utilized by EDRAY and customers. Utilized React and Typescript to help create the application, participated in Agile planning, met with business to understand needs and translate them into technical requirements, collaborated  in part with both project architect and CTO to collaborate on platform and application design, served as a mentor to guide backend juniors in frontend and git practices.",
    },
    {
      role: "Software Developer",
      company: "Charter Communications",
      companylogo: require("./assets/images/charterlogo.png"),
      date: "July 2021 - October 2022",
      desc:
        "Junior API/UI developer on the Lighthouse team, which provides an outage management system for cable and internet. My role involves building new enhancement modules and dashboards as well as bug fixes. Also assisting with moving from Angular to React and migrating the APIs from PHP to Node. Tech Stack includes Angular, Node.js, React, GraphQL and JavaScript",
    },
    {
      role: "Registered Behavior Technician",
      company: "Positive Behavior Supports",
      companylogo: require("./assets/images/pbslogo.jpeg"),
      date: "February 2020 - Jan 2021",
      desc:
        "Responsible for assisting behavior analysts to implement behavior reduction and skill acquisition treatment plans.",
      descBullets: ["Requires patience, creativity, and problem solving"],
    },
    {
      role: "Director",
      company: "The Little Gym",
      companylogo: require("./assets/images/tlg.png"),
      date: "October 2018 - March 2020",
      desc:
        "I manage some serious fun! Our program is the springboard to life's adventures, using movement based learning and imaginative play to build confidence and skills in kiddos ages 4 months to 12 years! We believe in three dimensional learning so we can provide a safe space for children to explore physical development while growing socially, emotionally, and intellectually.",
    },
    // {
    //   role: "Certified Pharmacy Technician & Financial Counselor",
    //   company: "Nebraska Medicine",
    //   companylogo: require("./assets/images/neblogo.png"),
    //   date: "April 2017 - August 2018",
    //   desc:
    //     "Dispensing of medications for patients, Receiving and verifying the prescriptions, Pricing and filling of prescriptions, Obtaining pharmacist’s approval, Completing patient paperwork related to the filling of prescription, Answering phones and assisting with insurance claims processing, Ensuring availability of drugs by delivering them to patients via our program Meds to Beds",
    // },
    // {
    //   role: "Lead Residential Counselor",
    //   company: "House of Mercy - Mercy Medical Center",
    //   companylogo: require("./assets/images/mercylogo.jpeg"),
    //   date: "June 2014 - November 2016",
    //   desc:
    //     "Serves as a teacher, coach, mentor, and role model to adult resident's and their children. Supports clients through their education and treatment areas such as chemical dependency, daily living skills, parenting, self-sufficiency, behavioral and mental heath. Building and maintaining rapport and a therapeutic relationship with clients and their children. Utilizing a compassionate, empathetic manner to ensure clients feel welcome and appreciated.",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Group and Individual projects I've contributed to!",
  projects: [
    {
      image: require("./assets/images/QuirkyQuiz.png"),
      projectName: "Quirky Quiz",
      projectDesc:
        "Quirky Quiz is a collection of quizzes made by our user community, for our user community.",
      footerLink: [
        {
          name: "Deployed Application",
          url: "https://quirkyquiz.herokuapp.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/homepage.png"),
      projectName: "React Employee Directory",
      projectDesc:
        "React application that fetches random user information from an API to create employees.",
      footerLink: [
        {
          name: "Deployed Application",
          url: "https://haleighspurlock.github.io/react-employee-directory/",
        },
      ],
    },
    {
      image: require("./assets/images/fitness-dashboard.png"),
      projectName: "Workout Tracker",
      projectDesc:
        "An application that allows a use to create a new workout or continue their last workout, as well as track their fitness goals and progress.",
      footerLink: [
        {
          name: "Deployed Application",
          url: "https://hspurlock-fitness-tracker.herokuapp.com/stats",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/Doggle.png"),
      projectName: "Doggle",
      projectDesc:
        "Enjoy a way to look at your favorite dog breed while also searching for rescues in your area!",
      footerLink: [
        {
          name: "Deployed Application",
          url: "https://accoon.github.io/Dog-Breed-Finder-and-Rescue/",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Job Opportunity? Project Idea? Want to say hi? Feel free to reach out!",
  email_address: "haleighspurlock@gmail.com",
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
  contactInfo,
};
