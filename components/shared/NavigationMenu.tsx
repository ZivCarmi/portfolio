"use client";

import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

const NavigationMenu = () => {
  return (
    <AnimatePresence>
      <Navigation />
    </AnimatePresence>
  );
};

export default NavigationMenu;
