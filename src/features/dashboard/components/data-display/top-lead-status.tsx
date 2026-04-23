import { useTranslations } from "next-intl";

import { LeadStatus } from "@/features/dashboard/lib/types/dashboard";
import { memo } from "react";

// Lead status progress visualization
// Displays multiple lead categories with percentage-based progress bars

function TopLeadStatus({ topLeadStatus }: { topLeadStatus: LeadStatus[] }) {
  const t = useTranslations("Dashboard.leadStatus");

  return (
    <section className="rounded-lg border border-[#DFDFDF] bg-white p-5">
      {/* Section title */}
      <h3 className="mb-5 text-base font-semibold text-gray-600 md:text-lg">
        {t("title")}
      </h3>

      {/* Lead status list */}
      {topLeadStatus.map((lead) => {
        const translatedLabel = t(lead.labelKey);

        return (
          <div key={lead.id} className="not-last:mb-7">
            {/* Label + value row */}
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-base text-[#8C9091]">{translatedLabel}</h4>

              <p className="font-semibold text-gray-600">{lead.value}</p>
            </div>

            {/* Progress bar */}
            <div
              className="h-1 w-full overflow-hidden rounded-full bg-[#E2E2E2]"
              role="progressbar"
              aria-valuenow={lead.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={translatedLabel}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${lead.percentage}%`,
                  backgroundColor: lead.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default memo(TopLeadStatus);
