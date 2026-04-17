import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from '@/features/dashboard/components/layout'
import { MetricCards } from '@/features/dashboard/components/metrics'
import { BookingChart } from '@/features/dashboard/components/chart'
import { BookingTable } from '@/features/dashboard/components/booking-table'

export const Route = createFileRoute('/admin')({
  component: AdminDashboardComponent,
})

function AdminDashboardComponent() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-2">
        <MetricCards />
        <BookingChart />
        <BookingTable />
      </div>
      
      <footer className="mt-16 pt-12 pb-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-headline font-bold text-primary">NusaBook Admin</h4>
            <p className="font-body text-[10px] md:text-xs text-on-surface-variant mt-2 tracking-wide uppercase font-bold">© 2024 Portal Manajemen NusaBook</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs text-on-surface-variant font-bold uppercase">
            <a href="#" className="hover:text-primary transition-colors">Tentang</a>
            <a href="#" className="hover:text-primary transition-colors">Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Dukungan</a>
          </div>
        </div>
      </footer>
    </DashboardLayout>
  )
}
