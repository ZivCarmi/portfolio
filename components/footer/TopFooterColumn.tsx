"use client";

import { motion } from "framer-motion";

type TopFooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const topFooterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.3,
    },
  },
};

const TopFooterColumn = ({ title, children }: TopFooterColumnProps) => {
  return (
    <motion.div
      className="w-1/2 sm:w-1/4 px-col-gap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={topFooterVariants}
    >
      <h2 className="tracking-wide text-zinc-300 mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};

export default TopFooterColumn;
