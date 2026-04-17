import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import { HelpHero } from '@/features/help/components/help-hero'
import { HelpCategories } from '@/features/help/components/help-categories'
import { HelpFaq } from '@/features/help/components/help-faq'
import { HelpContact } from '@/features/help/components/help-contact'

export const Route = createFileRoute('/help')({
  component: HelpPage,
})

function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="pt-24 pb-32 px-4 md:px-6 max-w-7xl mx-auto flex-1 w-full">
        <HelpHero />
        <HelpCategories />
        <HelpFaq />
        <HelpContact />
      </main>
      <Footer />
      
      {/* Floating Support Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">support_agent</span>
      </button>

      {/* Mobile Nav Spacer */}
      <div className="h-20 md:hidden"></div>
    </div>
  )
}
