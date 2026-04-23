"use client";

// Client Component (Interactive Dashboard UI)
// Responsible for:
// - State management (monthly/yearly toggle)
// - Rendering dashboard widgets
// - Handling user interactions

import { useState } from "react";
import {
  TotalSalesChart,
  TopLeadChart,
  NewLeadsTable,
  AnalyticsHighlight,
  EmailStatsCarousel,
  TopLeadStatus,
  StatCards,
  RecentActivities,
  TasksAnalytics,
  SalesModeDropdown,
} from "@/features/dashboard/components";

import { dashboardData } from "@/features/dashboard/lib/data/dashboard.data";
import { headerData } from "@/features/dashboard/lib/data/header.data";
import { useTranslations } from "next-intl";

// Dashboard Client Wrapper
export default function DashboardClient({ locale }: { locale: string }) {
  // Toggle between yearly and monthly analytics
  const [isYearly, setIsYearly] = useState<boolean>(true);

  // Select dataset based on current mode
  const currentData = isYearly ? dashboardData.yearly : dashboardData.monthly;

  const {
    slides,
    websiteAnalyticsCards,
    topLeadStatus,
    properties,
    tasksOverview,
    newLeads,
  } = currentData;

  const { activities } = dashboardData;
  const { user } = headerData;

  const t = useTranslations();

  return (
    <div className="flex flex-col">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between gap-4 mb-7.5">
        <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-gray-600">
          {`${t("greeting")} ${user.name}`}
        </h3>

        {/* Toggle Dashboard Mode (Yearly / Monthly) */}
        <SalesModeDropdown isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[65%_30%] gap-7 w-full">
        {/* LEFT SIDE - Main Analytics */}
        <div className="flex flex-col gap-10 w-full">
          <AnalyticsHighlight slides={slides} />
          <EmailStatsCarousel websiteAnalyticsCards={websiteAnalyticsCards} />
          <TotalSalesChart isYearly={isYearly} />
          <TopLeadChart isYearly={isYearly} />
          <NewLeadsTable newLeads={newLeads} />
        </div>

        {/* RIGHT SIDE - Insights & Summary */}
        <div className="flex flex-col gap-10 w-full">
          <TopLeadStatus topLeadStatus={topLeadStatus} />
          <StatCards properties={properties} />
          <RecentActivities activities={activities} />
          <TasksAnalytics tasksOverview={tasksOverview} />
        </div>
      </div>
    </div>
  );
}
