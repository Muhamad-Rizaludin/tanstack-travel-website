import { Link } from "@tanstack/react-router"
import { Destination } from "@/types"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function DestinationCard({ destination }: { destination: Destination }) {
  const { t } = useLanguage()
  
  const getTranslatedLocation = (location: string) => {
    if (location.includes("Bali")) return t.home.locations.bali
    if (location.includes("Lombok")) return t.home.locations.lombok
    if (location.includes("Jawa")) return t.home.locations.java
    if (location.includes("Labuan Bajo")) return t.home.locations.labuanBajo
    return location
  }

  return (
    <Link 
      to="/service/$serviceId" 
      params={{ serviceId: destination.id }}
      className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden transition-all hover:shadow-xl border border-outline-variant/10"
    >
      <div className="h-48 overflow-hidden relative">
        <img alt={destination.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={destination.image} />
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container/20 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-container hover:text-red-500 transition-all">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-on-surface">{destination.name}</h3>
        <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-primary text-sm">location_on</span> {getTranslatedLocation(destination.location)}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
          <span className="font-bold text-primary">Rp {destination.price.toLocaleString('id-ID')}</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-yellow-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-xs font-bold text-on-surface">{destination.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function DestinationGridLargeCard({ destination }: { destination: Destination }) {
  const { t } = useLanguage()

  return (
    <Link 
      to="/service/$serviceId" 
      params={{ serviceId: destination.id }}
      className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] bg-surface-container-lowest"
    >
      <img alt={destination.name} className="w-full h-full min-h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" src={destination.image} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="flex items-center gap-2 mb-3">
          {destination.isTrending && <Badge variant="tertiary" className="bg-tertiary/90 backdrop-blur-md text-on-tertiary">{t.common.trending}</Badge>}
          <span className="flex items-center text-white text-sm font-semibold gap-1">
            <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {destination.rating} ({destination.reviewCount})
          </span>
        </div>
        <h3 className="text-4xl font-bold text-white mb-2">{destination.name}</h3>
        <p className="text-white/80 mb-6 max-w-sm">{destination.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white/60 text-xs block mb-1">{t.common.mulaiDari}</span>
            <span className="text-2xl font-bold text-white">Rp {destination.price.toLocaleString('id-ID')}<span className="text-sm font-normal">/{t.common.malam}</span></span>
          </div>
          <div className="bg-surface text-primary p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
