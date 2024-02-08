"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../shared/Socials";
import Container from "../ui/Container";

export const topFooterVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.3,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

const TopFooter = () => {
  return (
    <Container className="text-lg/[2.8] flex">
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
    </Container>
  );
};
export default TopFooter;
