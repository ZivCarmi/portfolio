import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }: ContainerProps, ref) => {
    return (
      <div
        className={cn(
          "w-full 2xl:max-w-[1700px] px-[15vw] sm:px-20 md:px-32",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
