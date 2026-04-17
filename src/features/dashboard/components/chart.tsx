import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function BookingChart() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <Card className="lg:col-span-2 p-4 md:p-8 rounded-xl border-outline-variant/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h3 className="text-lg font-headline font-bold text-on-surface">{t.dashboard.chartTitle}</h3>
          <div className="flex gap-2 bg-surface-container-low p-1 rounded-full">
            <button className="text-[10px] md:text-xs px-4 py-1.5 bg-background shadow-sm rounded-full text-primary font-bold transition-all">{t.dashboard.chartWeek}</button>
            <button className="text-[10px] md:text-xs px-4 py-1.5 text-on-surface-variant font-medium hover:bg-background/50 rounded-full transition-colors">{t.dashboard.chartMonth}</button>
          </div>
        </div>
        
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          <div className="relative h-[240px] min-w-[600px] md:min-w-full mt-4">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 240">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <line stroke="var(--outline-variant)" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="700" y1="0" y2="0"></line>
              <line stroke="var(--outline-variant)" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="700" y1="60" y2="60"></line>
              <line stroke="var(--outline-variant)" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="700" y1="120" y2="120"></line>
              <line stroke="var(--outline-variant)" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="700" y1="180" y2="180"></line>
              <line stroke="var(--outline-variant)" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="700" y1="240" y2="240"></line>
              <path d="M0,180 Q100,120 200,160 T400,80 T600,120 T700,40 L700,240 L0,240 Z" fill="url(#chartGradient)"></path>
              <path d="M0,180 Q100,120 200,160 T400,80 T600,120 T700,40" fill="none" stroke="var(--primary)" strokeLinecap="round" strokeWidth="3"></path>
              <circle cx="200" cy="160" fill="var(--primary)" r="4"></circle>
              <circle cx="400" cy="80" fill="var(--primary)" r="4"></circle>
              <circle cx="700" cy="40" fill="var(--primary)" r="4"></circle>
            </svg>
            <div className="flex justify-between mt-6 text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-widest">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="bg-surface-container-high p-6 md:p-8 rounded-xl flex flex-col justify-between border border-outline-variant/10">
        <div>
          <h3 className="text-lg font-headline font-bold text-on-surface">{t.dashboard.tipsTitle}</h3>
          <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">{t.dashboard.tipsDesc}</p>
        </div>
        <div className="mt-8 space-y-3">
          <div className="bg-background/40 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/5">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed/30 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">insights</span>
            </div>
            <div className="min-w-0">
              <p className="font-bold text-xs text-on-surface">{t.dashboard.metrics.insightTitle}</p>
              <p className="text-[10px] text-on-surface-variant truncate">{t.dashboard.metrics.insightDesc}</p>
            </div>
          </div>
          <div className="bg-background/40 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/5">
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed/30 text-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">star</span>
            </div>
            <div className="min-w-0">
              <p className="font-bold text-xs text-on-surface">{t.dashboard.metrics.ratingTitle}</p>
              <p className="text-[10px] text-on-surface-variant truncate">{t.dashboard.metrics.ratingDesc}</p>
            </div>
          </div>
        </div>
        <button className="mt-8 text-sm font-bold text-primary flex items-center gap-2 group transition-all">
          {t.dashboard.fullReport} 
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
