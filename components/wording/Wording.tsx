import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import Skill from "./Skill";

const skills = [
  { id: 1, text: "Frontend Expert." },
  { id: 2, text: "Pixel Perfect Delivery." },
  { id: 3, text: "Creative Thinking." },
];

const Wording = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="justify-normal tall:lg:h-auto">
      <Container className="md:w-[76%]">
        <div className="sr-only">
          {skills.map(({ id, text }) => (
            <span className="sr-only" key={id}>
              {text}
            </span>
          ))}
        </div>
        <div className="space-y-44">
          {skills.map(({ id, text }) => (
            <Skill key={id} text={text} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Wording;
