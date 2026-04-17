import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function PromoHero() {
  const { t } = useLanguage()

  return (
    <section className="mb-12 relative overflow-hidden rounded-3xl bg-inverse-surface text-white p-8 md:p-16">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          className="w-full h-full object-cover" 
          alt="Lush tropical landscape" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_uCkS25mpOCClu8FBWp3RbYhr9tgoH-KtkYet1uYKBQdDStc3gjksRF9pileEcg10giKj8pTlPzOWM38nG6_ZK5vlne3NjmBTWHzoIBJWnzRpJ7j2YzIy6RoqJh6bnDuHhjcUJo-4GjNniZ9mCr15kqK5DXtI81GMT-Rh5sYDclFTFBAFdsJP4rGDvbpT-qGI39KyMZhQ2UC1A7t2BtO8uCqH-Xf3OIm5x5BM6QoseSdyqTw3j61j68PPI9GjWnhf_2TgyfyIoc" 
        />
      </div>
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-3 py-1 bg-tertiary rounded-full text-[10px] font-bold mb-4 uppercase tracking-widest text-on-tertiary">
          {t.promo.heroBadge}
        </span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 leading-tight">
          {t.promo.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 font-body">
          {t.promo.heroSub}
        </p>
        <Button size="lg" className="rounded-xl font-bold gap-2">
          {t.promo.heroAction}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
    </section>
  )
}
