"use client";

import { topFooterVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../shared/Socials";
import Container2 from "../ui/Container2";

const TopFooter = () => {
  return (
    <Container2 className="text-lg/[2.8] flex">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={topFooterVariants}
        className="w-1/4 px-col-gap"
      >
        <h2 className="tracking-[0.28rem] text-zinc-300">CONTACT</h2>
        <ul>
          <li>
            <Link href="mailto:carmi.ziv@gmail.com">carmi.ziv@gmail.com</Link>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={topFooterVariants}
        className="w-1/4 px-col-gap"
      >
        <h2 className="tracking-[0.28rem] text-zinc-300">FIND ME</h2>
        <Socials />
      </motion.div>
    </Container2>
  );
};
export default TopFooter;
