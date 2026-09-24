"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          {/* Ícone da marca ao fundo, como na apresentação da identidade visual */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-24 w-[360px] opacity-[0.07] sm:w-[440px] lg:-right-10 lg:w-[520px]">
            <Image src="/brand/icone-prestes-branco.svg" alt="" width={426} height={510} className="h-auto w-full" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              className="max-w-xl text-center lg:text-left"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <div className="mb-6 flex justify-center lg:justify-start">
                <Image
                  src="/brand/icone-prestes-branco.svg"
                  alt="Prestes Consultoria e Negócios"
                  width={426}
                  height={510}
                  className="h-14 w-auto"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Pronto para realizar seus sonhos?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Entre em contato com nossa equipe de especialistas e descubra o melhor plano para você. Atendimento personalizado e sem compromisso.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15, duration: 0.45 }}
            >
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <Link href="/#simulador">
                  Simular Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="text-base bg-[#25D366] text-white hover:bg-[#128C7E] border-0"
                asChild
              >
                <a href="https://wa.me/5541987767168" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
