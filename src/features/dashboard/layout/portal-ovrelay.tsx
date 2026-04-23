"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalOverlayProps = {
  open: boolean;
  onClose: () => void;
  zIndex?: number;
};

export function PortalOverlay({
  open,
  onClose,
  zIndex = 40,
}: PortalOverlayProps) {
  // Track if component is mounted to avoid SSR issues
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after first render (client-only logic)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll lock and ESC key when overlay is open
  useEffect(() => {
    if (!open) return;

    // Close overlay when ESC key is pressed
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Prevent background scrolling when overlay is active
    document.body.style.overflow = "hidden";

    // Listen for keyboard events
    window.addEventListener("keydown", handleEsc);

    // Cleanup when overlay closes or component unmounts
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  // Do not render anything until mounted and open
  if (!mounted || !open) return null;

  // Render overlay in a portal attached to document body
  return createPortal(
    <div
      onClick={onClose}
      aria-hidden="true"
      data-overlay="true"
      className="fixed inset-0 bg-black/20 backdrop-blur-sm"
      style={{ zIndex }}
    />,
    document.body,
  );
}
