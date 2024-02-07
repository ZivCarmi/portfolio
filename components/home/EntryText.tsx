"use client";

import { Variants } from "framer-motion";
import Paragraph from "../ui/Paragraph";

const container: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0)",
    transition: {
      type: "cubic-bezier(0,.57,.55,1)",
      delay: 1,
      duration: 1,
    },
  },
};

const EntryText = () => {
  return (
    <Paragraph
      className="text-background text-xl m-0 font-medium"
      initial="hidden"
      whileInView="visible"
      variants={container}
    >
      <span className="font-bold">I like to create</span> seamless and immersive
      user <span className="font-bold">interfaces that</span> harmoniously blend{" "}
      <span className="font-bold">form and function</span>.
    </Paragraph>
  );
};

export default EntryText;
