import * as React from "react"
import { id, TranslationType } from "../locales/id"
import { en } from "../locales/en"

type Language = "id" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const initialState: LanguageProviderState = {
  language: "id",
  setLanguage: () => null,
  t: id,
}

const LanguageProviderContext = React.createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage = "id",
  storageKey = "nusabook-lang",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(
    () => (typeof window !== "undefined" ? (localStorage.getItem(storageKey) as Language) : defaultLanguage) || defaultLanguage
  )

  const t = language === "en" ? en : id

  const value = {
    language,
    setLanguage: (lang: Language) => {
      localStorage.setItem(storageKey, lang)
      setLanguage(lang)
    },
    t,
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
