"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const highlights = [
  "Atendimento personalizado",
  "Transparência em cada etapa",
  "Equipe especializada",
]

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Quem somos
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Pessoas de verdade por trás dos{" "}
              <span className="text-primary">seus projetos</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Prestes Consórcios nasceu para aproximar o planejamento financeiro de quem
              quer conquistar imóveis, veículos e muito mais com segurança, clareza e
              acompanhamento de perto.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                  whileHover={{ y: -2 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/#simulador">
                  Simular Consórcio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                  Falar com a equipe
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/sobre-time.jpg"
                alt="Equipe Prestes Consórcios"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 rounded-2xl bg-card border border-border p-5 shadow-lg max-w-[220px]">
              <p className="text-3xl font-bold text-primary">+25 anos</p>
              <p className="mt-1 text-sm text-muted-foreground">
                de experiência no mercado de consórcios
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
