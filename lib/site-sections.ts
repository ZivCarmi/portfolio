import About from "@/components/about/About";
import About2 from "@/components/about/About2";
import Home from "@/components/home/Home";
import Home2 from "@/components/home/Home2";
import Projects from "@/components/projects/Projects";
import Projects2 from "@/components/projects/Projects2";
import Wording from "@/components/wording/Wording";
import { SectionDataType } from "@/types/SiteSection";

export const siteSections: SectionDataType[] = [
  // { id: "home", Component: Home },
  // { id: "about", Component: About },
  // { id: "projects", Component: Projects },
  { id: "home", Component: Home2 },
  { id: "wording", Component: Wording },
  { id: "about", Component: About2 },
  { id: "projects", Component: Projects2 },
];
