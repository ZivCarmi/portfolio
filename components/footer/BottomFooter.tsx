import { getCurrentYear } from "@/lib/utils";
import { Copyright } from "lucide-react";
import Container from "../ui/Container";
import FooterColumn from "./FooterColumn";

export const bottomFooterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35,
      duration: 0.3,
    },
  },
};

const BottomFooter = () => {
  return (
    <Container className="flex pt-14 mt-32 border-t">
      <FooterColumn variants={bottomFooterVariants}>
        <span className="inline-flex items-center">
          <Copyright className="mr-1.5 w-4 h-4" />
          {getCurrentYear()}
        </span>
      </FooterColumn>
      <FooterColumn variants={bottomFooterVariants}>
        <span>
          Made By Me <span className="text-site-secondary">:)</span>
        </span>
      </FooterColumn>
    </Container>
  );
};

export default BottomFooter;
