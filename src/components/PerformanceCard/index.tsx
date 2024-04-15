"use client";
import { Card, CardBody, CardHeader, GridItem, Text } from "@chakra-ui/react";
import { style } from "./styles";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dia 1",
    uv: 100,
    pv: 60,
    amt: 2400,
  },
  {
    name: "Dia 2",
    uv: 100,
    pv: 70,
    amt: 2210,
  },
  {
    name: "Dia 3",
    uv: 20,
    pv: 20,
    amt: 2290,
  },
  {
    name: "Dia 4",
    uv: 80,
    pv: 100,
    amt: 2000,
  },
  {
    name: "Dia 5",
    uv: 90,
    pv: 30,
    amt: 2181,
  },
];

const PerformaceCard = () => {
  return (
    <GridItem colSpan={2} rowSpan={3} as={Card} sx={style.cardBox}>
      <CardHeader>Desempenho da semana</CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" className={"spacing"}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a202c",
                borderRadius: "5px",
                border: "none",
              }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="pv" fill="#02e6cf" radius={5} />
            <Bar dataKey="uv" fill="#327de6" radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </GridItem>
  );
};

export default PerformaceCard;
