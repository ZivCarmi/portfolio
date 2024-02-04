"use client";

import useIsInView from "@/hooks/useIsInView";
import { Inter } from "next/font/google";

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