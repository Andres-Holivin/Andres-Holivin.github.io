import {
    FaGithubSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaDev,
    FaGlobeAsia,
    FaGithub,
    FaStore,
    FaAppStoreIos,
    FaMedium
} from "react-icons/fa";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IconType } from 'react-icons';
import { MdOutlineWebAsset } from "react-icons/md";
import { SiHuawei } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export interface ContactItem {
    action: string;
    iconType: IconType;
    label: string;
}

export interface Experience {
    title: string;
    company: string;
    start: string;
    end: string;
    image: string;
}

export interface Certificate {
    photo: string;
    name?: string;
}

export interface ProjectIcon {
    link: string;
    iconType: IconType;
    label: string;
}

export interface Project {
    id: number;
    title: string;
    desc: string;
    image: string;
    icons: ProjectIcon[];
    tags?: string[];
}

export interface PortfolioContent {
    contact: ContactItem[];
    experience: Experience[];
    certificat: Certificate[];
    project: Project[];
    skills: SkillCategory[];
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number; // 1-100
    icon?: IconType;
}

// Icon mapping for JSON data
const iconMap: Record<string, IconType> = {
    FaGithubSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaDev,
    FaGlobeAsia,
    FaGithub,
    AiFillCodeSandboxCircle,
};

// Fallback data for development/build time
function getFallbackData(): PortfolioContent {
    return {
        contact: [
            {
                action: "https://github.com/Andres-Holivin",
                iconType: FaGithubSquare,
                label: "GitHub (holivin21)"
            },
            {
                action: "https://www.facebook.com/andres.hero.7/",
                iconType: FaFacebookSquare,
                label: "Facebook"
            },
            {
                action: "https://www.instagram.com/andresholivin/",
                iconType: FaInstagramSquare,
                label: "Instagram"
            },
            {
                action: "https://www.linkedin.com/in/andres-holivin-73327b1a3/",
                iconType: FaLinkedin,
                label: "LinkedIn"
            },
            {
                action: "https://dev.to/holivin21",
                iconType: FaDev,
                label: "Dev.to"
            },
            {
                action: "https://medium.com/@andres-holivin",
                iconType: FaMedium,
                label: "Medium"
            }
        ],
        experience: [
            {
                title: "Bachelor Degree (GPA 3.63)",
                company: "Bina Nusantara University",
                start: "2019",
                end: "2023",
                image: "/image/binus.jpeg",
            },
            {
                title: "Freshmen Leader",
                company: "Bina Nusantara University",
                start: "2021",
                end: "2021",
                image: "/image/binus.jpeg",
            },
            {
                title: "Recruitment Trainer",
                company: "Bina Nusantara IT Division",
                start: "2020",
                end: "2020",
                image: "/image/itBinus.jpeg",
            },
            {
                title: "Associate Member",
                company: "Bina Nusantara IT Division",
                start: "2020",
                end: "2021",
                image: "/image/itBinus.jpeg",
            },
            {
                title: "Junior Programmer",
                company: "Bina Nusantara IT Division",
                start: "2021",
                end: "2022",
                image: "/image/itBinus.jpeg",
            },
            {
                title: "Programmer",
                company: "Bina Nusantara IT Division",
                start: "March 2020",
                end: "August 2024",
                image: "/image/itBinus.jpeg"
            },
            {
                title: "Software Engineer",
                company: "Accelist Lentera Indonesia",
                start: "August 2024",
                end: "August 2025",
                image: "/image/accelist.jpg"
            }
        ],
        certificat: [
            {
                photo: "/image/certificate/azur-cert.png",
                name: "AZ-305T00: Designing Microsoft Azure Infrastructure Solutions"
            },
            {
                photo: "/image/certificate/AM.png",
                name: "AM Certificate"
            },
            {
                photo: "/image/certificate/huawei.jpg",
                name: "Huawei Certificate"
            },
            {
                photo: "/image/certificate/asp.png",
                name: "ASP.NET Certificate"
            },
            {
                photo: "/image/certificate/database.png",
                name: "Database Certificate"
            },
            {
                photo: "/image/certificate/git.png",
                name: "Git Certificate"
            },
            {
                photo: "/image/certificate/net_core.png",
                name: ".NET Core Certificate"
            },
            {
                photo: "/image/certificate/oracle.png",
                name: "Oracle Certificate"
            },
            {
                photo: "/image/certificate/UX.png",
                name: "UX Design Certificate"
            },
        ],
        project: [
            {
                id: 0,
                title: "Elegan",
                desc: "Elegan is a point management mobile application available on both Apple App Store and Google Play Store. It helps users manage their points and rewards efficiently.",
                image: "/image/elegan.jpg",
                tags: ["Mobile", "Productivity", "Flutter"],
                icons: [
                    {
                        link: "https://apps.apple.com/us/app/elegan",
                        iconType: FaAppStoreIos,
                        label: "Apple Store"
                    },
                    {
                        link: "https://play.google.com/store/apps/details?id=com.elegan.app",
                        iconType: IoLogoGooglePlaystore,
                        label: "Play Store"
                    },
                ],
            },
            {
                id: 1,
                title: "LisTo",
                desc: "A comprehensive to-do list application available on Huawei AppGallery. Built to help users organize their tasks efficiently.",
                image: "https://appimg2.dbankcdn.com/application/screenshut5/1078/996c362d6ec34336a9a6d5984148e23f.jpg",
                tags: ["Mobile", "Productivity", "Android", "Kotlin"],
                icons: [
                    {
                        link: "https://appgallery.huawei.com/app/C105260341",
                        iconType: FaStore,
                        label: "App Gallery"
                    },
                    {
                        link: "https://github.com/holivin21/LisTo",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 2,
                title: "Motivation App using Appwrite",
                desc: "An application designed to motivate users based on their selected categories. Built with Appwrite backend to deliver personalized motivational content and encouragement.",
                image: "/image/motivation.png",
                tags: ["Mobile", "Appwrite", "Motivation", "Flutter"],
                icons: [
                    {
                        link: "https://dev.to/holivin21/motivation-app-using-appwrite-3oal",
                        iconType: FaDev,
                        label: "Dev.to Article"
                    },
                    {
                        link: "https://github.com/holivin21/MotivationApp-AppWrite",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 3,
                title: "Task Board",
                desc: "Task Board is a modern, production-ready task management system that helps users organize their work efficiently. It features a clean Kanban-style interface, drag-and-drop functionality, intelligent AI suggestions, and a robust backend API.",
                image: "/image/task-board.png",
                tags: ["Web", "Productivity", "AI", "Next.js"],
                icons: [
                    {
                        link: "https://task-board-andres.vercel.app",
                        iconType: MdOutlineWebAsset,
                        label: "Live Demo"
                    },
                    {
                        link: "https://github.com/Andres-Holivin/task-board",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 4,
                title: "Attendance App",
                desc: "A comprehensive attendance tracking system built with a microservices architecture using Turborepo monorepo structure.",
                image: "/image/attendance.png",
                tags: ["Web", "Microservices", "Turborepo", "Next.js"],
                icons: [
                    {
                        link: "https://attendance-staff-portal.vercel.app/",
                        iconType: MdOutlineWebAsset,
                        label: "Live Demo"
                    },
                    {
                        link: "https://github.com/Andres-Holivin/attendance",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 5,
                title: "Leaderboard",
                desc: "A comprehensive leaderboard system built with a microservices architecture using Turborepo monorepo structure.",
                image: "/image/leaderboard.png",
                tags: ["Mobile", "Flutter"],
                icons: [
                    {
                        link: "https://github.com/Andres-Holivin/leaderboard",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 6,
                title: "Life Time Arts",
                desc: "A mobile application for Life Time Arts, designed to showcase their art collections and provide users with an immersive experience.",
                image: "/image/life-time-art.png",
                tags: ["Web", "Next.js", "Responsive", "UI/UX"],
                icons: [
                    {
                        link: "https://life-time-art-andres.vercel.app",
                        iconType: MdOutlineWebAsset,
                        label: "Live Demo"
                    },
                    {
                        link: "https://github.com/Andres-Holivin/life-time-art",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
            {
                id: 7,
                title: "Notification Reminder App",
                desc: "A mobile application that helps users manage their notifications effectively.",
                image: "/image/notif-reminder.png",
                tags: ["Mobile", "Flutter"],
                icons: [
                    {
                        link: "https://github.com/Andres-Holivin/notif-reminder",
                        iconType: FaGithub,
                        label: "GitHub"
                    },
                ],
            },
        ],
        skills: [
            {
                category: "Frontend Development",
                skills: [
                    { name: "React / Next.js", level: 90 },
                    { name: "TypeScript", level: 85 },
                    { name: "JavaScript (ES6+)", level: 90 },
                    { name: "HTML5 & CSS3", level: 95 },
                    { name: "Chakra UI / Material UI", level: 85 },
                    { name: "Tailwind CSS", level: 80 },
                    { name: "Redux / State Management", level: 75 },
                ]
            },
            {
                category: "Backend Development",
                skills: [
                    { name: "Node.js", level: 95 },
                    { name: ".NET Core / C#", level: 90 },
                    { name: "RESTful APIs", level: 90 },
                    { name: "GraphQL", level: 60 },
                    { name: "Microservices", level: 75 },
                ]
            },
            {
                category: "Mobile Development",
                skills: [
                    { name: "React Native", level: 75 },
                    { name: "Android (Kotlin)", level: 70 },
                    { name: "iOS (Swift)", level: 60 },
                    { name: "Flutter", level: 90 },
                ]
            },
            {
                category: "Database & Cloud",
                skills: [
                    { name: "SQL (MySQL, PostgreSQL)", level: 95 },
                    { name: "MongoDB", level: 80 },
                    { name: "Firebase", level: 75 },
                    { name: "Appwrite", level: 70 },
                    { name: "Oracle Database", level: 75 },
                ]
            },
            {
                category: "DevOps & Tools",
                skills: [
                    { name: "Git & GitHub", level: 90 },
                    { name: "Docker", level: 70 },
                    { name: "CI/CD Pipelines", level: 65 },
                    { name: "Vercel / Netlify", level: 85 },
                    { name: "AWS Basics", level: 60 },
                ]
            },
            {
                category: "Other Skills",
                skills: [
                    { name: "Agile / Scrum", level: 80 },
                    { name: "UI/UX Design", level: 70 },
                    { name: "Technical Writing", level: 85 },
                    { name: "Problem Solving", level: 90 },
                    { name: "Team Collaboration", level: 95 },
                ]
            }
        ]
    };
}

export const portfolioContent = getFallbackData();
