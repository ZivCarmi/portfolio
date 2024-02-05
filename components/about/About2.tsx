import Container2 from "../ui/Container2";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";
import AboutArticle from "./AboutArticle";
import AboutTitle from "./AboutTitle";
import SkillBadge from "./SkillBadge";
import SkillsMarquee from "./SkillsMarquee";

const About2 = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="items-center relative">
      <Container2 className="flex flex-col gap-12">
        <AboutArticle className="sm:ml-auto">
          <AboutTitle>
            Hi! <span className="text-site-secondary">~</span> I'm Ziv
          </AboutTitle>
          <Paragraph className="mb-0 text-3xl leading-[1.4] px-col-gap">
            Since I embarked on my journey in 2019, I have been actively
            pursuing my desire and passion to craft complex yet beautiful user
            interfaces from scratch. Committed to staying at the forefront of
            industry trends, I embrace continuous learning, regularly acquiring
            new skills and staying informed about the latest advancements in
            design and technology.
          </Paragraph>
        </AboutArticle>
        <SkillsMarquee />
        <AboutArticle>
          <AboutTitle>Development</AboutTitle>
          <Paragraph className="mb-0 text-3xl leading-[1.4] px-col-gap">
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
        </AboutArticle>
      </Container2>
    </Section>
  );
};

export default About2;
