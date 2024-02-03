import { socials } from "@/content/socials";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Socials = ({ className, ...props }: SocialsProps) => {
  return (
    <div {...props} className={cn("flex items-center gap-3", className)}>
      {socials.map(({ href, Icon, description }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          aria-label={description}
          className="border rounded-full w-14 h-14 flex items-center justify-center border-site-secondary hover:bg-site-secondary hover:text-site-primary duration-300"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
