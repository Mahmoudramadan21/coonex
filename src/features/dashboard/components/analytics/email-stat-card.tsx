import { useTranslations } from "next-intl";

import EmailStatRow from "./email-stat-row";
import { memo } from "react";
import { MailIcon, MouseIcon } from "@/assets";

type Props = {
  emails: number;
  clicked: number;
};

// Email statistics card (emails + click tracking)
function EmailStatCard({ emails, clicked }: Props) {
  const t = useTranslations("Dashboard.EmailStatCard");

  return (
    <div className="min-w-full snap-center rounded-lg border border-gray-100 bg-white px-5 py-7 shadow-sm md:min-w-[300px]">
      {/* Preview / placeholder area */}
      <div className="mb-6 flex h-38 w-full items-center justify-center rounded-lg bg-blue-50" />

      <div className="space-y-4">
        <EmailStatRow
          icon={MailIcon}
          iconColor="text-[#28C76F]"
          iconBg="bg-[#28C76F24]"
          label={t("emails")}
          value={emails}
        />

        <EmailStatRow
          icon={MouseIcon}
          iconColor="text-[#FF9F43]"
          iconBg="bg-[#FF9F4328]"
          label={t("clicked")}
          value={clicked}
        />
      </div>
    </div>
  );
}

export default memo(EmailStatCard);
