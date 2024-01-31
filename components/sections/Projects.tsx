import Link from "next/link";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <Section id="projects">
      <Container className="flex-col">
        <h2 className="text-xl text-center text-pretty text-zinc-600 mb-8">
          Some of my projects I've worked on.
        </h2>
        <div className="grid gap-8 w-full">
          <div className="flex items-center justify-center relative h-60 rounded-md z-10 bg-gradient-to-br from-blue-600 to-blue-400 shadow-md group">
            <span className="[writing-mode:vertical-rl] rotate-180 absolute right-[calc(100%+3px)] bottom-4 z-10 text-sm text-zinc-600">
              FAVORITE
            </span>
            <h3 className="text-5xl font-bold tracking-wide text-blue-200 group-hover:scale-x-110 duration-200">
              Monopolyz
            </h3>
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col gap-8 bg-blue-500 rounded-md px-8 text-center text-pretty text-white">
              Enjoy classic gameplay with friends in this digital version. Buy,
              trade, and build your empire in a virtual world of property
              domination.
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent rounded-full"
                >
                  <Link href={"/"} target="_blank">
                    View Project
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="rounded-full underline"
                >
                  <Link href={"/"} target="_blank">
                    On GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
