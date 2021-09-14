import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = require("../data/posts.json");

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="temp" fill="#8884d8" />
      <Bar dataKey="hum" fill="#82ca9d" />
      <Bar dataKey="vel" fill="#ca9d" />
      <Bar dataKey="viento" fill="#eec293" />
    </BarChart>
  );
}
