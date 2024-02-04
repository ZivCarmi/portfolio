"use client";

import { cn } from "@/lib/utils";
import { paragraphVariants } from "@/lib/variants";
import { ParagraphAnimationOptions } from "@/types/Animations";
import { HTMLMotionProps, motion } from "framer-motion";

interface ParagraphProps extends HTMLMotionProps<"p"> {
  initial?: ParagraphAnimationOptions;
}

const Paragraph = ({
  className,
  initial = "hidden",
  ...props
}: ParagraphProps) => {
  return (
    <motion.p
      className={cn(
        "my-4 text-foreground text-pretty leading-relaxed",
        className
      )}
      initial={initial}
      whileInView="visible"
      viewport={{ once: true }}
      variants={paragraphVariants}
      {...props}
    />
  );
};

export default Paragraph;
