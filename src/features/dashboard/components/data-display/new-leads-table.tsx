"use client";

import { useTranslations } from "next-intl";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

import { NewLead } from "@/features/dashboard/lib/types/dashboard";
import { memo } from "react";

// New leads data table
// Displays recently added leads with source and assignment information

function NewLeadsTable({ newLeads }: { newLeads: NewLead[] }) {
  const t = useTranslations("Dashboard");

  return (
    <section className="max-w-[calc(100vw-88px)] overflow-x-auto">
      <div className="rounded-lg border border-[#DFDFDF] bg-white shadow-sm">
        {/* Table Header Section */}
        <div className="flex items-center justify-between gap-4 px-3 py-5 md:px-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-600">
            {t("newLeads.title")}
          </h3>

          {/* Action link (consider replacing with Next.js Link if navigates internally) */}
          <a
            href="#"
            className="text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600 sm:text-base md:text-lg"
          >
            View More
          </a>
        </div>

        {/* Data Table */}
        <Table>
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              <TableHead>{t("newLeads.fullName")}</TableHead>
              <TableHead>{t("newLeads.leadSource")}</TableHead>
              <TableHead>{t("newLeads.assignTo")}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {newLeads.map((lead) => {
              const SourceIcon = lead.source.icon;

              return (
                <TableRow key={lead.id}>
                  {/* Lead name */}
                  <TableCell className="cursor-pointer text-[#1DB2FF] hover:underline">
                    {lead.fullName}
                  </TableCell>

                  {/* Lead source */}
                  <TableCell>
                    <div className="flex items-center gap-2 text-gray-600">
                      <SourceIcon className="size-4 text-gray-500" />
                      <span>{t(`leadSources.${lead.source.id}`)}</span>
                    </div>
                  </TableCell>

                  {/* Assigned user */}
                  <TableCell className="text-[#3D3D3D]">
                    {lead.assignedTo}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default memo(NewLeadsTable);
