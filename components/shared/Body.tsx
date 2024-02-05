"use client";

import useIsInView from "@/hooks/useIsInView";
import { inView } from "framer-motion";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Body = ({ children }: { children: React.ReactNode }) => {
  const visibleSection = useIsInView({ elementsToObserve: "section, footer" });

  return (
    <body className={inter.className} data-active-section={visibleSection}>
      {children}
    </body>
  );
};

export default Body;
