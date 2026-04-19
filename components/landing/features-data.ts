import { Clock, Shield, TrendingUp, Zap, type LucideIcon } from "lucide-react";

export type StatItem = {
  value: string;
  label: string;
  company: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const featureStats: StatItem[] = [
  { value: "300%", label: "평균 ROAS 향상", company: "스타트업 A사" },
  { value: "70%", label: "마케팅 비용 절감", company: "이커머스 B사" },
  { value: "5x", label: "전환율 향상", company: "SaaS C사" },
  { value: "24/7", label: "실시간 최적화", company: "리테일 D사" },
];

export const featureHighlights: FeatureItem[] = [
  {
    title: "빠른 세팅",
    description:
      "3일 이내 광고 세팅 완료. 복잡한 온보딩 없이 바로 성과를 만들어냅니다.",
    icon: Zap,
  },
  {
    title: "매출 극대화",
    description: "AI가 실시간으로 광고를 최적화하여 ROAS를 극대화합니다.",
    icon: TrendingUp,
  },
  {
    title: "데이터 보안",
    description: "고객사의 모든 데이터는 암호화되어 안전하게 관리됩니다.",
    icon: Shield,
  },
  {
    title: "시간 절약",
    description: "마케팅 인력 없이도 AI가 24시간 광고를 관리합니다.",
    icon: Clock,
  },
];
