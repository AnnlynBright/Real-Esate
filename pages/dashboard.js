import { LineChart } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { CartesianGrid } from "recharts";
import { Line } from "recharts";
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import React from "react";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { MyComponent } from '../utils/FetchData';


const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Dashboard() {
    
        console.log("11111",MyComponent);
       
       
    
  return (
    <LineChart
     width={500}
      height={300}
      data={MyComponent}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="slice" />
      <YAxis />
      <Tooltip />
       <Legend />
       <Line
         type="monotone"
         dataKey="pop"
         stroke="#8884d8"
         activeDot={{ r: 8 }}
       />
       <Line type="monotone" dataKey=" pop" stroke="#82ca9d" />
   </LineChart>
   

    
  


 );
}