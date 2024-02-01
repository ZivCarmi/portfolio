export type ProjectType = {
  title: string;
  description: string;
  badge?: string;
  github: string;
  website: string;
  style: {
    gradientDirection: "t" | "tr" | "tl" | "b" | "br" | "bl" | "r" | "l";
    color: string;
  };
};
