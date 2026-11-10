"use client"

import { ArrowRight, CheckCircle, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const benefits = [
  "Sem juros",
  "Sem entrada",
  "Parcelas flexíveis",
]

const WHATSAPP_HREF =
  "https://wa.me/5541987767168?text=" +
  encodeURIComponent("Olá! Gostaria de saber mais sobre os consórcios.")

// Hero em azul-marinho com foto da equipe atendendo. O simulador fica em uma seção própria
// logo abaixo (a cliente pediu para a página não começar direto pelo simulador).
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary pt-28 pb-24 text-primary-foreground lg:pt-36 lg:pb-32"
    >
      {/* Decoração: brilho azul e ícone da marca grande, bem clarinho, atrás da foto */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto h-full max-w-7xl">
          <Image
            src="/brand/icone-prestes-branco.svg"
            alt=""
            width={426}
            height={510}
            className="absolute -right-24 top-1/2 hidden h-auto w-[620px] -translate-y-1/2 select-none opacity-[0.06] lg:block"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {/* Texto */}
          <motion.div
            className="min-w-0 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
              </span>
              Conquiste seus sonhos
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Realize seus{" "}
              <span className="text-brand">projetos de vida</span>{" "}
              sem pagar juros
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Com a Prestes, você conquista imóveis, veículos e muito mais de forma planejada e inteligente. Simule agora e descubra a parcela ideal para o seu bolso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="bg-brand text-base text-white hover:bg-brand/90" asChild>
                <Link href="/#simulador">
                  Simular meu consórcio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-0 bg-[#25D366] text-base text-white hover:bg-[#128C7E]"
                asChild
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <CheckCircle className="h-5 w-5 text-brand" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Foto da equipe atendendo, com selos flutuantes */}
          <motion.div
            className="relative mx-auto w-full max-w-md lg:mr-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 lg:aspect-[4/5]">
              <Image
                src="/sobre-atendimento.jpg"
                alt="Consultores da Prestes atendendo um cliente"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 448px, 448px"
              />
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 text-foreground shadow-xl lg:bottom-10 lg:-left-10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                <ShieldCheck className="h-5 w-5 text-brand" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Regulamentado</span>
                <span className="block text-xs text-muted-foreground">pelo Banco Central</span>
              </span>
            </div>

            <div className="absolute top-8 -right-6 hidden items-center gap-3 rounded-2xl bg-card px-4 py-3 text-foreground shadow-xl lg:flex">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                <HeartHandshake className="h-5 w-5 text-brand" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Atendimento humano</span>
                <span className="block text-xs text-muted-foreground">do início à contemplação</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
