import { projects } from "@/content/projects";
import Container2 from "../ui/Container2";
import Section, { SectionProps } from "../ui/Section";
import Project from "./Project";

const Projects2 = ({ ...props }: SectionProps) => {
  return (
    <Section {...props} className="lg:h-auto items-center ">
      <Container2>
        <div className="flex items-center flex-col relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[90vh] bg-site-primary rounded-2xl" />
          <h2 className="text-xl text-center text-pretty text-zinc-600 mb-8 w-1/2 border-t border-b py-4">
            Some of my projects I've worked on.
          </h2>
          <div className="grid md:grid-cols-[repeat(2,1fr)] w-full max-w-md md:max-w-3xl gap-8">
            {projects.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container2>
    </Section>
  );
};

export default Projects2;
