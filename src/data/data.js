import emoji from "react-easy-emoji";

// Summary and Greeting Section 


const greeting = {
    username: "Ghazal  Aroosa",
    title: emoji(`I'm Ghazal  Aroosa.`),
    profession: "I am a Web and Mobile Application Developer by Profession and hobby.",
    subTitle: emoji("🚀 having an experience of building applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks. I love to architect, code solutions and solving coding challenges."),
}

const socialMediaLink = {
    facebook: "https://web.facebook.com/ghazal.aroosa.1",
    github: "https://github.com/ghazal-aroosa/",
    linkedin: "https://www.linkedin.com/in/ghazal-aroosa-543a311ab/",
    gmail: "ghazal.aroosa@gmail.com",
}

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
      emoji("⚡ Deploy your application in cloud platform such as Amazon and Google Cloud."),
      emoji("⚡ Design User Interfaces.")
    ],
    softwareSkills: [
      "HTML / CSS / Bootstrap / Javascript",
      "ReactJS /React Native",
      "TypeScript",
      "Wordpress",
      "Node JS",
      "MongoDB",
      "JSON",
      "Docker",
      "Kubernetes",
      "Git VCS",
       "Linux",
       "Rust",
       "Web Assembly",
       "MicroServices"

    ]
}

const certificates = {
 // mern: {title: "MERN Stack Development", image: "./images/MERNStack.JPG"},
  //excel: {title: "Excel MOS Certification", image: "./images/excelcertificate.JPG"},
  //word: {title: "Word MOS Certification", image: "./images/wordcertificate.JPG"},
  //graphic: {title: "Graphic Designing Certificate", image: "./images/graphicCertificate.JPG"},
}

const achievementSection = {
 // title: "Achievements And Certifications 🏆"
}

const projects = {
  incomeExpense: {title: "Income Expense App", image: "./images/incomeexpence.jpg", live: "http://ghazal-expense.surge.sh/", githublink: "https://github.com/ghazal-aroosa/project1-expense-track"},
  covid19: {title: "Covid 19 Tracker App", image: "./images/covid19.jpg", live: "https://ghazal-corona.surge.sh", githublink: "https://github.com/ghazal-aroosa/covid19-tracker-project2"},
  ecommerce: {title: "Shoes Store", image: "./images/shoestore.jpg", live: "http://shoes-store-project3.surge.sh/", githublink: "https://github.com/ghazal-aroosa/shoes-store-project3"},
  WebAnimationqueen: {title: "Web Animation Queen", image: "./images/web-animation-queen.jpg", live: "http://web-animation-queeen.surge.sh/", githublink: "https://github.com/ghazal-aroosa/web-animation-queen-4aProject"},
}

const contact = {
  heading: "Contact",
  subheading: "Get in touch with me",
  call: "0092-3440687095",
  location: "Gujrat, Pakistan",
  mail: "ghazal.aroosa@gmail.com",
  image: "./images/mypic1.png"
}
const footer = {
  madewith: emoji(`Made with ❤️ by ${greeting.username}`)

}
export {greeting, socialMediaLink, skillsSection, certificates, achievementSection, projects, contact, footer}