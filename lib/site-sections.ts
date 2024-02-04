import About2 from "@/components/about/About2";
import Home2 from "@/components/home/Home2";
import Projects2 from "@/components/projects/Projects2";
import Wording from "@/components/wording/Wording";
import { SectionDataType } from "@/types/SiteSection";

export const siteSections: SectionDataType[] = [
  { id: "home", Component: Home2 },
  { id: "wording", Component: Wording },
  { id: "about", Component: About2 },
  { id: "projects", Component: Projects2 },
];
