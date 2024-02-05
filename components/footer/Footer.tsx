import Marquee from "react-fast-marquee";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <footer className="pb-14" id="footer">
      <div className="relative z-50 bg-site-secondary overflow-hidden shadow-rough shadow-site-secondary mb-60">
        <Marquee
          speed={60}
          direction="right"
          autoFill
          className="top-7 overflow-hidden"
        >
          <div className="text-7xl font-bold">שלום</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">PEACE</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">こんにちは</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">CIAO</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Хей</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Hoi</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">अरे</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">سلام</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Cześć</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Hei</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Bonjour</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
          <div className="text-7xl font-bold">Привет</div>
          <span className="text-7xl mx-10 font-bold">&#8211;</span>
        </Marquee>
      </div>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
