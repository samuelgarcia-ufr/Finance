// app/components/Chart.tsx
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', entradas: 4000, saidas: 2400 },
  { name: 'Feb', entradas: 3000, saidas: 1398 },
  { name: 'Mar', entradas: 2000, saidas: 9800 },
  { name: 'Apr', entradas: 2780, saidas: 3908 },
  { name: 'May', entradas: 1890, saidas: 4800 },
  { name: 'Jun', entradas: 2390, saidas: 3800 },
  { name: 'Jul', entradas: 4000, saidas: 2400 },
  { name: 'Ago', entradas: 3000, saidas: 1398 },
  { name: 'Set', entradas: 2000, saidas: 9800 },
  { name: 'Out', entradas: 2780, saidas: 3908 },
  { name: 'Nov', entradas: 1890, saidas: 4800 },
  { name: 'Dez', entradas: 2390, saidas: 3800 },
];

export default function Chart() {
  return (
    <div style={{ width: 635, height: 200 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="entradas" fill="rgb(60, 180, 120)" />
          <Bar dataKey="saidas" fill="rgb(220, 50, 60)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
