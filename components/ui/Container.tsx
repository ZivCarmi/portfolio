import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }: ContainerProps, ref) => {
    return (
      <div className={cn("w-full px-8", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
