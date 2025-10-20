import Link from "next/link";
import Socials from "../shared/Socials";
import Container from "../ui/Container";
import TopFooterColumn from "./TopFooterColumn";

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
      <TopFooterColumn title="SOCIALS">
        <Socials className="space-y-4" />
      </TopFooterColumn>
    </Container>
  );
};
export default TopFooter;
