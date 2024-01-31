"use client";

import Image from "next/image";
import Article from "../ui/Article";
import Container from "../ui/Container";
import H2 from "../ui/H2";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600 && !isMobile) {
        setIsMobile(true);
        return;
      }

      !isMobile && setIsMobile(false);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isMobile);

  return (
    <Section
      id="home"
      className="h-auto flex-col items-start relative bg-site-primary sm:bg-gradient-to-r sm:from-site-primary sm:to-50% sm:via-site-primary sm:via-[66.67%] sm:to-site-secondary sm:pb-16"
    >
      <Container className="flex-col items-start max-h-[66.67%]">
        <div className="flex flex-col w-full md:h-[calc(var(--me-image-height)+_var(--me-image-back-border-height))] mt-[calc(var(--header-height))]">
          <Article className="mt-16">
            <H2 className="text-site-secondary text-6xl/[1.1]">
              Full-Stack
              <br />
              Developer
              <span className="text-site-secondary-foreground">.</span>
            </H2>
            <Paragraph className="text-white text-xl/8 mt-6">
              Passionate Full-Stack Developer dedicated to crafting immersive
              and intuitive user interfaces that seamlessly blend form and
              function.
            </Paragraph>
          </Article>
          {!isMobile && (
            <figure className="absolute right-[calc(33.33%_-_var(--me-image-width)/2)] w-[var(--me-image-width)] h-[var(--me-image-height)] max-w-[380px] max-h-[400px]">
              <Image
                src="/me.jpg"
                alt="Me"
                quality={100}
                className="object-cover z-10"
                fill
                priority
              />
              <div className="w-full h-full border absolute top-[var(--me-image-back-border-height)] left-9" />
            </figure>
          )}
        </div>
      </Container>
      <Container>
        <div className="flex md:w-1/2 gap-12 mt-20 mb-10">
          <Paragraph className="text-site-secondary text-sm m-0">
            Expert in front-end tech, delivering pixel-perfect designs for
            seamless user experiences.
          </Paragraph>
          <Paragraph className="text-site-secondary text-sm m-0">
            Infusing love into code with the latest tech, I create seamless and
            heartfelt digital experiences.
          </Paragraph>
        </div>
      </Container>
      <Container className="justify-center bg-site-secondary py-20">
        {isMobile && (
          <figure className="w-[var(--me-image-width)] h-[var(--me-image-height)] relative border border-gray-100">
            <Image
              src="/me.jpg"
              alt="Me"
              quality={100}
              className="object-cover -mt-5 -ml-4"
              fill
              priority
            />
          </figure>
        )}
      </Container>
    </Section>
  );
};
export default Home;
