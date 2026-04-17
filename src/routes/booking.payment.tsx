import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/booking/payment')({
  component: PaymentComponent,
})

function PaymentComponent() {
  return (
    <div className="bg-surface text-on-background min-h-screen">
      <header className="bg-white/80 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-primary font-headline">NusaBook</Link>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            <span>Pembayaran Aman & Terenkripsi</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-primary -translate-y-1/2 z-0"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg ${step <= 2 ? 'bg-primary text-on-primary shadow-primary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                  {step}
                </div>
                <span className={`text-xs font-semibold ${step <= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {step === 1 ? 'Data Diri' : step === 2 ? 'Pembayaran' : 'Selesai'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                <h2 className="text-xl font-bold tracking-tight">Informasi Pemesan</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant ml-1">Nama Lengkap</label>
                  <Input placeholder="Contoh: Budi Santoso" defaultValue="Budi Santoso" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant ml-1">Nomor HP</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg bg-surface-container-high text-on-surface-variant text-sm font-medium">+62</span>
                    <Input className="rounded-l-none" placeholder="8123456789" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-on-surface-variant ml-1">Alamat Email</label>
                  <Input placeholder="budi.santoso@email.com" type="email" />
                  <p className="text-[10px] text-on-surface-variant/70 mt-1 ml-1 italic">E-tiket akan dikirimkan ke alamat email ini.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                <h2 className="text-xl font-bold tracking-tight">Pilih Metode Pembayaran</h2>
              </div>
              {/* Simplified payment methods for now */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-on-surface-variant">Dompet Digital & QRIS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['QRIS', 'GoPay', 'OVO', 'DANA'].map((method) => (
                    <div key={method} className="relative flex flex-col items-center justify-center p-4 border-2 border-surface-container-high hover:border-primary/30 rounded-xl cursor-pointer transition-all">
                      <span className="text-sm font-bold">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card className="overflow-hidden sticky top-24">
              <div className="relative h-32">
                <img alt="Destination" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_IIBqGg2YHtnROdgXRm1PJZccrNudqeKo7DGfbh_G0mQ86_dXgb0jc7Ik1F2_B3TObGKXCTdMmkhMlxsdJRO42MNAqASCxNbMYBwGT2aZ9j-NYAUx2WH7f2_g0NT_l0wWJICatCD_wB9h81MUGi-35t8U2TRQt139cWrsq37ycL0fyOf7B41Wn0LA7EAkA8ZE-tm-Juod8jLVevmamXpIN3RTyPNE7vBwVDy7SAiI6VUROKgbKd7zOTeBkYZVlOGB6I5fpTvVOiM" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2 py-1 bg-primary text-[10px] font-bold rounded uppercase tracking-wider">Paket Liburan</span>
                  <h3 className="font-bold mt-1 text-sm">Eksplorasi Uluwatu & Pantai Melasti</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-bold">Total Pembayaran</span>
                    <span className="text-xl font-extrabold text-primary">Rp 1.626.150</span>
                  </div>
                </div>
                <Button className="w-full py-6 rounded-xl font-bold group">
                  Bayar Sekarang
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform ml-2">arrow_forward</span>
                </Button>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
