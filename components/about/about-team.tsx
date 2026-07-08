"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const moments = [
  {
    src: "/sobre-time.jpg",
    alt: "Time Prestes Consórcios",
    title: "Um time unido",
    description: "Profissionais alinhados para entregar o melhor atendimento em cada etapa.",
  },
  {
    src: "/sobre-atendimento.jpg",
    alt: "Atendimento Prestes",
    title: "Parceria de verdade",
    description: "Acompanhamento próximo, com clareza e disponibilidade para tirar dúvidas.",
  },
  {
    src: "/sobre-equipe-paris.jpg",
    alt: "Equipe Prestes em momento especial",
    title: "Histórias que inspiram",
    description: "Por trás de cada conquista, existe planejamento, confiança e dedicação.",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-2">
            Nossa equipe
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Quem cuida do seu projeto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma equipe preparada para orientar, acompanhar e celebrar cada conquista com você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.src}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{moment.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
