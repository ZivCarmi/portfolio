"use client";

import useIsInView from "@/hooks/useIsInView";
import { siteSections } from "@/lib/site-sections";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
  const visibleSection = useIsInView({
    defaultElementId: "home",
    elementsToObserve: "section, footer",
  });

  if (visibleSection === "footer") {
    return null;
  }

  const scrollHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href")?.replace("#", "") + "";
    const section = document.getElementById(id);

    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="hidden md:block relative top-full nav pointer-events-auto pr-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      aria-label="Main navigation"
    >
      <ul className="flex flex-col gap-4">
        {siteSections.map(({ id }) => (
          <li key={id}>
            <Link
              onClick={(e) => scrollHandler(e)}
              href={`#${id}`}
              className={cn(
                "block w-3 h-3 border-2 border-site-primary rotate-45 duration-100",
                visibleSection === id ? "rotate-0 bg-site-primary current" : ""
              )}
              aria-label={`Go to ${id} section`}
            />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;
