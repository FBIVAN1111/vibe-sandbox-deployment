import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SpaceX - Making Life Multiplanetary",
  description: "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
  keywords: "SpaceX, rockets, spacecraft, Mars, Falcon 9, Starship, Dragon, space exploration",
  authors: [{ name: "SpaceX" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SpaceX - Making Life Multiplanetary",
    description: "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
    type: "website",
    locale: "en_US",
    siteName: "SpaceX",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceX - Making Life Multiplanetary",
    description: "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}