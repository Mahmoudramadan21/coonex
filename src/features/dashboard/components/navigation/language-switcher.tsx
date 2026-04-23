"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { ChevronDown } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

import { ILanguage } from "@/features/dashboard/lib/types/header";
import { memo } from "react";

type Props = {
  languages: ILanguage[];
};

// Language selector dropdown
// Handles switching app locale while preserving current route

function LanguageSwitcher({ languages }: Props) {
  const t = useTranslations("Header.languages");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Change app language and preserve current route
   */
  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  /**
   * Find currently active language
   */
  const currentLang = languages.find((lang) => lang.code === locale);

  const displayLabel = currentLang?.code.toUpperCase() ?? locale.toUpperCase();

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="flex cursor-pointer items-center gap-1"
          >
            {displayLabel}

            <ChevronDown className="h-4 w-4 transition-transform duration-200" />
          </Button>
        }
      ></DropdownMenuTrigger>

      {/* Menu */}
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("title")}</DropdownMenuLabel>

          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={handleLanguageChange}
          >
            {languages.map((lang) => (
              <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                {t(`labels.${lang.code}`)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default memo(LanguageSwitcher);
