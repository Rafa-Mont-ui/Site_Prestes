import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  produtos: [
    { name: "Consórcio de Imóveis", href: "/#simulador" },
    { name: "Consórcio de Veículos", href: "/#simulador" },
    { name: "Consórcio de Motos", href: "/#simulador" },
    { name: "Consórcio de Serviços", href: "/#simulador" },
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
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and contact */}
          <div className="space-y-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-28%20at%2012.55.10-Zqc1VQp2KqXbtXKXPO47eROMDizvNR.jpeg"
              alt="Prestes Consórcios"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Realizando sonhos há mais de 10 anos. Consórcios de imóveis, veículos e serviços com as melhores condições do mercado.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>(41) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@prestesconsorcios.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Curitiba, PR</span>
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
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
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
                      <Link href={item.href} className="text-sm text-background/70 hover:text-primary transition-colors">
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
                          className="text-sm text-background/70 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.href} className="text-sm text-background/70 hover:text-primary transition-colors">
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
                    <Link href={item.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} Prestes Consórcios. Todos os direitos reservados.
            </p>
            <p className="text-xs text-background/50 text-center">
              Regulamentado pelo Banco Central do Brasil. Administrado por parceiros autorizados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
