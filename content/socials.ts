import { SocialType } from "@/types/Social";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export const socials: SocialType[] = [
  {
    name: "GitHub",
    href: "https://github.com/ZivCarmi",
    Icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ziv-carmi-9107751a1",
    Icon: FaLinkedinIn,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/carmi_ziv",
    Icon: FaXTwitter,
  },
];
