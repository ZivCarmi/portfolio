"use client";

import { topFooterVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../shared/Socials";

const TopFooter = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={topFooterVariants}
    >
      <h2 className="tracking-[0.28rem] text-zinc-300">FIND ME</h2>
      <ul>
        <li>
          <Link href="mailto:carmi.ziv@gmail.com">carmi.ziv@gmail.com</Link>
        </li>
      </ul>
      <Socials className="mt-4" />
    </motion.div>
  );
};
export default TopFooter;
