import React from "react";
import Card from "./Card";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {pays} from "../constants/config"

const ChartBar = ({ data }) => {
  
  return (
    <Card>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.entries(pays).map(([k, v]) => 
             <Bar dataKey={k} fill={v} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ChartBar;
