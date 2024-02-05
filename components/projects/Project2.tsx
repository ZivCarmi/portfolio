import Link from "next/link";
import { Button } from "../ui/button";
import { ProjectType } from "@/types/Project";
import { cn } from "@/lib/utils";
import Paragraph from "../ui/Paragraph";

const Project2 = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center relative h-60 rounded-md z-10 shadow-md group mx-col-gap overflow-hidden",
        `bg-gradient-to-${project.style.gradientDirection}`,
        `from-${project.style.color}-600`,
        `to-${project.style.color}-400`
      )}
    >
      <h3
        className={cn(
          "text-[2.5rem] md:text-4xl font-bold tracking-wide group-hover:scale-x-110 duration-200 text-center text-balance",
          `text-${project.style.color}-200`
        )}
      >
        {project.title}
      </h3>
      <div
        className={cn(
          "opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center flex-col gap-8 rounded-md px-8",
          `bg-${project.style.color}-500`
        )}
      >
        <Paragraph
          className={cn(
            "text-center text-pretty",
            `text-${project.style.color}-200`
          )}
          initial="visible"
        >
          {project.description}
        </Paragraph>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-transparent rounded-full"
          >
            <Link href={project.website} target="_blank" className="text-white">
              View Project
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="rounded-full underline hover:text-accent-foreground"
          >
            <Link href={project.github} target="_blank" className="text-white">
              On GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project2;
