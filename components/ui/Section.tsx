import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      {...props}
      className={cn("h-screen flex justify-center items-center", className)}
    >
      {children}
    </section>
  );
};

export default Section;
