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
  { name: 'Jan', Entradas: 4000, Saídas: 2400 },
  { name: 'Fev', Entradas: 3000, Saídas: 1398 },
  { name: 'Mar', Entradas: 2000, Saídas: 9800 },
  { name: 'Abr', Entradas: 2780, Saídas: 3908 },
  { name: 'Mai', Entradas: 1890, Saídas: 4800 },
  { name: 'Jun', Entradas: 2390, Saídas: 3800 },
  { name: 'Jul', Entradas: 4000, Saídas: 2400 },
  { name: 'Ago', Entradas: 3000, Saídas: 1398 },
  { name: 'Set', Entradas: 2000, Saídas: 9800 },
  { name: 'Out', Entradas: 2780, Saídas: 3908 },
  { name: 'Nov', Entradas: 1890, Saídas: 4800 },
  { name: 'Dez', Entradas: 2390, Saídas: 3800 },
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
          <Bar dataKey="Entradas" fill="rgb(60, 180, 120)" />
          <Bar dataKey="Saídas" fill="rgb(220, 50, 60)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
