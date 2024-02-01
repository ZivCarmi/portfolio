"use client";

import { getCurrentYear } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BottomFooter = () => {
  const bottomFooterRef = useRef(null);
  const bottomFooterInView = useInView(bottomFooterRef, { once: true });

  return (
    <motion.p
      className="border-t border-site-secondary pt-14 mt-32 opacity-0"
      initial={{ y: 20 }}
      animate={{
        opacity: bottomFooterInView ? 1 : 0,
        y: bottomFooterInView ? 0 : 20,
      }}
      transition={{ delay: 0.45, duration: 0.3 }}
      ref={bottomFooterRef}
    >
      Made By Me :) | {getCurrentYear()}{" "}
    </motion.p>
  );
};

export default BottomFooter;
