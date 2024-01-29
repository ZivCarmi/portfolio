import Article from "../ui/Article";
import Container from "../ui/Container";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";

const Projects = () => {
  return (
    <Section id="projects">
      <Container className="gap-24">
        <div className="self-start">
          <H2 className="text-site-primary">
            Some
            <br />
            Stuff
          </H2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Article>
            <div className="flex relative">
              <span className="[writing-mode:vertical-rl] rotate-180 absolute right-full bottom-4">
                Monopolyz
              </span>
              <img src="/monopolyz.png" />
            </div>
            <Paragraph>asda as fasfa sfsf</Paragraph>
          </Article>
          <div>Projecty</div>
          <div>Projecty</div>
          <div>Projecty</div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
