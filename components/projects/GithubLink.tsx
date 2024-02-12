import { AnimatePresence, Variants, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type GithubLinkProps = {
  link: string;
  isInView: boolean;
};

const linkVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.7,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const MotionLink = motion(Link);

const GithubLink = ({ isInView, link }: GithubLinkProps) => {
  return (
    <div className="inline-flex overflow-hidden">
      <AnimatePresence>
        {isInView && (
          <MotionLink
            href={link}
            target="_blank"
            className="flex items-center text-card-foreground/70"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={linkVariant}
          >
            <ChevronLeft className="w-4 h-4" />
            On GitHub
          </MotionLink>
        )}
      </AnimatePresence>
    </div>
  );
};
export default GithubLink;
