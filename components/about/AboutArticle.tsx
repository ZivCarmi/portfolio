import { cn } from "@/lib/utils";

interface AboutArticleProps extends React.HTMLAttributes<HTMLElement> {}

const AboutArticle = ({ children, className, ...props }: AboutArticleProps) => {
  return (
    <article {...props} className={cn("relative z-50", className)}>
      {children}
    </article>
  );
};

export default AboutArticle;
