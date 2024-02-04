import SkillsMarquee from "./SkillsMarquee";
import Container2 from "../ui/Container2";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";
import SkillBadge from "./SkillBadge";

const About2 = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="items-center relative">
      <Container2 className="flex flex-col gap-12">
        <article className="sm:ml-auto w-1/2 relative z-10">
          <H2 className="text-foreground border-t border-b w-1/2 p-1">
            Hi! <span className="text-site-secondary">~</span> I'm Ziv
          </H2>
          <Paragraph className="mb-0 text-3xl leading-[1.4] p-1">
            Since I embarked on my journey in 2019, I have been actively
            pursuing my desire and passion to craft complex yet beautiful user
            interfaces from scratch. Committed to staying at the forefront of
            industry trends, I embrace continuous learning, regularly acquiring
            new skills and staying informed about the latest advancements in
            design and technology.
          </Paragraph>
        </article>
        <SkillsMarquee />
        <article className="w-1/2 relative z-10">
          <H2 className="text-foreground border-t border-b w-1/2 p-1">
            DEVELOPMENT
          </H2>
          <Paragraph className="mb-0 text-3xl leading-[1.4] p-1">
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
        </article>
      </Container2>
      {/* <div className="absolute bottom-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-site-secondary/20 from-20% to-site-secondary/75 to-80%" /> */}
    </Section>
  );
};

export default About2;
