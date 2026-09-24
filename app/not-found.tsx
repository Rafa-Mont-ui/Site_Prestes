import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Página exibida para qualquer endereço que não existe no site
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-4 pt-28 pb-16">
        <div className="mx-auto max-w-lg text-center">
          <Image
            src="/brand/icone-prestes.svg"
            alt=""
            width={426}
            height={510}
            className="mx-auto h-20 w-auto"
          />
          <p className="mt-8 text-sm font-semibold text-brand">Erro 404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O endereço que você acessou não existe ou foi alterado. Volte para o início ou fale com a nossa equipe.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar ao início
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/5541987767168" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
