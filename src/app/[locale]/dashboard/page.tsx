// Server Component (NO "use client")
// Responsible for:
// - Generating metadata
// - Providing locale-based routing
// - Rendering Client Component wrapper

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import DashboardClient from "./dashboard-client";

// Generate SEO metadata for dashboard page
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Load translations on server side
  const t = await getTranslations({
    locale,
    namespace: "Dashboard.meta",
  });

  return {
    title: t("title"),
    description: t("description"),

    // Dashboard is a private route → should NOT be indexed
    robots: {
      index: false,
      follow: false,
    },
  };
}

// Static locales for pre-rendering
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

// Server wrapper that renders the client dashboard
export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <DashboardClient locale={locale} />;
}
