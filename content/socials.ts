import { SocialType } from "@/types/Social";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const socials: SocialType[] = [
  {
    name: "GitHub",
    href: "https://github.com/ZivCarmi",
    Icon: FiGithub,
    description: "My GitHub link",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ziv-carmi-9107751a1",
    Icon: FaLinkedinIn,
    description: "My Linkedin link",
  },
];
