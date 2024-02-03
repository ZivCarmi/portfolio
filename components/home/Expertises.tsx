import Paragraph from "../ui/Paragraph";

const Expertises = () => {
  return (
    <div className="flex sm:w-2/3 md:w-2/5 gap-12">
      <Paragraph className="text-site-secondary text-sm m-0" initial="visible">
        Expert in front-end tech, delivering pixel-perfect designs for smooth
        user experiences.
      </Paragraph>
      <Paragraph className="text-site-secondary text-sm m-0" initial="visible">
        Infusing love into code with the latest tech, I create solid and
        heartfelt digital experiences.
      </Paragraph>
    </div>
  );
};

export default Expertises;
