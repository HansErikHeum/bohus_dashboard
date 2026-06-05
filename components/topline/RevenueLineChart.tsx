'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { toplineData } from '@/data/topline'

export default function RevenueLineChart() {
  return (
    <div
      className="bg-white rounded-xl p-6 h-full"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      <h3 className="text-sm font-semibold mb-5" style={{ color: '#353539' }}>
        Månedlig omsetning — 2025 vs. 2024
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={toplineData.monthly}
          margin={{ top: 4, right: 12, left: 0, bottom: 4 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E6" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#9B9B9B' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `${v}M`}
            tick={{ fontSize: 12, fill: '#9B9B9B' }}
            axisLine={false}
            tickLine={false}
            width={42}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value} MNOK`,
              name === 'revenue2025' ? '2025' : '2024',
            ]}
            contentStyle={{
              borderRadius: 8,
              border: '1px solid #E8E8E6',
              fontSize: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
            formatter={(value) => (value === 'revenue2025' ? '2025' : '2024')}
          />
          <Line
            type="monotone"
            dataKey="revenue2025"
            name="revenue2025"
            stroke="#353539"
            strokeWidth={2.5}
            dot={{ r: 3, fill: '#353539', strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="revenue2024"
            name="revenue2024"
            stroke="#C8102E"
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
