"use client";

import { useEffect, useState } from "react";
import { Slide } from "@/features/dashboard/lib/types/dashboard";

// Handles slide state, autoplay, and hover pause logic
export function useAnalyticsHighlight(slides: Slide[]) {
  // Current active slide index
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Controls autoplay pause on hover
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-rotate slides every 3 seconds unless hovered or empty
  useEffect(() => {
    if (isHovered || slides.length === 0) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isHovered, slides.length]);

  return {
    activeIndex,
    setActiveIndex,
    isHovered,
    setIsHovered,
  };
}
