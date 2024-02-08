import { abouts } from "@/content/about";
import { Fragment } from "react";
import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import AboutArticle from "./AboutArticle";
import AboutParagraph from "./AboutParagraph";
import AboutTitle from "./AboutTitle";
import SkillsMarquee from "./SkillsMarquee";

const About = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="items-center relative flex flex-col gap-12">
      {abouts.map(({ title, text, links }, idx) => (
        <Fragment key={idx}>
          <AboutArticle>
            <Container className="border-b">
              <AboutTitle className={`${idx % 2 ? "" : "sm:ml-auto"}`}>
                {title}
              </AboutTitle>
            </Container>
            <Container>
              <AboutParagraph
                className={`${idx % 2 ? "" : "sm:ml-auto"}`}
                text={text}
                links={links}
              />
            </Container>
          </AboutArticle>
          {idx === 0 && <SkillsMarquee />}
        </Fragment>
      ))}
    </Section>
  );
};

export default About;
