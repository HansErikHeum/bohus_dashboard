'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { toplineData } from '@/data/topline'

export default function BudgetBarChart() {
  return (
    <div
      className="bg-white rounded-xl p-6 h-full"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      <h3 className="text-sm font-semibold mb-5" style={{ color: '#353539' }}>
        Faktisk vs. budsjett
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={toplineData.monthly}
          margin={{ top: 4, right: 8, left: 0, bottom: 4 }}
          barCategoryGap="30%"
          barGap={3}
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
            formatter={(value, name) => [
              `${value} MNOK`,
              name === 'revenue2025' ? 'Faktisk' : 'Budsjett',
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
            formatter={(value) => (value === 'revenue2025' ? 'Faktisk' : 'Budsjett')}
          />
          <Bar
            dataKey="revenue2025"
            name="revenue2025"
            fill="#353539"
            radius={[3, 3, 0, 0]}
            isAnimationActive={false}
          />
          <Bar
            dataKey="budget"
            name="budget"
            fill="#D4D4D2"
            radius={[3, 3, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
