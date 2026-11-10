"use client"

import { ArrowRight, CheckCircle, MessageCircle, ShieldCheck } from "lucide-react"
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

// Hero em azul-marinho, com o conteúdo à esquerda. O simulador fica em uma seção própria
// logo abaixo (a cliente pediu para a página não começar direto pelo simulador).
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary pt-28 pb-24 text-primary-foreground lg:pt-40 lg:pb-36"
    >
      {/* Decoração: brilhos azuis e ícone da marca grande, bem clarinho, saindo pela direita */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto h-full max-w-7xl">
          <Image
            src="/brand/icone-prestes-branco.svg"
            alt=""
            width={426}
            height={510}
            className="absolute -right-16 top-1/2 hidden h-auto w-[620px] -translate-y-1/2 select-none opacity-[0.06] lg:block"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-4 lg:px-8">
        <motion.div
          className="max-w-3xl"
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

          <h1 className="text-[2.5rem]/[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Realize seus{" "}
            <span className="text-brand">projetos de vida</span>{" "}
            sem pagar juros
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 text-pretty md:text-lg md:leading-relaxed">
            Com a Prestes, você conquista imóveis, veículos e muito mais de forma planejada e inteligente. Simule agora e descubra a parcela ideal para o seu bolso.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="h-12 bg-brand text-base text-white hover:bg-brand/90 md:h-10" asChild>
              <Link href="/#simulador">
                Simular meu consórcio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="h-12 border-0 bg-[#25D366] text-base text-white hover:bg-[#128C7E] md:h-10"
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

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4" />
            Regulamentado pelo Banco Central do Brasil
          </p>
        </motion.div>
      </div>
    </section>
  )
}
