"use client"

import { Target, CreditCard, CalendarCheck, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Target,
    step: "01",
    title: "Defina seu objetivo",
    description: "Escolha o tipo de consórcio que melhor atende aos seus sonhos: imóveis, veículos e motos. Nossa equipe ajuda você a selecionar o grupo ideal.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Contribua mensalmente",
    description: "Você define quanto pode pagar por mês e mantém os pagamentos em dia. É como poupar com disciplina, mas com a chance de ser contemplado a qualquer momento.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Participe das assembleias",
    description: "Todo mês você participa dos sorteios ou pode oferecer lances para antecipar sua contemplação. Utilize até o FGTS para lances em imóveis.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Conquiste seu bem",
    description: "Ao ser contemplado, você recebe a carta de crédito para adquirir seu bem com poder de compra à vista. Nós ajudamos com toda a documentação.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-2">Passo a passo</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Como funciona o consórcio
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
            Entenda como é simples conquistar seus sonhos com o consórcio Prestes
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-background/20 z-0 pointer-events-none"
            aria-hidden
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
              >
                <div className="text-center">
                  <div className="relative flex justify-center items-center h-24 mb-6">
                    <div className="relative z-10 inline-flex">
                      <div className="w-24 h-24 rounded-full bg-foreground ring-1 ring-background/20 flex items-center justify-center">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 z-20 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-background/70 leading-relaxed text-sm">
                    {step.description}
                  </p>
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
