import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

import { Button } from "@/shared/components/ui/button";
import {
  IUserMenuItem,
  IUserProfile,
} from "@/features/dashboard/lib/types/header";
import { memo } from "react";

interface UserMenuProps {
  user: IUserProfile;
  items: IUserMenuItem[];
}

// User dropdown menu (profile actions, settings, logout, etc.)
function UserMenu({ user, items }: UserMenuProps) {
  const t = useTranslations("Header");

  /**
   * Split items into regular + destructive (e.g. logout)
   */
  const regularItems = items.filter((item) => !item.destructive);
  const destructiveItems = items.filter((item) => item.destructive);

  /**
   * Render menu item
   */
  const renderItem = (item: IUserMenuItem) => (
    <DropdownMenuItem
      key={item.id}
      variant={item.destructive ? "destructive" : "default"}
    >
      <Link href={item.href} className="flex items-center gap-2">
        <item.icon className="size-4" aria-hidden="true" />
        {t.rich(`userMenu.${item.id}`)}
      </Link>
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" className="flex items-center gap-2">
            <span className="hidden text-sm font-medium md:inline">
              {user.name}
            </span>

            <ChevronDown className="size-4 transition-transform duration-200" />
          </Button>
        }
      ></DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent>
        {/* Regular items */}
        {regularItems.map(renderItem)}

        {/* Separator (only if needed) */}
        {destructiveItems.length > 0 && <DropdownMenuSeparator />}

        {/* Destructive items (e.g. logout) */}
        {destructiveItems.map(renderItem)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default memo(UserMenu);
