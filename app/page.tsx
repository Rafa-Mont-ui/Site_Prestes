import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { Advantages } from "@/components/advantages"
import { HowItWorks } from "@/components/how-it-works"
import { Products } from "@/components/products"
import { AboutPreview } from "@/components/about-preview"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Advantages />
        <Products />
        <AboutPreview />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
