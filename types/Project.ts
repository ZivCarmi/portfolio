export type ProjectType = {
  title: string;
  description: string;
  github: string;
  website: string;
  style: {
    gradientDirection: "t" | "tr" | "tl" | "b" | "br" | "bl" | "r" | "l";
    color: string;
  };
};
