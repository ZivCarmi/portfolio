import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Socials = ({ className, ...props }: SocialsProps) => {
  return (
    <div {...props} className={cn("flex items-center gap-3 mt-9", className)}>
      <Link href="https://github.com/ZivCarmi" target="_blank">
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ziv-carmi-9107751a1"
        target="_blank"
      >
        <Linkedin />
      </Link>
    </div>
  );
};

export default Socials;
