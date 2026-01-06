"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

export interface ParagraphProps extends HTMLMotionProps<"p"> {}

const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return (
    <motion.p
      className={cn("my-4 text-foreground leading-relaxed", className)}
      {...props}
    />
  );
};

export default Paragraph;
