"use client";

import { useEffect, useState } from "react";

type useIsInViewProps = {
  defaultElementId?: string;
  elementsToObserve: string;
};

const useIsInView = ({
  defaultElementId = "",
  elementsToObserve,
}: useIsInViewProps) => {
  const [visibleSection, setVisibleSection] = useState(defaultElementId);

  useEffect(() => {
    const targetSections = document.querySelectorAll(elementsToObserve);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(String(entry.target.getAttribute("id")));
          }
        });
      },
      { threshold: 1 }
    );

    targetSections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  console.log(visibleSection);

  return visibleSection;
};

export default useIsInView;
