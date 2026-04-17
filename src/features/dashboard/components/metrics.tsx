import { DUMMY_STATS } from "../data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function MetricCards() {
  const { t } = useLanguage()

  const getTranslatedLabel = (label: string) => {
    if (label.includes("Pemesanan") || label.includes("Bookings")) return t.dashboard.metrics.bookings
    if (label.includes("Pendapatan") || label.includes("Revenue")) return t.dashboard.metrics.revenue
    return t.dashboard.metrics.visitors
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
      {DUMMY_STATS.map((stat) => (
        <Card key={stat.label} className="p-4 md:p-6 rounded-xl border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg bg-${stat.color}-fixed/30 text-${stat.color} flex items-center justify-center`}>
              <span className="material-symbols-outlined text-xl">{stat.icon}</span>
            </div>
            <Badge variant={stat.trendDirection === 'up' ? 'tertiary' : 'error'} className="bg-opacity-20 text-[10px] md:text-xs">
              <span className="material-symbols-outlined text-[12px] md:text-[14px] mr-1">
                {stat.trendDirection === 'up' ? 'trending_up' : 'trending_down'}
              </span>
              {stat.trendDirection === 'up' ? '+' : '-'}{stat.trend}%
            </Badge>
          </div>
          <p className="text-on-surface-variant text-xs md:text-sm font-medium">{getTranslatedLabel(stat.label)}</p>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mt-1">{stat.value}</h3>
        </Card>
      ))}
    </div>
  )
}
