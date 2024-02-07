import { Monitor, Moon, Sun } from "lucide-react";
import ModeButton from "./mode-button";

const modeIcons = [
  { Icon: Sun, mode: "light" },
  { Icon: Moon, mode: "dark" },
  { Icon: Monitor, mode: "system" },
];

const ModeToggle = () => {
  return (
    <div className="flex items-center border rounded-full p-1 w-fit ml-auto">
      <span className="sr-only">Toggle theme</span>
      {modeIcons.map((modeIcon) => (
        <ModeButton key={modeIcon.mode} {...modeIcon} />
      ))}
    </div>
  );
};

export default ModeToggle;
