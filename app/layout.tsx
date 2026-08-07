import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});


export const viewport: Viewport = {
  themeColor: '#2245ff',
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
      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* Marca d'água do site: fixa atrás de todo o conteúdo.
            PNG de traço escuro com fundo transparente, para o fundo claro do site. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 flex select-none items-center justify-center overflow-hidden opacity-[0.06]"
        >
          <Image
            src="/logo-prestes-marca-dagua-escura.png"
            alt=""
            width={1024}
            height={1025}
            className="h-auto w-[85vw] max-w-2xl"
          />
        </div>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
