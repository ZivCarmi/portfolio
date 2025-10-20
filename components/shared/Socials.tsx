import { socials } from "@/content/socials";
import Link from "next/link";

interface SocialsProps extends React.HTMLAttributes<HTMLUListElement> {}

const Socials = ({ ...props }: SocialsProps) => {
  return (
    <ul {...props}>
      {socials.map(({ name, href, Icon }) => (
        <li key={name}>
          <Link className="flex items-center gap-2" href={href} target="_blank">
            <Icon />
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
