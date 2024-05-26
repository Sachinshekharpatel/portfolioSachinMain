const header = {
  homepage: "https://github.com/Sachinshekharpatel/portfolioSachinMain",
  title: "Sachin Shekhar Patel.",
};

const about = {
  name: "Sachin Shekhar Patel",
  role: "Front End Developer",
  description:
    "Proficient in HTML, CSS, and JavaScript, with advanced knowledge in React and Redux, I specialize in building modern and responsive web applications. Experienced in utilizing Material UI for intuitive user interfaces and Git for version control, I ensure efficient collaboration and high-quality code. Skilled in Jest for testing, I prioritize delivering robust and reliable software solutions.",
  resume: "https://www.snapit.tech/heroft7024/sachin-shekhar-patel",
  social: {
    linkedin: "https://www.linkedin.com/in/sachin-shekhar-patel-04b47a239/",
    github: "https://www.linkedin.com/in/sachin-shekhar-patel-04b47a239/",
  },
};

const projects = [
  {
    name: "SachinTube",
    description:
      "Developed a fully functional YouTube clone using React, Bootstrap, and Redux, with authentication features allowing users to create accounts and log in. Implemented state management with Redux for seamless navigation, video playback.",
    stack: [
      "Bootstrap",
      "Javascript",
      "React",
      "Context API",
      "Firebase Authentication",
    ],
    sourceCode: "https://github.com/Sachinshekharpatel/yoututbereact2024",
    livePreview: "https://sachintube.vercel.app/loginpage",
  },
  {
    name: "Car Rental",
    description:
      "Developed a versatile web application allowing users to book cars, inquire via a chatbox, and seamlessly process payments through Razorpay. Leveraged React.js for frontend development and integrated responsive design principles for optimal user experience. Enhanced user satisfaction and engagement by providing a user-friendly platform for car booking and inquiries.",
    stack: [
      "Payment Gateway",
      "Tailwind css",
      "Javascript",
      "React",
      "Express",
      "Firebase Authentication",
    ],
    sourceCode: "https://github.com/Sachinshekharpatel/carrentalapp2024",
    livePreview: "https://sachincarrental.netlify.app",
  },
  {
    name: "SachinSteps",
    description:
      "I developed a comprehensive expense tracker app integrated with Firebase authentication, ensuring secure access for users. Each user enjoys a personalized experience with individual carts, enhancing organization and privacy. The app simplifies expense management, offering a seamless and efficient solution for tracking financial activities.",
    stack: [
      "Bootstrap",
      "Javascript",
      "React",
      "Redux",
      "Firebase Authentication",
    ],
    sourceCode:
      "https://github.com/Sachinshekharpatel/trackerappreactbootstrap",
    livePreview: "https://sachinsteps.netlify.app",
  },
  {
    name: "Mailbox",
    description:
      "Mailbox is a responsive web application developed using React and Bootstrap, offering users the ability to create accounts, log in, and send emails. It features separate pages for inbox and sent mail, with unread emails marked by a star for easy identification. Users can delete emails, with the unread count dynamically adjusting accordingly.",
    stack: ["Bootstrap", "React", "Redux", "Custom Hooks", "Authentication"],
    sourceCode: "https://github.com",
    livePreview: "https://mailbox-khaki.vercel.app",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Material UI",
  "Git",
  
];

const contact = [
  {
    Whatsapp: "6263877374",
    email: "heroft7024@gmail.com",
  },
];

export { header, about, projects, skills, contact };
