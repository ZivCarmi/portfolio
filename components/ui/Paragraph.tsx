import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p
      {...props}
      className={cn(
        "my-4 text-site-primary-foreground text-pretty md:max-w-[610px]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
