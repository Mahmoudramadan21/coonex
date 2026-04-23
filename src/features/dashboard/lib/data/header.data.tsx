import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { IHeaderData } from "../types/header";

export const headerData: IHeaderData = {
  languages: [{ code: "en" }, { code: "ar" }],

  notifications: [
    {
      titleKey: "titles.newLead",
      descriptionKey: "descriptions.leadFromFacebook",
      isRead: false,
      createdAt: "2026-04-18",
    },
    {
      titleKey: "titles.campaignUpdate",
      descriptionKey: "descriptions.campaignUpdate",
      isRead: true,
      createdAt: "2026-04-17",
    },
    {
      titleKey: "titles.newLead",
      descriptionKey: "descriptions.leadFromInstagram",
      isRead: true,
      createdAt: "2026-04-16",
    },
    {
      titleKey: "titles.newLead",
      descriptionKey: "descriptions.leadFromGoogle",
      isRead: true,
      createdAt: "2026-04-16",
    },
    {
      titleKey: "titles.campaignUpdate",
      descriptionKey: "descriptions.campaignUpdate",
      isRead: true,
      createdAt: "2026-04-16",
    },
  ],

  user: {
    name: "Ali Ahmed",
  },

  userMenu: [
    {
      id: "profile",
      icon: UserIcon,
      href: "/profile",
    },
    {
      id: "settings",
      icon: SettingsIcon,
      href: "/settings",
    },
    {
      id: "logout",
      icon: LogOutIcon,
      href: "/logout",
      destructive: true,
    },
  ],
};
