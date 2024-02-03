import { cn } from "@/lib/utils";
import Image from "next/image";

interface MyImageProps extends React.HTMLAttributes<HTMLElement> {}

const MyImage: React.FC<MyImageProps> = ({ className, ...props }) => {
  return (
    <figure
      {...props}
      className={cn(
        "w-[var(--my-image-width)] h-[var(--my-image-height)] relative border border-gray-100 mr-[calc(var(--my-image-border-space)*-1)]",
        className
      )}
    >
      <Image
        src="/me.jpg"
        alt="Myself - Ziv Carmi"
        quality={100}
        className="object-cover -mt-8 -ml-[var(--my-image-border-space)] z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
      />
    </figure>
  );
};

export default MyImage;
