"use client";

import { cn, getCurrentYear } from "@/lib/utils";
import { bottomFooterVariants } from "@/lib/variants";
import { HTMLMotionProps, motion } from "framer-motion";
import { Copyright } from "lucide-react";
import dynamic from "next/dynamic";
import Container2 from "../ui/Container2";

const ModeToggle = dynamic(() => import("../ui/mode-toggle"), {
  ssr: false,
});

const BottomFooter = () => {
  return (
    <div className="pt-14 mt-32 border-t">
      <Container2 className="flex items-center">
        <BottomFooterColumn>
          <span className="inline-flex items-center">
            <Copyright className="mr-1.5 w-5 h-5" />
            {getCurrentYear()}
          </span>
        </BottomFooterColumn>
        <BottomFooterColumn>
          <span>
            Made By Me <span className="text-site-secondary">:)</span>
          </span>
        </BottomFooterColumn>
        <BottomFooterColumn className="ml-auto">
          <ModeToggle />
        </BottomFooterColumn>
      </Container2>
    </div>
  );
};

interface BottomFooterColumn extends HTMLMotionProps<"div"> {}

const BottomFooterColumn = ({ className, ...props }: BottomFooterColumn) => {
  return (
    <motion.div
      className={cn("w-1/4 px-col-gap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={bottomFooterVariants}
      {...props}
    />
  );
};

export default BottomFooter;
