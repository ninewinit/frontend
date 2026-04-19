"use client";

import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[85vh] w-full bg-background flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1a162d 0%, #000000 80%)",
        }}
      />

      {/* 3D Background iframe */}
      <div className="absolute inset-x-0 top-16 bottom-16 pointer-events-auto">
        <iframe
          src="https://my.spline.design/applevisionpro3dportfolioconcept-cQ5DaCiHRswXWaUJSLbcjoQJ/"
          className="w-full h-full border-none"
          title="3D Background"
          allow="autoplay"
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-foreground/60 hover:text-foreground transition-colors animate-bounce"
        aria-label="스크롤 다운"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
