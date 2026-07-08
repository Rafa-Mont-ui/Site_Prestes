import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTA } from "@/components/cta"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutTrust } from "@/components/about/about-trust"

export const metadata: Metadata = {
  title: "Sobre Nós | Prestes Consórcios",
  description:
    "Conheça a Prestes Consórcios: atendimento próximo, transparência e planejamento para realizar seus sonhos com segurança.",
}

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutTrust />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
