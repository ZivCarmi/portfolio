import Article from "../ui/Article";
import Container from "../ui/Container";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";

const About = () => {
  return (
    <Section id="about">
      <Container className="flex-col gap-12">
        <Article className="self-start">
          <H2 className="text-site-primary text-5xl">About</H2>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laboriosam accusantium voluptates minima esse, nesciunt porro
            consequatur quae corporis fugit vero facere aperiam nihil, quo et
            consequuntur obcaecati ipsam voluptatibus.
          </Paragraph>
        </Article>
        <Article className="self-end">
          <H2 className="text-site-primary text-5xl">Stack</H2>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laboriosam accusantium voluptates minima esse, nesciunt porro
            consequatur quae corporis fugit vero facere aperiam nihil, quo et
            consequuntur obcaecati ipsam voluptatibus.
          </Paragraph>
        </Article>
      </Container>
    </Section>
  );
};

export default About;
