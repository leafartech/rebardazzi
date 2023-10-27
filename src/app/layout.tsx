import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jornada Ballet do Zero',
  description: 'Jornada Ballet do Zero - página oficial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
