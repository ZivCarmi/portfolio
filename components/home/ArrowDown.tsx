"use client";

import { Variants, motion } from "framer-motion";

const container: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.8,
    },
  },
};

const svg: Variants = {
  rotation: {
    rotate: 360,
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const ArrowDown = () => {
  return (
    <motion.div className="absolute top-0 right-0 -translate-y-1/2 md:right-auto md:translate-y-1/3 md:left-[calc(62.5%-100px)] flex items-center justify-center mix-blend-difference">
      <motion.svg
        viewBox="0 0 300 300"
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <motion.text
          fill="#ff0482"
          className="text-[18px] tracking-[2.6px] font-extrabold"
          animate="rotation"
          variants={svg}
        >
          <textPath xlinkHref="#circlePath">
            SCROLL DOWN - SCROLL DOWN -
          </textPath>
        </motion.text>
      </motion.svg>
    </motion.div>
  );
};

export default ArrowDown;
