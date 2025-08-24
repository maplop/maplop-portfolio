"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si"


export function HeroSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <p className="text-lg text-muted-foreground mb-4">{dict.hero.greeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground bg-clip-text">
                Manuel A Prieto
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-500 text-foreground mb-6">
              {dict.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {dict.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="/CV-Manuel-A-Prieto.pdf" download>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  {dict.hero.downloadCV}
                </Button>
              </a>
              <a
                href="https://wa.me/5354564407?text=%C2%A1Hola!%20Me%20gust%C3%B3%20tu%20trabajo%20y%20quisiera%20contratar%20tus%20servicios.%20%C2%BFPodemos%20coordinar%20para%20hablar%20al%20respecto%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2  bg-orange-500 hover:bg-orange-600">
                  <SiWhatsapp className="w-4 h-4" />
                  {dict.hero.contactMe}
                </Button>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/maplop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/maplop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 text-foreground p-3 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-orange-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-orange-300 rounded-full opacity-20"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/profile.png" // Replace with your actual image path
                    alt="Manuel A Prieto - UI/UX Designer & Front-End Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative geometric elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-orange-400 rotate-45 opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rotate-12 opacity-40"></div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-16 -left-8 w-8 h-8"
              >
                <div className="w-full h-full bg-orange-300 rotate-45 opacity-50"></div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                className="absolute bottom-20 -right-12 w-6 h-6"
              >
                <div className="w-full h-full bg-orange-400 rounded-full opacity-60"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}