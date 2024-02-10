"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface BottomFooterColumn extends HTMLMotionProps<"div"> {}

export const bottomFooterVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45,
      duration: 0.3,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

const BottomFooterColumn = ({ className, ...props }: BottomFooterColumn) => {
  return (
    <motion.div
      className={cn("sm:w-1/4 px-col-gap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bottomFooterVariants}
      {...props}
    />
  );
};

export default BottomFooterColumn;
