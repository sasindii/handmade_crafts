import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CraftedWithLove - Handmade Crafts Online Shop",
  description:
    "Discover unique handmade crafts, jewelry, bags, and home decorations created by talented artisans from around the world.",
  keywords: "handmade, crafts, jewelry, bags, home decor, artisan, handcrafted",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
