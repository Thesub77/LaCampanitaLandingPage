import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "La Campanita R.L",
  description:
    "Cooperativa apícola de mujeres Chorotegas dedicadas a la producción sostenible de miel y derivados. Transformando vidas y comunidades a través del trabajo colaborativo y el empoderamiento femenino.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
