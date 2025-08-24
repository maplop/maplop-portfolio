"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageCircle, Target, Lightbulb, Clock, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"
import { technicalSkills } from "@/constant/skills"

export function SkillsSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.skills.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dict.skills.description}</p>
        </motion.div>


        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <Card className="w-28 h-28 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="flex flex-col items-center justify-center text-center space-y-2 p-2">
                    <div className="transition-colors duration-300">{skill.icon}</div>
                    <h4 className="font-semibold text-xs">{skill.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}