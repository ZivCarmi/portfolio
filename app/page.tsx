import { siteSections } from "@/lib/site-sections";

const Portfolio = () => {
  return siteSections.map(({ id, Component }) => (
    <Component key={id} id={id} />
  ));
};

export default Portfolio;
