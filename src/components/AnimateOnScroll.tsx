"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up" | "blur-in";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  style: externalStyle,
}: AnimateOnScrollProps & { style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight * 1.1 && rect.bottom > 0;

    if (inViewport) {
      // Already in viewport — animate in immediately (with delay)
      setHasMounted(true);
      // Use a rAF so the hidden state renders first, then transition kicks in
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return;
    }

    // Not in viewport — set to hidden, then use observer
    setHasMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyles: React.CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(32px)" },
    "fade-in": { opacity: 0 },
    "fade-left": { opacity: 0, transform: "translateX(-32px)" },
    "fade-right": { opacity: 0, transform: "translateX(32px)" },
    "scale-up": { opacity: 0, transform: "scale(0.92)" },
    "blur-in": { opacity: 0, filter: "blur(8px)" },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: "translate(0) scale(1)",
    filter: "blur(0px)",
  };

  // Before JS mounts: show content normally (no animation)
  // After mount: apply animation styles
  const animationStyle: React.CSSProperties = !hasMounted
    ? { opacity: 1 }
    : {
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animationStyle,
        ...externalStyle,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  animation = "fade-up" as AnimateOnScrollProps["animation"],
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
}: {
  children: React.ReactNode[];
  className?: string;
  animation?: AnimateOnScrollProps["animation"];
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
}) {
  return (
    <>
      {children.map((child, i) => (
        <AnimateOnScroll
          key={i}
          className={`${className} h-full [&>a]:h-full [&>div]:h-full`}
          animation={animation}
          delay={baseDelay + i * staggerDelay}
          duration={duration}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
}
