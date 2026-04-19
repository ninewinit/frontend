import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      className="bg-background py-28 md:py-36 px-6 text-center"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.07 0.005 260) 0%, oklch(0.05 0.01 250) 100%)",
      }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 text-balance">
        성장의 시작,
        <br />
        <span className="text-primary">나인위닛과 함께.</span>
      </h2>
      <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
        마케팅 인력이 부족한 스타트업, 중소기업이 빠르게 성장할 수 있게. AI가
        데이터를 분석하고, 전략을 수립하고, 광고를 집행합니다.
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
      >
        무료 상담 신청하기
        <ArrowRight size={18} />
      </a>
    </section>
  );
}
