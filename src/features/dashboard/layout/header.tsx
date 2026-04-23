import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/features/dashboard/components/navigation/language-switcher";
import NotificationsDropdown from "@/features/dashboard/components/navigation/notifications-dropdown";
import UserMenu from "@/features/dashboard/components/navigation/user-menu";
import { headerData } from "@/features/dashboard/lib/data/header.data";

function DashboardHeader() {
  const t = useTranslations("Header");

  const { user, notifications, languages, userMenu } = headerData;

  return (
    <header className="sticky top-0 z-20 shadow-sm bg-white flex justify-between items-center px-2 py-3 md:px-4 md:py-5 lg:px-6 lg:py-6 xl:px-12 xl:py-7">
      {/* Title */}
      <h1 className="text-base md:text-lg lg:text-2xl font-bold">
        {t("title")}
      </h1>

      {/* Header Actions */}
      <div className="flex items-center">
        {/* Language Switcher */}
        <LanguageSwitcher languages={languages} />
        {/* Notifications */}
        <NotificationsDropdown notifications={notifications} />
        {/* User Profile */}
        <UserMenu user={user} items={userMenu} />
      </div>
    </header>
  );
}

export default DashboardHeader;
