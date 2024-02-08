import { AboutArticleType } from "@/types/About";
import { Fragment } from "react";

export const abouts: AboutArticleType[] = [
  {
    title: (
      <Fragment>
        Hi! <span className="text-site-secondary">~</span> I&apos;m Ziv
      </Fragment>
    ),
    text: "Since I embarked on my journey in 2019, I have been actively pursuing my desire and passion to craft complex yet beautiful user interfaces from scratch. Committed to staying at the forefront of industry trends, I embrace continuous learning, regularly acquiring new skills and staying informed about the latest advancements in design and technology.",
  },
  {
    title: "Development",
    text: "Embracing a diverse technology stack centered around JavaScript, I specialize in creating dynamic and visually appealing user interfaces using React. Proficient in TypeScript for robust development and Tailwind for efficient styling, I leverage Next.js for enhanced scalability and optimal performance.",
    links: {
      React: {
        href: "https://react.dev",
        iconSrc: "/react.svg",
        iconAlt: "React Logo",
      },
      Tailwind: {
        href: "https://tailwindcss.com",
        iconSrc: "/tailwind.svg",
        iconAlt: "Tailwind Logo",
      },
      "Next.js": {
        href: "https://nextjs.org",
        iconSrc: "/next.svg",
        iconAlt: "Next.js Logo",
      },
    },
  },
];
