import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function HelpHero() {
  const { t } = useLanguage()

  return (
    <section className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-10 md:mb-16 min-h-[320px] md:min-h-[450px] flex flex-col items-center justify-center text-center p-6 md:p-12">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-[0.4] scale-105" 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600" 
          alt="Luxury Resort"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl px-2">
        <h1 className="text-white font-headline font-bold text-3xl md:text-5xl lg:text-6xl mb-8 tracking-tight leading-tight">
          {t.help.heroTitle}
        </h1>
        
        <div className="bg-surface/95 backdrop-blur-md p-1.5 md:p-2.5 rounded-2xl md:rounded-3xl shadow-2xl flex items-center gap-1 md:gap-3 border border-white/10">
          <div className="flex flex-1 items-center min-w-0">
            <span className="material-symbols-outlined text-outline-variant pl-2 md:pl-4 shrink-0">search</span>
            <input 
              className="flex-1 border-none focus:ring-0 text-on-surface py-3 md:py-4 px-2 md:px-3 font-medium placeholder:text-outline-variant outline-none bg-transparent text-sm md:text-base min-w-0" 
              placeholder={t.help.searchPlaceholder} 
              type="text"
            />
          </div>
          <Button className="rounded-xl md:rounded-2xl px-4 md:px-10 py-6 md:py-7 h-auto font-bold shrink-0">
            <span className="hidden md:inline">{t.help.searchButton}</span>
            <span className="md:hidden material-symbols-outlined">search</span>
          </Button>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="text-white/60 text-xs font-medium w-full mb-1">{t.help.popular}:</span>
          {['Refund', 'Reschedule', 'Payment'].map((tag) => (
            <button key={tag} className="text-[10px] md:text-xs bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full transition-colors border border-white/5">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
