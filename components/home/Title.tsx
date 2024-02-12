"use client";

import { Variants, motion, useWillChange } from "framer-motion";

const h1Variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordsVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 60,
    rotateZ: -10,
    rotateY: 10,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateZ: 0,
    rotateY: 0,
    transformOrigin: "top",
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 1,
    },
  },
};

const dotVariant: Variants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 1,
    },
  },
};

const Title = () => {
  const willChange = useWillChange();

  return (
    <motion.h1
      className="font-extrabold tracking-wide text-site-secondary text-[14vw]/none sm:text-9xl p-1"
      aria-label="Full Stack Developer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ willChange }}
      variants={h1Variants}
    >
      <motion.div variants={wordsVariants}>Full Stack</motion.div>
      <motion.div className="ml-10 sm:ml-20" variants={wordsVariants}>
        Developer
        <motion.div
          className="text-white inline-block"
          variants={dotVariant}
          style={{ willChange }}
        >
          .
        </motion.div>
      </motion.div>
    </motion.h1>
  );
};

export default Title;
