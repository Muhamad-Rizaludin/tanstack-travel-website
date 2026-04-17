export function PromoTicker() {
  const items = [
    "#1 Hotel Borobudur Magelang",
    "#2 Tiket Pesawat Jakarta-Bali",
    "#3 Open Trip Bromo Sunrise",
    "#4 Luxury Glamping Bandung"
  ]

  return (
    <div className="mt-12 bg-surface-container rounded-2xl p-4 flex items-center gap-4 overflow-hidden border border-outline-variant/[0.1]">
      <span className="flex-shrink-0 flex items-center gap-1 text-primary font-bold text-sm">
        <span className="material-symbols-outlined text-sm">trending_up</span> TERLARIS:
      </span>
      <div className="flex gap-8 whitespace-nowrap animate-pulse-subtle overflow-x-auto no-scrollbar">
        {items.map((item) => (
          <span key={item} className="text-sm text-on-surface-variant italic font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
