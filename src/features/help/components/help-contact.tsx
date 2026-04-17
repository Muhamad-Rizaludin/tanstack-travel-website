import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function HelpContact() {
  const { t } = useLanguage()

  return (
    <section className="bg-surface-container-high rounded-[2rem] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/10">
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4 text-on-surface">{t.help.contact.title}</h2>
        <p className="text-sm md:text-base text-on-surface-variant mb-0">{t.help.contact.subtitle}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <Button variant="secondary" className="bg-surface text-on-surface px-8 py-7 rounded-2xl font-bold gap-3 shadow-sm hover:bg-surface-container-low border border-outline-variant/5">
          <span className="material-symbols-outlined text-green-500">chat</span>
          WhatsApp
        </Button>
        <Button className="px-8 py-7 rounded-2xl font-bold gap-3 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">mail</span>
          {t.common.help}
        </Button>
      </div>
    </section>
  )
}
