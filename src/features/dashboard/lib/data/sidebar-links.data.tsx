import { ISidebarSection } from "../types/sidebar";

import {
  DashboardIcon,
  WebsiteIcon,
  AdvertisingIcon,
  CrmIcon,
  SettingsIcon,
  AppsIcon,
  HelpSupportIcon,
} from "@/assets";

export const sidebarLinks: ISidebarSection[] = [
  {
    id: "main",
    links: [
      {
        id: "dashboard",
        href: "/dashboard",
        type: "link",
        icon: DashboardIcon,
      },
      {
        id: "website",
        href: "/dashboard/website",
        type: "button",
        icon: WebsiteIcon,
        subLinks: [
          {
            id: "website-overview",
            href: "/dashboard/website/overview",
          },
          {
            id: "website-pages",
            href: "/dashboard/website/pages",
          },
          {
            id: "website-analytics",
            href: "/dashboard/website/analytics",
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    links: [
      {
        id: "advertising",
        href: "/dashboard/marketing/advertising",
        type: "button",
        icon: AdvertisingIcon,
        subLinks: [
          {
            id: "ads-campaigns",
            href: "/dashboard/marketing/advertising/campaigns",
          },
          {
            id: "ads-analytics",
            href: "/dashboard/marketing/advertising/analytics",
          },
          {
            id: "ads-budget",
            href: "/dashboard/marketing/advertising/budget",
          },
        ],
      },
    ],
  },
  {
    id: "crm",
    links: [
      {
        id: "crm-main",
        href: "/dashboard/crm",
        type: "button",
        icon: CrmIcon,
        subLinks: [
          {
            id: "crm-leads",
            href: "/dashboard/crm/leads",
          },
          {
            id: "crm-customers",
            href: "/dashboard/crm/customers",
          },
          {
            id: "crm-deals",
            href: "/dashboard/crm/deals",
          },
        ],
      },
    ],
  },
  {
    id: "other",
    links: [
      {
        id: "settings",
        href: "/dashboard/settings",
        type: "link",
        icon: SettingsIcon,
      },
      {
        id: "apps",
        href: "/dashboard/apps",
        type: "link",
        icon: AppsIcon,
      },
      {
        id: "help",
        href: "/dashboard/help",
        type: "link",
        icon: HelpSupportIcon,
      },
    ],
  },
];
