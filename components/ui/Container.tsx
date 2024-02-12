import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }: ContainerProps, ref) => {
    return (
      <div {...props} className={cn("w-full px-col-gap", className)} ref={ref}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
