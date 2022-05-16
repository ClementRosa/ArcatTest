import React, { useState } from "react";
import Card from "./Card";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import { chartConfig } from "../constants/config";

const ChartArea = ({ data }) => {

  



  return (
    <Card>
      <ResponsiveContainer>
        <AreaChart data={data}>
        <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(199 210 254)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(199 210 254)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dateMin", "dateMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ChartArea;
