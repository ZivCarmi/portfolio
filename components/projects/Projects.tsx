import { projects } from "@/content/projects";
import Project from "./Project";
import Container from "../ui/Container";
import Section from "../ui/Section";

const Projects = () => {
  return (
    <Section id="projects" className="lg:h-auto">
      <Container className="flex-col">
        <h2 className="text-xl text-center text-pretty text-zinc-600 mb-8">
          Some of my projects I've worked on.
        </h2>
        <div className="grid md:grid-cols-[repeat(2,1fr)] w-full lg:max-w-[840px] 2xl:max-w-[42vw] gap-8">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
