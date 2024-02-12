import BottomFooter from "./BottomFooter";
import FooterMarquee from "./FooterMarquee";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <footer className="pb-14" id="footer">
      <FooterMarquee />
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
