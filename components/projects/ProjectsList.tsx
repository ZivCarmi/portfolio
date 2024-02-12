"use client";

import { projects } from "@/content/projects";
import Project from "./Project";
import { Variants, motion } from "framer-motion";

const listVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const ProjectsList = () => {
  return (
    <motion.div
      className="grid sm:grid-cols-[repeat(2,50%)] w-full gap-y-col-gap"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      {projects.map((project, idx) => (
        <Project key={project.title} project={project} index={idx} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
