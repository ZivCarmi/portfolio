"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillProps extends HTMLMotionProps<"div"> {
  text: string;
}

export const skillTextVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

export const skillCharacterVariant = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const Skill = ({ className, text, ...props }: SkillProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={skillTextVariants}
      className={cn(
        "text-[21vw]/[1.1] sm:text-[12rem]/[1.1] font-bold text-pretty skill text-site-secondary",
        className
      )}
      aria-hidden
      {...props}
      ref={ref}
    >
      {text.split(" ").map((word, idx) => (
        <span key={idx} className="inline-flex relative z-50 tracking-tighter">
          {word.split("").map((char, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={skillCharacterVariant}
            >
              {char === "." ? (
                <motion.span className="text-white">{char}</motion.span>
              ) : (
                char
              )}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.div>
  );
};

export default Skill;
