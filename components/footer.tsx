"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

export function Footer() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            {dict.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-current" /> {dict.footer.and} Next.js
          </p>
          <p className="mt-2">© 2024 Alex Rodriguez. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
