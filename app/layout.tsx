import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'

export const metadata: Metadata = {
  title: 'NINEWINIT | AI 마케팅 컨설팅',
  description:
    'AI와 데이터로 비즈니스의 성장을 설계합니다. 마케팅 분석, 업무 자동화, 성장 전략, AI 컨설팅 서비스를 제공합니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="pt-(--header-height)">{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}
