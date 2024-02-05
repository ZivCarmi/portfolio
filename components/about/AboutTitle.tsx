import H2 from "../ui/H2";

const AboutTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <H2 className="text-foreground border-t border-b w-full sm:w-1/2 md:w-1/3 lg:w-1/2 px-col-gap">
      {children}
    </H2>
  );
};

export default AboutTitle;
