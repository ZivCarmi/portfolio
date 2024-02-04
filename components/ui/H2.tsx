"use client";

import { cn } from "@/lib/utils";
import { h2Variants } from "@/lib/variants";
import { H2AnimationOptions } from "@/types/Animations";
import { HTMLMotionProps, motion } from "framer-motion";

interface H2Props extends HTMLMotionProps<"h2"> {
  initial?: H2AnimationOptions;
}

const H2 = ({ className, initial = "hidden", ...props }: H2Props) => {
  return (
    <motion.h2
      className={cn(
        "text-[3.35rem]/normal font-extrabold tracking-tight",
        className
      )}
      initial={initial}
      whileInView="visible"
      viewport={{ once: true }}
      variants={h2Variants}
      {...props}
    />
  );
};

export default H2;
