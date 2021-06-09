import Mock from "../mock";

const database = {
  information: {
    name: 'Carlos Gustavo Tadeo Armenta Andrade',
    shortName: 'Tadeo Armenta',
    titleContent:"a FullStackDev + DevOps from Spain",
    aboutContent: "I have more than 15-year experience on SysAdmin. I work mainly with Node.js and have broad experience leading Development Teams and Software Development. Profuse knowledge in Python, Bash, and Javascript is part of my main skills. I'm a hard worker, committed, auto-disciplined, and goal-oriented guy.",
    higlightedWords: ['SysAdmin', 'DevOps','Node.js', 'MERN','MEVN'],
    reachme: 'If you are interested in working together or just want to say hello, you can reach me on...',
    age: 40,
    phone: '+34 (920) 02-7744',
    nationality: 'Spanish / Mexican',
    language: 'Spanish / English',
    email: 'contact@tadeoarmenta.com',
    address: 'Ávila del Rey, reino de España',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/tadeoarmenta/',
      dribbble: '',
      github: 'https://github.com/TadeoArmenta',
      stackoverflow: 'https://stackoverflow.com/users/2573450/tadeoarmenta?tab=profile',
      telegram: 'https://t.me/dat30',
      upwork: 'https://www.upwork.com/freelancers/~0130e45a6e324fd76a?viewMode=1',
      freelancer: 'https://www.freelancer.es/hireme/dat30'
    },
    logo: '/images/logo.png',
    brandImage: '/images/profile_2021_zoomed.jpg',
    aboutImage: '/images/about_2021.jpg',
    aboutImageLg: '/images/about_2021.jpg',
    cvfile: '/files/Resume.pdf'
  },
  services: [
    {
      title: "Android/AndroidTv Dev",
      icon: 'android',
      details: "Development of native android apps, writen in Kotlin, with the leading technologies that the platform provides."
    },
    {
      title: "FullStack Node.js Dev",
      icon: 'nodejs-alt',
      details: "MERN/MEVN Stack development, backend/frontend addition, fix or maintenance, with clear code, and stability in mind."
    },
    {
      title: "AWS DevOps",
      icon: 'aws',
      details: "Planning, configuring, deployment, and maintenance of AWS infrastructure, with security and scalability"
    },
    {
      title: "Cooperative Experience",
      icon: 'handshake',
      details: "Has worked on major projects in teams, planning and coordinating with several people at once to develop entire applications."
    }
  ],
  reviews: [
    // {
    //   id: 1,
    //   content: "Patrick was focused on success throughout the course, coming early to each class and dedicating time and energy into the homework and group projects.  Clearly, he loves to code and will tenaciously attack any challenge.",
    //   author: {
    //     name: 'Mark Carlson',
    //     designation: 'Lead Developer, Takeoff Technologies'
    //   },
    // }
    // {
    //   id: 2,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
    //   author: {
    //     name: 'Susan Yost',
    //     designation: 'Client'
    //   }
    // },
    // {
    //   id: 3,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //   author: {
    //     name: 'Irving Feeney',
    //     designation: 'Fiverr Client'
    //   }
    // }
  ],
  skills: [
    {
      title: "Javascript",
      value: 95
    },
    {
      title: "Node.js",
      value: 90
    },
    {
      title: "Express.js",
      value: 90
    },
    {
      title: "MongoDB",
      value: 85
    },
    {
      title: "Vue.js",
      value: 75
    },
    {
      title: "ReactJS",
      value: 50
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "AndroidTv IPTV streaming apps",
      subtitle: "Android Native apps writed in Kotlin",
      imageUrl: "/images/xcustom_login.png",
      url: 'https://www.upwork.com/freelancers/~0130e45a6e324fd76a?p=1378144225357602816'
    },
    // {
    //   id: 2,
    //   title: "Gem Mining",
    //   subtitle: "HTML, CSS, JavaScript, jQuery",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 3,
    //   title: "Trivia Game",
    //   subtitle: "HTML, jQuery, Timers",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: 'https://patrickfinnigan.github.io/trivia_game/'
    // },
    // {
    //   id: 4,
    //   title: "Gif Generator",
    //   subtitle: "API, JSON, Ajax",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   // largeImageUrl: [
    //   //   "/images/portfolio-image-4-lg.jpg",
    //   //   "/images/portfolio-image-4-lg2.jpg"
    //   // ],
    //   url: 'https://patrickfinnigan.github.io/gifgenerator/'
    // },
    // {
    //   id: 5,
    //   title: "Firebase Train Scheduler",
    //   subtitle: "Firebase, HTML, JavaScript",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    //   url: 'https://patrickfinnigan.github.io/trainschedule/'
    // },
    // {
    //   id: 6,
    //   title: "Burger Time",
    //   subtitle: "Mongo, Express, Node",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    //   url: 'https://damp-mountain-93742.herokuapp.com/burgers'
    // },
    // {
    //   id: 7,
    //   title: "React Shuffle",
    //   subtitle: "React",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://react-gameucbextension2018.herokuapp.com/'
    // },
    // {
    //   id: 8,
    //   title: "NYT Article Scraper",
    //   subtitle: "React, Mongoose, Cheerio",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    //   url: 'https://young-river-49658.herokuapp.com/'
    // },
    // {
    //   id: 9,
    //   title: "Demoquest",
    //   subtitle: "Mongoose, Express, React, Node",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    //   url: 'https://demoquest.herokuapp.com/'
    // }
  ],
  experience: {
    workingExperience: [
      {
        id: 0,
        year: "2020 - present",
        position: "Full time Freelancer",
        company: "Upwork.com / Freelancer.com",
        details: "Node.js Full Stack development, AWS [Dev/Sec]Ops, with a large experience leading development teams, and working side by side  with clients"
      },
      {
        id: 1,
        year: "2015 - 2020",
        position: "Co-Founder & [Dev/Sec]Ops",
        company: "BigMan Co.",
        details: "DevSecOps responsabilities, Software Development and IT Solutions for our clients."
      },
      {
        id: 2,
        year: "2014 - 2016",
        position: "DevSecOps",
        company: "Beckertime, LLC.",
        details: "All the DevSecOps responsibilities, working closely with the dev team and the administration department."
      },
      {
        id: 3,
        year: "2014 - 2020",
        position: "Partial time Freelancer",
        company: "Freelancer.com",
        details: "Worked on small/medium size tasks, coding/deploying/fixing and auditing a wide range of IT solutions"
      },
      {
        id: 4,
        year: "2007 - 2015",
        position: "Developer and SysAdmin",
        company: "HEXSON Tec",
        details: "Coding solutions in c#, MikroC for PIC, and PIC Assembler. Also maintaining client's hardware infrastructures"
      },
      {
        id: 5,
        year: "2003 - 2007",
        position: "Diverse positions",
        company: "Instituto Tecnológico de Sonora",
        details: "Diverse positions on IT projects from the college, all of them under the supervision of Dr. Hugo O. Romero; director of the IT research "
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2001 - 2006",
        graduation: "Bachelor Degree in Informatics Engineering",
        university: "Instituto Tecnologico de Sonora",
        details: "Studied computing science, with a specialty in security and networks"
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+34 (920) 02-7744'],
    emailAddress: ['contact@tadeoarmenta.com'],
    address: "Ávila del rey, reino de España"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});