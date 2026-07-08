"use client"

import { BadgeCheck, Handshake, MessageSquareHeart, Scale } from "lucide-react"
import { motion } from "framer-motion"

const trustPoints = [
  {
    icon: Scale,
    title: "Regulamentação",
    description:
      "Operamos com produtos regulamentados e fiscalizados pelo Banco Central do Brasil.",
  },
  {
    icon: BadgeCheck,
    title: "Compromisso com o resultado",
    description:
      "Indicamos o plano certo para o seu orçamento, sem forçar decisões precipitadas.",
  },
  {
    icon: Handshake,
    title: "Relação de longo prazo",
    description:
      "Estamos presentes antes, durante e depois da contemplação, com suporte contínuo.",
  },
  {
    icon: MessageSquareHeart,
    title: "Comunicação clara",
    description:
      "Você entende cada passo: crédito, prazo, taxa de administração e próximos movimentos.",
  },
]

export function AboutTrust() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-2">
            Por que confiar
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Segurança que se sente no atendimento
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
            Confiança não é só promessa: é consistência, clareza e presença em cada decisão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                className="flex gap-4 rounded-2xl bg-background/5 border border-background/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-background/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
