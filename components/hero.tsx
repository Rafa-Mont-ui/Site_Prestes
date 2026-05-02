"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const benefits = [
  "Sem juros",
  "Sem entrada",
  "Parcelas flexíveis",
]

export function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] lg:rounded-bl-[200px]" />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-4 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
              whileHover={{ scale: 1.03 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Conquiste seus sonhos
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Realize seus{" "}
              <span className="text-primary">projetos de vida</span>{" "}
              sem pagar juros
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Com a Prestes Consórcios, você conquista imóveis, veículos e muito mais de forma planejada e inteligente. Simule agora e descubra a parcela ideal para o seu bolso.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                  whileHover={{ y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {benefit}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#simulador">
                  Simular Consórcio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#como-funciona">
                  Como Funciona
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right content - Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1 rounded-2xl bg-card border border-border p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary">+10 anos</div>
                <p className="mt-2 text-sm text-muted-foreground">de experiência no mercado</p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl bg-card border border-border p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary">+5.000</div>
                <p className="mt-2 text-sm text-muted-foreground">clientes satisfeitos</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-primary p-6 shadow-lg text-primary-foreground">
                <div className="text-4xl font-bold">R$ 500 milhões</div>
                <p className="mt-2 text-sm text-primary-foreground/80">em créditos comercializados</p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl bg-card border border-border p-6 shadow-lg">
                <div className="text-4xl font-bold text-foreground">0%</div>
                <p className="mt-2 text-sm text-muted-foreground">de juros nas parcelas</p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl bg-foreground p-6 shadow-lg text-background">
                <div className="text-4xl font-bold">+98%</div>
                <p className="mt-2 text-sm text-background/80">de aprovação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
