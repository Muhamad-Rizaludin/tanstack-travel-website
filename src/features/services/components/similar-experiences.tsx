import { Link } from "@tanstack/react-router"
import { useLanguage } from "@/components/language-provider"

export function SimilarExperiences() {
  const { t, language } = useLanguage()

  const experiences = [
    {
      id: "6",
      name: language === 'id' ? "Private Pool Villa Retreat" : "Private Pool Villa Retreat",
      location: t.home.locations.bali,
      info: `2 ${t.services.night}`,
      price: 4250000,
      rating: 4.8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX_N5ak-qyH2mo3SOkS45PqQEogTTBah2Ws61F_AtsiwqT36uv3553YNMd8sA3t20neawRyizHcXImdF9bDuSrgBTlUolTV3LcVjyrduy2AC40GqtHIkRDpKYodKSamn0wuhse8UTwGjdK9mCPl3-1RNKq3jdjdob4xHKOB5qkOI-GRaKv0P-S0qMUPIqpGdh_d2XwWv54oSZVaK9xgX1Ua1aF_8HG4Q_MpBfxaStDsxm_ZxvPnMSxw3NsAtjTUUBLR-C8SwN6HP4"
    },
    {
      id: "7",
      name: language === 'id' ? "Tur Kapal Nusa Penida" : "Nusa Penida Boat Tour",
      location: t.home.locations.bali,
      info: "Full Day",
      price: 850000,
      rating: 4.9,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHHks6Rr6fAlezJOSXjhX9jB9aFpQ3zabjG8MPKrHWo8300HIop6AVAPSoLvs6xHbj1nhHxHtBKrsDNmjocFk0Q8hxS5cjw6slzBntASYllkBI4-Q6LTgOBTplSJzokgJkq-gguNWZJUGJz8-CiUBPwHaZs7MjAHhr3z79f_LB6SkE5s8nuw9PPJxvtUjvU8xarzmlq0V-rxcbmc26kCGxL8iMY-SdyR6ysyAq6ebf8N8FYJhUN1DNCLyXNAs_B8vJJ2_VePfT3yQ"
    },
    {
      id: "8",
      name: language === 'id' ? "Jiwa Budaya Ubud" : "Cultural Soul of Ubud",
      location: t.home.locations.bali,
      info: "Workshop & Tour",
      price: 600000,
      rating: 4.7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUCzTknFkoQt_MA-5sr8Zcb-oGO0BUTyRYU1GDhw754QLuaNLsjCteb5qA4WjwLh9ENKfIGcL4U4RJNrcGJauCRankE-F10uJfgR5P6_-bV2QRro-hcGkS_dCjTPha07fG9K2q-RFlIGXiMOhzmtp0rAdPH3Aofvs11hi5sAUqDTw0J0shzmkgzsYUKRqjlMcLmmppMNjHsAtXGe3pOSOYEOPjXfSRC6qc50e1SbmRBcBkLv4pu5cVZqRY0WRt9-jhksY9zFJJGhA"
    }
  ]

  return (
    <section className="mt-24">
      <div className="flex justify-between items-end mb-8 text-on-surface px-1">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold font-headline truncate">{t.services.similarTitle}</h2>
          <p className="text-sm md:text-base text-on-surface-variant font-medium line-clamp-1">{t.services.similarSub}</p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm shrink-0">
          {t.common.viewAll} <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <Link key={exp.id} to="/service/$serviceId" params={{ serviceId: exp.id }} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10">
            <div className="h-52 overflow-hidden">
              <img src={exp.image} alt={exp.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6 text-on-surface">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight font-headline">{exp.name}</h3>
                <span className="flex items-center gap-1 text-sm font-bold bg-primary/5 px-2 py-1 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {exp.rating}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span> {exp.location}
              </p>
              <div className="flex justify-between items-center pt-5 border-t border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5">{exp.info}</p>
                  <p className="font-bold text-primary text-lg">Rp {exp.price.toLocaleString('id-ID')}</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
