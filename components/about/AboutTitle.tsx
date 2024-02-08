"use client";

import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";
import H2, { H2Props } from "../ui/H2";

interface AboutTitleProps extends H2Props {}

export const variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const AboutTitle = ({ children, className, ...props }: AboutTitleProps) => {
  return (
    <H2
      {...props}
      className={cn("text-foreground md:w-3/4 lg:w-1/2 px-col-gap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </H2>
  );
};

export default AboutTitle;
