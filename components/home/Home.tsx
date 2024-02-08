import ArrowDown from "./ArrowDown";
import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import EntryText from "./EntryText";
import Title from "./Title";

const Home = ({ ...props }: SectionProps) => {
  return (
    <Section
      {...props}
      className="h-[90vh] md:h-screen flex-col bg-background md:bg-gradient-to-r sm:from-transparent sm:from-[62.5%] sm:to-site-secondary sm:to-[62.5%] mb-40 relative"
    >
      <div className="w-full h-full flex flex-col justify-center mt-[var(--header-height)] gap-[calc(var(--header-height)-3rem)]">
        <Container className="md:w-[62.5%] md:pr-0 relative z-50">
          <Title />
        </Container>
        <div className="relative">
          <Container className="bg-site-secondary md:bg-transparent py-24 md:py-0 flex items-center justify-center">
            <div className="sm:w-1/2 md:w-1/4 ml-auto border-t border-b border-border p-1 relative">
              <EntryText />
            </div>
          </Container>
          <ArrowDown />
        </div>
      </div>
    </Section>
  );
};

export default Home;
