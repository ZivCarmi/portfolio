import { cn } from "@/lib/utils";

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {}

const Article = ({ children, className, ...props }: ArticleProps) => {
  return (
    <article {...props} className={cn("md:max-w-[700px]", className)}>
      {children}
    </article>
  );
};

export default Article;
