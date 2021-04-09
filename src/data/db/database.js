import Mock from "../mock";

const database = {
  information: {
    name: 'Carlos Gustavo Tadeo Armenta Andrade',
    aboutContent: "DevOps with more than 18 years of server admin experience, more than 12 years of professional Nodejs,ExpressJs,MongoDB development, along with vast experience coordinating development teams and deployment. Profuse knowledge on Python/Bash/JavaScript Hard Worker, commited, auto disciplined and goal oriented.",
    age: 40,
    phone: '+34 (920) 02-7744',
    nationality: 'Spanish / Mexican',
    language: 'Spanish / English',
    email: 'cgtarmenta@gmail.com',
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
    brandImage: '/images/profile_2021.jpg',
    aboutImage: '/images/about_2021.jpg',
    aboutImageLg: '/images/about_2021.jpg',
    cvfile: '/files/Resume(1.17.2020).pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Worked with organizing and structuring frontend enviornments in both educational and professional settings."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Developed several web applications during the course of the UC Berkeley certification progra, utilizing both front and back end technologies."
    },
    {
      title: "Cooperative Experience",
      icon: 'handshake',
      details: "Has worked on major projects in teams, planning and coordinating with several people at once to develop entire applications."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Patrick was focused on success throughout the course, coming early to each class and dedicating time and energy into the homework and group projects.  Clearly, he loves to code and will tenaciously attack any challenge.",
      author: {
        name: 'Mark Carlson',
        designation: 'Lead Developer, Takeoff Technologies'
      },
    }
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
      title: "HTML5",
      value: 70
    },
    {
      title: "CSS3",
      value: 65
    },
    {
      title: "Javascript",
      value: 55
    },
    {
      title: "jQuery",
      value: 50
    },
    {
      title: "ReactJS",
      value: 50
    },
    {
      title: "Bootstrap",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Guessing Game",
      subtitle: "HTML, CSS, Javastript",
      imageUrl: "/images/portfolio-image-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/guessinggame/'
    },
    {
      id: 2,
      title: "Gem Mining",
      subtitle: "HTML, CSS, JavaScript, jQuery",
      imageUrl: "/images/portfolio-image-2.jpg",
      // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://pinterest.com'
    },
    {
      id: 3,
      title: "Trivia Game",
      subtitle: "HTML, jQuery, Timers",
      imageUrl: "/images/portfolio-image-3.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/trivia_game/'
    },
    {
      id: 4,
      title: "Gif Generator",
      subtitle: "API, JSON, Ajax",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      url: 'https://patrickfinnigan.github.io/gifgenerator/'
    },
    {
      id: 5,
      title: "Firebase Train Scheduler",
      subtitle: "Firebase, HTML, JavaScript",
      imageUrl: "/images/portfolio-image-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/trainschedule/'
    },
    {
      id: 6,
      title: "Burger Time",
      subtitle: "Mongo, Express, Node",
      imageUrl: "/images/portfolio-image-6.jpg",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://damp-mountain-93742.herokuapp.com/burgers'
    },
    {
      id: 7,
      title: "React Shuffle",
      subtitle: "React",
      imageUrl: "/images/portfolio-image-7.jpg",
      // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://react-gameucbextension2018.herokuapp.com/'
    },
    {
      id: 8,
      title: "NYT Article Scraper",
      subtitle: "React, Mongoose, Cheerio",
      imageUrl: "/images/portfolio-image-8.jpg",
      // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url: 'https://young-river-49658.herokuapp.com/'
    },
    {
      id: 9,
      title: "Demoquest",
      subtitle: "Mongoose, Express, React, Node",
      imageUrl: "/images/portfolio-image-9.jpg",
      // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url: 'https://demoquest.herokuapp.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Frontend Web Developer",
        company: "Socicraft (Currently under NDA)",
        details: "Developing and designing the front-end layout of the company website, utilizing React tools to edit the website to meet company expectations."
      },
      // {
      //   id: 2,
      //   year: "2016 - 2018",
      //   position: "Frontend Web Developer",
      //   company: "CBA Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // },
      // {
      //   id: 3,
      //   year: "2014 - 1016",
      //   position: "UI/UX Designer",
      //   company: "Example Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ],
    educationExperience: [
      {
        id: 1,
        year: "Sept 2012 - July 2016",
        graduation: "Bachelor of Arts in Psychology",
        university: "Sonoma State University",
        details: "Studied clinical and social psychology, and developed an understanding of aesthetic design that can be used in web development"
      },
      {
        id: 2,
        year: "May 2018 - Nov 2018",
        graduation: "Certification in Web Development",
        university: "UC Berkeley Extension Program Coding Bootcamp",
        details: "Learned the fundamentals of computer science and web design, learning how to develop fullstack MERN applications."
      },
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details: "Lorem Ipsum"
      // }
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
    emailAddress: ['cgtarmenta@gmail.com'],
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