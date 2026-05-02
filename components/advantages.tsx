"use client"

import { Shield, Percent, PiggyBank, Building2, Users, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

const advantages = [
  {
    icon: Percent,
    title: "Sem Juros",
    description: "No consórcio você não paga juros, apenas uma taxa de administração muito menor que os juros de financiamento.",
  },
  {
    icon: PiggyBank,
    title: "Sem Entrada",
    description: "Comece a pagar seu consórcio sem precisar desembolsar nenhum valor de entrada. Basta pagar a primeira parcela.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "O consórcio é regulamentado e fiscalizado pelo Banco Central do Brasil, garantindo total segurança ao seu investimento.",
  },
  {
    icon: Building2,
    title: "Poder de Compra à Vista",
    description: "Ao ser contemplado, você recebe uma carta de crédito com poder de compra à vista, possibilitando melhores negociações.",
  },
  {
    icon: Users,
    title: "Parcelas Flexíveis",
    description: "Escolha o prazo e a parcela que melhor se encaixam no seu orçamento. Planos de 48 a 240 meses.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Especializado",
    description: "Nossa equipe de consultores está pronta para ajudar você em todas as etapas, do planejamento à contemplação.",
  },
]

export function Advantages() {
  return (
    <section id="vantagens" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-primary mb-2">Por que consórcio?</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Vantagens do consórcio Prestes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra por que milhares de pessoas escolhem o consórcio para conquistar seus bens de forma inteligente e planejada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={index}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
