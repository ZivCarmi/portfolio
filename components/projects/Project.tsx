import { zeroPad } from "@/lib/utils";
import { ProjectType } from "@/types/Project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Paragraph from "../ui/Paragraph";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type ProjectProps = {
  project: ProjectType;
  index: number;
};

const Project3 = ({ project, index }: ProjectProps) => {
  return (
    <div className="relative px-col-gap">
      <div className="outline outline-1 -outline-offset-1 outline-site-secondary group rounded-[calc(var(--radius)-1px)]">
        <div className="flex flex-col rounded-md min-h-[360px] md:min-h-[25vw] p-col-gap relative bg-card duration-300 group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:z-10">
          <ul className="flex items-center flex-wrap gap-1 mb-8">
            <li>
              <Badge className="text-xs sm:text-[0.62rem] px-1.5">
                N.{zeroPad(index + 1, 3)}
              </Badge>
            </li>
            {project.tags.map((tag) => (
              <li key={tag}>
                <Badge
                  className="text-xs sm:text-[0.62rem] px-1.5"
                  variant="secondary"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
          <h3 className="text-[2.5rem] md:text-4xl font-bold tracking-tighter text-balance text-card-foreground mb-6">
            {project.title}
          </h3>
          <Paragraph className="m-0 text-xl md:text-base text-pretty font-medium text-card-foreground/50">
            {project.description}
          </Paragraph>
          <div className="mt-auto flex justify-between">
            <div className="inline-flex overflow-hidden">
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center text-card-foreground/70 sm:duration-700 sm:translate-y-3 lg:opacity-0 lg:group-hover:opacity-100 sm:group-hover:translate-y-0"
              >
                <ChevronLeft className="w-4 h-4" />
                On GitHub
              </Link>
            </div>
            <Button asChild size="icon" className="rounded-full">
              <Link href={project.website} target="_blank">
                <ChevronRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
