"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(308deg 92.98% 52.89%) 0%, hsl(var(--primary)) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(308deg 92.98% 52.89%) 0%, hsl(var(--primary)) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(308deg 92.98% 52.89%) 0%, hsl(var(--primary)) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(308deg 92.98% 52.89%) 0%, hsl(var(--primary)) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, hsl(308deg 92.98% 52.89%) 0%, hsl(var(--primary)) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex content-center transition duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-px decoration-clone w-full px-6 py-2",
        containerClassName
      )}
      {...props}
    >
      <div className={cn("w-full text-white z-10 px-4 py-2", className)}>
        {children}
      </div>
      <motion.div
        className={cn("flex-none inset-0 overflow-hidden absolute z-0")}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="absolute z-1 flex-none inset-[2px]" />
    </Tag>
  );
}