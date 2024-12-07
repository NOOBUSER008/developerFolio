/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

// const splashScreen = {
//   enabled: true, // set false to disable splash screen
//   animation: splashAnimation,
//   duration: 2000 // Set animation duration as per your animation
// };
// Splash Screen

const splashScreen = {
  enabled: true, // Keep true to enable splash screen
  animation: null, // Set this to null since you're not using Lottie anymore
  duration: 2000 // Duration in milliseconds (adjust to your preference)
};


// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Phani Mathang!",
  title: "Hi, I'm Phani ",
  subTitle: emoji(
    "An experienced Senior DevOps Engineer with 4+ years of expertise in building secure, scalable infrastructures on AWS. Skilled in designing CI/CD pipelines, automating deployments, containerization with Kubernetes and Docker, and ensuring compliance with industry standards like GDPR and ISO27001."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Add your resume link here
  displayGreeting: true, // Set to false to hide this section
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/phani-mathangi-9b6829235/",
  gmail: "phanimathangi98@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate DevOps Engineer 🚀 with expertise in crafting scalable, secure, and optimized infrastructures on AWS",
  skills: [
    "⚡ Designing and implementing scalable, cost-effective architectures for SaaS platforms.",
    "⚡ Building robust CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD.",
    "⚡ Leveraging containerization and orchestration tools like Docker, Kubernetes, ECS, and EKS.",
    "⚡ Enabling real-time monitoring and alerting with Grafana, Prometheus, and PagerDuty.",
    "⚡ Ensuring security and compliance with GDPR, HIPAA, PCI-DSS, and ISO 27001 standards.",
    "⚡ Implementing Infrastructure as Code (IaC) using Terraform and AWS CloudFormation.",
    "⚡ Enhancing cloud security with tools like AWS Security Hub, Azure Defender, and Prowler.",
  ],
  categories: [
    {
      categoryName: "CI/CD Tools",
      tools: [
        { name: "Jenkins", logo: require("./assets/images/icons8-jenkins-48.png")},
        { name: "GitHub Actions", logo: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" },
      ],
    },
    {
      categoryName: "Programming",
      tools: [
        { name: "Python", logo:  "https://img.icons8.com/?size=48&id=Rc0Xn5AtE8kX&format=gif"},
        { name: "Java", logo: "https://img.icons8.com/?size=48&id=GPfHz0SM85FX&format=gif" },
      ],
    },
    {
      categoryName: "Cloud",
      tools: [
        { name: "AWS", logo: "https://img.icons8.com/nolan/64/amazon-web-services.png" },
        { name: "Azure", logo: "https://img.icons8.com/color/48/azure-1.png" },
        { name: "Google Cloud", logo: "https://img.icons8.com/color/48/google-cloud.png" },
      ],
    },
    {
      categoryName: "AWS Services",
      tools: [
        { name: "EC2", logo:"https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" },
        { name: "ELB", logo: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Elastic-Load-Balancing.svg" },
        { name: "CloudFront", logo: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg" },
        { name: "Lambda", logo: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" },
        { name: "Fargate", logo: "https://icon.icepanel.io/AWS/svg/Containers/Fargate.svg" },
        { name: "Route53", logo: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg" },
        { name: "S3", logo: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" },
        { name: "RDS", logo: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg" },
        { name: "SQS", logo: "https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Queue-Service.svg" },
        { name: "LightSail", logo: "https://icon.icepanel.io/AWS/svg/Compute/Lightsail.svg" }
        
      ],
    },
    {
      categoryName: "Micro-services",
      tools: [
        { name: "Docker", logo: "https://img.icons8.com/nolan/64/docker.png" },
        { name: "Kubernetes", logo: "https://img.icons8.com/color/48/kubernetes.png" },
        { name: "ECS", logo: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Container-Service.svg" },
        { name: "EKS", logo: "https://icon.icepanel.io/AWS/svg/Containers/Elastic-Kubernetes-Service.svg" },
      ],
    },
    {
      categoryName: "IaaC",
      tools: [
        { name: "Terraform", logo: "https://img.icons8.com/color/48/terraform.png" },
        { name: "CloudFormation", logo: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudFormation.svg" },
      ],
    },

    {
      categoryName: "Monitoring",
      tools: [
        { name: "CloudWatch", logo: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg" },
        { name: "CloudTrail", logo: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudTrail.svg" },
        { name: "Grafana", logo: "https://img.icons8.com/fluency/48/grafana.png" },
        { name: "Prometheus", logo: "https://img.icons8.com/color/48/prometheus-app.png" },
        { name: "PagerDuty", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEUGrDj///8gtEvL69QApyXt+/Ln9eoAph6/58rl9+sArTSl3rUGrjwAqjEApRgAqS605cIYsEP3/fknskvH7NK76Mjy+/VcxXl+z5Ke26/e8eLP69WO16JuzYpMxHC/6s1oyIFIumJ1yoo3uVpBt1ug37Ov5L+G0Ji2376f2KpFv2cpuFTZ8uFSv2xGuF550JPK7Ym/AAADnUlEQVR4nO3dcXOaMBzGcQKxopJGRUWQtbZYtbWu7//dDbq2u1tiVRLrL7nn8/d2x/cSEkC4BgEAAAAAAAAAAAAAAAAAAAAAAAAAAAB4r38SKSXvdjnnUoprH/F5wu3NyYpFPCh/3YW861BnGLHzde7L5UMqnGhsFdgYT8oslNc+/ONaB9ZuojLg1w44xiSwHsaiTLq0h9EssFEsQ8ono3kgY5PltSu+YSOQdbbda3ccZCWQsUGf6jS1FMiKPdFCW4GseKS5Y1gLZDOahfYCWWdJcUe0GMiKF4Lnoc1AtqjoFWoCoyiavLuvTRvDxnSyeO0cKYzp7YdqYCdJP4SN0Zc0rVb75Xzd+6ZwQ26h0QTeHv7XQoj6zj7Me+MDgTNyp6Em8Og0Ezx5jGf6wmdqK2mbwJqsE7WB5NaZloH1MI5ybeHGl8B6FB91i2qUXvR4z2YQGPClbq3JaA2hSWAQlJrAJ1o7hVmgXKuB42+2mSswCxSVZtentRWaBQZiowYOSM1R08CHVyWw8GkEA6Hu950dpULTQLlRtooZqY3CeATvlIvS8ZzS9ahpYBDeKHP0mdIqYxzI1cCtX4FTJTD26RwMuHpTEScXOtg2jAOlej06QeAPukSgX1NUdw5e6FhbMQ9Ur9Virzb6bqEE+rUPJporGZ9GULwoT578uhb1/m5CbpUZ6tX9oFipd/Q9SjMUz2SOSNUBZHeUZqhhIJ+rfYzUAJoFikrTN/QnUOx0P/YSe9fCIFDshpq+HrEfCNsHyp1mganX0Mse79naBook0/6ITe6dtXaBsr8f6PLqAaR1BrYLlP0sPvAuCa3r0MZZgX/fIulvigOvWDA2pTaAukCe6I3S6nf29qRdWk4e/R+nBo7zgdZ6Onk99P7P538ltgc2rL6Ml1N6nPbBZmBE8fsCi4FDTrDPYuCE1kX2J2uBQ4rzM7AXmI9o9tkKzOhtgB+sBC7eaJ5/DQuBs3JHb3//Yh64XgVET793hh9IzuIdyd3vH5PAYltWxPPaB86i9eYhcOBj83Bxdlvv/ultv0oTB+pqozw+bjocrgd5Of+VVaG87XIu3fiG/p3kp5LSpS4AAAAAALg0fvsfsg8A21FveAn+xmdCfWTRQ6BTEOg6BLoOga5DoOsQ6DoEug6BrkOg6xDoOgS6DoGuQ6DrEOg6BLrO/0DlD0tFdD8RaEV5X5TwJwIAAAAAAAAAAAAAAAAAAAAAAAAAAABAxx96Uj+dS88kWwAAAABJRU5ErkJggg==" },
      ],
    },
    {
      categoryName: "Security",
      tools: [
        { name: "AWS Security Hub", logo: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Security-Hub.svg" },
        { name: "Azure Defender", logo: "https://e7.pngegg.com/pngimages/544/622/png-clipart-microsoft-azure-computer-security-cloud-computing-microsoft-security-essentials-cloud-computing-logo-cloud-computing-thumbnail.png" },
        { name: "MS Sentinel", logo: "https://seeklogo.com/images/M/microsoft-sentinel-azure-logo-28FA1B44A7-seeklogo.com.png" },
        { name: "Prowler", logo: "data:image/png;base64,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" },
        { name: "Wazuh", logo: "https://archive.org/download/github.com-wazuh-wazuh_-_2021-11-27_17-56-33/cover.jpg" },
      ],
    },
    {
      categoryName: "Compliance",
      tools: [
        { name: "GDPR", logo: "https://img.icons8.com/color/48/gdpr.png" },
        { name: "ISO 27001", logo: "https://www.apica.io/wp-content/uploads/2023/08/iso-27001-certified-logo-transparent-1-300x296.png" },
        { name: "PCI DSS", logo: "https://www.guestpoint.com/wp-content/uploads/2023/04/PCI-Certified-Icon-1-768x768.png" },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velagapudi Ramakrishna Siddhartha Engineering College",
      logo: require("./assets/images/images.png"),
      subHeader: "Bachelor of Technology (B.Tech)",
      duration: "July 2016 - September 2020",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "MicroServices(ECS & EKS)",
      progressPercentage: "70%"
    },
    {
      Stack: "CICD",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
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
      role: "Senior DevOps Engineer",
      company: "Caretcloud Technology Private Limited",
      companylogo: require("./assets/images/download.png"),
      date: "Sep 2023 - Present",
      desc: "As a Senior DevOps Engineer, I have been instrumental in designing and managing scalable, secure, and cost-effective AWS-based infrastructures for multiple AI platforms. My work focuses on enhancing operational efficiency and ensuring robust system monitoring and automation.",
      descBullets: [
        "Architected and designed AWS infrastructure for redOrange.ai and lisha.ai, focusing on security and scalability.",
        "Developed CI/CD pipelines with GitHub Actions for seamless deployment.",
        "Managed ECS services with internal and external ALBs for isolation.",
        // "Implemented monitoring and alerting with CloudWatch, AWS Grafana, and PagerDuty.",
      ],      
    },
    {
      role: "DevOps Engineer",
      company: "Wipro",
      companylogo: require("./assets/images/download3.png"),
      date: "April 2022 - Feb 2023",
      desc: "As a DevOps Engineer at Wipro, I played a pivotal role in automating build and deployment processes, streamlining CI/CD pipelines, and managing deployments across various environments. My focus was on enhancing deployment efficiency and ensuring code quality through automation tools.",
      descBullets: [
      "Performed deployments across IST, UAT, and PPD environments.",
      "Automated builds and deployments using Jenkins and Maven.",
      "Configured CI/CD pipelines and automated code checks with SonarQube.",
      // "Deployed applications using Ansible playbooks for efficient configuration management.",
    ],
  },
    {
      role: "Build and Release Engineer",
      company: "Tech Well IT Solutions",
      companylogo: require("./assets/images/images4.png"),
      date: "Jan 2020 - March 2022",
      desc: "As a Build and Release Engineer at Tech Well IT Solutions, I streamlined build and release processes by developing robust CI/CD pipelines and automating manual tasks. I ensured seamless deployments of cloud platforms on AWS, collaborating with cross-functional teams to enhance operational efficiency and reliability.",
      descBullets: [
        "Developed CI/CD pipelines with Jenkins for efficient builds and releases.",
        // "Automated manual tasks with Bash and Groovy scripts.",
        "Deployed content cloud platforms on AWS using EC2, S3, and CloudFormation.",
        "Collaborated closely with development and operations teams to ensure smooth deployments.",
      ],
    },
  ],
};
    

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Major Product based Projects that I have been worked",
  projects: [
    {
      image: require("./assets/images/redorange-logo.jpg"),
      projectName: "redOrange.ai",
      projectDesc: "RedOrange.ai is an AI-powered platform that helps businesses manage data protection compliance by automating the process of gathering and securing data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://redorange.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/lisha-logo.jpg"),
      projectName: "lisha.ai",
      projectDesc: "Lisha.ai is an AI-powered compliance assistant designed to help Data Protection Officers (DPOs) and IT Auditors efficiently manage cyber compliance. It offers expert guidance across various frameworks, including ISO 27001, GDPR, NIS 2, and DORA, acting as a comprehensive compliance co-pilot",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lisha.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/Logo.png"),
      projectName: "CreateMyContract",
      projectDesc: "Create My Contract is an online platform that enables users to generate customized, legally compliant contracts tailored to specific business needs. Unlike generic templates or AI-generated documents, it offers bespoke contracts crafted by experienced lawyers, ensuring precision and professionalism",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://createmycontract.com/"
        }
        //  you can add extra buttons here.
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.",
      image: require("./assets/images/image (8).png"),
      imageAlt: "AWS-logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "AWS Certified Developer - Associate showcases skills and knowledge in developing, optimizing, packaging, and deploying applications, using CI/CD workflows, and identifying and resolving application issues",
      image: require("./assets/images/image(9).png"),
      imageAlt: "AWS-DVA-Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+917989009317",
  email_address: "phanimathangi98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
