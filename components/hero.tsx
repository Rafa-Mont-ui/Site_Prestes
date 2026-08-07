"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calculator } from "@/components/calculator"
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
        <div className="grid items-start lg:grid-cols-2 lg:items-center xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-10 xl:gap-12">
          {/* Left content */}
          <motion.div
            className="max-w-xl min-w-0"
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

            <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:hidden">
              <Button size="lg" asChild>
                <Link href="/#simulador">
                  Simular Consórcio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#como-funciona">
                  Como Funciona
                </Link>
              </Button>
            </div>

            <div className="hidden lg:flex mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link href="/#como-funciona">
                  Como Funciona
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Simulador */}
          <motion.div
            className="relative w-full min-w-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mb-4 lg:hidden">
              <p className="text-sm font-semibold text-primary">Simulador</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Calcule sua parcela agora
              </h2>
            </div>
            <Calculator embedded />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
