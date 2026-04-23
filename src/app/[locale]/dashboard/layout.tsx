import { headers } from "next/headers";
import { userAgent } from "next/server";

import { DashboardHeader, DashboardSidebar } from "@/features/dashboard/layout";

// Dashboard layout wrapper for authenticated dashboard pages
// Handles responsive sidebar state based on device type (mobile/tablet vs desktop)

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract request headers on the server
  const headersList = await headers();

  // Parse user agent to detect device type (server-side)
  const { device } = userAgent({ headers: headersList });

  // Consider mobile + tablet as "collapsed sidebar" state
  const isCompactDevice =
    device?.type === "mobile" || device?.type === "tablet";

  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      {/* Sidebar section (collapsible on smaller devices) */}
      <DashboardSidebar initialOpen={!isCompactDevice} />
      {/* Main content area */}
      <div className="grid grid-cols-1">
        {/* Top navigation / header */}
        <DashboardHeader />

        {/* Page content container */}
        <main className="flex-1 px-2 py-3 md:px-4 md:py-5 lg:px-6 lg:py-6 xl:px-12 xl:py-7 bg-gray-50 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
