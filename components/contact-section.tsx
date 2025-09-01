"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

export function ContactSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  const contactInfo = [
    {
      icon: Mail,
      label: language === "es" ? "Correo" : "Email",
      value: "manuelalejandro9604@gmail.com",
      href: "mailto:manuelalejandro9604@gmail.com",
    },
    {
      icon: Phone,
      label: language === "es" ? "Teléfono" : "Phone",
      value: "+53 54564407",
      href: "tel:+5354564407",
    },
    {
      icon: MapPin,
      label: language === "es" ? "Ubicación" : "Location",
      value: "Santa Clara, Cuba",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dict.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <a href={info.href} className="text-muted-foreground hover:text-orange-500 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{dict.contact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Aquí está el cambio con mailto */}
                <form
                  className="space-y-4"
                  action="mailto:manuelalejandro9604@gmail.com"
                  method="POST"
                  encType="text/plain"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input name="name" placeholder={dict.contact.namePlaceholder} required />
                    </div>
                    <div>
                      <Input type="email" name="email" placeholder={dict.contact.emailPlaceholder} required />
                    </div>
                  </div>
                  <div>
                    <Textarea name="message" placeholder={dict.contact.messagePlaceholder} rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <Send className="w-4 h-4 mr-2" />
                    {dict.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
