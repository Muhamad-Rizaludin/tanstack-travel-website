import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function OrderSidebar() {
  const { t, language } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Loyalty Card */}
      <div className="bg-inverse-surface rounded-2xl p-6 text-inverse-on-surface overflow-hidden relative border border-outline-variant/10">
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">NusaBook Rewards</span>
            <span className="material-symbols-outlined text-yellow-500">stars</span>
          </div>
          <div className="mb-6">
            <p className="text-xs opacity-60 mb-1 font-medium">{language === 'id' ? 'Total Poin Anda' : 'Your Total Points'}</p>
            <h4 className="text-3xl font-bold font-headline">24,850 <span className="text-sm font-normal opacity-60">pts</span></h4>
          </div>
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white">card_giftcard</span>
              </div>
              <div>
                <p className="font-bold text-xs uppercase tracking-wide">{language === 'id' ? 'Tukarkan Poin' : 'Redeem Points'}</p>
                <p className="text-[10px] opacity-70">{language === 'id' ? 'Diskon 15% untuk hotel' : '15% Off for hotels'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      {/* Help Card */}
      <Card className="bg-surface-container-low p-6 rounded-2xl border-none">
        <h4 className="font-headline font-bold text-on-surface mb-4">{t.help.contact.title}</h4>
        <div className="space-y-4">
          <button className="flex items-center gap-3 group w-full text-left">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-outline-variant/5">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">WhatsApp</span>
          </button>
          <button className="flex items-center gap-3 group w-full text-left">
            <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-outline-variant/5">
              <span className="material-symbols-outlined">help</span>
            </div>
            <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">{t.common.help}</span>
          </button>
        </div>
      </Card>
    </div>
  )
}
