"use client";

import { Variants, motion } from "framer-motion";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0, 0.57, 0.55, 1],
      delay: 1,
      duration: 0.8,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0)",
    transition: {
      ease: [0, 0.57, 0.55, 1],
      delay: 1,
      duration: 0.8,
    },
  },
};

const EntryText = () => {
  return (
    <div className="w-full px-0 sm:px-col-gap">
      <motion.div
        className="sm:w-1/2 md:w-1/4 ml-auto border-t border-b border-border relative px-col-gap sm:p-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Paragraph
          className="text-background text-xl m-0 font-medium px-col-gap sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={paragraphVariants}
        >
          <span className="font-bold">I like to create</span> seamless and
          immersive user <span className="font-bold">interfaces that</span>{" "}
          harmoniously blend{" "}
          <span className="font-bold">form and function</span>.
        </Paragraph>
      </motion.div>
    </div>
  );
};

export default EntryText;
