import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn("w-full max-w-[1700px] px-[15vw] sm:px-28", className)}
    >
      {children}
    </div>
  );
};

export default Container;
