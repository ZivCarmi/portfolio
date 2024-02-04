"use client";

import { getCurrentYear } from "@/lib/utils";
import { bottomFooterVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { Copyright } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

const BottomFooter = () => {
  return (
    <motion.p
      className="border-t border-site-secondary pt-14 mt-32 flex items-center justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bottomFooterVariants}
    >
      <span className="inline-flex items-center">
        <Copyright size={20} className="mr-1.5" />
        Made By Me :) | {getCurrentYear()}
      </span>
      <ModeToggle />
    </motion.p>
  );
};

export default BottomFooter;
