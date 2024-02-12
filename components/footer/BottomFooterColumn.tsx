"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface BottomFooterColumn extends HTMLMotionProps<"div"> {}

export const bottomFooterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35,
      duration: 0.3,
    },
  },
};

const BottomFooterColumn = ({ className, ...props }: BottomFooterColumn) => {
  return (
    <motion.div
      {...props}
      className={cn("px-col-gap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bottomFooterVariants}
    />
  );
};

export default BottomFooterColumn;
