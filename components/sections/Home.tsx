import Image from "next/image";
import Article from "../ui/Article";
import Container from "../ui/Container";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";

const Home = () => {
  return (
    <Section
      id="home"
      className="h-auto items-start relative bg-gradient-to-r from-site-primary to-50% via-site-primary via-[66.67%] to-site-secondary pb-16"
    >
      <Container className="flex-col items-start">
        <div className="flex w-full h-[calc(var(--me-image-height)+_var(--me-image-back-border-height))] mt-[calc(var(--header-height))]">
          <Article className="mt-16">
            <H2 className="text-site-secondary">
              Full-Stack
              <br />
              Developer
              <span className="text-site-secondary-foreground">.</span>
            </H2>
            <Paragraph className="text-white text-lg/8 mt-6">
              Passionate Full-Stack Developer dedicated to crafting immersive
              and intuitive user interfaces that seamlessly blend form and
              function.
            </Paragraph>
          </Article>
          <div className="absolute right-[calc(33.33%_-_var(--me-image-width)/2)] w-[var(--me-image-width)] h-[var(--me-image-height)]">
            <Image
              src="/me.jpg"
              alt="Me"
              quality={100}
              className="object-cover z-10"
              fill
              priority
            />
            <div className="w-full h-full border absolute top-[var(--me-image-back-border-height)] left-9" />
          </div>
        </div>
        <div className="flex w-1/2 gap-12">
          <Paragraph className="text-site-secondary">
            Expert in front-end tech, delivering pixel-perfect designs for
            seamless user experiences.
          </Paragraph>
          <Paragraph className="text-site-secondary">
            Infusing love into code with the latest tech, I create seamless and
            heartfelt digital experiences.
          </Paragraph>
        </div>
      </Container>
    </Section>
  );
};
export default Home;
