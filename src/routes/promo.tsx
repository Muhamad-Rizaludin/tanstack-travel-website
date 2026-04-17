import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import { PromoHero } from '@/features/promo/components/promo-hero'
import { PromoFilters } from '@/features/promo/components/promo-filters'
import { PromoGrid } from '@/features/promo/components/promo-grid'
import { PromoTicker } from '@/features/promo/components/promo-ticker'

export const Route = createFileRoute('/promo')({
  component: PromoPage,
})

function PromoComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex-1 w-full">
        <PromoHero />
        <PromoFilters />
        <PromoGrid />
        <PromoTicker />
      </main>
      <Footer />
      
      {/* Mobile Bottom Nav Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  )
}

function PromoPage() {
  return <PromoComponent />
}
