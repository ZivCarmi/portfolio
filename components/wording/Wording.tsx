import Container2 from "../ui/Container2";
import Section, { SectionProps } from "../ui/Section";
import Skill from "./Skill";

const skills = [
  { id: 1, text: "FRONTEND EXPERT" },
  { id: 2, text: "PIXEL PERFECT DELIVERY" },
  { id: 3, text: "CREATIVE THINKING" },
];

const Wording = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="justify-normal tall:lg:h-auto">
      <Container2 className="md:w-[76%]">
        <div className="sr-only">
          {skills.map(({ id, text }) => (
            <span className="sr-only" key={id}>
              {text}
            </span>
          ))}
        </div>
        <div className="space-y-32">
          {skills.map(({ id, text }) => (
            <Skill key={id} text={text} />
          ))}
        </div>
      </Container2>
    </Section>
  );
};

export default Wording;
