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
    // Sobe um pouco sobre o fim do hero para a faixa ficar "encaixada" no painel cinza
    <section aria-label="A Prestes em números" className="relative z-10 -mt-6 lg:-mt-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="rounded-3xl bg-primary px-6 py-8 text-primary-foreground shadow-xl shadow-primary/20 sm:px-10 lg:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-primary-foreground/15">
            {highlights.map((item) => (
              <div key={item.label} className="px-2 text-center lg:px-6">
                <p className="font-heading text-3xl font-bold sm:text-4xl">
                  <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
