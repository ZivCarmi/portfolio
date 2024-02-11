"use client";

import Link from "next/link";
import Socials from "../shared/Socials";
import Container from "../ui/Container";
import TopFooterColumn from "./TopFooterColumn";

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
    <Container className="sm:text-lg flex">
      <TopFooterColumn title="CONTACT">
        <ul>
          <li>
            <Link href="mailto:carmi.ziv@gmail.com">carmi.ziv@gmail.com</Link>
          </li>
        </ul>
      </TopFooterColumn>
      <TopFooterColumn title="CONTACT">
        <Socials className="space-y-4" />
      </TopFooterColumn>
    </Container>
  );
};
export default TopFooter;
