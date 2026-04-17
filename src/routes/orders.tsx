import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import { OrderCard } from '@/features/orders/components/order-card'
import { OrderSidebar } from '@/features/orders/components/order-sidebar'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export const Route = createFileRoute('/orders')({
  component: OrdersPage,
})

function OrdersPage() {
  const { t, language } = useLanguage()
  const filters = [
    t.orders.filters.all, 
    t.orders.status.pending, 
    t.orders.status.confirmed, 
    t.orders.status.completed
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex-1 w-full">
        {/* Section Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight mb-2">{t.orders.title}</h1>
          <p className="text-on-surface-variant font-body">{t.orders.subtitle}</p>
        </header>

        {/* Status Filter Chips */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter, i) => (
            <Button 
              key={filter} 
              variant={i === 0 ? "primary" : "secondary"}
              className="rounded-full text-sm font-bold whitespace-nowrap px-6"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <OrderCard 
              type={language === 'id' ? 'Hotel' : 'Hotel'}
              title="Mandapa Luxury Resort"
              status={t.orders.status.pending}
              image="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000"
              location={t.home.locations.bali}
              date="12 Oct - 15 Oct 2023"
              price={12450000}
            />
            <OrderCard 
              type={language === 'id' ? 'Penerbangan' : 'Flight'}
              title="Garuda Indonesia GA-402"
              status={t.orders.status.confirmed}
              image="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1000"
              location="CGK → DPS"
              date="12 Oct, 08:30 WIB"
              price={2150000}
            />
          </div>
          <div className="lg:col-span-4">
            <OrderSidebar />
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile Nav Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  )
}
