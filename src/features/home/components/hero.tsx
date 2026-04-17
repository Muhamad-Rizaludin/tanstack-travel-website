import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <header className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pt-20 lg:pt-32 overflow-hidden lg:overflow-visible">
      <div className="lg:col-span-6 z-10 text-center lg:text-left px-1">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-medium text-xs md:text-sm mb-6">{t.home.heroBadge}</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-background mb-6 leading-[1.15]">
          {t.home.heroTitle.split(' ').map((word, i) => 
            word === "Keindahan" || word === "Beauties." ? <span key={i} className="text-primary italic"> {word} </span> : word + ' '
          )}
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant mb-10 max-w-md mx-auto lg:mx-0">
          {t.home.heroSubtitle}
        </p>
        
        <div className="bg-surface-container-lowest p-2 md:p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-stretch gap-2 max-w-full md:max-w-2xl mx-auto lg:mx-0 border border-outline-variant/10">
          <div className="flex-1 px-4 py-3 md:py-4 flex items-center gap-3 hover:bg-surface-container-low rounded-2xl transition-colors min-w-0">
            <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
            <div className="flex flex-col text-left min-w-0 flex-1">
              <span className="text-[10px] font-bold text-outline uppercase tracking-wider">{t.home.searchDestination}</span>
              <input className="bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold w-full outline-none text-on-surface" placeholder={t.home.searchPlaceholder} type="text"/>
            </div>
          </div>
          <div className="hidden md:block w-px bg-outline-variant/20 my-2"></div>
          <div className="flex-1 px-4 py-3 md:py-4 flex items-center gap-3 hover:bg-surface-container-low rounded-2xl transition-colors">
            <span className="material-symbols-outlined text-primary shrink-0">calendar_today</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-outline uppercase tracking-wider">{t.home.searchDate}</span>
              <span className="text-sm font-semibold text-on-surface">{t.home.selectDate}</span>
            </div>
          </div>
          <Button size="lg" className="rounded-2xl py-6 md:py-0 md:h-auto md:px-10 shrink-0">
            {t.common.search}
          </Button>
        </div>
      </div>
      
      <div className="lg:col-span-6 relative h-[350px] md:h-[500px] mt-8 lg:mt-0 w-full">
        <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] translate-x-3 translate-y-3 md:translate-x-8 md:translate-y-8 max-w-[95%]"></div>
        <img alt="Ubud Bali" className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl relative z-0" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1000"/>
        
        <div className="absolute -bottom-2 -left-2 md:-bottom-8 md:-left-8 bg-surface/90 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-xl border border-outline-variant/20 max-w-[180px] md:max-w-xs z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-tertiary text-sm md:text-base shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-widest truncate">{t.common.verified}</span>
          </div>
          <p className="text-[10px] md:text-sm font-medium italic text-on-surface leading-tight">"{t.home.testimonial}"</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-[10px] shrink-0">BP</div>
            <span className="text-[10px] md:text-xs font-semibold text-on-surface truncate">Bagas Pratama</span>
          </div>
        </div>
      </div>
    </header>
  )
}
