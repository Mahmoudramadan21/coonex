import { useTranslations } from "next-intl";

import { PropertyStat } from "@/features/dashboard/lib/types/dashboard";
import { memo } from "react";

// Stat cards section
// Displays key property metrics with icon and colored background

function StatCards({ properties }: { properties: PropertyStat[] }) {
  const t = useTranslations("Dashboard.cards");

  return (
    <section className="flex flex-col gap-8">
      {properties.map((property) => {
        const Icon = property.icon;
        const translatedTitle = t(property.titleKey);

        return (
          <div
            key={property.id}
            className="flex items-center justify-between rounded-lg p-4"
            style={{ backgroundColor: property.color }}
          >
            {/* Text content */}
            <div className="flex flex-col justify-between">
              <p className="text-base md:text-lg font-bold text-white">
                {property.value}
              </p>

              <h3 className="text-base md:text-base text-gray-200">{translatedTitle}</h3>
            </div>

            {/* Icon */}
            <Icon className="size-16" aria-hidden="true" />
          </div>
        );
      })}
    </section>
  );
}

export default memo(StatCards);
