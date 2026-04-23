"use client";

import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@/assets";

import TasksAnalyticsChart from "./tasks-analytics-chart";
import { TasksOverview } from "@/features/dashboard/lib/types/dashboard";
import { memo } from "react";

// Tasks analytics pie chart
// Displays task distribution with total count and performance indicator

function TasksAnalytics({ tasksOverview }: { tasksOverview: TasksOverview }) {
  const t = useTranslations("Dashboard");

  const { chartSegments, totalTasks, percentage, reportTextKey } =
    tasksOverview;

  /**
   * Transform chart data for recharts
   */
  const chartData = chartSegments.map((segment) => ({
    name: segment.label,
    value: segment.percentage,
    fill: segment.color,
    count: segment.count,
  }));

  /**
   * Build chart configuration for legend & colors
   */
  const chartConfig = chartSegments.reduce((config, segment) => {
    const key = segment.label.toLowerCase().replace(/\s+/g, "_");

    config[key] = {
      label: segment.label,
      color: segment.color,
    };

    return config;
  }, {} as any);

  const isPositive = percentage > 0;
  const arrowRotation = isPositive ? "-rotate-90" : "rotate-90";
  const arrowColor = isPositive ? "text-[#28C76F]" : "text-red-500";

  return (
    <div className="flex rounded-lg border border-[#DFDFDF] bg-white p-5">
      {/* Left section (summary) */}
      <div className="mb-4">
        <h4 className="text-base md:text-lg text-[#3d3d3d]">
          {t("tasksOverview.title")}
        </h4>

        <p className="mb-1.5 text-sm md:text-base text-[#2F2B3D]/70">
          {t(reportTextKey)}
        </p>

        <p className="text-xl md:text-3xl text-[#2F2B3D]/90">{totalTasks}</p>

        {/* Performance indicator */}
        <div className={`flex items-center gap-1 ${arrowColor}`}>
          <ArrowRightIcon className={`size-3 ${arrowRotation}`} />

          <span className="text-base">{percentage}%</span>
        </div>
      </div>

      {/* Right section (pie chart - extracted) */}
      <TasksAnalyticsChart
        chartData={chartData}
        chartConfig={chartConfig}
        totalTasks={totalTasks}
        title={t("tasksOverview.total")}
      />
    </div>
  );
}

export default memo(TasksAnalytics);
