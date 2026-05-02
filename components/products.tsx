"use client"

import { Home, Car, Bike, Wrench, ArrowRight } from "lucide-react"
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
    creditRange: "R$ 30 mil a R$ 300 mil",
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
  {
    icon: Wrench,
    name: "Consórcio de Serviços",
    description: "Viagens, casamentos, formaturas, procedimentos estéticos, cursos e muito mais. Planeje e conquiste!",
    creditRange: "R$ 20 mil a R$ 150 mil",
    terms: "48 a 100 meses",
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
            Com a carta de crédito, escolha o produto ou serviço que faz mais sentido para o seu momento de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                  product.highlight
                    ? "bg-primary text-primary-foreground shadow-xl scale-[1.02]"
                    : "bg-card border border-border hover:border-primary/50 hover:shadow-lg"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                whileHover={{ y: -4 }}
              >
                {product.highlight && (
                  <span className="absolute -top-3 right-6 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Mais procurado
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                    product.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <Icon className={`h-7 w-7 ${product.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${product.highlight ? "" : "text-foreground"}`}>
                      {product.name}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${
                      product.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div>
                        <span className={`block text-xs ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                          Crédito
                        </span>
                        <span className={`text-sm font-medium ${product.highlight ? "" : "text-foreground"}`}>
                          {product.creditRange}
                        </span>
                      </div>
                      <div>
                        <span className={`block text-xs ${product.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                          Prazo
                        </span>
                        <span className={`text-sm font-medium ${product.highlight ? "" : "text-foreground"}`}>
                          {product.terms}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant={product.highlight ? "secondary" : "default"}
                      size="sm"
                      asChild
                    >
                      <Link href="#simulador">
                        Simular agora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
