"use client";

import { AnimatePresence } from "framer-motion";
import Navigation from "../shared/Navigation";

const NavigationMenu = () => {
  return (
    <AnimatePresence>
      <Navigation />
    </AnimatePresence>
  );
};

export default NavigationMenu;
