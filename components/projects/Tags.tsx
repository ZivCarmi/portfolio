import { cn, zeroPad } from "@/lib/utils";
import { Badge, badgeVariants } from "../ui/badge";
import { VariantProps } from "class-variance-authority";

type TagsProps = {
  tags: string[];
  index: number;
};

const Tags = ({ tags, index }: TagsProps) => {
  return (
    <ul className="flex items-center flex-wrap gap-1 mb-8">
      <TagBade>N.{zeroPad(index + 1, 3)}</TagBade>
      {tags.map((tag) => (
        <TagBade key={tag} variant="secondary">
          {tag}
        </TagBade>
      ))}
    </ul>
  );
};

export interface TagBadeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const TagBade = ({ children, className, ...props }: TagBadeProps) => {
  return (
    <li>
      <Badge
        {...props}
        className={cn("text-xs sm:text-[0.62rem] px-1.5", className)}
      >
        {children}
      </Badge>
    </li>
  );
};

export default Tags;
