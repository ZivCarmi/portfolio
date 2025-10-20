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
      <TagBadge>N.{zeroPad(index + 1, 3)}</TagBadge>
      {tags.map((tag) => (
        <TagBadge key={tag} variant="secondary">
          {tag}
        </TagBadge>
      ))}
    </ul>
  );
};

export interface TagBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const TagBadge = ({ children, className, ...props }: TagBadgeProps) => {
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
