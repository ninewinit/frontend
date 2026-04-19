"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Shield, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { value: 300, suffix: "+", label: "누적 파트너사" },
  { value: 150, suffix: "%", label: "평균 ROAS 개선" },
  { value: 24, suffix: "/7", label: "AI 실시간 모니터링" },
  { value: 70, suffix: "%", label: "업무 효율 향상" },
];

const partners = [
  { name: "3m", logo: "/images/partners/3m.svg" },
  { name: "cuchen", logo: "/images/partners/chchen.svg" },
  { name: "geumchi", logo: "/images/partners/geumchi.svg" },
  { name: "happypack", logo: "/images/partners/happypack.svg" },
  { name: "homeplus", logo: "/images/partners/homeplus.svg" },
  { name: "jeonggwanjang", logo: "/images/partners/jeonggwanjang.svg" },
  { name: "nespresso", logo: "/images/partners/nespresso.svg" },
  { name: "pizzahut", logo: "/images/partners/pizzahut.svg" },
  { name: "samsung", logo: "/images/partners/samsung.svg" },
  { name: "thejam", logo: "/images/partners/thejam.svg" },
  { name: "yogibo", logo: "/images/partners/yogibo.svg" },
  { name: "yuhan-kimberly", logo: "/images/partners/yuhan-kimberly.svg" },
  { name: "yuljae", logo: "/images/partners/yuljae.svg" },
];

function useCountUp(
  end: number,
  duration: number = 2000,
  startCounting: boolean,
) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startCounting || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * end);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
}

function StatCard({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0];
  isInView: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <div className="relative flex flex-col items-center py-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
      <span className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 tabular-nums">
        <span>
          {count}
          {stat.suffix}
        </span>
      </span>
      <span className="text-xs md:text-sm text-muted-foreground font-medium">
        {stat.label}
      </span>
    </div>
  );
}

function PartnerCarousel() {
  // Double the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];
  const scrollDuration = "20s";

  return (
    <div className="relative overflow-hidden mb-20">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex w-max animate-scroll"
        style={{ animationDuration: scrollDuration }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={index}
            className="border shrink-0 mx-4 flex items-center justify-center h-23.5 rounded-xl w-43.5 md:w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={48}
              className="object-contain max-h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompanyIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="py-24 md:py-36 px-6 md:px-[10%]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block text-xs font-mono tracking-widest text-primary uppercase mb-6">
            About Ninewinit
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            AI 기반 종합 광고 자동화 플랫폼
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-tight mb-8">
            나인위닛
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} />
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground">
            함께 성장하고 있는 파트너사
          </p>
        </div>

        <PartnerCarousel />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <Zap />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              데이터 드리븐
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              감이 아닌 수치가 의사결정의 기준입니다
            </p>
          </div>
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <TrendingUp />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              매출 극대화
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ROAS를 넘어 실질적 매출 성장을 설계합니다
            </p>
          </div>
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <Users />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              전담 매니저
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI + 전문가가 함께하는 하이브리드 운영
            </p>
          </div>
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <Shield />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              신뢰할 수 있는 파트너
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              투명한 리포팅과 성과 기반 보상 구조
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
