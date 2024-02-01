import { cn } from "@/lib/utils";

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {}

const Article = ({ children, className, ...props }: ArticleProps) => {
  return (
    <article className={cn("md:max-w-[700px]", className)} {...props}>
      {children}
    </article>
  );
};

export default Article;
