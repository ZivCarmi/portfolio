import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      {...props}
      className={cn(
        "lg:h-screen flex justify-center items-center mb-[7.5rem]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
