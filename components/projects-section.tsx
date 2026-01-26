"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"
import { projects, ProjectCategory } from "@/data/projects"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import { useEffect, useState } from "react"
import Image from "next/image"

export function ProjectsSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]



  const [isMobile, setIsMobile] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getCategoryBadge = (category: ProjectCategory) => {
    let label
    let className

    switch (category) {
      case "real":
        label = language === "es" ? "Trabajo Real" : "Real Work"
        className = "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
        break
      case "practice":
        label = language === "es" ? "Práctica" : "Practice"
        className = "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
        break
      case "exam":
        label = language === "es" ? "Prueba Técnica" : "Technical Test"
        className = "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
        break
      default:
        return null
    }

    return (
      <Badge variant="outline" className={`${className} whitespace-nowrap shrink-0`}>
        {label}
      </Badge>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {dict.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.projects.description}
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={
              isMobile
                ? false
                : {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
            }
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <Swiper
                        pagination={{ clickable: true }}
                        loop={true}
                        modules={[Pagination]}
                        className="h-full w-full custom-pagination"
                      >
                        {project.images.map((img, imgIndex) => {
                          const isPriority = index < 3 && imgIndex === 0
                          return (
                            <SwiperSlide key={imgIndex}>
                              <Image
                                src={img || "/img-placeholder.png"}
                                alt={`${project.title[language]}-${imgIndex + 1}`}
                                width={800}
                                height={450}
                                priority={isPriority}
                                loading={isPriority ? undefined : "lazy"}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl">
                          {project.title[language]}
                        </CardTitle>
                        {getCategoryBadge(project.category)}
                      </div>
                      <CardDescription
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === index ? null : index
                          )
                        }
                        className={`text-sm text-muted-foreground cursor-pointer ${expandedProject === index ? "" : "line-clamp-3"
                          }`}
                      >
                        {project.description[language]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <Button
                          size="sm"
                          className="w-full bg-orange-500 hover:bg-orange-600 flex items-center gap-2"
                          asChild
                          disabled={!project.projectUrl}
                        >
                          <a
                            href={project.projectUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!project.projectUrl ? "pointer-events-none opacity-50" : ""}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {dict.projects.viewProject}
                          </a>
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full flex items-center gap-2"
                          asChild
                          disabled={!project.githubUrl}
                        >
                          <a
                            href={project.githubUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!project.githubUrl ? "pointer-events-none opacity-30" : ""}
                          >
                            <Github className="w-4 h-4 inline-block" />
                            GitHub
                          </a>
                        </Button>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones personalizados */}
          <button
            className="swiper-button-prev-custom absolute left-[-10px] sm:left-[-15px] top-56 p-1 z-10 rounded-full transition
              bg-gray-200 text-black
              hover:bg-orange-500 hover:text-white 
              dark:bg-gray-800 dark:text-white dark:hover:bg-orange-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="swiper-button-next-custom absolute right-[-10px] sm:right-[-15px] top-56 p-1 z-10 rounded-full transition
              bg-gray-200 text-black
              hover:bg-orange-500 hover:text-white 
              dark:bg-gray-800 dark:text-white dark:hover:bg-orange-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
