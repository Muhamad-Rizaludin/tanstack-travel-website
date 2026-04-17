import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function HelpCategories() {
  const { t, language } = useLanguage()

  const smallCategories = [
    { 
      title: t.help.categories.payment, 
      desc: language === 'id' ? "Metode & status bayar" : "Methods & payment status", 
      icon: "payments", 
      color: "text-tertiary" 
    },
    { 
      title: t.help.categories.refund, 
      desc: language === 'id' ? "Prosedur pengembalian" : "Return procedures", 
      icon: "cached", 
      color: "text-orange-500" 
    },
    { 
      title: language === 'id' ? "Reschedule" : "Reschedule", 
      desc: language === 'id' ? "Ubah tanggal & jadwal" : "Change dates & schedules", 
      icon: "edit_calendar", 
      color: "text-purple-500" 
    },
    { 
      title: t.help.categories.account, 
      desc: language === 'id' ? "Login & profil user" : "Login & user profile", 
      icon: "account_circle", 
      color: "text-pink-500" 
    },
  ]

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-headline font-bold text-on-background">
          {language === 'id' ? "Kategori Populer" : "Popular Categories"}
        </h2>
        <button className="text-primary font-semibold flex items-center gap-1 group text-sm">
          {language === 'id' ? "Semua Topik" : "All Topics"} 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Large Feature Card */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-3xl group cursor-pointer transition-all hover:bg-surface-container-low border border-outline-variant/[0.15]">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl">airplane_ticket</span>
          </div>
          <h3 className="text-xl font-bold mb-2 font-headline">
            {language === 'id' ? "Informasi Pesanan & Tiket" : "Booking & Ticket Info"}
          </h3>
          <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">
            {language === 'id' 
              ? "Kelola pesanan hotel, pesawat, atau kereta api Anda dengan mudah dalam satu tempat."
              : "Manage your hotel, flight, or train bookings easily in one place."}
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 
              {language === 'id' ? "Cara cetak e-tiket" : "How to print e-ticket"}
            </li>
            <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 
              {language === 'id' ? "Tiket belum diterima" : "Ticket not received"}
            </li>
          </ul>
        </div>
        
        {/* Small Cards */}
        {smallCategories.map((cat) => (
          <Card key={cat.title} className="p-6 rounded-3xl border border-outline-variant/[0.15] hover:shadow-xl cursor-pointer">
            <span className={`material-symbols-outlined ${cat.color} mb-4`}>{cat.icon}</span>
            <h3 className="font-bold mb-1 font-headline">{cat.title}</h3>
            <p className="text-xs text-on-surface-variant">{cat.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
