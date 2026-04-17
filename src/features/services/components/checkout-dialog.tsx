import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "@tanstack/react-router"
import { useLanguage } from "@/components/language-provider"

interface CheckoutDialogProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  price: number
}

export function CheckoutDialog({ isOpen, onClose, serviceName, price }: CheckoutDialogProps) {
  const { t, language } = useLanguage()
  const [step, setStep] = React.useState(1)
  const navigate = useNavigate()

  if (!isOpen) return null

  const handlePayment = () => {
    onClose()
    navigate({ to: '/booking/success' })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-surface w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center bg-background/50 backdrop-blur-md">
          <div className="flex items-center gap-4 text-on-surface">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent font-headline">NusaBook</span>
            <div className="h-6 w-[1px] bg-outline-variant/20 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
              {t.checkout.secure}
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-8">
          {/* Progress Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="flex items-center justify-between relative text-on-surface">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 z-0"></div>
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
                style={{ width: step === 1 ? '0%' : '100%' }}
              ></div>
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${s <= step ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form Area */}
            <div className="lg:col-span-2 space-y-8 text-on-surface">
              {step === 1 ? (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    </div>
                    <h2 className="text-xl font-bold font-headline">{language === 'id' ? 'Informasi Pemesan' : 'Order Information'}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase ml-1">{language === 'id' ? 'Nama Lengkap' : 'Full Name'}</label>
                      <Input placeholder={language === 'id' ? 'Contoh: Budi Santoso' : 'e.g. John Doe'} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase ml-1">{language === 'id' ? 'Nomor HP' : 'Phone Number'}</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl bg-surface-container-high text-on-surface-variant text-xs font-bold border border-r-0 border-outline-variant/20">+62</span>
                        <Input className="rounded-l-none" placeholder="8123456789" />
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase ml-1">Email</label>
                      <Input placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                </section>
              ) : (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                    </div>
                    <h2 className="text-xl font-bold font-headline">{t.checkout.method}</h2>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-4">{t.checkout.selectMethod}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['QRIS', 'GoPay', 'OVO', 'DANA'].map((method) => (
                      <label key={method} className="relative flex flex-col items-center justify-center p-4 border-2 border-outline-variant/10 rounded-2xl cursor-pointer hover:border-primary/30 transition-all group">
                        <input type="radio" name="payment" className="hidden" />
                        <span className="text-[10px] font-black text-on-surface group-hover:text-primary">{method}</span>
                      </label>
                    ))}
                  </div>
                  <div className="space-y-3 pt-4">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t.checkout.transfer}</p>
                    {['BCA', 'Mandiri', 'BNI'].map((bank) => (
                      <div key={bank} className="flex items-center justify-between p-4 border border-outline-variant/10 rounded-2xl hover:bg-surface-container-low cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-[10px] font-black text-primary">{bank}</div>
                          <span className="text-sm font-bold">{bank} Virtual Account</span>
                        </div>
                        <span className="material-symbols-outlined text-outline-variant text-sm">chevron_right</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Summary */}
            <aside className="lg:col-span-1">
              <Card className="p-6 bg-surface-container-low border-none rounded-3xl space-y-6">
                <div className="space-y-3 pb-6 border-b border-outline-variant/10 text-on-surface">
                  <Badge variant="primary" className="bg-primary text-white border-none text-[8px] uppercase tracking-widest">{language === 'id' ? 'PAKET LIBURAN' : 'HOLIDAY PACKAGE'}</Badge>
                  <h3 className="font-bold text-sm leading-tight font-headline">{serviceName}</h3>
                </div>
                
                <div className="space-y-3 text-xs text-on-surface">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant font-medium">{language === 'id' ? 'Harga' : 'Price'} (2x)</span>
                    <span className="font-bold">Rp {(price * 2).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant font-medium">{language === 'id' ? 'Biaya Layanan' : 'Service Fee'}</span>
                    <span className="font-bold">Rp 15.000</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-dashed border-outline-variant/20">
                    <span className="font-bold uppercase tracking-wider">{t.checkout.total}</span>
                    <span className="font-black text-primary text-base">Rp {(price * 2 + 15000).toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {step === 1 ? (
                  <Button className="w-full py-7 rounded-2xl font-bold text-sm" onClick={() => setStep(2)}>
                    {language === 'id' ? 'Lanjut ke Pembayaran' : 'Continue to Payment'}
                  </Button>
                ) : (
                  <Button className="w-full py-7 rounded-2xl font-bold text-sm gap-2" onClick={handlePayment}>
                    {t.checkout.pay}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Button>
                )}
                
                <p className="text-[9px] text-center text-on-surface-variant leading-relaxed px-4">
                  {language === 'id' 
                    ? "Dengan menekan tombol, Anda menyetujui Syarat & Ketentuan NusaBook." 
                    : "By clicking the button, you agree to NusaBook's Terms & Conditions."}
                </p>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
