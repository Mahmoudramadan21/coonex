"use client";

import Image from "next/image";

import { ArrowRightIcon, MenuIcon } from "@/assets";
import { Button } from "@/shared/components/ui/button";
import { sidebarLinks } from "../lib/data/sidebar-links.data";
import { memo } from "react";
import { useSidebar } from "../hooks/use-sidebar";
import { useTranslations } from "next-intl";
import { PortalOverlay } from "./portal-ovrelay";
import { NavItem } from "../components";

function DashboardSidebar({ initialOpen }: { initialOpen: boolean }) {
  // sidebar state + handlers
  const { isOpen, openSubLinks, setIsOpen, toggleSidebar, handleLinkClick } =
    useSidebar(initialOpen);

  const t = useTranslations("Sidebar");

  return (
    <aside
      data-open={isOpen}
      className={`z-100 bg-white group h-screen border-r overflow-hidden sticky top-0 transition-[width] duration-300 ease-in-out data-[open=true]:w-64 data-[open=true]:p-3.5 data-[open=false]:w-18 data-[open=false]:p-2`}
      aria-label={t("ariaLabels.main")}
    >
      {/* Portal Overlay - show only on mobile when sidebar is open */}
      {isOpen && !initialOpen && (
        <PortalOverlay open={isOpen} onClose={() => setIsOpen(false)} />
      )}

      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-7.5">
        {/* Logo */}
        <Image
          src="/assets/images/logo.svg"
          alt={t("ariaLabels.logo")}
          priority
          width={142}
          height={24}
          className="hidden group-data-[open=true]:block"
        />

        {/* Menu Toggle Button */}
        <Button
          variant="ghost"
          onClick={toggleSidebar}
          className="hover:cursor-pointer"
          aria-label={
            isOpen
              ? t("ariaLabels.SidebarStatus.open")
              : t("ariaLabels.SidebarStatus.closed")
          }
          aria-expanded={isOpen}
          aria-controls="sidebar-content"
        >
          <MenuIcon className="size-6 rtl:rotate-180" />
        </Button>
      </div>

      {/* Sidebar Content */}
      <nav id="sidebar-content">
        {sidebarLinks.map((section) => (
          <div key={section.id}>
            {/* Section Title */}
            {t(section.id) && (
              <h5
                className={`mt-2 text-[#8C9091] tracking-wide text-xs transition-all duration-300 whitespace-nowrap hidden -translate-x-2 group-data-[open=true]:block group-data-[open=true]:translate-x-0`}
              >
                {t(section.id)}
              </h5>
            )}

            {/* Sidebar Links */}
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li
                  key={link.id}
                  data-expanded={openSubLinks.has(link.id)}
                  className="group"
                >
                  {/* Main Link */}
                  <NavItem
                    href={link.href}
                    onToggle={(e) =>
                      handleLinkClick(e, link.id, !!link.subLinks)
                    }
                    variant={link.type || "link"}
                  >
                    {/* Icon */}
                    {link.icon && (
                      <link.icon className="size-5 ml-0.5 shrink-0 group-hover/link:text-foreground transition-colors duration-200" />
                    )}

                    {/* Title */}
                    <span
                      className={`grow flex transition-all duration-300 whitespace-nowrap opacity-0 -translate-x-2 group-data-[open=true]:opacity-100 group-data-[open=true]:translate-x-0`}
                    >
                      {t(link.id)}
                    </span>

                    {/* Arrow Icon */}
                    {link.subLinks && isOpen && (
                      <ArrowRightIcon className="w-3 h-3 transition-transform duration-300 rtl:rotate-180 group-data-[expanded=true]:rotate-90" />
                    )}
                  </NavItem>

                  {/* check if link has sublinks and user has open the sublinks */}
                  <ul
                    className={`ms-7 ps-3 border-s border-border overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-data-[expanded=true]:max-h-40 group-data-[expanded=true]:opacity-100`}
                  >
                    {openSubLinks.has(link.id) &&
                      link.subLinks?.map((subLink) => (
                        <li key={subLink.id}>
                          <NavItem href={subLink.href} variant="menuItem">
                            {/* Icon */}
                            {subLink.icon && (
                              <subLink.icon className="size-5 ml-0.5 shrink-0 group-hover/link:text-foreground transition-colors duration-200" />
                            )}

                            {/* Title */}
                            <span
                              className={`transition-all duration-300 whitespace-nowrap opacity-0 -translate-x-2 group-data-[open=true]:opacity-100 group-data-[open=true]:translate-x-0`}
                            >
                              {t(subLink.id)}
                            </span>
                          </NavItem>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default memo(DashboardSidebar);
