import { cn } from "@/lib/utils";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";

const firstMarqueeTitles = ["PASSIONATE", "THOROUGH", "ORGANIZED"];
const secondMarqueeTitles = ["INDEPENDANT", "HIGHLY PRACTICAL", "MOTIVATED"];

const TitlesMarquees = () => {
  return (
    <div className="flex-col overflow-hidden py-20 my-14 sm:my-28 w-full">
      <div className="relative z-[60] -rotate-[3deg] bg-popover w-[120%] -ml-[10%] mb-2">
        <Marquee
          speed={100}
          className="overflow-hidden text-popover-foreground"
        >
          {firstMarqueeTitles.map((title) => (
            <Fragment key={title}>
              <MarqueeTitle>{title}</MarqueeTitle>
              <MarqueeTitleDash />
            </Fragment>
          ))}
        </Marquee>
      </div>
      <div className="relative z-50 rotate-[5deg]">
        <Marquee speed={100} direction="right" className="overflow-hidden">
          {secondMarqueeTitles.map((title) => (
            <Fragment key={title}>
              <MarqueeTitle>{title}</MarqueeTitle>
              <MarqueeTitleDash className="opacity-15" />
            </Fragment>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

type MarqueeTitleProps = {
  children: React.ReactNode;
};

const MarqueeTitle = ({ children }: MarqueeTitleProps) => {
  return <span className="text-5xl sm:text-9xl font-bold">{children}</span>;
};

interface MarqueeTitleDashProps extends React.HTMLAttributes<HTMLSpanElement> {}

const MarqueeTitleDash = ({ className, ...props }: MarqueeTitleDashProps) => {
  return (
    <span
      {...props}
      className={cn("text-5xl sm:text-9xl mx-5 sm:mx-10 font-bold", className)}
    >
      &#8211;
    </span>
  );
};

export default TitlesMarquees;
