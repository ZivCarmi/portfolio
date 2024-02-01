import { cn } from "@/lib/utils";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = ({ children, className, ...props }: H2Props) => {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
