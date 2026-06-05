import { toplineData } from '@/data/topline'
import KpiCard from '@/components/topline/KpiCard'
import RevenueLineChart from '@/components/topline/RevenueLineChart'
import ChannelDonutChart from '@/components/topline/ChannelDonutChart'
import BudgetBarChart from '@/components/topline/BudgetBarChart'

function formatRevenue(amount: number): string {
  return (amount / 1_000_000_000).toFixed(2).replace('.', ',') + ' mrd'
}

function formatThousands(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function OversiktPage() {
  const { ytd } = toplineData

  return (
    <div className="space-y-6 max-w-screen-xl">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold" style={{ color: '#353539' }}>Oversikt</h1>
        <p className="mt-1 text-sm" style={{ color: '#6B6B6B' }}>
          Januar–mai 2025 · Alle tall i NOK
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <KpiCard
          label="Omsetning YTD"
          value={formatRevenue(ytd.revenue)}
          change={ytd.revenueVsLastYear}
          changeLabel="vs. fjoråret"
        />
        <KpiCard
          label="Bruttomargin"
          value={ytd.grossMargin.toFixed(1).replace('.', ',')}
          unit="%"
          change={ytd.grossMargin - ytd.grossMarginLastYear}
          changeLabel="pp vs. fjoråret"
          changeUnit=" pp"
        />
        <KpiCard
          label="Transaksjoner YTD"
          value={formatThousands(ytd.transactions)}
          change={ytd.transactionsVsLastYear}
          changeLabel="vs. fjoråret"
        />
        <KpiCard
          label="Snittordre (AOV)"
          value={formatThousands(ytd.aov)}
          unit="kr"
          change={ytd.aovVsLastYear}
          changeLabel="vs. fjoråret"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <RevenueLineChart />
        </div>
        <div className="col-span-1">
          <ChannelDonutChart />
        </div>
        <div className="col-span-1">
          <BudgetBarChart />
        </div>
      </div>

    </div>
  )
}
