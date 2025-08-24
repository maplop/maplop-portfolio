"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Target, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

export function AboutSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  // Valores y principios de desarrollo
  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: language === "es" ? "Atención al Detalle" : "Attention to Detail",
      description: language === "es" ? "Cuido los detalles para mejorar la experiencia del usuario" : "I pay attention to details to enhance the user experience",
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
        </motion.div>

        {/* Layout responsive: Izquierda (Sobre mí y Estudios) - Derecha (Valores) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Columna Izquierda: Información Personal y Educación */}
          <div className="space-y-12">

            {/* Sobre Mí */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  {language === "es"
                    ? "Comencé mi carrera en el área de sistemas, donde adquirí experiencia en redes, seguridad informática e infraestructura tecnológica, lo que me permitió desarrollar una base sólida en entornos críticos y en la resolución de problemas técnicos."
                    : "I began my career in the systems field, gaining experience in networking, cybersecurity, and technological infrastructure, which allowed me to build a solid foundation in managing critical environments and solving technical challenges."
                  }
                </p>
                <p className="mb-4">
                  {language === "es"
                    ? "Con el tiempo descubrí mi pasión por el desarrollo web, especialmente en el frontend. En este campo he trabajado con tecnologías como HTML, CSS, JavaScript, TypeScript y frameworks modernos como React, Next.js y Astro. Mi enfoque está en crear interfaces claras, funcionales y centradas en la experiencia del usuario, mientras busco nuevas oportunidades para seguir creciendo y aportar soluciones innovadoras y de calidad."
                    : "Over time, I discovered my passion for web development, particularly in frontend. I have worked with technologies like HTML, CSS, JavaScript, TypeScript, and modern frameworks such as React, Next.js, and Astro. My focus is on building clear, functional, and user-centered interfaces while seeking new opportunities to continue growing and contributing innovative, high-quality solutions."
                  }
                </p>
              </div>
            </motion.div>

            {/* Educación */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-left">
                {language === "es" ? "Formación Académica" : "Academic Background"}
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-5 h-5 text-orange-500" />
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base">
                              {language === "es" ? "Ingenieria Informática" : "Computer Engineering"}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {language === "es"
                                ? 'Universidad Central "Marta Abreu" de Las Villas'
                                : 'Central University "Marta Abreu" of Las Villas'}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit">2020</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Valores como Desarrollador */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-left lg:text-left">
              {language === "es" ? "Mis Valores como Desarrollador" : "My Values as Developer"}
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`${value.color} flex-shrink-0`}>
                          {value.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}