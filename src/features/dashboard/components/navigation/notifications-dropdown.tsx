"use client";

import { BellIcon } from "@/assets";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

import { INotification } from "@/features/dashboard/lib/types/header";
import { useTranslations } from "use-intl";
import { memo } from "react";

// Notifications dropdown
// Shows unread count badge + list of notifications

function NotificationsDropdown({
  notifications,
}: {
  notifications: INotification[];
}) {
  const t = useTranslations("Header.notifications");

  /**
   * Count unread notifications
   */ NotificationsDropdown;
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const hasNotifications = notifications.length > 0;

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" className="relative">
            <BellIcon className="size-5" />

            {/* Unread badge */}
            {unreadCount > 0 && (
              <span
                className="absolute top-0.5 inset-e-2 h-2 w-2 rounded-full bg-red-500"
                aria-label={`${unreadCount} unread notifications`}
              />
            )}
          </Button>
        }
      ></DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent className="w-80 p-2">
        {!hasNotifications ? (
          <p className="py-4 text-center text-sm text-gray-500">
            No notifications
          </p>
        ) : (
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto">
            {notifications.map((notification, index) => {
              const isUnread = !notification.isRead;

              return (
                <div
                  key={index}
                  className={[
                    "rounded-md p-2 text-sm transition",
                    isUnread ? "bg-gray-100 font-medium" : "bg-gray-50",
                  ].join(" ")}
                >
                  {/* Title */}
                  <p>{t(notification.titleKey)}</p>

                  {/* Description */}
                  <span className="text-xs text-gray-500">
                    {t(notification.descriptionKey)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default memo(NotificationsDropdown);
