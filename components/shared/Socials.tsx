import { socials } from "@/content/socials";
import Link from "next/link";

interface SocialsProps extends React.HTMLAttributes<HTMLUListElement> {}

const Socials = ({ ...props }: SocialsProps) => {
  return (
    <ul {...props}>
      {socials.map(({ name, href }) => (
        <li key={name}>
          <Link href={href} target="_blank">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
