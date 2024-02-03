import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }: SectionProps, ref) => {
    return (
      <section
        className={cn(
          "flex justify-center mb-[7.5rem] tall:lg:h-screen",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);

export default Section;
