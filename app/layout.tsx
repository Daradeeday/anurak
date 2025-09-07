import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Anurak Tns 13',
  description: 'Photo Anurak Tns13',
  openGraph: {
    title: 'Anurak Tns 13',
    description: 'Photo Anurak Tns13',
    images: ['/hero.jpg']
  },
  icons: { icon: '/favicon.ico' }
}

export const viewport: Viewport = {
  themeColor: '#FFCC29',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang='en'>
      <body className='font-body'>{children}</body>
    </html>
  )
}
