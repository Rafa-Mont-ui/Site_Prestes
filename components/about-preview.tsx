"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const points = [
  "Explicamos taxas, prazos e condições com clareza",
  "Ajudamos você a escolher o grupo ideal para o seu objetivo",
  "Acompanhamos cada etapa, do primeiro contato até a contemplação",
]

// Apresenta a equipe na página inicial e leva para a página Sobre
export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 md:px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Recorte horizontal da foto (que é vertical), centrado nos rostos */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/sobre-time.jpg"
                alt="Equipe Prestes"
                fill
                className="object-cover object-[center_45%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg lg:-left-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                <MapPin className="h-5 w-5 text-brand" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">Nosso escritório</span>
                <span className="block text-xs text-muted-foreground">São José dos Pinhais - PR</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-primary mb-2">Quem somos</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Pessoas de verdade cuidando do seu plano
            </h2>
            <p className="mt-3 text-base md:mt-4 md:text-lg leading-relaxed text-muted-foreground">
              Por trás de cada simulação existe uma equipe que conhece o mercado e atende você
              de perto, sem pressa e sem letras miúdas.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-8" asChild>
              <Link href="/sobre">
                Conheça a Prestes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
