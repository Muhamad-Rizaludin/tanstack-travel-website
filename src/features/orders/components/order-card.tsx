import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutDialog } from "@/features/services/components/checkout-dialog"
import { useLanguage } from "@/components/language-provider"

interface OrderCardProps {
  type: string
  title: string
  status: string
  image: string
  location: string
  date: string
  price: number
}

export function OrderCard({ type, title, status, image, location, date, price }: OrderCardProps) {
  const { t } = useLanguage()
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false)
  const isWaiting = status === t.orders.status.pending
  
  return (
    <>
      <Card className="p-6 group border-none bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex-grow text-on-surface">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-sm text-primary">
                    {type.toLowerCase().includes('hotel') ? 'hotel' : 'flight'}
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{type}</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-background">{title}</h3>
              </div>
              <Badge variant={isWaiting ? 'error' : 'tertiary'} className="tracking-tighter normal-case px-3 py-1">
                {status}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-on-surface-variant mb-6">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">
                  {type.toLowerCase().includes('hotel') ? 'calendar_today' : 'flight_takeoff'}
                </span>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">
                  {type.toLowerCase().includes('hotel') ? 'location_on' : 'schedule'}
                </span>
                <span>{location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-outline-variant/10 gap-4">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{t.orders.card.total}</p>
                <p className="text-lg font-bold text-on-background font-headline">Rp {price.toLocaleString('id-ID')}</p>
              </div>
              <div className="flex gap-3">
                {isWaiting ? (
                  <Button className="px-6 rounded-lg font-bold" onClick={() => setIsCheckoutOpen(true)}>
                    {t.promo.cards.useNow}
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" className="px-6 rounded-lg font-bold border-outline-variant/[0.2]">E-Tiket</Button>
                    <Button variant="ghost" className="px-4 font-bold">{t.orders.card.details}</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <CheckoutDialog 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        serviceName={title}
        price={price / 2} // Dibagi 2 karena ringkasan di dialog mengalikan harga dengan 2 (asumsi 2 pax)
      />
    </>
  )
}
