import { useLanguage } from "@/components/language-provider"

export function HelpFaq() {
  const { t } = useLanguage()
  
  const faqs = [
    { q: t.help.faq.q1, a: t.help.faq.a1 },
    { q: t.help.faq.q2, a: t.help.faq.a2 },
    { q: t.help.faq.q3, a: t.help.faq.a3 },
    { q: t.help.faq.q4, a: t.help.faq.a4 }
  ]

  return (
    <section className="max-w-3xl mx-auto mb-20">
      <h2 className="text-2xl font-headline font-bold text-center mb-8 text-on-background">{t.help.faq.title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-surface-container-low rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden border border-outline-variant/[0.05]">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h4 className="font-bold font-headline pr-4 text-on-surface text-sm md:text-base">{faq.q}</h4>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant text-xs md:text-sm leading-relaxed border-t border-outline-variant/10 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
