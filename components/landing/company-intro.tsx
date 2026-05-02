'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Shield, TrendingUp, Users, Zap } from 'lucide-react'

const stats = [
  { value: 300, suffix: '+', label: '누적 파트너사' },
  { value: 150, suffix: '%', label: '평균 ROAS 개선' },
  { value: 24, suffix: '/7', label: 'AI 실시간 모니터링' },
  { value: 70, suffix: '%', label: '업무 효율 향상' },
]

const partners = [
  { name: '3m', logo: '/images/partners/3m.jpg' },
  { name: 'cuchen', logo: '/images/partners/cuchen.jpg' },
  { name: 'geumchi', logo: '/images/partners/geumchi.jpg' },
  { name: 'happypack', logo: '/images/partners/happypack.jpg' },
  { name: 'homeplus', logo: '/images/partners/homeplus.jpg' },
  { name: 'jeonggwanjang', logo: '/images/partners/jeonggwanjang.jpg' },
  { name: 'nespresso', logo: '/images/partners/nespresso.jpg' },
  { name: 'pizzahut', logo: '/images/partners/pizzahut.jpg' },
  { name: 'samsung', logo: '/images/partners/samsung.jpg' },
  { name: 'thejam', logo: '/images/partners/thejam.jpg' },
  { name: 'yogibo', logo: '/images/partners/yogibo.jpg' },
  { name: 'yuhan-kimberly', logo: '/images/partners/yuhan-kimberly.jpg' },
  { name: 'yuljae', logo: '/images/partners/yuljae.jpg' },
]

function useCountUp(
  end: number,
  duration: number = 2000,
  startCounting: boolean
) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!startCounting || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentCount = Math.floor(easeOutExpo * end)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, startCounting])

  return count
}

function StatCard({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0]
  isInView: boolean
}) {
  const count = useCountUp(stat.value, 2000, isInView)

  return (
    <div className="border-border bg-card/50 relative flex flex-col items-center rounded-2xl border py-8 backdrop-blur-sm">
      <span className="text-foreground mb-2 text-3xl font-extrabold tabular-nums md:text-4xl">
        <span>
          {count}
          {stat.suffix}
        </span>
      </span>
      <span className="text-muted-foreground text-xs font-medium md:text-sm">
        {stat.label}
      </span>
    </div>
  )
}

function PartnerCarousel() {
  // Double the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]
  const scrollDuration = '20s'

  return (
    <div className="relative mb-20 overflow-hidden">
      {/* Gradient masks */}
      <div className="from-background absolute top-0 bottom-0 left-0 z-10 w-20 bg-linear-to-r to-transparent" />
      <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-20 bg-linear-to-l to-transparent" />

      <div
        className="animate-scroll flex w-max"
        style={{ animationDuration: scrollDuration }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={index}
            className="relative mx-4 flex h-23.5 w-43.5 shrink-0 items-center justify-center overflow-hidden rounded-xl border opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:w-40"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CompanyIntro() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-background relative overflow-hidden">
      {/* Top gradient line */}
      <div className="via-primary/40 h-px w-full bg-linear-to-r from-transparent to-transparent" />

      <div className="px-6 py-24 md:px-[10%] md:py-36">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="text-primary mb-6 inline-block font-mono text-xs tracking-widest uppercase">
            About Ninewinit
          </span>
          <h2 className="text-foreground mb-4 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            AI 기반 종합 광고 자동화 플랫폼
          </h2>
          <p className="text-primary mb-8 text-4xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            나인위닛
          </p>
          <div className="bg-primary/40 mx-auto mb-8 h-px w-16" />
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-pretty md:text-xl">
            마케팅 인력이 부족한 스타트업, 중소기업이 빠르게 성장할 수 있게
            <br />
            고객사의 데이터 분석 후 AI를 활용해 인사이트, 매출 극대화.
            <br />
            <span className="text-foreground font-medium">
              마케팅 분석, 전략, 크리에이션을 지원합니다.
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={sectionRef}
          className="mx-auto mb-20 grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} />
          ))}
        </div>

        {/* Partners Section */}
        <div className="mb-10 text-center">
          <p className="text-muted-foreground text-sm">
            함께 성장하고 있는 파트너사
          </p>
        </div>

        <PartnerCarousel />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300">
            <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
              <Zap />
            </div>
            <h3 className="text-foreground mb-2 text-base font-bold">
              데이터 드리븐
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              감이 아닌 수치가 의사결정의 기준입니다
            </p>
          </div>
          <div className="group border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300">
            <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
              <TrendingUp />
            </div>
            <h3 className="text-foreground mb-2 text-base font-bold">
              매출 극대화
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ROAS를 넘어 실질적 매출 성장을 설계합니다
            </p>
          </div>
          <div className="group border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300">
            <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
              <Users />
            </div>
            <h3 className="text-foreground mb-2 text-base font-bold">
              전담 매니저
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI + 전문가가 함께하는 하이브리드 운영
            </p>
          </div>
          <div className="group border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300">
            <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
              <Shield />
            </div>
            <h3 className="text-foreground mb-2 text-base font-bold">
              신뢰할 수 있는 파트너
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              투명한 리포팅과 성과 기반 보상 구조
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
