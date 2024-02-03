import Container from "../ui/Container";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <footer
      className="bg-violet-900 text-site-secondary pt-24 pb-14"
      id="footer"
    >
      <div className="flex items-center justify-center h-full">
        <Container className="text-lg/[2.8]">
          <TopFooter />
          <BottomFooter />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
