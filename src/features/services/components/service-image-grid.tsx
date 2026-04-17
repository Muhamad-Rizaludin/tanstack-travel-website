import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function ServiceImageGrid() {
  const { t } = useLanguage()

  const images = [
    {
      alt: "Luxury Villa Exterior",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
      className: "md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden"
    },
    {
      alt: "Modern Bedroom Detail",
      src: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800",
      className: "hidden md:block relative group cursor-pointer overflow-hidden"
    },
    {
      alt: "Natural Dining Area",
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800",
      className: "hidden md:block relative group cursor-pointer overflow-hidden"
    },
    {
      alt: "Relaxing Terrace View",
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      className: "hidden md:block relative group cursor-pointer overflow-hidden"
    },
    {
      alt: "Lush Property Landscape",
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      className: "hidden md:block relative group cursor-pointer overflow-hidden"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[520px] mb-8 rounded-[2rem] overflow-hidden shadow-xl border border-outline-variant/10 bg-surface-container">
      {images.map((img, i) => (
        <div key={i} className={img.className}>
          <img 
            alt={img.alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src={img.src} 
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {i === 4 && (
            <button className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-2xl hover:bg-white transition-all scale-95 hover:scale-100 active:opacity-90 text-slate-900 border border-black/5">
              <span className="material-symbols-outlined text-lg">grid_view</span>
              {t.common.viewAllPhotos}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
