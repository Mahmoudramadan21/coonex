import { Search, Globe, Mail, Phone, Video } from "lucide-react";
import { DashboardData } from "../types/dashboard";
import {
  AvailablePropertiesIcon,
  RentPropertiesIcon,
  SoldPropertiesIcon,
  TotalPropertiesIcon,
} from "@/assets";

export const dashboardData: DashboardData = {
  /* ================= ACTIVITIES ================= */
  activities: [
    {
      id: "m1",
      nameKey: "names.sara",
      actionKey: "leads.contactMany",
      time: "2026-04-21",
      type: "lead",
      isNew: true,
    },
    {
      id: "m2",
      nameKey: "names.sara",
      actionKey: "leads.contactMany",
      time: "2026-04-20",
      type: "lead",
      isNew: false,
    },
    {
      id: "m3",
      nameKey: "names.sara",
      actionKey: "tasks.contactMany",
      time: "2026-04-20",
      type: "task",
      isNew: true,
    },
    {
      id: "m4",
      nameKey: "names.sara",
      actionKey: "tasks.contactMany",
      time: "2026-04-19",
      type: "task",
      isNew: false,
    },
  ],

  yearly: {
    conversionRate: 27,
    totalLeads: 8420,

    /* ================= SLIDES ================= */
    slides: [
      {
        titleKey: "slides.yearly.websiteAnalytics.title",
        subtitleKey: "slides.yearly.websiteAnalytics.subtitle",
      },
      {
        titleKey: "slides.yearly.leadsGrowth.title",
        subtitleKey: "slides.yearly.leadsGrowth.subtitle",
      },
      {
        titleKey: "slides.yearly.salesPerformance.title",
        subtitleKey: "slides.yearly.salesPerformance.subtitle",
      },
    ],

    /* ================= CARDS ================= */
    websiteAnalyticsCards: [
      {
        id: "campaign-1",
        titleKey: "websiteAnalytics",
        emails: 12346,
        clicked: 967,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-2",
        titleKey: "websiteAnalytics",
        emails: 2456,
        clicked: 874,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-3",
        titleKey: "websiteAnalytics",
        emails: 6845,
        clicked: 2489,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-4",
        titleKey: "websiteAnalytics",
        emails: 2456,
        clicked: 421,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-5",
        titleKey: "websiteAnalytics",
        emails: 6845,
        clicked: 2489,
        conversionRate: "28.5%",
      },

      {
        id: "campaign-6",
        titleKey: "websiteAnalytics",
        emails: 5786,
        clicked: 2458,
        conversionRate: "28.5%",
      },

      {
        id: "campaign-7",
        titleKey: "websiteAnalytics",
        emails: 4268,
        clicked: 789,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-8",
        titleKey: "websiteAnalytics",
        emails: 4268,
        clicked: 789,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-9",
        titleKey: "websiteAnalytics",
        emails: 4268,
        clicked: 789,
        conversionRate: "28.5%",
      },
    ],

    /* ================= LEAD STATUS ================= */
    topLeadStatus: [
      {
        id: "contacted",
        labelKey: "contacted",
        value: 2100,
        percentage: 16,
        color: "#29C2C2",
      },
      {
        id: "qualified",
        labelKey: "qualified",
        value: 1600,
        percentage: 68,
        color: "#2AC175",
      },
      {
        id: "proposal",
        labelKey: "proposal",
        value: 980,
        percentage: 58,
        color: "#8B77ED",
      },
      {
        id: "closedWon",
        labelKey: "closedWon",
        value: 720,
        percentage: 30,
        color: "#F10022",
      },
      {
        id: "closedLost",
        labelKey: "closedLost",
        value: 0,
        percentage: 0,
        color: "#0055FF",
      },
    ],

    /* ================= PROPERTIES ================= */
    properties: [
      {
        id: "totalProperties",
        titleKey: "totalProperties",
        value: 860,
        color: "#2B2F8A",
        icon: TotalPropertiesIcon,
      },
      {
        id: "sold",
        titleKey: "sold",
        value: 540,
        color: "#2B2F8A",
        icon: SoldPropertiesIcon,
      },
      {
        id: "rent",
        titleKey: "rent",
        value: 260,
        color: "#2AC175",
        icon: RentPropertiesIcon,
      },
      {
        id: "available",
        titleKey: "available",
        value: 320,
        color: "#0077B5",
        icon: AvailablePropertiesIcon,
      },
    ],

    /* ================= LEAD SOURCES ================= */
    leadSources: [
      { id: "search", nameKey: "Search", leads: 3200, percentage: 38 },
      { id: "tiktok", nameKey: "Tiktok", leads: 2100, percentage: 25 },
      { id: "social", nameKey: "Social", leads: 1400, percentage: 17 },
      { id: "email", nameKey: "Email", leads: 980, percentage: 12 },
      { id: "phone", nameKey: "Phone", leads: 740, percentage: 8 },
    ],

    /* ================= SALES ================= */
    totalSales: [
      { id: "jan", labelKey: "jan", sales: 4200, leads: 120 },
      { id: "feb", labelKey: "feb", sales: 5200, leads: 180 },
      { id: "mar", labelKey: "mar", sales: 6100, leads: 210 },
      { id: "apr", labelKey: "apr", sales: 5800, leads: 190 },
      { id: "may", labelKey: "may", sales: 6900, leads: 240 },
      { id: "jun", labelKey: "jun", sales: 7200, leads: 260 },
      { id: "jul", labelKey: "jul", sales: 8100, leads: 300 },
      { id: "aug", labelKey: "aug", sales: 7900, leads: 280 },
      { id: "sep", labelKey: "sep", sales: 8600, leads: 320 },
      { id: "oct", labelKey: "oct", sales: 9100, leads: 350 },
      { id: "nov", labelKey: "nov", sales: 9700, leads: 380 },
      { id: "dec", labelKey: "dec", sales: 10400, leads: 420 },
    ],

    activitiesCount: 42,

    /* ================= NEW LEADS ================= */
    newLeads: [
      {
        id: "1",
        fullName: "Ahmed Ali",
        source: { id: "search", nameKey: "search", icon: Search },
        assignedTo: "Mohamed",
      },
      {
        id: "2",
        fullName: "Sara Mohamed",
        source: { id: "tiktok", nameKey: "Tiktok", icon: Video },
        assignedTo: "Ali",
      },
      {
        id: "3",
        fullName: "Omar Hassan",
        source: { id: "google", nameKey: "google", icon: Globe },
        assignedTo: "Youssef",
      },
      {
        id: "4",
        fullName: "Nour Ali",
        source: { id: "email", nameKey: "email", icon: Mail },
        assignedTo: "Karim",
      },
      {
        id: "5",
        fullName: "Hassan Mahmoud",
        source: { id: "phone", nameKey: "phone", icon: Phone },
        assignedTo: "Omar",
      },
    ],

    newLeadsCount: 18,

    /* ================= TASKS ================= */
    tasksOverview: {
      totalTasks: 320,
      completed: 245,
      percentage: 55,
      reportTextKey: "tasksOverview.yearlyReport",
      chartSegments: [
        { color: "#4CAF50", percentage: 55, label: "Completed", count: 16 },
        { color: "#FF9800", percentage: 30, label: "In Progress", count: 10 },
        { color: "#F44336", percentage: 10, label: "Overdue", count: 5 },
        { color: "#2196F3", percentage: 5, label: "Not Started", count: 1 },
      ],
    },
  },

  /* ================= MONTHLY ================= */
  monthly: {
    conversionRate: 21,
    totalLeads: 1260,

    /* ================= SLIDES ================= */
    slides: [
      {
        titleKey: "slides.monthly.websiteAnalytics.title",
        subtitleKey: "slides.monthly.websiteAnalytics.subtitle",
      },
      {
        titleKey: "slides.monthly.leadsGrowth.title",
        subtitleKey: "slides.monthly.leadsGrowth.subtitle",
      },
      {
        titleKey: "slides.monthly.salesPerformance.title",
        subtitleKey: "slides.monthly.salesPerformance.subtitle",
      },
    ],

    /* ================= CARDS ================= */
    websiteAnalyticsCards: [
      {
        id: "campaign-1",
        titleKey: "websiteAnalytics",
        emails: 12346,
        clicked: 967,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-2",
        titleKey: "websiteAnalytics",
        emails: 12346,
        clicked: 967,
        conversionRate: "28.5%",
      },
      {
        id: "campaign-3",
        titleKey: "websiteAnalytics",
        emails: 12346,
        clicked: 967,
        conversionRate: "28.5%",
      },
    ],

    /* ================= LEAD STATUS ================= */
    topLeadStatus: [
      {
        id: "contacted",
        labelKey: "contacted",
        value: 1000,
        percentage: 42,
        color: "#29C2C2",
      },
      {
        id: "qualified",
        labelKey: "qualified",
        value: 700,
        percentage: 29,
        color: "#2AC175",
      },
      {
        id: "proposal",
        labelKey: "proposal",
        value: 300,
        percentage: 12,
        color: "#8B77ED",
      },
      {
        id: "closedWon",
        labelKey: "closedWon",
        value: 450,
        percentage: 18,
        color: "#F10022",
      },
      {
        id: "closedLost",
        labelKey: "closedLost",
        value: 0,
        percentage: 0,
        color: "#0055FF",
      },
    ],

    /* ================= PROPERTIES ================= */
    properties: [
      {
        id: "totalProperties",
        titleKey: "totalProperties",
        value: 120,
        color: "#2B2F8A",
        icon: TotalPropertiesIcon,
      },
      {
        id: "sold",
        titleKey: "sold",
        value: 40,
        color: "#E56730",
        icon: SoldPropertiesIcon,
      },
      {
        id: "rent",
        titleKey: "rent",
        value: 12,
        color: "#2AC175",
        icon: RentPropertiesIcon,
      },
      {
        id: "available",
        titleKey: "available",
        value: 68,
        color: "#0077B5",
        icon: AvailablePropertiesIcon,
      },
    ],

    /* ================= LEAD SOURCES ================= */
    leadSources: [
      { id: "facebook", nameKey: "facebook", leads: 420, percentage: 33 },
      { id: "tiktok", nameKey: "Tiktok", leads: 310, percentage: 25 },
      { id: "google", nameKey: "google", leads: 210, percentage: 17 },
      { id: "email", nameKey: "email", leads: 180, percentage: 14 },
      { id: "referral", nameKey: "referral", leads: 140, percentage: 11 },
    ],

    /* ================= SALES (Days of Month) ================= */
    totalSales: [
      { id: "w1", labelKey: "week1", sales: 3400, leads: 900 },
      { id: "w2", labelKey: "week2", sales: 2900, leads: 500 },
      { id: "w3", labelKey: "week3", sales: 3100, leads: 300 },
      { id: "w4", labelKey: "week4", sales: 4000, leads: 310 },
    ],

    activitiesCount: 14,

    /* ================= NEW LEADS ================= */
    newLeads: [
      {
        id: "m1",
        fullName: "Ahmed Ali",
        source: { id: "search", nameKey: "search", icon: Search },
        assignedTo: "Mohamed",
      },
      {
        id: "m2",
        fullName: "Sara Mohamed",
        source: { id: "tiktok", nameKey: "Tiktok", icon: Video },
        assignedTo: "Ali",
      },
      {
        id: "m3",
        fullName: "Omar Hassan",
        source: { id: "google", nameKey: "google", icon: Globe },
        assignedTo: "Youssef",
      },
    ],

    newLeadsCount: 7,

    /* ================= TASKS ================= */
    tasksOverview: {
      totalTasks: 64,
      completed: 38,
      percentage: 45,
      reportTextKey: "tasksOverview.monthlyReport",
      chartSegments: [
        { color: "#4CAF50", percentage: 45, label: "Completed", count: 29 },
        { color: "#FF9800", percentage: 25, label: "In Progress", count: 16 },
        { color: "#F44336", percentage: 20, label: "Overdue", count: 13 },
        { color: "#2196F3", percentage: 10, label: "Not Started", count: 6 },
      ],
    },
  },
};
