import Link from "next/link";
import { Button } from "../ui/button";
import { ProjectType } from "@/types/Project";
import { cn } from "@/lib/utils";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center relative h-60 rounded-md z-10 shadow-md group",
        `bg-gradient-to-${project.style.gradientDirection}`,
        `from-${project.style.color}-600`,
        `to-${project.style.color}-400`
      )}
    >
      {project.badge && (
        <span className="[writing-mode:vertical-rl] rotate-180 absolute right-[calc(100%+3px)] bottom-4 z-10 text-sm text-zinc-600">
          {project.badge}
        </span>
      )}
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
        <p
          className={cn(
            "text-center text-pretty",
            `text-${project.style.color}-200`
          )}
        >
          {project.description}
        </p>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-transparent rounded-full"
          >
            <Link href={project.website} target="_blank">
              View Project
            </Link>
          </Button>
          <Button asChild variant="link" className="rounded-full underline">
            <Link href={project.github} target="_blank">
              On GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
