"use client";
import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import Data from "../../../constants/Json/Data.json";

const Chart: React.FC = () => {
  const { chartData, colors } = Data.Tokenomics;
  const renderCustomTooltip = (props: any) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const dataItem = payload[0].payload;
      const name = dataItem.name;
      const value = dataItem.value;

      return (
        <div className="flex flex-col items-center justify-start gap-1 bg-gray-200/50 p-2 rounded-[12px]">
          <p className="text-base text-white-main font-semibold">{name}</p>
          <p className="text-base text-white-main font-normal">{value}%</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="md:h-[500px] h-[400px] w-full">
      <ResponsiveContainer width="99%" height="99%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            fill="#8884d8"
            stroke="none"
            label={false} // Hide the labels
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={renderCustomTooltip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
