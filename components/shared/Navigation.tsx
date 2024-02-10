"use client";

import { siteSections } from "@/lib/site-sections";
import { cn, convertRemToPixels } from "@/lib/utils";
import { inView, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Navigation = () => {
  const [activeSectionId, setActiveSectionId] = useState("");

  const scrollHandler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      const id = e.currentTarget.getAttribute("href")?.replace("#", "") + "";
      const section = document.getElementById(id);
      const header = document.getElementById("header");
      let headerOffset = 0;

      if (header) {
        const rawHeaderOffset = getComputedStyle(document.documentElement)
          .getPropertyValue("--header-height")
          .replace("rem", "");

        headerOffset = convertRemToPixels(+rawHeaderOffset);
      }

      if (!section) return;

      var elementPosition = section.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({ behavior: "smooth", top: offsetPosition });
    },
    []
  );

  useEffect(() => {
    inView(
      "section,footer",
      (entry) => {
        console.log(entry);

        setActiveSectionId(entry.target.id);
      },
      { amount: 0.5 }
    );
  }, [activeSectionId]);

  if (activeSectionId === "footer") {
    return null;
  }

  console.log(activeSectionId);
  return (
    <motion.nav
      className="hidden md:block absolute top-[calc(100%+(var(--col-gap)/2))] right-[var(--col-gap)] nav pointer-events-auto pr-1"
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
                "block w-3 h-3 border-2 border-site-background rotate-45 duration-100",
                activeSectionId === id
                  ? "rotate-0 bg-site-background current"
                  : ""
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
