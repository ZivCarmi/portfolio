import About from "@/components/about/About";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import { SectionDataType } from "@/types/SiteSection";

export const siteSections: SectionDataType[] = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
];
