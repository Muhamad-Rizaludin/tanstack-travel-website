import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/components/language-provider'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { to: '/', label: t.common.explore },
    { to: '/promo', label: t.common.promo },
    { to: '/help', label: t.common.help },
    { to: '/orders', label: t.common.myOrders },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent font-headline tracking-tight">
              NusaBook
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === '/' }}
                  activeProps={{ 
                    className: 'text-primary border-b-2 border-primary pb-1' 
                  }}
                  inactiveProps={{ 
                    className: 'text-on-surface-variant hover:text-primary' 
                  }}
                  className="font-headline font-semibold tracking-tight transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <Link 
                to="/auth/login" 
                className="px-5 py-2 text-primary font-bold hover:bg-primary/5 rounded-xl transition-all scale-95 active:opacity-80 duration-200 font-headline text-sm"
              >
                {t.common.login}
              </Link>
              <Button asChild className="bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 scale-95 hover:scale-100 active:opacity-80 transition-all px-6 py-2 h-auto text-sm">
                <Link to="/auth/register">{t.common.register}</Link>
              </Button>
            </div>
            
            <div className="flex md:hidden items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-on-surface hover:bg-surface-container rounded-xl transition-colors relative z-[60]"
              >
                <span className="material-symbols-outlined text-[28px]">
                  {isOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-background md:hidden pt-[72px] transition-transform duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col p-6 h-full overflow-y-auto border-t border-outline-variant/5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-headline font-bold py-5 text-on-surface border-b border-outline-variant/5 active:text-primary transition-colors flex justify-between items-center"
              >
                {link.label}
                <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col gap-4">
            <Link 
              to="/auth/login" 
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-center text-primary font-bold border-2 border-primary/20 rounded-2xl bg-primary/5 active:bg-primary/10 transition-colors"
            >
              {t.common.login}
            </Link>
            <Button asChild className="w-full py-4 h-auto rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
              <Link to="/auth/register" onClick={() => setIsOpen(false)}>{t.common.registerNow}</Link>
            </Button>
          </div>

          <div className="mt-auto py-8 text-center border-t border-outline-variant/5">
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em]">NusaBook Indonesia</p>
          </div>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-surface-container-low pt-20 pb-12 md:pb-24 mt-auto border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-on-surface">
        <div className="md:col-span-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent block mb-6 font-headline tracking-tight">NusaBook</span>
          <p className="text-on-surface-variant text-sm leading-relaxed">{t.footer.desc}</p>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-6 font-headline uppercase text-xs tracking-widest">{t.footer.company}</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
            <li><Link to="/help" className="hover:text-primary transition-colors">{t.footer.about}</Link></li>
            <li><Link to="/help" className="hover:text-primary transition-colors">{t.footer.careers}</Link></li>
            <li><Link to="/help" className="hover:text-primary transition-colors">{t.footer.blog}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-6 font-headline uppercase text-xs tracking-widest">{t.footer.services}</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
            <li><Link to="/help" className="hover:text-primary transition-colors">{t.footer.hotels}</Link></li>
            <li><Link to="/help" className="hover:text-primary transition-colors">{t.footer.flights}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-background mb-6 font-headline uppercase text-xs tracking-widest">{t.footer.contact}</h4>
          <p className="text-sm text-on-surface-variant font-medium">Email: hello@nusabook.id</p>
          <p className="text-sm text-on-surface-variant font-medium mt-2">WhatsApp: +62 812 3456 7890</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant font-bold uppercase tracking-wider">
        <p>© 2024 NusaBook. {t.common.copyright}</p>
        <div className="flex gap-6">
          <Link to="/help" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
          <Link to="/help" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  )
}
