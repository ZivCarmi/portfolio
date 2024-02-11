import Marquee from "react-fast-marquee";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";
import { Fragment } from "react";

const greetings = [
  "שלום",
  "PEACE",
  "こんにちは",
  "CIAO",
  "Хей",
  "Hoi",
  "अरे",
  "سلام",
  "Cześć",
  "Hei",
  "Bonjour",
  "Привет",
];

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
          {greetings.map((greet) => (
            <Fragment key={greet}>
              <div className="text-7xl font-bold">{greet}</div>
              <span className="text-7xl mx-10 font-bold">&#8211;</span>
            </Fragment>
          ))}
        </Marquee>
      </div>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
