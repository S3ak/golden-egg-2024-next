"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: isInView ? 1 : 0,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current, isInView]);

  const renderWords = () => {
    return (
      <motion.p ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 dark:text-black"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.p>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      {renderWords()}
    </div>
  );
};

export default TextGenerateEffect;
