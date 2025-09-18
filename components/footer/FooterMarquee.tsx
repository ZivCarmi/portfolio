import { Fragment } from "react";
import Marquee from "react-fast-marquee";

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

const FooterMarquee = () => {
  return (
    <div className="relative z-50 bg-site-secondary overflow-hidden shadow-rough shadow-site-secondary mb-60">
      <Marquee
        speed={60}
        direction="right"
        autoFill
        className="top-7 overflow-hidden"
      >
        {greetings.map((greet) => (
          <Fragment key={greet}>
            <span className="text-7xl font-bold">{greet}</span>
            <span className="text-7xl mx-10 font-bold">&#8211;</span>
          </Fragment>
        ))}
      </Marquee>
    </div>
  );
};

export default FooterMarquee;
