"use client";

import { useTranslations } from "next-intl";

import { AreaChart } from "@/shared/components/ui/area-chart";
import { useChartData } from "@/features/dashboard/hooks/use-chart-data";
import { memo } from "react";

// Top lead status area chart
// Displays lead distribution with support for yearly/monthly views and RTL layout

function TopLeadChart({ isYearly }: { isYearly: boolean }) {
  const t = useTranslations("Dashboard.leadStatus");

  // Transform and normalize chart data based on current mode (yearly/monthly)
  const { chartData, isRtl } = useChartData({
    translationNamespace: "Dashboard",
    dataKey: "topLeadStatus",
    valueKey: "value",
    labelPath: "leadStatus",
    chartLabelPath: "leadStatus.chartLabel",
    isYearly,
  });

  return (
    <section className="rounded-[10px] border border-[#DFDFDF] bg-white p-3 shadow-sm md:p-6">
      {/* Header */}
      <div className="mb-7.5 flex items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-600">
          {t("title")}
        </h3>
      </div>

      {/* Chart */}
      <AreaChart
        className="h-64 w-full md:h-85"
        data={chartData}
        index="label"
        categories={[t("chartLabel")]}
        colors={["areaChartOrange"]}
        showLegend={false}
        showXAxis
        showYAxis
        showGridLines
        yAxisWidth={45}
        isRtl={isRtl}
        fill="solid"
      />
    </section>
  );
}

export default memo(TopLeadChart);
