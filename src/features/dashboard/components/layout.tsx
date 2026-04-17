import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"

export function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  const { t } = useLanguage()
  
  const menuItems = [
    { label: t.dashboard.title, icon: 'dashboard', href: '/admin' },
    { label: t.dashboard.recentBookings, icon: 'calendar_today', href: '/admin/bookings' },
    { label: t.common.promo, icon: 'layers', href: '/admin/services' },
    { label: t.common.help, icon: 'help', href: '/admin/settings' },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-on-background/20 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={`h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant/10 flex flex-col z-50 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-6 py-8">
          <div className="flex justify-between items-center lg:block">
            <h1 className="font-headline font-bold text-xl text-primary tracking-tight">NusaBook Admin</h1>
            <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-on-surface-variant">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3 p-3 bg-surface-container-low rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold">AD</div>
            <div>
              <p className="font-headline font-bold text-on-surface text-sm">Admin NusaBook</p>
              <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">{t.dashboard.superAdmin}</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              activeProps={{ className: 'bg-primary/10 text-primary' }}
              inactiveProps={{ className: 'text-on-surface-variant hover:bg-surface-container' }}
              className="rounded-xl px-4 py-3 flex items-center gap-3 font-semibold transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-4 py-4 mb-4 mt-auto border-t border-outline-variant/10">
          <Button className="w-full flex items-center justify-center gap-2 rounded-xl py-6">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>{t.dashboard.addService}</span>
          </Button>
          <button className="w-full text-on-surface-variant hover:bg-error/10 hover:text-error rounded-xl mt-2 px-4 py-3 flex items-center gap-3 font-semibold transition-all text-left text-sm">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>{t.dashboard.logout}</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { t } = useLanguage()
  
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-30 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center border-b border-outline-variant/5">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div>
          <h2 className="text-lg md:text-2xl font-headline font-bold text-on-surface tracking-tight">{t.dashboard.title}</h2>
          <p className="text-[10px] md:text-sm text-on-surface-variant hidden md:block">{t.dashboard.welcome}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative">
          <span className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container rounded-full cursor-pointer transition-colors">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
        </div>
        <div className="h-6 w-[1px] bg-outline-variant/30 hidden md:block"></div>
        <p className="text-xs md:text-sm font-bold text-on-surface bg-surface-container px-3 py-1.5 rounded-full">12 Okt 2024</p>
      </div>
    </header>
  )
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
