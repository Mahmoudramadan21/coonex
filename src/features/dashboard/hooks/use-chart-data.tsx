// hooks/use-chart-data.ts
import { useMemo } from "react";
import { dashboardData } from "@/features/dashboard/lib/data/dashboard.data";
import { useLocale, useTranslations } from "next-intl";

interface IUseChartDataProps {
  /** Translation namespace (e.g. "Dashboard") */
  translationNamespace: string;

  /** Key used to access the correct dataset inside dashboardData */
  dataKey: "totalSales" | "topLeadStatus";

  /** Property name used to extract numeric value from each item */
  valueKey: "sales" | "value";

  /** Base path for translating item labels */
  labelPath: string;

  /** Translation key for the chart legend label */
  chartLabelPath: string;

  /** Toggle between yearly and monthly data */
  isYearly: boolean;
}

/**
 * Custom hook to prepare chart data from dashboardData.
 *
 * Responsibilities:
 * - Select correct dataset (monthly / yearly)
 * - Map raw data into chart-friendly format
 * - Apply translations for labels and legend
 * - Detect RTL layout based on current locale
 */
export function useChartData({
  translationNamespace,
  dataKey,
  valueKey,
  labelPath,
  chartLabelPath,
  isYearly,
}: IUseChartDataProps) {
  const locale = useLocale();

  /** Determine if current layout should be RTL (used by charts) */
  const isRtl = locale === "ar";

  /** Translation function scoped to provided namespace */
  const t = useTranslations(translationNamespace);

  /**
   * Memoized transformation:
   * Converts raw dashboard data into chart-compatible structure
   */
  const chartData = useMemo(() => {
    const stats = dashboardData;

    /** Pick dataset based on selected mode */
    const currentData = isYearly
      ? stats.yearly[dataKey]
      : stats.monthly[dataKey];

    /** Translated label used as chart series key */
    const chartLabel = t(chartLabelPath);

    return currentData.map((item: any) => ({
      /** Translated label for X-axis/category */
      label: t(`${labelPath}.${item.labelKey}`),

      /** Dynamic key for chart value (used by chart library) */
      [chartLabel]: item[valueKey],
    }));
  }, [isYearly, t, dataKey, valueKey, labelPath, chartLabelPath]);

  return {
    /** Current mode flag (useful for UI or logic outside the hook) */
    isYearly,

    /** Final transformed data ready for chart components */
    chartData,

    /** RTL flag for chart direction/layout */
    isRtl,
  };
}
