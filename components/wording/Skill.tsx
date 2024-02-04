"use client";

import { cn } from "@/lib/utils";
import { skillCharacterVariant, skillTextVariants } from "@/lib/variants";
import { HTMLMotionProps, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillProps extends HTMLMotionProps<"div"> {
  text: string;
}

const Skill = ({ className, text, ...props }: SkillProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1, once: true });

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={skillTextVariants}
        className={cn("text-9xl font-bold text-pretty skill", className)}
        aria-hidden
        {...props}
        ref={ref}
      >
        {text.split(" ").map((word, idx) => (
          <span className="inline-block relative" key={idx}>
            {word.split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                variants={skillCharacterVariant}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.div>
    </>
  );
};

export default Skill;
