import Link from "next/link";
import Socials from "../shared/Socials";
import Container from "../ui/Container";
import FooterColumn from "./FooterColumn";

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

const TopFooter = () => {
  return (
    <Container className="sm:text-lg flex">
      <FooterColumn variants={topFooterVariants}>
        <h2 className="tracking-wide text-zinc-300 mb-4">CONTACT</h2>
        <ul>
          <li>
            <Link href="mailto:carmi.ziv@gmail.com">carmi.ziv@gmail.com</Link>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn variants={topFooterVariants}>
        <h2 className="tracking-wide text-zinc-300 mb-4">SOCIALS</h2>
        <Socials className="space-y-4" />
      </FooterColumn>
    </Container>
  );
};

export default TopFooter;
