"use client"

import { Home, Car, Bike, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const products = [
  {
    icon: Home,
    name: "Consórcio de Imóveis",
    description: "Conquiste sua casa própria, apartamento, terreno ou imóvel comercial. Ideal também para construir, reformar ou quitar financiamento.",
    creditRange: "R$ 80 mil a R$ 1,5 milhão",
    terms: "120 a 240 meses",
    highlight: true,
  },
  {
    icon: Car,
    name: "Consórcio de Veículos",
    description: "Realize o sonho do carro novo ou seminovo. Você também pode usar para caminhões, ônibus e utilitários.",
    creditRange: "R$ 30 mil a R$ 800 mil",
    terms: "60 a 100 meses",
    highlight: false,
  },
  {
    icon: Bike,
    name: "Consórcio de Motos",
    description: "Acelere seus planos com uma moto do jeito que você sempre quis. Parcelas que cabem no bolso.",
    creditRange: "R$ 10 mil a R$ 80 mil",
    terms: "48 a 80 meses",
    highlight: false,
  },
]

export function Products() {
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
          <span className="inline-block text-sm font-semibold text-primary mb-2">Nossos produtos</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O que você pode conquistar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Com a carta de crédito, escolha o bem que faz mais sentido para o seu momento de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                className={`relative flex h-full flex-col rounded-2xl p-6 lg:p-8 transition-[box-shadow,border-color] duration-300 ${
                  product.highlight
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/25"
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                {product.highlight && (
                  <span className="absolute -top-3 right-6 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Mais procurado
                  </span>
                )}

                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                  product.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                }`}>
                  <Icon className={`h-7 w-7 ${product.highlight ? "text-primary-foreground" : "text-primary"}`} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>

                <p className={`mt-2 mb-6 text-sm leading-relaxed ${
                  product.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {product.description}
                </p>

                <div className={`mt-auto grid grid-cols-2 gap-4 border-t pt-5 ${
                  product.highlight ? "border-primary-foreground/20" : "border-border"
                }`}>
                  <div>
                    <span className={`block text-xs ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      Crédito
                    </span>
                    <span className="mt-0.5 block text-sm font-medium">
                      {product.creditRange}
                    </span>
                  </div>
                  <div>
                    <span className={`block text-xs ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      Prazo
                    </span>
                    <span className="mt-0.5 block text-sm font-medium">
                      {product.terms}
                    </span>
                  </div>
                </div>

                <Button
                  variant={product.highlight ? "secondary" : "default"}
                  className="mt-6 w-full"
                  asChild
                >
                  <Link href="#simulador">
                    Simular agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
