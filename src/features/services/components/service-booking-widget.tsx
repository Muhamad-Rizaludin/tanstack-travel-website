import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutDialog } from "./checkout-dialog"

export function ServiceBookingWidget({ price, serviceName }: { price: number, serviceName: string }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false)

  return (
    <>
      <Card className="sticky top-28 p-6 rounded-2xl shadow-xl border border-outline-variant/[0.1] bg-surface-container-lowest">
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-sm text-on-surface-variant/60 line-through">Rp {(price * 1.2).toLocaleString('id-ID')}</span>
          <span className="text-3xl font-extrabold text-primary font-headline">Rp {price.toLocaleString('id-ID')}</span>
          <span className="text-on-surface-variant text-sm font-medium">/orang</span>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/[0.2]">
            <label className="block text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Pilih Tanggal</label>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-on-surface">24 Mei 2024</span>
              <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
            </div>
          </div>

          <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/[0.2]">
            <label className="block text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-wider mb-1">Jumlah Peserta</label>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="font-bold w-4 text-center">2</span>
                <button className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <span className="text-xs font-bold text-on-surface-variant">Dewasa</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 pt-4 border-t border-dashed border-outline-variant/30">
          <span className="font-bold text-sm text-on-surface">Total Pembayaran</span>
          <span className="font-extrabold text-xl text-on-background tracking-tight">Rp {(price * 2).toLocaleString('id-ID')}</span>
        </div>

        <Button size="lg" className="w-full rounded-xl font-bold py-7 mb-4" onClick={() => setIsCheckoutOpen(true)}>
          Pesan Sekarang
        </Button>
        
        <Button variant="outline" className="w-full py-6 text-primary font-bold rounded-xl border-primary/20 hover:bg-primary/5">
          Tambah ke Wishlist
        </Button>

        <p className="text-center text-[10px] text-on-surface-variant/60 mt-6 leading-relaxed">
          *Pembatalan gratis hingga 24 jam sebelum kedatangan.
        </p>
      </Card>

      <CheckoutDialog 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        serviceName={serviceName}
        price={price}
      />
    </>
  )
}
