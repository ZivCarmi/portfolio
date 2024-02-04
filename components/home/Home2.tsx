import Container2 from "../ui/Container2";
import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";

const Home2 = ({ ...props }: SectionProps) => {
  return (
    <Section
      {...props}
      className="h-screen flex-col bg-background sm:bg-gradient-to-r sm:from-transparent sm:from-[67%] sm:to-site-secondary sm:to-[67%] mb-40 relative"
    >
      <div className="w-full h-full flex flex-col justify-center">
        <Container2 className="w-full sm:w-[67%]">
          <H1
            className="text-site-secondary text-9xl"
            aria-label="Full Stack Developer"
          >
            <span>Full Stack</span>
            <div className="ml-20">
              Developer
              <span className="text-site-secondary-foreground">.</span>
            </div>
          </H1>
        </Container2>
        <Container2 className="w-1/2 sm:w-[calc(25%+var(--col-gap)/2)] mt-20 ml-auto pl-0">
          <Paragraph
            className="text-site-secondary sm:text-background text-xl m-0 border-t border-b border-border p-1 font-medium"
            initial="visible"
          >
            <span className="font-bold">I like to create</span> seamless and
            immersive user <span className="font-bold">interfaces that</span>{" "}
            harmoniously blend{" "}
            <span className="font-bold">form and function</span>.
          </Paragraph>
        </Container2>
      </div>
    </Section>
  );
};

export default Home2;
