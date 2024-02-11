"use client";

import { cn, removePunctuation } from "@/lib/utils";
import { AboutArticleLinksType } from "@/types/About";
import { Variants, motion } from "framer-motion";
import Paragraph, { ParagraphProps } from "../ui/Paragraph";
import SkillBadge from "./SkillBadge";

interface AbourParagraphProps extends ParagraphProps {
  text: string;
  links?: AboutArticleLinksType;
}

export const paragraph: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const children: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};

const AboutParagraph = ({
  text,
  links,
  className,
  ...props
}: AbourParagraphProps) => {
  return (
    <Paragraph
      {...props}
      className={cn(
        "mb-0 text-xl/loose sm:text-3xl/snug md:w-3/4 lg:w-1/2 px-col-gap",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={paragraph}
    >
      {text.split(" ").map((word, idx) => {
        const wordWithoutPunctuation = removePunctuation(word);
        const isLinkedWord = links && links[word];
        // if it's linked word we immediately returns it. if it's not, then we make another check to see if it's a linked word without punctuation (wordWithoutPunctuation)
        const newWord = isLinkedWord
          ? isLinkedWord
          : links
          ? links[wordWithoutPunctuation]
          : word;

        return (
          <span key={idx} className="relative inline-flex overflow-hidden">
            <motion.span className="block" variants={children}>
              {typeof newWord === "object" ? (
                <SkillBadge {...newWord}>{word}</SkillBadge>
              ) : (
                word
              )}
            </motion.span>
            &nbsp;
          </span>
        );
      })}
    </Paragraph>
  );
};

export default AboutParagraph;
