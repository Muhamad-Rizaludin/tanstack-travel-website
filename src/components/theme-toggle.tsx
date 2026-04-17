import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 p-0 rounded-xl hover:bg-surface-container transition-colors"
    >
      <span className="material-symbols-outlined text-on-surface text-[22px]">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
