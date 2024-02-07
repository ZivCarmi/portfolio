"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface ParagraphProps extends HTMLMotionProps<"p"> {}

const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return (
    <motion.p
      className={cn(
        "my-4 text-foreground text-pretty leading-relaxed",
        className
      )}
      viewport={{ once: true }}
      {...props}
    />
  );
};

export default Paragraph;
