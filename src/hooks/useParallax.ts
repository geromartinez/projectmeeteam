import React, { RefObject } from "react";
import { useScroll, useTransform } from "framer-motion";

type Props = {};

const useParallax = (
  distance: number,
  ref?: RefObject<HTMLElement> | undefined
) => {
  const { scrollYProgress } = useScroll({ target: ref });
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};

export default useParallax;
