"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
interface Chart {
    name: string
    pv: number
    value: number
}

// #endregion
const Chart = ({data}:{data: Chart[]}) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data.map((e) => ({...e, name: e.name.length > 9 ? e.name.slice(0, 10) + "..." : e.name  })).sort((a, b) => b.value - a.value).slice(0, 5)}   
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name"tick={{ className: "text-red" }}/>
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="value" fill="#FCD34D"  radius={[10, 10, 0 ,0]} activeBar={<Rectangle fill="#FEF3C7" stroke="#FEF3C7" />} />
    </BarChart>
  );
};

export default Chart;