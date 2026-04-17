import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function PromoGrid() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Large Featured Card */}
      <Card className="md:col-span-8 flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl transition-all border-none overflow-hidden">
        <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA891cTLaRYh_M-WcgK1Cy5xJm2TF-plc4lr6yhaYQQ5arh3sMbEChRkjCBl31LZVr0AHpGqkzWtn2Z01zeRTSRYM-HylTOoTo66e9HTAV22GXrEx-P5zD8f5fYj_QgohojgJ8Zvrhx0N_o295XKU96s8bZ4jtW0ZOuOfPUO_5rKkSR-Y8z9WzdMMVJQyYbHceiY7k64s1XW3PueSkiaulPMI7UuVwJxXghqXyIY-3M-sLqqUo8jNumGJiSMPGDcfFemrbib-Imoo8" 
            alt="Resort Mewah"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center bg-surface-container-lowest text-on-surface">
          <div className="flex items-center gap-2 text-tertiary font-bold text-xs mb-2 uppercase tracking-wide">
            <span className="material-symbols-outlined text-sm">hotel</span> {t.promo.cards.staycation}
          </div>
          <h3 className="text-2xl font-headline font-bold mb-4">{t.promo.cards.labuanBajoTitle}</h3>
          <p className="text-on-surface-variant mb-6 text-sm">{t.promo.cards.labuanBajoDesc}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="bg-surface-container-high px-4 py-2 rounded-lg font-mono font-bold text-primary">NUSASTAY40</div>
            <button className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-sm">
              {t.promo.cards.takePromo} <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Side Card 1 */}
      <Card className="md:col-span-4 flex flex-col group cursor-pointer border-none bg-surface-container-lowest text-on-surface overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdRTcWAYIGsLdOYVhcd7T-zzEoOGCE8eOcUqvKwuU1SSCKUmGDZ5GIgts_MKJT5gIPsVWk90aq9dHslCPx6Pnp54N4jRurcG3hEwsxRfXyCrBtYlzOXd-FKebV-Y3Ki3pQG3NOf_bXPcZbS3RDJtxlY2W7odpgM7c50XBRqpR50R-Ela9dGKLLlg8fZtYaUUKBnBMbVTkATiG-fp9iPuRpUGAetB-nBdkjxVVLL5fdTdhf9issg7I_9zsTasnEaCiWZ8hw7SjaDKo" 
            alt="Airlines"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-primary font-bold text-xs mb-2 uppercase tracking-wide">
            <span className="material-symbols-outlined text-sm">flight</span> {t.promo.filters.flight}
          </div>
          <h3 className="text-xl font-headline font-bold mb-2">{t.promo.cards.flashSaleTitle}</h3>
          <p className="text-on-surface-variant text-xs mb-4">{t.promo.cards.flashSaleDesc}</p>
          <Button variant="secondary" className="w-full rounded-xl font-bold py-6">{t.promo.cards.takePromo}</Button>
        </div>
      </Card>

      {/* Small Detail Card 1 */}
      <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-outline-variant/[0.15] group cursor-pointer hover:bg-surface-container transition-colors">
        <div>
          <div className="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary">train</span>
          </div>
          <h4 className="text-lg font-headline font-bold mb-2 text-on-surface">{t.promo.cards.cashbackTitle}</h4>
          <p className="text-sm text-on-surface-variant">{t.promo.cards.cashbackDesc}</p>
        </div>
        <div className="mt-6 flex justify-between items-center text-primary">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            {t.promo.cards.endsIn.replace('{days}', '2')}
          </span>
          <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
        </div>
      </div>

      {/* Middle Card Featured (Primary Gradient) */}
      <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h4 className="text-2xl font-headline font-bold mb-2">{t.promo.cards.bankMandiriTitle}</h4>
          <p className="text-sm text-white/80 leading-relaxed">{t.promo.cards.bankMandiriDesc}</p>
        </div>
        <div className="mt-8 flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">10%</span>
            <span className="text-[10px] font-bold opacity-80 uppercase leading-tight">
              {t.promo.cards.extraDiscount.split(' ').map((word, i) => <span key={i}>{word}<br/></span>)}
            </span>
          </div>
          <Button variant="secondary" className="bg-white text-primary border-none hover:bg-white/90 py-6 font-bold rounded-xl">
            {t.promo.cards.useNow}
          </Button>
        </div>
      </div>

      {/* Small Detail Card 2 */}
      <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-2xl p-6 flex flex-col justify-between shadow-sm group cursor-pointer border border-tertiary/10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-3xl">restaurant</span>
            <Badge variant="tertiary" className="bg-white/30">{t.common.trending}</Badge>
          </div>
          <h4 className="text-lg font-headline font-bold mb-2 text-on-tertiary-container">{t.promo.cards.culinaryTitle}</h4>
          <p className="text-sm opacity-90">{t.promo.cards.culinaryDesc}</p>
        </div>
        <div className="mt-6 border-t border-on-tertiary-container/10 pt-4 flex items-center justify-between">
          <span className="font-bold text-sm">{t.promo.cards.viewRestos.replace('{count}', '45')}</span>
          <span className="material-symbols-outlined">restaurant_menu</span>
        </div>
      </div>
    </div>
  )
}
