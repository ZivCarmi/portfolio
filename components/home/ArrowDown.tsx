"use client";

import { Variants, motion } from "framer-motion";
import { ImArrowDown } from "react-icons/im";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: ["30%", "10%"],
    transition: {
      delay: 1.75,
      y: {
        repeatType: "reverse",
        duration: 0.6,
        ease: "circOut",
        repeat: Infinity,
      },
    },
  },
};

const ArrowDown = () => {
  return (
    <motion.div
      className="absolute top-full left-[calc(62.5%-2.5rem)] flex items-center justify-center mix-blend-difference"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <ImArrowDown className="text-site-secondary w-20 h-20" />
    </motion.div>
  );
};

export default ArrowDown;
