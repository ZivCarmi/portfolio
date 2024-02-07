import { projects } from "@/content/projects";
import Container2 from "../ui/Container2";
import Section, { SectionProps } from "../ui/Section";
import Project2 from "./Project2";

const Projects2 = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="lg:h-auto items-center ">
      <Container2>
        <div className="mx-auto w-full md:w-1/2">
          <h2 className="text-xl text-center text-pretty text-zinc-600 mb-[calc(var(--col-gap)*2)] border-t border-b py-4 relative z-50">
            Some of my projects I&apos;ve worked on.
          </h2>
          <div className="grid grid-cols-[repeat(2,1fr)] w-full gap-y-col-gap">
            {projects.map((project) => (
              <Project2 key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container2>
    </Section>
  );
};

export default Projects2;
