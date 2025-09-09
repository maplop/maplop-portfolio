"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Dumbbell, BriefcaseBusiness, FileJson2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { dictionaries } from "@/lib/dictionaries"
import { projects } from "@/data/projects"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from "react"
import { ProjectCategory } from "@/data/projects"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import Image from "next/image"

export function ProjectsSection() {
  const { language } = useLanguage()
  const dict = dictionaries[language]

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

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

  const getCategoryIcon = (category: ProjectCategory) => {
    let IconComponent
    let label
    let colorClass

    switch (category) {
      case "real":
        IconComponent = BriefcaseBusiness
        label = "Trabajo"
        colorClass = "text-blue-500"
        break
      case "practice":
        IconComponent = Dumbbell
        label = "Práctica"
        colorClass = "text-red-500"
        break
      case "exam":
        IconComponent = FileJson2
        label = "Prueba técnica"
        colorClass = "text-green-500"
        break
      default:
        return null
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <IconComponent className={`w-5 h-5 cursor-pointer ${colorClass}`} />
          </TooltipTrigger>
          <TooltipContent side="top">{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{dict.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dict.projects.description}</p>
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
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean" && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
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
                        {project.images.map((img, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              src={img || "/img-placeholder.png"}
                              alt={`${project.title}-${index}`}
                              width={800}
                              height={450}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{project.title[language]}</CardTitle>
                        {getCategoryIcon(project.category)}
                      </div>
                      <CardDescription
                        onClick={() =>
                          setExpandedProject(expandedProject === index ? null : index)
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
                      <div className="flex gap-2">
                        {project.projectUrl ? (
                          <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600" asChild>
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {dict.projects.viewProject}
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" className="flex-1 bg-orange-500" disabled>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {dict.projects.viewProject}
                          </Button>
                        )}

                        {project.githubUrl ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            className="absolute left-[-10px] sm:left-[-15px] top-56 p-1 z-10 rounded-full transition
              bg-gray-200 text-black
    hover:bg-orange-500 hover:text-white 
             dark:bg-gray-800 dark:text-white dark:hover:bg-orange-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-[-10px] sm:right-[-15px] top-56 p-1 z-10 rounded-full transition
             bg-gray-200 text-black 
    hover:bg-orange-500 hover:text-white 
            dark:bg-gray-800 dark:text-white dark:hover:bg-orange-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section >
  )
}
