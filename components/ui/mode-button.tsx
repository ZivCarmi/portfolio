"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type ModeButtonProps = {
  children: React.ReactNode;
  mode: string;
};

const ModeButton = ({ children, mode }: ModeButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(mode)}
      className={cn(
        "border-none bg-transparent hover:bg-transparent rounded-full w-10 h-10 p-0",
        theme === mode && "bg-accent hover:bg-accent text-site-secondary"
      )}
    >
      {children}
    </Button>
  );
};

export default ModeButton;
