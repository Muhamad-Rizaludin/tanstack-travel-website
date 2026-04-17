import { DUMMY_DESTINATIONS } from "../data"
import { DestinationCard, DestinationGridLargeCard } from "./destination-card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function DestinationGrid() {
  const { t } = useLanguage()
  const trending = DUMMY_DESTINATIONS.find(d => d.isTrending)
  const others = DUMMY_DESTINATIONS.filter(d => !d.isTrending)

  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-on-background mb-2 truncate">{t.home.trendingTitle}</h2>
          <p className="text-sm md:text-base text-on-surface-variant line-clamp-1">{t.home.trendingSub}</p>
        </div>
        <Button variant="ghost" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all shrink-0">
          <span className="hidden sm:inline">{t.common.viewAll}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trending && <DestinationGridLargeCard destination={trending} />}
        {others.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  )
}

