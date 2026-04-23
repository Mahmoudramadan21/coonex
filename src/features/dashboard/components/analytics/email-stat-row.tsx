import { LucideIcon } from "lucide-react";
import { memo } from "react";

type Props = {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  label: string;
  value: number;
};

// Single stat row for email metrics (emails, clicks, etc.)
function EmailStatRow({ icon: Icon, iconColor, iconBg, label, value }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      {/* Icon */}
      <Icon
        className={`size-10 rounded-md p-2 ${iconColor} ${iconBg}`}
        aria-hidden="true"
      />

      {/* Label */}
      <span className="grow ps-4 text-base font-medium text-[#2F2B3D90]">
        {label}
      </span>

      {/* Value */}
      <span className="text-base text-[#2F2B3D70]">
        {value.toLocaleString()}
      </span>
    </div>
  );
}

export default memo(EmailStatRow);
