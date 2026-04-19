import type { Metadata } from 'next'
import { Noto_Sans_KR, Playfair_Display, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'NINEWINIT | AI 마케팅 컨설팅',
  description: 'AI와 데이터로 비즈니스의 성장을 설계합니다. 마케팅 분석, 업무 자동화, 성장 전략, AI 컨설팅 서비스를 제공합니다.',
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
      <body className={`${notoSansKR.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
