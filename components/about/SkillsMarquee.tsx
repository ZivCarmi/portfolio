import Marquee from "react-fast-marquee";

const SkillsMarquee = () => {
  return (
    <div className="flex-col overflow-hidden py-20 my-28 w-full">
      <div className="relative z-[60] -rotate-[3deg] bg-popover w-[120%] -ml-[10%] mb-2">
        <Marquee
          speed={100}
          className="overflow-hidden text-popover-foreground"
        >
          <div className="text-9xl font-bold">PASSIONATE</div>
          <span className="text-9xl mx-10 font-bold">&#8211;</span>
          <div className="text-9xl font-bold">THOROUGH</div>
          <span className="text-9xl mx-10 font-bold">&#8211;</span>
          <div className="text-9xl font-bold">ORGANIZED</div>
          <span className="text-9xl mx-10 font-bold">&#8211;</span>
        </Marquee>
      </div>
      <div className="relative z-50 rotate-[5deg]">
        <Marquee speed={100} direction="right" className="overflow-hidden">
          <div className="text-9xl font-bold">INDEPENDANT</div>
          <span className="text-9xl mx-10 font-bold opacity-15">&#8211;</span>
          <div className="text-9xl font-bold">HIGHLY PRACTICAL</div>
          <span className="text-9xl mx-10 font-bold opacity-15">&#8211;</span>
          <div className="text-9xl font-bold">MOTIVATED</div>
          <span className="text-9xl mx-10 font-bold opacity-15">&#8211;</span>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsMarquee;
