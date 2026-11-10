"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView, useReducedMotion } from "framer-motion"

// Números da empresa. Os três primeiros são os mesmos já publicados na página Sobre e no
// rodapé; confirme com a cliente antes de alterar.
const highlights = [
  { value: 10, prefix: "+", suffix: "", label: "anos realizando sonhos" },
  { value: 5000, prefix: "+", suffix: "", label: "clientes atendidos" },
  { value: 70, prefix: "R$ ", suffix: " mi", label: "em créditos comercializados" },
  { value: 240, prefix: "", suffix: "x", label: "prazo máximo para imóveis" },
]

type CountUpProps = { value: number; prefix: string; suffix: string }

function CountUp({ value, prefix, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setCurrent(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setCurrent(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value])

  const format = (n: number) => n.toLocaleString("pt-BR")

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
      {/* O valor final, invisível, reserva a largura para o número não "pular" enquanto conta */}
      <span aria-hidden="true" className="invisible">
        <span className="text-brand">{prefix}</span>
        {format(value)}
        <span className="text-brand">{suffix}</span>
      </span>
      <span aria-hidden="true" className="absolute inset-0 whitespace-nowrap">
        <span className="text-brand">{prefix}</span>
        {format(current)}
        <span className="text-brand">{suffix}</span>
      </span>
    </span>
  )
}

export function Highlights() {
  return (
    // O cartão sobe sobre a borda do hero azul-marinho; o fundo cinza continua na seção do
    // simulador logo abaixo. flow-root impede que a margem negativa "vaze" para a seção.
    <section aria-label="A Prestes em números" className="flow-root bg-secondary/50">
      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 lg:-mt-16 lg:px-8">
        <motion.div
          className="rounded-3xl border border-border bg-card px-6 py-8 text-foreground shadow-xl shadow-primary/10 sm:px-10 lg:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {highlights.map((item) => (
              <div key={item.label} className="px-2 text-center lg:px-6">
                <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
