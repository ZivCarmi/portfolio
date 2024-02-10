"use client";

import { inView, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import Container from "../ui/Container";
import { useState } from "react";
import GridLayout from "../ui/GridLayout";

const Header2 = () => {
  const { scrollY } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isHomeInView, setIsHomeInView] = useState(true);

  if (typeof document !== "undefined") {
    inView("section#home", () => {
      setIsHomeInView(true);
      return () => setIsHomeInView(false);
    });
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevScrollValue = scrollY.getPrevious();

    if (prevScrollValue === undefined) return;

    setIsScrollingDown(prevScrollValue < latest);
  });

  const variant = {
    visible: {
      y: isScrollingDown ? "calc(var(--header-height) * -1)" : 0,
      height: "var(--header-height)",
      opacity: 1,
      transition: {
        y: { duration: 0.6 },
        height: { duration: 0.5 },
        opacity: { duration: 0.25, delay: 0.15 },
      },
    },
    hidden: {
      y: "calc(var(--header-height) * -1)",
      height: 0,
      opacity: 0,
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 bottom-0 z-[300] pointer-events-none border-b transition-colors duration-500 ${
        isHomeInView ? "bg-transparent" : "bg-background"
      }`}
      initial="hidden"
      animate="visible"
      variants={variant}
    >
      <GridLayout className="absolute" />
      <Container className="flex justify-between items-center gap-4 h-full">
        <Link
          href="/"
          className="text-site-secondary text-3xl font-extrabold duration-300 logo pointer-events-auto pl-1"
        >
          ZIVI
        </Link>
        <NavigationMenu />
      </Container>
    </motion.header>
  );
};

export default Header2;
