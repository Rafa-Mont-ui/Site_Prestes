"use client"

import { HeartHandshake, Eye, ShieldCheck, Compass } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: HeartHandshake,
    title: "Proximidade",
    description:
      "Atendimento próximo e humano. Você fala com quem realmente entende do seu plano e acompanha cada etapa.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Explicamos taxas, prazos e condições com clareza. Sem letras miúdas e sem promessas que não se sustentam.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Trabalhamos com consórcios regulamentados pelo Banco Central, priorizando a proteção do seu patrimônio.",
  },
  {
    icon: Compass,
    title: "Orientação",
    description:
      "Ajudamos você a escolher o plano certo para o seu momento de vida, com foco em planejamento e resultado.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-2">
            Nossos pilares
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O que guia a Prestes todos os dias
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Valores que transformam atendimento em confiança e planejamento em conquista.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
