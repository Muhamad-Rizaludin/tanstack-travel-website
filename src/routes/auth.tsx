import { createFileRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="bg-surface font-body text-on-background min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="w-full py-8 bg-slate-50 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-4 md:space-y-0">
          <div className="text-left">
            <span className="font-headline font-bold text-slate-900 text-sm">NusaBook</span>
            <p className="text-xs text-slate-500 mt-1">© 2024 NusaBook. Memberikan kenyamanan perjalanan Anda.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/help" className="text-slate-500 hover:text-slate-900 transition-colors text-xs">Kebijakan Privasi</Link>
            <Link to="/help" className="text-slate-500 hover:text-slate-900 transition-colors text-xs">Syarat & Ketentuan</Link>
            <Link to="/help" className="text-slate-500 hover:text-slate-900 transition-colors text-xs">Pusat Bantuan</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
