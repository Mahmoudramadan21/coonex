import { ArrowRightIcon } from "@/assets";
import { memo } from "react";

interface CarouselArrowsProps {
  /** Function to scroll the carousel left */
  onLeftClick: () => void;
  /** Function to scroll the carousel right */
  onRightClick: () => void;
  /** ID of the carousel container for accessibility */
  controlsId: string;
  /** Optional size for the arrow buttons (default: 48px) */
  size?: number;
  /** Optional Tailwind classes to override default styling */
  className?: string;
  /** Optional: show/hide left arrow */
  showLeft?: boolean;
  /** Optional: show/hide right arrow */
  showRight?: boolean;
}

/**
 * CarouselArrows Component
 *
 * Left & right navigation buttons for horizontal carousels.
 * Fully accessible with optional visibility control for each arrow.
 *
 * Key Features & Optimizations:
 * - Absolute positioning centered vertically
 * - Circular buttons with subtle shadow and hover effect
 * - Accessible: aria-labels and aria-controls
 * - Customizable size via prop
 * - Conditional rendering of each arrow
 * - Smooth transition on hover and focus
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function CarouselArrows({
  onLeftClick,
  onRightClick,
  controlsId,
  className = "",
  showLeft = true,
  showRight = true,
}: CarouselArrowsProps) {
  const baseClasses = `
    w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 
    absolute top-1/2 -translate-y-1/2
    z-10
    rounded-full lg:rounded-lg shadow-md
    flex items-center justify-center
    text-gray-400 hover:text-gray-500 bg-gray-300 hover:bg-gray-200
    transition cursor-pointer
  `;

  return (
    <>
      {/* Left arrow – hidden when showLeft is false */}
      {showLeft && (
        <button
          onClick={onLeftClick}
          aria-label="Scroll left"
          aria-controls={controlsId}
          className={`${baseClasses} inset-s-0 ${className}`}
        >
          <ArrowRightIcon className="ltr:rotate-180 size-3 md:size-4 lg:size-5" />
        </button>
      )}

      {/* Right arrow – hidden when showRight is false */}
      {showRight && (
        <button
          onClick={onRightClick}
          aria-label="Scroll right"
          aria-controls={controlsId}
          className={`${baseClasses} inset-e-0 ${className}`}
        >
          <ArrowRightIcon className="rtl:rotate-180 size-3 md:size-4 lg:size-5" />
        </button>
      )}
    </>
  );
}

export default memo(CarouselArrows);
