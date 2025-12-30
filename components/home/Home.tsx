import ScrollDownSVG from "./ScrollDownSVG";
import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import EntryText from "./EntryText";
import Title from "./Title";

const Home = ({ ...props }: SectionProps) => {
  return (
    <Section
      {...props}
      className="min-h-svh flex-col bg-background md:bg-gradient-to-r sm:from-transparent sm:from-[62.5%] sm:to-site-secondary sm:to-[62.5%] mb-40 relative"
    >
      <div className="w-full h-full flex flex-col justify-center mt-[var(--header-height)] gap-20 md:gap-0">
        <Container className="md:w-[62.5%] md:pr-0 relative z-50 h-3/5 md:h-auto flex items-end overflow-x-clip">
          <Title />
        </Container>
        <div className="bg-site-secondary md:bg-transparent py-24 md:py-0 flex items-center justify-center relative h-2/5 md:h-auto">
          <EntryText />
          <ScrollDownSVG />
        </div>
      </div>
    </Section>
  );
};

export default Home;
