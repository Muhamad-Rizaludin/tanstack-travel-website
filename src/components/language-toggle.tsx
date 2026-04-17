import { useLanguage } from "./language-provider"
import { Button } from "./ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex bg-surface-container-low p-1 rounded-xl border border-outline-variant/10">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 h-auto rounded-lg text-[10px] font-bold transition-all ${
          language === "id" 
            ? "bg-primary text-on-primary shadow-sm" 
            : "text-on-surface-variant hover:bg-surface-container"
        }`}
      >
        ID
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 h-auto rounded-lg text-[10px] font-bold transition-all ${
          language === "en" 
            ? "bg-primary text-on-primary shadow-sm" 
            : "text-on-surface-variant hover:bg-surface-container"
        }`}
      >
        EN
      </Button>
    </div>
  )
}
