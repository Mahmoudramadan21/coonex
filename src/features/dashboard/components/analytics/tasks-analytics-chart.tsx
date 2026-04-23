"use client";

import { Pie, PieChart, Label } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/shared/components/ui/chart";
import { memo } from "react";

type Props = {
  chartData: {
    name: string;
    value: number;
    fill: string;
    count: number;
  }[];
  chartConfig: ChartConfig;
  totalTasks: number;
  title: string;
};

function TasksAnalyticsChart({
  chartData,
  chartConfig,
  totalTasks,
  title,
}: Props) {
  return (
    // Wrapper that provides chart configuration and layout styling
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        {/* Tooltip shown on hover over pie segments */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={50}
          strokeWidth={5}
        >
          {/* Center label inside the pie chart */}
          <Label
            content={({ viewBox }) => {
              // Ensure viewBox has valid center coordinates
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {/* Main value (total tasks) */}
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="text-2xl font-bold fill-foreground"
                    >
                      {totalTasks}
                    </tspan>

                    {/* Subtitle / label under the value */}
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground text-sm"
                    >
                      {title}
                    </tspan>
                  </text>
                );
              }

              // Fallback if viewBox is not available
              return null;
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

export default memo(TasksAnalyticsChart);
