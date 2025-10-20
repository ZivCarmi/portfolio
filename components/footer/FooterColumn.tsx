"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface FooterColumnProps extends HTMLMotionProps<"div"> {}

const FooterColumn = ({ className, ...props }: FooterColumnProps) => {
  return (
    <motion.div
      className={cn("w-1/2 md:w-1/4 px-col-gap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    />
  );
};

export default FooterColumn;
