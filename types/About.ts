export type AboutArticleType = {
  title: string | JSX.Element;
  text: string;
  links?: AboutArticleLinksType;
};

export type AboutArticleLinkType = {
  href: string;
  iconSrc: string;
  iconAlt: string;
};

export type AboutArticleLinksType = { [key: string]: AboutArticleLinkType };
