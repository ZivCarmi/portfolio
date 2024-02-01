import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = ({ children, className, ...props }: H1Props) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl/[1.1]",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
