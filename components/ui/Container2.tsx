import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container2 = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }: ContainerProps, ref) => {
    return (
      <div className={cn("w-full px-8", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

export default Container2;
