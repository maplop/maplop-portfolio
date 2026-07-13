"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"

const companies = [
  {
    id: "dynamicore",
    logo: "/company-logos/dynamicore-logo.png",
    bgColor: "bg-white",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
  },
  {
    id: "freelancer",
    logo: null,
    initial: "F",
    bgColor: "bg-orange-500",
    borderColor: "border-orange-500",
    textColor: "text-white",
  },
]

export function ExperienceSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]
  const jobs = dict.experience.jobs

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.experience.title}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, index) => {
              const company = companies.find((c) => c.id === (index === 0 ? "dynamicore" : "freelancer"))!
              const isDynamicore = index === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 overflow-hidden`}>
                    <div className={`w-14 h-14 rounded-lg ${company.bgColor} ${company.borderColor} border-2 flex items-center justify-center shadow-lg overflow-hidden`}>
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={job.company}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className={`text-xl font-bold ${company.textColor}`}>
                          {company.initial}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow relative">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3 md:hidden">
                          <div className={`w-12 h-12 rounded-lg ${company.bgColor} ${company.borderColor} border-2 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden`}>
                            {company.logo ? (
                              <img
                                src={company.logo}
                                alt={job.company}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className={`text-lg font-bold ${company.textColor}`}>
                                {company.initial}
                              </span>
                            )}
                          </div>
                          <div>
                            {isDynamicore ? (
                              <a href="https://dynamicore.io/en" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-blue-500 transition-colors inline-flex items-center gap-1">
                                {job.company}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <h3 className="font-semibold text-lg">{job.company}</h3>
                            )}
                            <Badge variant="secondary" className="mt-1">
                              {job.period}
                            </Badge>
                          </div>
                        </div>

                        <div className="hidden md:flex items-center justify-between mb-3">
                          {isDynamicore ? (
                            <a href="https://dynamicore.io/en" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-blue-500 transition-colors inline-flex items-center gap-1">
                              {job.company}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <h3 className="font-semibold text-lg">{job.company}</h3>
                          )}
                          <Badge variant="secondary">{job.period}</Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-2">{job.role}</p>
                        <div className="text-muted-foreground leading-relaxed space-y-1">
                          {job.description.split("\n").map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
