import { LucideIcon } from "lucide-react";

export interface ISidebarLink {
  id: string;
  href: string;
  type?: "link" | "button";
  icon?: LucideIcon;
  subLinks?: ISidebarLink[];
}

export interface ISidebarSection {
  id: string;
  links: ISidebarLink[];
}
