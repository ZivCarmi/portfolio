import Container from "../ui/Container";
import Container2 from "../ui/Container2";
import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";

const Home2 = ({ ...props }: SectionProps) => {
  return (
    <Section
      {...props}
      className="flex-col bg-site-primary sm:bg-gradient-to-r sm:from-site-primary sm:from-[67%] sm:to-site-secondary sm:to-[67%] mb-40 relative"
    >
      <div className="w-full h-full flex flex-col justify-center">
        <Container2 className="pr-0 w-[67%]">
          <H1
            className="text-site-secondary text-9xl"
            aria-label="Full Stack Developer"
          >
            <span>Full Stack</span>
            <div className="ml-40">
              Developer
              <span className="text-site-secondary-foreground">.</span>
            </div>
          </H1>
        </Container2>
        <Container2 className="w-[calc(25%+var(--col-gap)/2)] ml-auto pl-0">
          <Paragraph
            className="text-site-primary text-xl m-0 border-t border-b p-1 font-medium"
            initial="visible"
          >
            <span className="font-bold">I like to create</span> seamless and
            immersive user <span className="font-bold">interfaces that</span>{" "}
            harmoniously blend{" "}
            <span className="font-bold">form and function</span>.
          </Paragraph>
        </Container2>
      </div>
      <div className="absolute top-full right-0 w-1/2 h-screen bg-gradient-to-b from-site-primary from-10% to-background/40 to-80%" />
    </Section>
  );
};

export default Home2;
