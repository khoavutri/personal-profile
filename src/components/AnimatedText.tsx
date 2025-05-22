
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayOffset?: number;
  animationType?: "typewriter" | "highlight" | "letterFade";
  highlightClassName?: string;
}

const AnimatedText = ({
  text,
  className,
  once = true,
  delayOffset = 0,
  animationType = "letterFade",
  highlightClassName,
}: AnimatedTextProps) => {
  const words = text.split(" ");
  const containerRef = useRef<HTMLDivElement>(null);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i + delayOffset,
        duration: 0.4,
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i + delayOffset,
        duration: 0.4,
      },
    }),
  };

  if (animationType === "typewriter") {
    return (
      <div className={cn("overflow-hidden", className)}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: delayOffset, ease: "easeInOut" }}
          className="whitespace-nowrap overflow-hidden"
        >
          {text}
        </motion.div>
      </div>
    );
  }

  if (animationType === "highlight") {
    return (
      <span className={cn("relative inline-block", className)}>
        {text}
        <motion.span
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: delayOffset, ease: "easeInOut" }}
          className={cn(
            "absolute bottom-0 left-0 h-[8px] bg-primary/20",
            highlightClassName
          )}
        />
      </span>
    );
  }

  return (
    <div className={cn("flex flex-wrap", className)} ref={containerRef}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="mr-[0.25em] overflow-hidden">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              custom={letterIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once }}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
