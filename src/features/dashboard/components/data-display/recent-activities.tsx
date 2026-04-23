import { useLocale, useTranslations } from "next-intl";
import { formatDistanceToNow } from "date-fns";
import { ar, enUS } from "date-fns/locale";

import { cn } from "@/shared/lib/utils/tailwind-cn";
import { Activity } from "@/features/dashboard/lib/types/dashboard";
import { memo } from "react";

// Recent activity feed component
// Displays user/system activities with relative timestamps

function RecentActivities({ activities }: { activities: Activity[] }) {
  const t = useTranslations("Dashboard.activities");

  const locale = useLocale() === "ar" ? ar : enUS;

  return (
    <div className="rounded-lg border border-[#DFDFDF] bg-white p-5">
      {/* Section title */}
      <h3 className="mb-5 text-base md:text-lg font-semibold text-gray-600">
        {t("title")}
      </h3>

      {/* Activity list */}
      {activities.map((activity) => {
        const isLead = activity.type === "lead";
        const isTask = activity.type === "task";

        const isActiveLead = isLead && activity.isNew;
        const isActiveTask = isTask && !activity.isNew;

        const activityTime = formatDistanceToNow(new Date(activity.time), {
          addSuffix: true,
          locale,
        });

        const name = t(activity.nameKey);
        const action = t(activity.actionKey);

        return (
          <div
            key={activity.id}
            className={cn(
              "relative mb-2 rounded-md p-3 text-sm leading-tight",
              {
                "bg-[#0077B5]/5 text-[#3d3d3d]": isLead,
                "bg-[#E56730]/5 text-[#3d3d3d]": isTask,
              },
            )}
          >
            {/* Colored indicator dot */}
            <span
              className={cn("absolute inset-e-4 top-3 h-2 w-2 rounded-full", {
                "bg-[#0077B5]": isActiveLead,
                "bg-[#E56730]": isActiveTask,
              })}
              aria-hidden="true"
            />

            {/* Activity text */}
            <p className="mb-3 me-3 text-sm text-[#3d3d3d]">
              <span className="font-semibold">{name}</span> {action}
            </p>

            {/* Timestamp */}
            <span className="text-xs text-[#8C9091]">{activityTime}</span>
          </div>
        );
      })}
    </div>
  );
}

export default memo(RecentActivities);
