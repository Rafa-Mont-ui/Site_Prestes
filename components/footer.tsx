import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const LOGO_SRC = "/logo-prestes.jpg"

const navigation = {
  produtos: [
    { name: "Consórcio de Imóveis", href: "/#simulador" },
    { name: "Consórcio de Veículos", href: "/#simulador" },
    { name: "Consórcio de Motos", href: "/#simulador" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Vantagens", href: "/#vantagens" },
    { name: "Contato", href: "https://wa.me/5541999999999" },
  ],
  suporte: [
    { name: "Perguntas Frequentes", href: "/#duvidas" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/prestesconsorcios/", icon: Instagram },
    { name: "Facebook", href: "https://web.facebook.com/p/Prestes-Cons%C3%B3rcios-100086437242114/?_rdc=1&_rdr#", icon: Facebook },
  ],
}

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and contact */}
          <div className="space-y-6">
            <Image
              src={LOGO_SRC}
              alt="Prestes Consórcios"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <p className="text-sm text-footer-foreground/70 leading-relaxed max-w-xs">
              Realizando sonhos há mais de 10 anos. Consórcios de imóveis, veículos e motos com as melhores condições do mercado.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-footer-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>(41) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-footer-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>prestes_consorcios@hotmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-footer-foreground/70">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Tv. Benjamin Lins de Assis, 147 - Afonso Pena, São José dos Pinhais - PR</span>
              </div>
            </div>

            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Produtos</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.produtos.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-footer-foreground/70 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Empresa</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-footer-foreground/70 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href} className="text-sm text-footer-foreground/70 hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Suporte</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.suporte.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-footer-foreground/70 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-footer-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-footer-foreground/50">
              © {new Date().getFullYear()} Prestes Consórcios. Todos os direitos reservados.
            </p>
            <p className="text-xs text-footer-foreground/50 text-center">
              Regulamentado pelo Banco Central do Brasil. Administrado por parceiros autorizados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
