"use client";

import { memo } from "react";

import { useCarousel } from "@/shared/hooks/use-carousel";
import CarouselArrows from "@/shared/components/ui/carousel-arrows";

import EmailStatCard from "./email-stat-card";
import { MetricCard } from "@/features/dashboard/lib/types/dashboard";

// Horizontal scrollable carousel for email analytics stats
// Supports keyboard navigation, smooth scroll, and arrow controls

function EmailStatsCarousel({
  websiteAnalyticsCards,
}: {
  websiteAnalyticsCards: MetricCard[];
}) {
  // Carousel logic abstraction (scroll, navigation, visibility of arrows)
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(320);

  return (
    <section className="relative px-3 lg:px-6 xl:px-16">
      {/* Scrollable carousel container */}
      <div
        id="email-stats-carousel"
        ref={carouselRef}
        className="flex items-center gap-8 lg:gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden"
        // Accessibility roles
        role="region"
        aria-roledescription="carousel"
        aria-label="Email statistics carousel"
        tabIndex={0}
        // Keyboard navigation support
        onKeyDown={handleKeyDown}
      >
        {/* Render metric cards */}
        {websiteAnalyticsCards.map((card) => (
          <EmailStatCard
            key={card.id}
            emails={card.emails}
            clicked={card.clicked}
          />
        ))}

        {/* Navigation arrows (conditionally visible) */}
        <CarouselArrows
          onLeftClick={scrollLeft}
          onRightClick={scrollRight}
          controlsId="email-stats-carousel"
          showLeft={arrows.showLeft}
          showRight={arrows.showRight}
        />
      </div>
    </section>
  );
}

// Memoized to prevent unnecessary re-renders when props are unchanged
export default memo(EmailStatsCarousel);
