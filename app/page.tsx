import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Advantages } from "@/components/advantages"
import { HowItWorks } from "@/components/how-it-works"
import { Products } from "@/components/products"
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
        <Advantages />
        <Products />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
