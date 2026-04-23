"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { memo } from "react";

type NavItemVariant = "button" | "link" | "menuItem";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: NavItemVariant;

  onToggle?: (e: React.MouseEvent) => void;

  ariaExpanded?: boolean;
  ariaLabel?: string;
};

// Navigation item primitive (used across sidebar / menus / navbars)
function NavItem({
  href,
  children,
  className,
  variant = "link",
  onToggle,
  ariaExpanded = false,
  ariaLabel,
}: Props) {
  const pathname = usePathname();

  /**
   * Determine active route state
   */
  const isActive =
    Boolean(href) &&
    (() => {
      const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/");
      return (
        pathWithoutLocale === href || pathWithoutLocale.startsWith(href + "/")
      );
    })();

  /**
   * Base styles shared across all variants
   */
  const baseClasses =
    "flex w-full cursor-pointer items-center gap-3 rounded-md px-4.5 py-2.5 text-sm transition";

  const menuItemClasses =
    "mb-1 block w-full rounded-md px-4 py-2 text-xs transition";

  const activeClasses =
    "bg-[#1DB2FF] font-semibold text-white shadow-[0_2px_6px_rgba(29,178,255,0.48)]";

  const inactiveClasses =
    "text-muted-foreground hover:bg-muted hover:text-foreground";

  const classes = clsx(
    variant === "menuItem" ? menuItemClasses : baseClasses,
    isActive ? activeClasses : inactiveClasses,
    className,
  );

  /**
   * Render link element
   */
  const renderLink = () => (
    <Link
      href={href || "#"}
      className={classes}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );

  /**
   * Render button element
   */
  const renderButton = () => (
    <button
      type="button"
      className={classes}
      onClick={onToggle}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );

  /**
   * Render menu item link
   */
  const renderMenuItem = () => (
    <Link
      href={href || "#"}
      className={classes}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );

  if (variant === "button") return renderButton();
  if (variant === "menuItem") return renderMenuItem();

  return renderLink();
}

export default memo(NavItem);
