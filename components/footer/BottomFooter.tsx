import { getCurrentYear } from "@/lib/utils";
import { Copyright } from "lucide-react";
import Container from "../ui/Container";
import BottomFooterColumn from "./BottomFooterColumn";

const BottomFooter = () => {
  return (
    <Container className="flex pt-14 mt-32 border-t">
      <BottomFooterColumn className="w-1/2 sm:w-1/4">
        <span className="inline-flex items-center">
          <Copyright className="mr-1.5 w-4 h-4" />
          {getCurrentYear()}
        </span>
      </BottomFooterColumn>
      <BottomFooterColumn className="w-1/2 sm:w-1/4">
        <span>
          Made By Me <span className="text-site-secondary">:)</span>
        </span>
      </BottomFooterColumn>
    </Container>
  );
};

export default BottomFooter;
