"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "./button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModeButtonProps extends ButtonProps {
  Icon: LucideIcon;
  mode: string;
}

const ModeButton = ({ mode, Icon, children, ...props }: ModeButtonProps) => {
  const { theme, setTheme } = useTheme();
  const isActive = theme === mode;

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(mode)}
      className="border-none bg-transparent hover:bg-transparent rounded-full w-10 h-10 p-0 relative"
      {...props}
    >
      <Icon className={cn("w-4 h-4", isActive && "text-site-secondary")} />
      {isActive && (
        <motion.div
          layoutId="highlight"
          className="rounded-full bg-accent absolute w-full h-full -z-10"
          transition={{
            layout: {
              duration: 0.2,
              ease: "circInOut",
            },
          }}
        />
      )}
    </Button>
  );
};

export default ModeButton;
