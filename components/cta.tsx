"use client"

import { ArrowRight, Phone } from "lucide-react"
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
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              className="max-w-xl text-center lg:text-left"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <div className="mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-28%20at%2012.55.10-Zqc1VQp2KqXbtXKXPO47eROMDizvNR.jpeg"
                  alt="Prestes Consórcios"
                  width={80}
                  height={80}
                  className="h-16 w-auto mx-auto lg:mx-0 brightness-0 invert"
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
                <Link href="#simulador">
                  Simular Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
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
