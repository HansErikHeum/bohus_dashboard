'use client'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { toplineData } from '@/data/topline'

const COLORS = ['#353539', '#C8102E']

export default function ChannelDonutChart() {
  return (
    <div
      className="bg-white rounded-xl p-6 h-full"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      <h3 className="text-sm font-semibold mb-1" style={{ color: '#353539' }}>
        Salgskanal
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={toplineData.channelSplit}
            cx="50%"
            cy="45%"
            innerRadius={62}
            outerRadius={88}
            dataKey="value"
            paddingAngle={3}
            isAnimationActive={false}
          >
            {toplineData.channelSplit.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, '']}
            contentStyle={{
              borderRadius: 8,
              border: '1px solid #E8E8E6',
              fontSize: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: 12 }}
            formatter={(value, entry: { payload?: { value: number } }) =>
              `${value} — ${entry.payload?.value}%`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
