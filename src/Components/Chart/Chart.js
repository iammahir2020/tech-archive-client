import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
const Chart = ({ items }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart width={100} height={250} data={items}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#212429" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
