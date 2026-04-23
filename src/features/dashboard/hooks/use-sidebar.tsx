"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Hook to manage sidebar and sub-links state
 */
export function useSidebar(initialOpen: boolean = true) {
  // Sidebar open/close state
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  // IDs of currently open sub-links
  const [openSubLinks, setOpenSubLinks] = useState<Set<string>>(new Set());

  // Sync sidebar state with screen resize
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // screen <= 768 → close sidebar
        setIsOpen(false);
        setOpenSubLinks(new Set());
      } else {
        // screen > 768 → open sidebar
        setIsOpen(true);
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  // Toggle sidebar + reset sub-links
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
    setOpenSubLinks(new Set());
  }, []);

  // Toggle a specific sub-link
  const toggleSubLink = useCallback((id: string) => {
    setOpenSubLinks((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id); // if open → close it
      } else {
        newSet.add(id); // if closed → open it
      }

      return newSet;
    });
  }, []);

  // Handle link click
  const handleLinkClick = useCallback(
    (e: React.MouseEvent, id: string, hasSubLinks?: boolean) => {
      if (!hasSubLinks) return; // no sub-links → allow navigation

      e.preventDefault();

      // open sidebar first if it's closed
      if (!isOpen) {
        setIsOpen(true);
      }

      toggleSubLink(id);
    },
    [isOpen, toggleSubLink],
  );

  return {
    isOpen,
    setIsOpen,
    openSubLinks,
    toggleSidebar,
    handleLinkClick,
  };
}
