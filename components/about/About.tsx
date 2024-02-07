import Article from "../ui/Article";
import Container from "../ui/Container";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";
import SkillBadge from "./SkillBadge";

const About = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="items-center">
      <Container className="flex flex-col gap-12 sm:gap-0">
        <Article>
          <H2 className="text-site-primary">Hi! ~ I&apos;m Ziv</H2>
          <Paragraph>
            Since I embarked on my journey in 2019, I have been actively
            pursuing my desire and passion to craft complex yet beautiful user
            interfaces from scratch. Committed to staying at the forefront of
            industry trends, I embrace continuous learning, regularly acquiring
            new skills and staying informed about the latest advancements in
            design and technology.
          </Paragraph>
        </Article>
        <Article className="sm:ml-auto">
          <H2 className="text-site-primary">Development</H2>
          <Paragraph>
            Embracing a diverse technology stack centered around JavaScript, I
            specialize in creating dynamic and visually appealing user
            interfaces using{" "}
            <SkillBadge
              href="https://react.dev"
              iconSrc="/react.svg"
              iconAlt="React Logo"
            >
              React
            </SkillBadge>
            . Proficient in TypeScript for robust development and{" "}
            <SkillBadge
              href="https://tailwindcss.com/"
              iconSrc="/tailwind.svg"
              iconAlt="Tailwind Logo"
            >
              Tailwind
            </SkillBadge>{" "}
            for efficient styling, I leverage{" "}
            <SkillBadge
              href="https://nextjs.org"
              iconSrc="/next.svg"
              iconAlt="Next.js Logo"
            >
              Next.js
            </SkillBadge>{" "}
            for enhanced scalability and optimal performance.
          </Paragraph>
        </Article>
      </Container>
    </Section>
  );
};

export default About;
