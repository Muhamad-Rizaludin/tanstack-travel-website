import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function PromoFilters() {
  const { t } = useLanguage()
  const categories = [
    t.promo.filters.all, 
    t.promo.filters.hotel, 
    t.promo.filters.flight, 
    t.promo.filters.train, 
    t.promo.filters.activity
  ]
  
  return (
    <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
      {categories.map((cat, i) => (
        <Button 
          key={cat} 
          variant={i === 0 ? "primary" : "secondary"}
          className="rounded-full whitespace-nowrap px-6"
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}
