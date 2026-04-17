import { Badge } from "@/components/ui/badge"

export function ServiceInfoContent({ name, location, rating }: { name: string, location: string, rating: number }) {
  const infoItems = [
    { label: "Durasi", value: "6 - 8 Jam", icon: "schedule" },
    { label: "Bahasa", value: "Indo, English", icon: "translate" },
    { label: "Tiket", value: "Mobile Voucher", icon: "confirmation_number" },
  ]

  const facilities = [
    "Penjemputan Hotel (Area Kuta, Seminyak, Jimbaran)",
    "Welcome Drink & Handuk Dingin",
    "Akses Infinity Pool & Private Daybed",
    "Peralatan Snorkeling Berkualitas",
    "Asuransi Perjalanan Selama Aktivitas",
    "Dokumentasi Foto Profesional (Pilihan)",
  ]

  return (
    <div className="space-y-10">
      {/* Header Info */}
      <section>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="tertiary" className="bg-tertiary/10 text-[10px]">Premium Experience</Badge>
          <div className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            {rating} (1.2k+ Ulasan)
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-background mb-4 leading-tight font-headline">{name}</h1>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
          <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
          <span>{location}, Indonesia</span>
          <span className="mx-2 text-outline-variant opacity-50">•</span>
          <button className="text-primary font-bold hover:underline">Lihat Peta</button>
        </div>
      </section>

      {/* Guarantee Box */}
      <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          <div>
            <h3 className="font-bold text-base mb-1 text-on-surface font-headline">NusaBook Guarantee</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Pemesanan Anda dilindungi oleh jaminan harga terendah dan konfirmasi instan 24 jam.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="space-y-4 text-on-surface-variant">
        <h2 className="text-2xl font-bold text-on-background font-headline">Tentang Pengalaman Ini</h2>
        <p className="leading-relaxed text-sm">
          Rasakan kemewahan tiada tara di tebing Uluwatu yang ikonik. Paket eksklusif ini mencakup akses penuh ke club pantai pribadi kami yang tersembunyi, di mana Anda dapat menikmati koktail premium sambil menanti matahari terbenam yang legendaris di Bali. Sempurnakan malam Anda dengan makan malam seafood bintang lima di tepi pantai.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {infoItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/[0.1]">
              <span className="material-symbols-outlined text-primary">{item.icon}</span>
              <div className="text-[10px]">
                <p className="font-bold text-on-surface-variant opacity-60 uppercase tracking-widest">{item.label}</p>
                <p className="font-bold text-on-surface text-xs mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-on-background font-headline">Fasilitas & Layanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {facilities.map((f) => (
            <div key={f} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
              <span className="font-medium text-on-surface-variant text-sm">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-on-background font-headline">Lokasi</h2>
        <div className="w-full h-64 rounded-2xl overflow-hidden bg-surface-container-low shadow-inner relative group border border-outline-variant/[0.1]">
          <img 
            className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKqDyOOMpuYbhVhnckt4njE-d6-wmGy7-VtHsuxJAUar1qbvBTj_yKE7ZM8DPZ8lcHPFxX_mTTGWpAGoB7DJQRRxNMCUNwVEVsgQt5Wyptx-u7s3vmPYWSawwEEo3TEBFzDYIplT35joHeT9z9XNBpEvGPpoL8QHFT_-LYNXAWBZRDufoAipvECrv-uP2CYwfO37Ajw2zFWjbSwZR2dRO7TNbsipTZDSgHEI80eScgtmJZSY9T6BDkVPHRLmkOian6bfQqqgxCTf8" 
            alt="Minimalist Map"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white p-3 rounded-full shadow-2xl scale-110">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
