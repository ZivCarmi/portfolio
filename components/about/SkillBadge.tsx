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
      className="bg-gradient-to-br from-black from-15% to-black/25 border font-medium rounded p-1 text-base inline-flex items-center"
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
