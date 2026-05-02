'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  {
    label: '분석',
    items: [
      { id: 'report-automation', label: '자동화 보고서' },
      { id: 'ga4-ab-test-report', label: 'GA활용 보고서' },
      { id: 'market-analysis', label: '랭킹/예상 매출 분석' },
    ],
  },
  {
    label: '전략',
    items: [
      { id: 'marketing-trend-issue', label: '마케팅 트렌드' },
      { id: 'seo-optimization', label: '인사이트' },
      { id: 'imc-proposal', label: '콘텐츠' },
    ],
  },
  {
    label: '콘텐츠',
    items: [
      { id: 'blog-automation', label: '블로그' },
      { id: 'card-news-automation', label: '이미지' },
      { id: 'video-automation', label: '영상' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 border-border border-b backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="relative flex min-h-(--header-height) items-center justify-between p-6">
        <div className="flex items-center gap-20">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            <h1>NINEWINIT</h1>
          </Link>

          <nav>
            <ul className="body1 flex items-center gap-15 text-gray-400">
              {NAV_ITEMS.map((navItem) => (
                <li key={navItem.label} className="group relative">
                  <button
                    type="button"
                    className="transition-colors hover:text-white"
                  >
                    {navItem.label}
                  </button>

                  <div
                    aria-hidden
                    className="bg-background invisible fixed top-(--header-height) left-0 h-40 w-full opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
                  />

                  <div className="invisible absolute top-full left-0 z-10 pt-10 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="flex w-full min-w-max flex-col gap-6 text-gray-400">
                      {navItem.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`/?service=${item.id}#service`}
                            className="transition-colors hover:text-white"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <div className="body1 flex items-center gap-6 text-gray-400">
          <Link href="/">PRO 가입</Link>

          <Link href="#">로그인</Link>
          <Link
            href="#contact"
            className="bg-primary-main rounded-md px-4 py-2 text-white"
          >
            무료 대행 신청하기
          </Link>
        </div>
      </div>
    </header>
  )
}
