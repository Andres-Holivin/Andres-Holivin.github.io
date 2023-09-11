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
import { AiFillCodeSandboxCircle } from "react-icons/ai";

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
  project: [{
      id: 1,
      title: "LisTo",
      desc: "Desc3",
      image:
        "https://appimg2.dbankcdn.com/application/screenshut5/1078/996c362d6ec34336a9a6d5984148e23f.jpg",
      icons: [{
          link: "https://appgallery.huawei.com/app/C105260341",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },{
          link: "https://github.com/holivin21/LisTo",
          icon: <Icon key={1} as={FaGithub} />,
        }, ],
    }, {
      id: 2,
      title: "Motivation-App using Appwrite",
      desc: "I made an application called Motivation Apps. This application was created with the aim of motivating people who use this application based on the categories they want. I don't really have the inspiration behind this idea. But, this is my idea come from my life, Sometimes I really need support or words of motivation to give me encouragement to do something.",
      image: "image/motivation.png",
      icons: [ {
          link: "https://dev.to/holivin21/motivation-app-using-appwrite-3oal",
          icon: <Icon key={1} as={FaDev} />,
        },{
          link: "https://github.com/holivin21/MotivationApp-AppWrite",
          icon: <Icon key={1} as={FaGithub} />,
        }, ],
    }, {
      id: 3,
      title: "Keypedia",
      desc: "Keypedia",
      image: "image/keypedia.png",
      icons: [{
          link: "https://keypedia-project.vercel.app",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        },{
          link: "https://github.com/holivin21/Keypedia-project",
          icon: <Icon key={1} as={FaGithub} />,
        },],
    }, {
      id: 4,
      title: "Live Chat - Customer Service [Refine Hackathon]",
      desc: "Website for customer support service. In this website customer can chat with agent to discussion about they problem.",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s--R81BvOe---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qyk8la2ptgf82293frna.png",
      icons: [{
          link: "https://customer-service-holivin21.vercel.app/",
          icon: <Icon key={1} as={FaGlobeAsia} />,
        }, {
          link: "https://dev.to/holivin21/live-chat-customer-service-refine-hackathon-2jip",
          icon: <Icon key={1} as={FaDev} />,
        }, {
          link: "https://github.com/holivin21/Customer-Service",
          icon: <Icon key={1} as={FaGithub} />,
        },],
    }, {
      id: 5,
      title: "Movie Android Kotlin",
      desc: "Website for customer support service. In this website customer can chat with agent to discussion about they problem.",
      image: "https://user-images.githubusercontent.com/30800318/263497314-cba5526c-f143-4cfd-800c-5daf0e2acb90.png",
      icons: [ {
          link: "https://github.com/Andres-Holivin/Movie-Android-Kotlin",
          icon: <Icon key={1} as={FaGithub} />,
        },],
    },{
      id: 6,
      title: "Parking Program",
      desc: "Website for customer support service. In this website customer can chat with agent to discussion about they problem.",
      image: "image/parking.png",
      icons: [ {
          link: "https://github.com/Andres-Holivin/Parking-Program",
          icon: <Icon key={1} as={FaGithub} />,
        },{
          link: "https://codesandbox.io/p/github/Andres-Holivin/Parking-Program/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clmewgkli000j336k44e9fiby%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clmewgkli000e336kqoxxgdge%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clmewgkli000i336ksym0ye46%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clmewgkli000g336kj8qrezxv%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B19.16719766745834%252C80.83280233254166%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clmewgkli000e336kqoxxgdge%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmewgkli000d336kvtu7j281%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clmewgkli000e336kqoxxgdge%2522%252C%2522activeTabId%2522%253A%2522clmewgkli000d336kvtu7j281%2522%257D%252C%2522clmewgkli000g336kj8qrezxv%2522%253A%257B%2522id%2522%253A%2522clmewgkli000g336kj8qrezxv%2522%252C%2522activeTabId%2522%253A%2522clmewhuwt00o7336kdpf3vqmw%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clmewhuwt00o7336kdpf3vqmw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clmewgkli000i336ksym0ye46%2522%253A%257B%2522id%2522%253A%2522clmewgkli000i336ksym0ye46%2522%252C%2522activeTabId%2522%253A%2522clmewgkli000h336kp1nbsiy3%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmewgkli000h336kp1nbsiy3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clmewgl2y001le5g190jjcr7w%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clmewhmm200id336kori0ji3g%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
          icon: <Icon key={1} as={AiFillCodeSandboxCircle} />,
        },],
    },
    // {
    //   id: 7,
    //   title: "Swift3 Twitter Clone",
    //   desc: "Website for customer support service. In this website customer can chat with agent to discussion about they problem.",
    //   image: "image/parking.png",
    //   icons: [ {
    //       link: "https://github.com/Andres-Holivin/Swift3-Twitter-Clone",
    //       icon: <Icon key={1} as={FaGithub} />,
    //     },],
    // },{
    //   id: 8,
    //   title: "Swift3 Random Photo",
    //   desc: "Website for customer support service. In this website customer can chat with agent to discussion about they problem.",
    //   image: "image/parking.png",
    //   icons: [ {
    //       link: "https://github.com/Andres-Holivin/Random-Photo",
    //       icon: <Icon key={1} as={FaGithub} />,
    //     },],
    // }    ,
  ],
}
