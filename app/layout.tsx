import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { Inter, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Tipografia da marca: Open Sans (textos) e Inter (títulos)
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'Prestes Consultoria e Negócios',
  description: 'Consórcios de imóveis, veículos e motos com atendimento personalizado da Prestes Consultoria e Negócios.',
}

export const viewport: Viewport = {
  themeColor: '#061F3F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${openSans.variable} ${inter.variable} font-sans antialiased`}>
        {/* Marca d'água do site: logo completo da marca, fixo atrás de todo o conteúdo. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 flex select-none items-center justify-center overflow-hidden opacity-[0.05]"
        >
          <Image
            src="/brand/logo-prestes.svg"
            alt=""
            width={827}
            height={868}
            className="h-auto w-[80vw] max-w-xl"
          />
        </div>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
