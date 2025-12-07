"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { forwardRef, useRef } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#18CCFC",
  gradientStopColor = "#6344F5",
  delay = 0,
  duration = Math.random() * 3 + 4,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = React.useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
      }}
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient
          id={`linearGradient-${id}`}
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="100"
          y1="0"
          y2="0"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M 10,50 Q 50,10 90,50"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
      />
      <motion.path
        d="M 10,50 Q 50,10 90,50"
        stroke={`url(#linearGradient-${id})`}
        strokeWidth={pathWidth}
        fill="none"
        initial={{
          strokeDasharray: 0,
          strokeDashoffset: 0,
        }}
        animate={{
          strokeDasharray: [0, 50],
          strokeDashoffset: [0, reverse ? 100 : -100],
        }}
        transition={{
          delay,
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </svg>
  );
};