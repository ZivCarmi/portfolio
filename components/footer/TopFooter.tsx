"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Socials from "../shared/Socials";

const TopFooter = () => {
  const topFooterRef = useRef(null);
  const topFooterInView = useInView(topFooterRef, { once: true });

  return (
    <motion.div
      className="opacity-0"
      initial={{ y: 20 }}
      animate={{
        opacity: topFooterInView ? 1 : 0,
        y: topFooterInView ? 0 : 20,
      }}
      transition={{ delay: 0.25, duration: 0.3 }}
      ref={topFooterRef}
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
