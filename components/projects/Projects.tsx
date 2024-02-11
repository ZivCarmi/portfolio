import { projects } from "@/content/projects";
import Container from "../ui/Container";
import Section, { SectionProps } from "../ui/Section";
import Project3 from "./Project";

const Projects2 = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="lg:h-auto items-center ">
      <Container>
        <div className="mx-auto w-full md:w-1/2">
          <h2 className="text-2xl sm:text-xl text-center text-pretty text-zinc-300 mb-[calc(var(--col-gap)*2)] border-t border-b py-4 relative z-50">
            Some of my projects I&apos;ve worked on.
          </h2>
          <div className="grid sm:grid-cols-[repeat(2,50%)] w-full gap-y-col-gap">
            {projects.map((project, idx) => (
              <Project3 key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects2;
