import { cn } from "@/lib/utils";

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const GridLayout = ({ className, ...props }: GridLayoutProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none flex justify-between px-[var(--col-gap)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className="w-[1px] bg-border odd:hidden sm:odd:block sm:even:hidden md:even:block"
        />
      ))}
    </div>
  );
};

export default GridLayout;
