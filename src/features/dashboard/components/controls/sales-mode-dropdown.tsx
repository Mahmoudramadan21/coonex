"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

import { Button } from "@/shared/components/ui/button";
import { ChevronDown } from "lucide-react";
import { memo } from "react";
import { useTranslations } from "next-intl";

interface SalesModeDropdownProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

// Same API, improved internally (no breaking changes)
function SalesModeDropdown({ isYearly, setIsYearly }: SalesModeDropdownProps) {
  const t = useTranslations("timeRange");
  const value = isYearly ? "yearly" : "monthly";

  const handleChange = (val: string) => {
    if (val === value) return; // prevent unnecessary updates
    setIsYearly(val === "yearly");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="flex items-center gap-1 rounded-[6px] border border-[#1DB2FF] px-3 py-1.5 text-sm text-[#1DB2FF] hover:bg-[#1db4ff17] md:gap-2 md:px-5 md:py-2 md:text-base md:font-semibold"
          >
            {isYearly ? t("yearly") : t("monthly")}
            <ChevronDown className="size-3.5 md:size-5" />
          </Button>
        }
      ></DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={value} onValueChange={handleChange}>
            <DropdownMenuRadioItem value="yearly">
              {t("yearly")}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="monthly">
              {t("monthly")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default memo(SalesModeDropdown);
