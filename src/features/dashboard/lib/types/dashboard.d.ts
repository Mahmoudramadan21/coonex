import { LucideIcon } from "lucide-react";

export type ViewMode = "yearly" | "monthly";

/* ---------- Cards ---------- */

export interface MetricCard {
  id: string;
  titleKey: string;
  emails: number;
  clicked: number;
  conversionRate: string;
}

/* ---------- Lead Status ---------- */

export interface LeadStatus {
  id: string;
  labelKey: string;
  value: number;
  percentage: number;
  color: string;
}

/* ---------- Property Stat ---------- */
export interface PropertyStat {
  id: string;
  titleKey: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

/* ---------- Lead Sources ---------- */

export interface LeadSource {
  id: string;
  nameKey: string;
  leads: number;
  percentage: number;
}

/* ---------- Sales Chart ---------- */

export interface SalesDataPoint {
  id: string;
  labelKey: string;
  sales: number;
  leads?: number;
}

/* ---------- Activities ---------- */

export interface Activity {
  id: string;
  nameKey: string;
  actionKey: string;
  time: string; // ISO date or formatted later
  type: "task" | "lead";
  isNew?: boolean;
}

/* ---------- Leads ---------- */

export interface LeadSourceIcon {
  id: string;
  nameKey: string;
  icon: LucideIcon;
}

export interface NewLead {
  id: string;
  fullName: string; // user data
  source: LeadSourceIcon;
  assignedTo: string; // user data
}

/* ---------- Tasks ---------- */

export interface TaskSegment {
  color: string;
  percentage: number;
  label: string;
  count: number;
}

export interface TasksOverview {
  totalTasks: number;
  completed: number;
  percentage: number;
  reportTextKey: string;
  chartSegments: TaskSegment[];
}

/* ---------- Slide ---------- */

export interface Slide {
  titleKey: string;
  subtitleKey: string;
}

/* ---------- Main Stats ---------- */

export interface DashboardStats {
  conversionRate: number;
  totalLeads: number;

  slides: Slide[];

  websiteAnalyticsCards: MetricCard[];
  topLeadStatus: LeadStatus[];
  properties: PropertyStat[];
  leadSources: LeadSource[];
  totalSales: SalesDataPoint[];

  activitiesCount: number;

  newLeads: NewLead[];
  newLeadsCount: number;

  tasksOverview: TasksOverview;
}

export interface DashboardData {
  activities: Activity[];
  yearly: DashboardStats;
  monthly: DashboardStats;
}
