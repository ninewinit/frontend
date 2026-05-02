'use client'

import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-background relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #1a162d 0%, #000000 80%)',
        }}
      />

      {/* 3D Background iframe */}
      <div className="pointer-events-auto absolute inset-x-0 top-16 bottom-16">
        <iframe
          src="https://my.spline.design/applevisionpro3dportfolioconcept-cQ5DaCiHRswXWaUJSLbcjoQJ/"
          className="h-full w-full border-none"
          title="3D Background"
          allow="autoplay"
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-16 bg-linear-to-t to-transparent" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="text-foreground/60 hover:text-foreground absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce transition-colors"
        aria-label="스크롤 다운"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
