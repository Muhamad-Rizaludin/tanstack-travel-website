import { RECENT_BOOKINGS } from "../data"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function BookingTable() {
  const { t } = useLanguage()

  return (
    <Card className="mt-8 overflow-hidden rounded-xl border-outline-variant/10 shadow-sm">
      <div className="px-4 md:px-8 py-5 md:py-6 flex justify-between items-center border-b border-outline-variant/10 bg-surface-container-lowest/50">
        <h3 className="text-base md:text-lg font-headline font-bold text-on-surface">{t.dashboard.recentBookings}</h3>
        <button className="text-xs md:text-sm font-bold text-primary hover:underline transition-all">{t.common.viewAll}</button>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-on-surface-variant border-b border-outline-variant/10 bg-surface-container-low/30">
              <th className="px-4 md:px-8 py-4 font-bold">{t.dashboard.customer}</th>
              <th className="px-4 md:px-8 py-4 font-bold">{t.dashboard.service}</th>
              <th className="px-4 md:px-8 py-4 font-bold">{t.home.searchDate}</th>
              <th className="px-4 md:px-8 py-4 font-bold">{t.dashboard.status}</th>
              <th className="px-4 md:px-8 py-4 font-bold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10 text-xs md:text-sm">
            {RECENT_BOOKINGS.map((booking) => (
              <tr key={booking.id} className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-4 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                      {booking.customerName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-semibold text-on-surface truncate max-w-[120px] md:max-w-none">{booking.customerName}</span>
                  </div>
                </td>
                <td className="px-4 md:px-8 py-4 text-on-surface-variant font-medium">{booking.serviceName}</td>
                <td className="px-4 md:px-8 py-4 text-on-surface-variant font-medium">{booking.date}</td>
                <td className="px-4 md:px-8 py-4">
                  <Badge 
                    variant={
                      booking.status === 'Berhasil' ? 'tertiary' : 
                      booking.status === 'Pending' ? 'primary' : 'error'
                    }
                    className="text-[10px] px-2 py-0.5"
                  >
                    {booking.status}
                  </Badge>
                </td>
                <td className="px-4 md:px-8 py-4 text-right">
                  <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-primary transition-colors">more_vert</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
