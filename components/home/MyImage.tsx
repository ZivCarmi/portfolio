import { cn } from "@/lib/utils";
import Image from "next/image";

interface MyImageProps extends React.HTMLAttributes<HTMLElement> {}

const MyImage: React.FC<MyImageProps> = ({ className, ...props }) => {
  return (
    <figure
      {...props}
      className={cn(
        "w-[var(--me-image-width)] h-[var(--me-image-height)] relative border border-gray-100",
        className
      )}
    >
      <Image
        src="/me.jpg"
        alt="Me"
        quality={100}
        className="object-cover -mt-5 -ml-4 z-10"
        fill
        priority
      />
    </figure>
  );
};

export default MyImage;
