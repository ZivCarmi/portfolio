"use client";

import { Variants, motion } from "framer-motion";

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
    x: 12,
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
  return (
    <motion.h1
      className="text-site-secondary text-10xl-mobile sm:text-10xl flex flex-col"
      aria-label="Full Stack Developer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={h1Variants}
    >
      <motion.div variants={wordsVariants}>Full Stack</motion.div>
      <motion.div className="3xl:ml-[5.6rem]" variants={wordsVariants}>
        Developer
        <motion.div
          className="text-foreground inline-block"
          variants={dotVariant}
        >
          .
        </motion.div>
      </motion.div>
    </motion.h1>
  );
};

export default Title;
