"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

export function HeroSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-lg text-muted-foreground mb-4">{dict.hero.greeting}</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-foreground bg-clip-text">
              Manuel A Prieto
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">{dict.hero.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{dict.hero.description}</p>

          {/* Social Media Links */}
          <div className="flex justify-center mb-8 gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              {dict.hero.downloadCV}
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              {dict.hero.contactMe}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
