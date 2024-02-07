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
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={skillTextVariants}
        className={cn(
          "text-[250px] font-bold text-pretty skill text-site-secondary",
          className
        )}
        aria-hidden
        {...props}
        ref={ref}
      >
        {text.split(" ").map((word, idx) => (
          <span
            key={idx}
            className="inline-block relative z-50 tracking-tighter"
          >
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
    </>
  );
};

export default Skill;
