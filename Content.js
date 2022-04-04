import { Icon } from "@chakra-ui/react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
export const  Content= {
  "contact": [{
      "action": "https://github.com/holivin21",
      "icon": <Icon key={1} as={FaGithubSquare} color="white" boxSize={8} />,
    },{
      "action": "https://www.facebook.com/andres.hero.7/",
      "icon": <Icon key={2} as={FaFacebookSquare} color="white" boxSize={8} />,
    },{
      "action": "https://www.instagram.com/holivin_21/",
      "icon": <Icon key={3} as={FaInstagramSquare} color="white" boxSize={8} />,
    },{
      "action": "https://www.linkedin.com/in/andres-holivin-73327b1a3/",
      "icon": <Icon key={4} as={FaLinkedin} color="white" boxSize={8} />
    }
  ],
  "experience": [{
      "title": "Bachelor Degree",
      "company": "Bina Nusantara University",
      "start": "2019",
      "end": "Present",
      "image": "image/binus.jpeg"
    },
    {
      "title": "Freshmen Leader",
      "company": "Bina Nusantara University",
      "start": "2021",
      "end": "2021",
      "image": "image/binus.jpeg"
    },
    {
      "title": "Recruitment Trainer",
      "company": "Bina Nusantara IT Division",
      "start": "2020",
      "end": "2020",
      "image": "image/itBinus.jpeg"
    },
    {
      "title": "Associate Member",
      "company": "Bina Nusantara IT Division",
      "start": "2020",
      "end": "2021",
      "image": "image/itBinus.jpeg"
    },
    {
      "title": "Junior Programmer",
      "company": "Bina Nusantara IT Division",
      "start": "2021",
      "end": "Present",
      "image": "image/itBinus.jpeg"
    }
  ],
  "certificat": [{
      "photo": "image/certificate/AM.png"
    },
    {
      "photo": "image/certificate/huawei.jpg"
    },
    {
      "photo": "image/certificate/asp.png"
    },
    {
      "photo": "image/certificate/database.png"
    },
    {
      "photo": "image/certificate/git.png"
    },
    {
      "photo": "image/certificate/net_core.png"
    },
    {
      "photo": "image/certificate/oracle.png"
    },
    {
      "photo": "image/certificate/UX.png"
    },
  ],
  "project": [{
      "title": "ListTo",
      "desc": "",
      "tech": "Java, Adroid, Rest-Api",
      "photo": "",
      "github": "",
      "inet": "",
      "playstore": ""
    },
    {
      "title": "Keypedia",
      "desc": "",
      "tech": "Laravel, MySql",
      "photo": "",
      "github": "",
      "inet": "",
      "playstore": ""
    }
  ]
}