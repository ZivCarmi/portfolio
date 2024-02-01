import { expertises } from "@/content/expertises";
import Article from "../ui/Article";
import Container from "../ui/Container";
import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import MyImage from "./MyImage";

const Home = () => {
  return (
    <Section
      id="home"
      className="tall:lg:h-auto flex-col items-center relative bg-site-primary sm:bg-gradient-to-r sm:from-site-primary sm:to-50% sm:via-site-primary sm:via-[66.67%] sm:to-site-secondary sm:pb-20"
    >
      <Container className="mt-[calc(var(--header-height))] sm:mt-[calc(var(--header-height)+4rem)] sm:flex sm:justify-between sm:items-center">
        <Article className="mt-8">
          <H1 className="text-site-secondary">
            Full Stack
            <br />
            Developer
            <span className="text-site-secondary-foreground">.</span>
          </H1>
          <Paragraph className="text-white text-lg mt-2" initial="visible">
            Passionate Full Stack Developer dedicated to crafting immersive and
            intuitive user interfaces that seamlessly blend form and function.
          </Paragraph>
        </Article>
        <MyImage className="hidden sm:block absolute left-[calc(66.67%-(var(--my-image-width)/2)+var(--my-image-border-space)+1px)]" />
      </Container>
      <Container>
        <div className="flex sm:w-2/3 md:w-2/5 gap-12 mt-16 mb-10 sm:mb-0">
          {expertises.map(({ id, text }) => (
            <Paragraph
              key={id}
              className="text-site-secondary text-sm m-0"
              initial="visible"
            >
              {text}
            </Paragraph>
          ))}
        </div>
      </Container>
      <Container className="flex items-center justify-center bg-site-secondary py-20 sm:hidden">
        <MyImage />
      </Container>
    </Section>
  );
};
export default Home;
