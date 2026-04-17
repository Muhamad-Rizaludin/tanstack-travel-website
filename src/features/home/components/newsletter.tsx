import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Newsletter() {
  const { t } = useLanguage()

  return (
    <section className="bg-surface-container-high rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden relative">
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4">{t.home.newsletterTitle}</h2>
          <p className="text-base md:text-lg text-on-surface-variant mb-8">{t.home.newsletterSub}</p>
          <div className="flex flex-col sm:flex-row bg-surface p-1.5 md:p-2 rounded-2xl md:rounded-3xl shadow-sm max-w-md mx-auto lg:mx-0 border border-outline-variant/10 gap-2 sm:gap-0">
            <input className="flex-1 bg-transparent border-none px-4 py-3 sm:py-0 focus:ring-0 outline-none text-sm" placeholder={t.home.emailPlaceholder} type="email"/>
            <Button className="rounded-xl md:rounded-2xl py-6 sm:py-2 px-8">{t.home.subscribe}</Button>
          </div>
        </div>
        <div className="hidden lg:block relative h-64 w-full">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150"></div>
          <img alt="Travel bag" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 xl:w-80 h-auto transform rotate-12 shadow-2xl rounded-2xl" src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=1000"/>
        </div>
      </div>
    </section>
  )
}
