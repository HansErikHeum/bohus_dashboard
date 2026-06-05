interface KpiCardProps {
  label: string
  value: string
  unit?: string
  change: number
  changeLabel?: string
  changeUnit?: string
}

export default function KpiCard({
  label,
  value,
  unit,
  change,
  changeLabel = 'vs. fjoråret',
  changeUnit = '%',
}: KpiCardProps) {
  const isPositive = change >= 0

  return (
    <div
      className="bg-white rounded-xl p-6"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)' }}
    >
      <p className="text-xs font-medium uppercase tracking-wide" style={{ color: '#6B6B6B' }}>
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-3xl font-bold tabular-nums" style={{ color: '#353539' }}>
          {value}
        </span>
        {unit && (
          <span className="text-base font-medium" style={{ color: '#6B6B6B' }}>
            {unit}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span
          className="text-xs font-semibold"
          style={{ color: isPositive ? '#2D7D46' : '#C8102E' }}
        >
          {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}
          {change.toFixed(1).replace('.', ',')}
          {changeUnit}
        </span>
        <span className="text-xs" style={{ color: '#9B9B9B' }}>
          {changeLabel}
        </span>
      </div>
    </div>
  )
}
