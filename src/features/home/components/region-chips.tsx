import { REGIONS } from "../data"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function RegionChips() {
  const { t } = useLanguage()

  const getTranslatedRegion = (id: string, name: string) => {
    const regionKey = id as keyof typeof t.home.regions
    return t.home.regions[regionKey] || name
  }

  return (
    <section className="mb-12 overflow-x-auto no-scrollbar py-2">
      <div className="flex gap-3">
        {REGIONS.map((region) => (
          <Button
            key={region.id}
            variant={region.id === 'all' ? 'primary' : 'secondary'}
            className="rounded-full whitespace-nowrap px-6"
          >
            {getTranslatedRegion(region.id, region.name)}
          </Button>
        ))}
      </div>
    </section>
  )
}
