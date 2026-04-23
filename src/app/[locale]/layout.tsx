import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { cn } from "@/shared/lib/utils/tailwind-cn";

import "../globals.css";

// Google font configuration (Poppins as the main UI font)
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

// Root layout for the entire application
// Handles internationalization + global font + base HTML structure
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect current locale from request
  const locale = await getLocale();

  // Validate locale against supported routing config
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load localized messages for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={cn("h-full antialiased", poppins.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* i18n provider for entire app */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
