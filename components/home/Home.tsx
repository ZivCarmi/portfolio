import Article from "../ui/Article";
import Container from "../ui/Container";
import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";
import Expertises from "./Expertises";
import MyImage from "./MyImage";
import NavigationMenu from "./NavigationMenu";

const Home = ({ ...props }: SectionProps) => {
  return (
    <Section
      {...props}
      className="tall:lg:h-auto flex-col items-center relative bg-site-primary sm:bg-gradient-to-r sm:from-site-primary sm:from-[67%] sm:to-site-secondary sm:to-[67%] sm:pb-16"
    >
      <Container className="mt-[calc(var(--header-height))] sm:mt-[calc(var(--header-height)+6rem)] sm:flex sm:justify-between sm:items-center">
        <Article>
          <H1 className="text-site-secondary" aria-label="Full Stack Developer">
            Full Stack
            <br />
            Developer
            <span className="text-site-secondary-foreground">.</span>
          </H1>
          <Paragraph className="text-white text-lg" initial="visible">
            I like to create seamless and immersive user interfaces that
            harmoniously blend form and function.
          </Paragraph>
        </Article>
        <MyImage className="hidden sm:block absolute left-[calc(67%-(var(--my-image-width)/2)+var(--my-image-border-space)+1px)]" />
      </Container>
      <Container className="mt-24 mb-10 sm:mb-0">
        <Expertises />
        <NavigationMenu />
      </Container>
      <Container className="flex items-center justify-center bg-site-secondary py-20 sm:hidden">
        <MyImage />
      </Container>
    </Section>
  );
};

export default Home;
