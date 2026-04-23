"use client";

import { useTranslations } from "next-intl";

import { BarChart } from "@/shared/components/ui/bar-chart";

import { useChartData } from "@/features/dashboard/hooks/use-chart-data";
import { valueFormatter } from "@/features/dashboard/lib/utils/formatters.utils";
import { memo } from "react";

// Total sales bar chart component
// Displays sales analytics with support for yearly/monthly toggle and RTL layouts

function TotalSalesChart({ isYearly }: { isYearly: boolean }) {
  const t = useTranslations("Dashboard.totalSales");

  // Prepare chart data + RTL detection via custom hook
  const { chartData, isRtl } = useChartData({
    translationNamespace: "Dashboard",
    dataKey: "totalSales",
    valueKey: "sales",
    labelPath: "totalSales.date",
    chartLabelPath: "totalSales.chartLabel",
    isYearly,
  });

  return (
    <section className="rounded-[10px] border border-[#DFDFDF] bg-white p-3 shadow-sm md:p-6">
      {/* Chart Header */}
      <div className="mb-7.5 flex items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-600">
          {t("title")}
        </h3>
      </div>

      {/* Chart Container */}
      <div className="transition-all duration-300 ease-in-out">
        <BarChart
          className="h-64 w-full md:h-85"
          data={chartData}
          index="label"
          categories={[t("chartLabel")]}
          colors={["barChartBrand"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showXAxis
          showYAxis
          showGridLines
          yAxisWidth={45}
          barCategoryGap={isYearly ? "46%" : "38%"}
          layout="horizontal"
          isRtl={isRtl}
        />
      </div>
    </section>
  );
}

export default memo(TotalSalesChart);
