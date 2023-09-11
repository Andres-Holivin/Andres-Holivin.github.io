import { Icon } from "@chakra-ui/react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaDev,
  FaGlobeAsia,
  FaGithub,
} from "react-icons/fa";

export const  Content= {
  "contact": [{
      "action": "https://github.com/holivin21",
      "icon": <Icon key={1} as={FaGithubSquare} color="white" boxSize={8} />,
    },{
      "action": "https://www.facebook.com/andres.hero.7/",
      "icon": <Icon key={2} as={FaFacebookSquare} color="white" boxSize={8} />,
    },{
      "action": "https://github.com/Andres-Holivin",
      "icon": <Icon key={3} as={FaInstagramSquare} color="white" boxSize={8} />,
    },{
      "action": "https://www.linkedin.com/in/andres-holivin-73327b1a3/",
      "icon": <Icon key={4} as={FaLinkedin} color="white" boxSize={8} />
    },{
      "action": "https://dev.to/holivin21",
      "icon": <Icon key={4} as={FaDev} color="white" boxSize={8} />
    }
  ],
  experience: [
    {
      title: "Bachelor Degree",
      company: "Bina Nusantara University",
      start: "2019",
      end: "Present",
      image: "image/binus.jpeg",
    },
    {
      title: "Freshmen Leader",
      company: "Bina Nusantara University",
      start: "2021",
      end: "2021",
      image: "image/binus.jpeg",
    },
    {
      title: "Recruitment Trainer",
      company: "Bina Nusantara IT Division",
      start: "2020",
      end: "2020",
      image: "image/itBinus.jpeg",
    },
    {
      title: "Associate Member",
      company: "Bina Nusantara IT Division",
      start: "2020",
      end: "2021",
      image: "image/itBinus.jpeg",
    },
    {
      title: "Junior Programmer",
      company: "Bina Nusantara IT Division",
      start: "2021",
      end: "2022",
      image: "image/itBinus.jpeg",
    },
    {
      "title": "Junior Programmer",
      "company": "Bina Nusantara IT Division",
      "start": "2021",
      "end": "Present",
      "image": "image/itBinus.jpeg"
    },{
      "title": "Programmer",
      "company": "Bina Nusantara IT Division",
      "start": "Maret 2020",
      "end": "Present",
      "image": "image/itBinus.jpeg"
    }
  ],
  certificat: [
    {
      photo: "image/certificate/AM.png",
    },
    {
      photo: "image/certificate/huawei.jpg",
    },
    {
      photo: "image/certificate/asp.png",
    },
    {
      photo: "image/certificate/database.png",
    },
    {
      photo: "image/certificate/git.png",
    },
    {
      photo: "image/certificate/net_core.png",
    },
    {
      photo: "image/certificate/oracle.png",
    },
    {
      photo: "image/certificate/UX.png",
    },
  ],
  project: [
    {
      id: 1,
      title: "LisTo",
      desc: "Desc3",
      image:
        "https://appimg2.dbankcdn.com/application/screenshut5/1078/996c362d6ec34336a9a6d5984148e23f.jpg",
      icons: [
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/LisTo",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
    {
      id: 2,
      title: "Motivation-App using Appwrite",
      desc: "I made an application called Motivation Apps. This application was created with the aim of motivating people who use this application based on the categories they want. I don't really have the inspiration behind this idea. But, this is my idea come from my life, Sometimes I really need support or words of motivation to give me encouragement to do something.",
      image: "image/motivation.png",
      icons: [
        {
          link: "https://dev.to/holivin21/motivation-app-using-appwrite-3oal",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/MotivationApp-AppWrite",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
    {
      id: 3,
      title: "Keypedia",
      desc: "Keypedia",
      image: "image/keypedia.png",
      icons: [
        {
          link: "https://keypedia-project.vercel.app",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/Keypedia-project",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
  ],
  project: [
    {
      id: 1,
      title: "LisTo",
      desc: "Desc3",
      image:
        "https://appimg2.dbankcdn.com/application/screenshut5/1078/996c362d6ec34336a9a6d5984148e23f.jpg",
      icons: [
        {
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/LisTo",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
    {
      id: 2,
      title: "Motivation-App using Appwrite",
      desc: "I made an application called Motivation Apps. This application was created with the aim of motivating people who use this application based on the categories they want. I don't really have the inspiration behind this idea. But, this is my idea come from my life, Sometimes I really need support or words of motivation to give me encouragement to do something.",
      image: "image/motivation.png",
      icons: [
        {
          link: "https://dev.to/holivin21/motivation-app-using-appwrite-3oal",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/MotivationApp-AppWrite",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
    {
      id: 3,
      title: "Keypedia",
      desc: "Keypedia",
      image: "image/keypedia.png",
      icons: [
        {
          link: "https://keypedia-project.vercel.app",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },
        {
          link: "https://github.com/holivin21/Keypedia-project",
          icon: <Icon key={1} as={FaGithub} />,
        },
        // {
        //   link: "https://appgallery.huawei.com/app/C105260341",
        //   icon: <Icon key={1} as={IoLogoGooglePlaystore} />,
        // },
      ],
    },
  ]
}
