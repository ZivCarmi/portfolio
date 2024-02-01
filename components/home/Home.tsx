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
      className="lg:h-auto flex-col items-center relative bg-site-primary sm:bg-gradient-to-r sm:from-site-primary sm:to-50% sm:via-site-primary sm:via-[66.67%] sm:to-site-secondary sm:pb-10"
    >
      <Container className="max-h-[66.67%] mt-[calc(var(--header-height))] sm:flex sm:justify-between sm:items-center">
        <Article className="mt-16">
          <H1 className="text-site-secondary">
            Full-Stack
            <br />
            Developer
            <span className="text-site-secondary-foreground">.</span>
          </H1>
          <Paragraph className="text-white text-lg/8 mt-6">
            Passionate Full-Stack Developer dedicated to crafting immersive and
            intuitive user interfaces that seamlessly blend form and function.
          </Paragraph>
        </Article>
        <MyImage className="hidden sm:block " />
      </Container>
      <Container>
        <div className="flex sm:w-1/2 gap-12 mt-20 mb-10 sm:mb-0">
          <Paragraph className="text-site-secondary text-sm m-0">
            Expert in front-end tech, delivering pixel-perfect designs for
            seamless user experiences.
          </Paragraph>
          <Paragraph className="text-site-secondary text-sm m-0">
            Infusing love into code with the latest tech, I create seamless and
            heartfelt digital experiences.
          </Paragraph>
        </div>
      </Container>
      <Container className="flex items-center justify-center bg-site-secondary py-20 sm:hidden">
        <MyImage />
      </Container>
    </Section>
  );
};
export default Home;
