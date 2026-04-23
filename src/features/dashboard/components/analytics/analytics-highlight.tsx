"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { Slide } from "@/features/dashboard/lib/types/dashboard";
import { useAnalyticsHighlight } from "@/features/dashboard/hooks/use-analytics-highlight";

// Rotating analytics highlight banner with auto-play + manual controls
// Supports pause-on-hover and i18n content rendering

function AnalyticsHighlight({ slides }: { slides: Slide[] }) {
  const t = useTranslations("Dashboard");

  const { activeIndex, setActiveIndex, setIsHovered } =
    useAnalyticsHighlight(slides);

  // Avoid rendering if no slides available
  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-sky-500 to-blue-400 p-6 md:p-8 md:pb-32 text-white shadow-md"
      // Pause autoplay when user interacts with the component
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base md:text-lg lg:text-2xl font-semibold">
          {t(activeSlide.titleKey)}
        </h2>

        <p className="text-xs md:text-sm text-white/80">
          {t(activeSlide.subtitleKey)}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute inset-e-6 top-6 flex gap-2">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={clsx(
                "h-2.5 w-2.5 rounded-full transition-all",
                isActive ? "bg-white" : "bg-white/40 hover:bg-white/70",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AnalyticsHighlight;
