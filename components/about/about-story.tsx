"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/sobre-atendimento.jpg"
                alt="Atendimento personalizado Prestes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-primary mb-2">
              Nossa história
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Confiança construída no dia a dia
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Prestes Consórcios acredita que conquistar um bem não precisa ser
                complicado nem cheio de surpresas. Por isso, unimos conhecimento de
                mercado, atendimento humano e planos claros para cada perfil de cliente.
              </p>
              <p>
                Cada simulação, cada conversa e cada acompanhamento são feitos com
                responsabilidade. Nosso compromisso é orientar com transparência, explicar
                cada etapa do processo e ajudar você a escolher o caminho mais seguro para
                realizar seus projetos.
              </p>
              <p>
                Mais do que vender consórcios, construímos relações de confiança. Estamos
                ao seu lado do primeiro contato até a contemplação — e depois dela também.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-2xl font-bold text-primary">+5.000</p>
                <p className="mt-1 text-sm text-muted-foreground">clientes atendidos</p>
              </div>
              <div className="rounded-2xl bg-card border border-border p-5">
                <p className="text-2xl font-bold text-primary">R$ 70 mi</p>
                <p className="mt-1 text-sm text-muted-foreground">em créditos comercializados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
