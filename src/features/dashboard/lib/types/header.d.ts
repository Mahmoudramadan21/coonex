import { LucideIcon } from "lucide-react";

export interface ILanguage {
  code: string; // "en"
}

export interface INotification {
  titleKey: string;
  descriptionKey: string;
  isRead: boolean;
  createdAt: string;
}

export interface IUserMenuItem {
  id: string;
  icon: LucideIcon;
  href: string;
  destructive?: boolean;
}

export interface IUserProfile {
  name: string;
  avatar?: string;
}

export interface IHeaderData {
  languages: ILanguage[];
  notifications: INotification[];
  user: IUserProfile;
  userMenu: IUserMenuItem[];
}
