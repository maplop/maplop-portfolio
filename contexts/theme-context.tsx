'use client'

import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    const initialTheme = storedTheme || defaultTheme

    const root = window.document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(initialTheme)

    setThemeState(initialTheme)
  }, [defaultTheme])

  const setTheme = (newTheme: Theme) => {
    const root = window.document.documentElement
    root.classList.remove("dark", "light")
    root.classList.add(newTheme)
    localStorage.setItem("theme", newTheme)
    setThemeState(newTheme)
  }

  const value = { theme, setTheme }
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
