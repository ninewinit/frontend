"use client";

import { useRef } from "react";
import Image from "next/image";

const painPoints = [
  {
    number: "01",
    text: "네이버/구글/메타 등 매체별 놓치고 있는 키워드는 없나?",
    image: "/images/pain-keywords.jpg",
  },
  {
    number: "02",
    text: "광고 매출/효율 Maximum으로 올리는 방법은?",
    image: "/images/pain-revenue.jpg",
  },
  {
    number: "03",
    text: "왜 매출이 줄어들었지? 캠페인, 그룹, 소재별로 뜯어보고 싶은데?",
    image: "/images/pain-startup.jpg",
  },
  {
    number: "04",
    text: "수많은 상품들 광고 트래킹을 어떻게 해야 하지?",
    image: "/images/pain-agency.jpg",
  },
  {
    number: "05",
    text: "인사이트 도출은 어떻게 하지?",
    image: "/images/pain-api.jpg",
  },
  {
    number: "06",
    text: "나 대신 컨텐츠 기획, 작성, 광고 운영을 해줄 수 있는 곳은 없나?",
    image: "/images/pain-expert.jpg",
  },
];

function PainPointCard({ point }: { point: (typeof painPoints)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (pressing in effect - card tilts toward the mouse)
    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.98, 0.98, 0.98)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border cursor-default"
      style={{
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
        transform:
          "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          alt={point.text}
          src={point.image}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        {/* Number Badge */}
        <span className="absolute top-4 left-4 text-xs font-mono text-primary/70 tracking-widest">
          {point.number}
        </span>
      </div>

      {/* Text Content */}
      <div className="relative p-5 md:p-6">
        <p className="text-sm md:text-base text-foreground leading-relaxed font-medium">
          {point.text}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 40px oklch(0.65 0.19 250 / 0.08), 0 0 30px oklch(0.65 0.19 250 / 0.05)",
        }}
      />
    </div>
  );
}

export function PainPoints() {
  return (
    <section className="bg-background py-20 md:py-28 px-6 md:px-[10%]">
      {/* Section Header */}
      <div className="mb-14 text-center">
        <span className="inline-block text-xs font-mono tracking-widest text-primary uppercase mb-4">
          Pain Points
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
          이런 고민,&nbsp;
          <span className="text-primary">해본 적 있으신가요?</span>
        </h2>
      </div>

      {/* Pain Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((point) => (
          <PainPointCard key={point.number} point={point} />
        ))}
      </div>
    </section>
  );
}
