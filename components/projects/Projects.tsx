import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import ProjectsList from "./ProjectsList";

const Projects = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="lg:h-auto items-center ">
      <Container>
        <div className="mx-auto w-full md:w-1/2">
          <h2 className="text-2xl sm:text-xl text-center text-pretty text-zinc-300 mb-[calc(var(--col-gap)*2)] border-t border-b py-4 relative z-50">
            Some of my projects I&apos;ve worked on.
          </h2>
          <ProjectsList />
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
