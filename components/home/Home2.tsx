"use client";

import { useInView } from "framer-motion";
import Container2 from "../ui/Container2";
import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";
import Section, { SectionProps } from "../ui/Section";
import { useRef } from "react";

const Home2 = ({ ...props }: SectionProps) => {
  // const sectionRef = useRef(null);
  // const isInView = useInView(sectionRef, { amount: 1 });

  // console.log(isInView);

  return (
    <Section
      {...props}
      // ref={sectionRef}
      className="h-[90vh] md:h-screen flex-col bg-background md:bg-gradient-to-r sm:from-transparent sm:from-[62.5%] sm:to-site-secondary sm:to-[62.5%] mb-40 relative"
    >
      <div className="w-full h-full flex flex-col justify-center mt-[var(--header-height)] gap-[calc(var(--header-height)-3rem)]">
        <Container2 className="md:w-[62.5%] md:pr-0 relative z-50">
          <H1
            className="text-site-secondary text-9xl p-1"
            aria-label="Full Stack Developer"
          >
            <span>Full Stack</span>
            <div className="ml-20">
              Developer
              <span className="text-site-secondary-foreground">.</span>
            </div>
          </H1>
        </Container2>
        <Container2 className="bg-site-secondary md:bg-transparent py-24 md:py-0 flex items-center justify-center">
          <div className="sm:w-1/2 md:w-1/4 ml-auto">
            <Paragraph
              className="text-background text-xl m-0 border-t border-b border-border p-1 font-medium"
              initial="visible"
            >
              <span className="font-bold">I like to create</span> seamless and
              immersive user <span className="font-bold">interfaces that</span>{" "}
              harmoniously blend{" "}
              <span className="font-bold">form and function</span>.
            </Paragraph>
          </div>
        </Container2>
      </div>
    </Section>
  );
};

export default Home2;
