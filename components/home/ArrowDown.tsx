"use client";

import { Variants, motion } from "framer-motion";
import { ImArrowDown } from "react-icons/im";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {},
  },
};

const children: Variants = {
  visible: {
    transition: {
      type: "spring",
      repeat: Infinity,
      bounce: 2,
    },
  },
};

const MotionArrow = motion(ImArrowDown);

const ArrowDown = () => {
  return (
    <motion.div variants={container} whileInView="visible" initial="hidden">
      <motion.div
        className="absolute top-1/2 left-[calc(62.5%-4rem)] border-4 rounded-full border-site-secondary mix-blend-difference w-32 h-32 flex items-center justify-center"
        transition={{
          y: {
            repeatType: "reverse",
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        animate={{
          y: ["30%", "10%"],
        }}
      >
        <MotionArrow className="mix-blend-difference text-site-secondary w-20 h-20" />
      </motion.div>
    </motion.div>
  );
};

export default ArrowDown;
