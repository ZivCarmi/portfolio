"use client";

import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/Project";
import { Variants, motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Paragraph from "../ui/Paragraph";
import { Button } from "../ui/button";
import GithubLink from "./GithubLink";
import Tags from "./Tags";

type ProjectProps = {
  project: ProjectType;
  index: number;
};

const projectVariant: Variants = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const projectVariantInner: Variants = {
  rest: {
    x: 0,
    y: 0,
    zIndex: 1,
  },
  hover: {
    x: "0.75rem",
    y: "-0.75rem",
    zIndex: 10,
  },
};

const MotionLink = motion(Link);

const Project = ({ project, index }: ProjectProps) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { amount: 1 });

  return (
    <div className="relative px-col-gap">
      <MotionLink
        href={project.website}
        target="_blank"
        className={cn("group", !isProjectInView && "pointer-events-none")}
        variants={projectVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 1, once: false }}
        ref={projectRef}
      >
        <div className="outline outline-1 -outline-offset-1 outline-site-secondary rounded-[calc(var(--radius)-1px)]">
          <motion.div
            className={cn(
              "flex flex-col rounded-md min-h-[54vh] md:min-h-[25vw] p-col-gap relative bg-card"
            )}
            variants={projectVariantInner}
            initial="rest"
            whileHover={!isMobile ? "hover" : undefined}
            whileInView={isMobile && isProjectInView ? "hover" : undefined}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Tags tags={project.tags} index={index} />
            <h3 className="text-[2.5rem] md:text-4xl font-bold tracking-tighter text-balance text-card-foreground mb-6">
              {project.title}
            </h3>
            <Paragraph className="m-0 text-xl font-medium text-card-foreground/50 md:text-base ">
              {project.description}
            </Paragraph>
            <div className="mt-auto flex justify-between">
              {project.github && (
                <GithubLink isInView={isProjectInView} link={project.github} />
              )}
              <Button size="icon" className="rounded-full ml-auto">
                <ChevronRight className="w-6 h-6 group-hover:text-site-secondary" />
              </Button>
            </div>
          </motion.div>
        </div>
      </MotionLink>
    </div>
  );
};

export default Project;
