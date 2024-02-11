"use client";

import { motion } from "framer-motion";
import { topFooterVariants } from "./TopFooter";

type TopFooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const TopFooterColumn = ({ title, children }: TopFooterColumnProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={topFooterVariants}
      className="flex-1 sm:w-1/4 px-col-gap"
    >
      <h2 className="tracking-[0.28rem] text-zinc-300 mb-4">{title}</h2>
      {children}
    </motion.div>
  );
};

export default TopFooterColumn;
