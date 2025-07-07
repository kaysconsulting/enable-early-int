import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Enable Us - Early Childhood Intervention & NDIS Services",
  description:
    "Guiding brighter futures with expert early childhood intervention, NDIS support coordination, and disability services. Strength for every step of your journey.",
  keywords:
    "early childhood intervention, NDIS services, support coordination, disability support, employment services, community participation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
