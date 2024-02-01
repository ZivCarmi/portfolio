import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = ({ className, ...props }: H1Props) => {
  return (
    <h1
      className={cn("text-6xl/[1.1] font-extrabold tracking-wide", className)}
      {...props}
    />
  );
};

export default H1;
