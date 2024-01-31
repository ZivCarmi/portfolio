import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center max-w-[1700px] w-full px-[15vw] md:px-16 lg:px-32",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
