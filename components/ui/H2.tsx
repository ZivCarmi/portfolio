"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

export interface H2Props extends HTMLMotionProps<"h2"> {}

const H2 = ({ className, ...props }: H2Props) => {
  return (
    <motion.h2
      className={cn(
        "text-[3.35rem]/normal font-extrabold tracking-tight",
        className
      )}
      {...props}
    />
  );
};

export default H2;
