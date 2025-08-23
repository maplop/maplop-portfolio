"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Heart, Target, BookOpen, GraduationCap, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

export function AboutSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  // Valores y principios de desarrollo
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: language === "es" ? "Código Limpio" : "Clean Code",
      description: language === "es" ? "Escribo código legible y mantenible" : "I write readable and maintainable code",
      color: "text-blue-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === "es" ? "Pasión por Aprender" : "Passion for Learning",
      description: language === "es" ? "Siempre explorando nuevas tecnologías" : "Always exploring new technologies",
      color: "text-red-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === "es" ? "Orientado a Resultados" : "Results Oriented",
      description: language === "es" ? "Enfocado en soluciones efectivas" : "Focused on effective solutions",
      color: "text-green-500",
    },
  ]

  // Educación resumida
  const education = [
    {
      title: language === "es" ? "Ing. Sistemas Computacionales" : "Computer Systems Engineering",
      institution: "Universidad Tecnológica Nacional",
      year: "2022",
      type: "degree",
    },
    {
      title: "React Developer Certification",
      institution: "Meta",
      year: "2023",
      type: "certification",
    },
    {
      title: "Next.js Professional Certificate",
      institution: "Vercel",
      year: "2023",
      type: "certification",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dict.about.description}</p>
        </motion.div>

        {/* Valores y Principios */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            {language === "es" ? "Mis Valores como Desarrollador" : "My Values as a Developer"}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`${value.color} mb-4 flex justify-center`}>{value.icon}</div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Educación Resumida */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            {language === "es" ? "Formación Académica" : "Academic Background"}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-3">
                          {item.type === "degree" ? (
                            <GraduationCap className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Award className="w-5 h-5 text-green-600" />
                          )}
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.institution}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {item.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
