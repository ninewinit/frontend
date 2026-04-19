import {
  ChartColumn,
  Lightbulb,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type ServiceTab = {
  id: string;
  label: string;
  englishLabel: string;
  title: string;
  description: string;
  features: string[];
  accent: string;
  gradient: string;
  icon: LucideIcon;
};

export const services: ServiceTab[] = [
  {
    id: "analysis",
    label: "데이터 분석",
    englishLabel: "Data Analysis",
    title: "데이터 기반\n정밀 마케팅 분석",
    description:
      "고객사의 광고 데이터를 AI로 분석하여 숨겨진 인사이트를 발견합니다. 전환율, ROAS, 고객 행동 패턴을 실시간으로 파악해 최적의 마케팅 의사결정을 지원합니다.",
    features: [
      "실시간 광고 성과 대시보드",
      "고객 행동 패턴 AI 분석",
      "ROAS 최적화 리포트",
      "경쟁사 벤치마크 분석",
    ],
    accent: "oklch(0.65 0.19 250)",
    gradient:
      "linear-gradient(135deg, oklch(0.85 0.1 250) 0%, oklch(0.9 0.05 220) 100%)",
    icon: ChartColumn,
  },
  {
    id: "strategy",
    label: "전략 수립",
    englishLabel: "Strategy Planning",
    title: "브랜드 성장을 위한\n실행형 전략 설계",
    description:
      "시장 흐름과 고객 반응, 광고 성과 데이터를 함께 분석해 다음 액션을 설계합니다. 캠페인 우선순위와 채널별 접근 전략을 명확하게 정리합니다.",
    features: [
      "시장 및 경쟁사 분석",
      "타깃 세그먼트 전략 수립",
      "채널 운영 우선순위 도출",
      "성과 중심 실행 로드맵 설계",
    ],
    accent: "oklch(0.7 0.15 160)",
    gradient:
      "linear-gradient(135deg, oklch(0.88 0.08 160) 0%, oklch(0.94 0.04 130) 100%)",
    icon: Lightbulb,
  },
  {
    id: "creation",
    label: "크리에이션",
    englishLabel: "Creation",
    title: "AI 크리에이티브\n자동 생성 시스템",
    description:
      "브랜드 아이덴티티에 맞는 광고 소재를 AI가 자동으로 생성합니다. 카피라이팅부터 이미지, 영상 소재까지 빠르고 효율적으로 제작합니다.",
    features: [
      "AI 카피라이팅 자동 생성",
      "배너 및 이미지 소재 제작",
      "A/B 테스트 소재 자동 생성",
      "브랜드 톤앤매너 맞춤 설정",
    ],
    accent: "oklch(0.75 0.15 80)",
    gradient:
      "linear-gradient(135deg, oklch(0.92 0.08 80) 0%, oklch(0.95 0.05 60) 100%)",
    icon: Palette,
  },
  {
    id: "ads",
    label: "광고 집행",
    englishLabel: "Media Operation",
    title: "성과를 만드는\n광고 운영 최적화",
    description:
      "매체별 집행 전략부터 실시간 모니터링, 성과 최적화까지 한 번에 운영합니다. 예산 효율을 높이고 지속적으로 테스트하며 결과를 개선합니다.",
    features: [
      "매체별 캠페인 세팅 및 운영",
      "성과 기반 예산 최적화",
      "소재 성과 비교 및 테스트",
      "리포트 자동화 및 인사이트 공유",
    ],
    accent: "oklch(0.65 0.2 30)",
    gradient:
      "linear-gradient(135deg, oklch(0.88 0.1 30) 0%, oklch(0.95 0.05 20) 100%)",
    icon: Megaphone,
  },
];

export const serviceAnimationStyle = (delay: number) => ({
  animationDelay: `${delay}ms`,
  animationFillMode: "both" as const,
});
