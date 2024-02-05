import { cn } from "@/lib/utils";

interface AboutArticleProps extends React.HTMLAttributes<HTMLElement> {}

const AboutArticle = ({ children, className, ...props }: AboutArticleProps) => {
  return (
    <article
      {...props}
      className={cn("w-full md:w-3/4 lg:w-1/2 relative z-50", className)}
    >
      {children}
    </article>
  );
};

export default AboutArticle;
