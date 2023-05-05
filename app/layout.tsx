import './globals.css'
import { Inter, Roboto, Roboto_Condensed, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Find A Friend',
  description: 'Leve a felicidade para o seu lar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
