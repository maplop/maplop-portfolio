"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "es" | "en"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
}

type LanguageProviderState = {
  language: Language
  setLanguage: (language: Language) => void
}

const initialState: LanguageProviderState = {
  language: "es",
  setLanguage: () => null,
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({ children, defaultLanguage = "es", ...props }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      setLanguage(defaultLanguage)
    }

  }, [defaultLanguage])

  const handleSetLanguage = (language: Language) => {
    setLanguage(language)
    localStorage.setItem("language", language)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined) throw new Error("useLanguage must be used within a LanguageProvider")

  return context
}
