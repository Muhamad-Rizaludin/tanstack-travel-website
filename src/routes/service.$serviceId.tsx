import { createFileRoute, Link } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import { ServiceImageGrid } from '@/features/services/components/service-image-grid'
import { ServiceBookingWidget } from '@/features/services/components/service-booking-widget'
import { ServiceInfoContent } from '@/features/services/components/service-info-content'
import { SimilarExperiences } from '@/features/services/components/similar-experiences'
import { DUMMY_DESTINATIONS } from '@/features/home/data'

export const Route = createFileRoute('/service/$serviceId')({
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const { serviceId } = Route.useParams()
  // Mencoba mencari data dari dummy, jika tidak ada gunakan default untuk demo desain
  const destination = DUMMY_DESTINATIONS.find(d => d.id === serviceId) || {
    name: "Uluwatu Private Beach Club & Sunset Dinner",
    location: "Uluwatu, Bali",
    price: 1150000,
    rating: 4.9
  }

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex-1 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Bali</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary">{destination.name}</span>
        </nav>

        {/* Hero Image Grid */}
        <ServiceImageGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <ServiceInfoContent 
              name={destination.name} 
              location={destination.location} 
              rating={destination.rating} 
            />
          </div>

          {/* Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <ServiceBookingWidget price={destination.price} serviceName={destination.name} />
          </div>
        </div>

        {/* Similar Experiences */}
        <SimilarExperiences />
      </main>
      <Footer />
      
      {/* Mobile Nav Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  )
}
