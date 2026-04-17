import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/components/language-provider'

export const Route = createFileRoute('/booking/success')({
  component: SuccessComponent,
})

function SuccessComponent() {
  const { t, language } = useLanguage()

  return (
    <div className="bg-background min-h-screen flex flex-col text-on-surface antialiased">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-tertiary-fixed/20 mb-6">
              <span className="material-symbols-outlined text-tertiary !text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-on-background">
              {t.success.title}
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md mx-auto">
              {t.success.subtitle}
            </p>
          </div>

          <Card className="overflow-hidden rounded-[2.5rem] border-outline-variant/10 shadow-xl bg-surface-container-lowest">
            <div className="relative h-48 w-full">
              <img 
                alt="Success" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-outline-variant/10 pb-6">
                <h2 className="text-xl font-headline font-bold text-on-surface">{language === 'id' ? 'Detail Pesanan' : 'Booking Details'}</h2>
                <Badge variant="primary" className="rounded-lg">#NB-882910</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t.dashboard.service}</label>
                  <p className="font-headline font-bold text-on-surface">Uluwatu Ocean View Retreat</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t.home.searchDate}</label>
                  <p className="font-headline font-bold text-on-surface">24 Mar 2024, 14:00</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t.checkout.method}</label>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                    <p className="font-headline font-bold text-on-surface">BCA Virtual Account</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t.orders.card.total}</label>
                  <p className="font-headline font-black text-primary text-2xl">Rp 2.450.000</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl px-8 py-7 font-bold shadow-lg shadow-primary/20" asChild>
              <Link to="/orders">
                <span className="material-symbols-outlined text-lg mr-2">confirmation_number</span>
                {t.success.viewOrder}
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="rounded-2xl px-8 py-7 font-bold border border-outline-variant/10" asChild>
              <Link to="/">
                <span className="material-symbols-outlined text-lg mr-2">home</span>
                {t.success.backToHome}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-surface-container-low py-12 mt-auto border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xl font-bold text-primary font-headline tracking-tight">NusaBook</p>
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">© 2024 Portal NusaBook Indonesia</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase text-on-surface-variant">
            <Link to="/help" className="hover:text-primary transition-colors">Tentang Kami</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Bantuan</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Privasi</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
