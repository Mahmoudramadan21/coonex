import { useRef, useCallback, useState, useEffect, KeyboardEvent } from "react";

interface CarouselArrowsVisibility {
  showLeft: boolean;
  showRight: boolean;
}

/**
 * useCarousel Hook
 *
 * Supports:
 * - Smooth horizontal scrolling
 * - RTL / LTR safe behavior
 * - Arrow visibility detection
 * - Keyboard navigation
 */
export function useCarousel(scrollAmount: number = 320) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [arrows, setArrows] = useState<CarouselArrowsVisibility>({
    showLeft: false,
    showRight: false,
  });

  /** Detect RTL safely */
  const isRTL = useCallback(() => {
    if (!carouselRef.current) return false;
    return getComputedStyle(carouselRef.current).direction === "rtl";
  }, []);

  /** Scroll Left */
  const scrollLeft = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const dir = isRTL() ? 1 : -1;

    el.scrollBy({
      left: scrollAmount * dir,
      behavior: "smooth",
    });
  }, [scrollAmount, isRTL]);

  /** Scroll Right */
  const scrollRight = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const dir = isRTL() ? -1 : 1;

    el.scrollBy({
      left: scrollAmount * dir,
      behavior: "smooth",
    });
  }, [scrollAmount, isRTL]);

  /** Update arrow visibility */
  const updateArrowsVisibility = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    const absScroll = Math.abs(scrollLeft);

    setArrows({
      showLeft: absScroll > 1,
      showRight: absScroll < maxScroll - 1,
    });
  }, []);

  /** Keyboard navigation */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.target !== carouselRef.current) return;

      switch (e.key) {
        case "ArrowRight":
          scrollRight();
          break;
        case "ArrowLeft":
          scrollLeft();
          break;
      }
    },
    [scrollLeft, scrollRight],
  );

  /** Attach listeners */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateArrowsVisibility();

    el.addEventListener("scroll", updateArrowsVisibility);
    window.addEventListener("resize", updateArrowsVisibility);

    return () => {
      el.removeEventListener("scroll", updateArrowsVisibility);
      window.removeEventListener("resize", updateArrowsVisibility);
    };
  }, [updateArrowsVisibility]);

  return {
    carouselRef,
    scrollLeft,
    scrollRight,
    handleKeyDown,
    arrows,
  };
}
