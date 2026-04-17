import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import { Hero } from '@/features/home/components/hero'
import { RegionChips } from '@/features/home/components/region-chips'
import { DestinationGrid } from '@/features/home/components/destination-grid'
import { Newsletter } from '@/features/home/components/newsletter'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 mt-4">
        <Hero />
        <RegionChips />
        <DestinationGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
