import Image from "next/image";

interface SkillBadgeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconSrc: string;
  iconAlt: string;
}

const SkillBadge = ({
  iconSrc,
  iconAlt,
  children,
  ...props
}: SkillBadgeProps) => {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4"
    >
      <Image
        src={iconSrc}
        width="0"
        height="0"
        alt={iconAlt}
        className="w-4 h-4 mr-1"
      />
      {children}
    </a>
  );
};

export default SkillBadge;
