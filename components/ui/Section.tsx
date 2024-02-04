import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }: SectionProps, ref) => {
    return (
      <section
        className={cn("flex justify-center mb-52", className)}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);

export default Section;
