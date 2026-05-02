import {
  BarChart3,
  BookOpen,
  FileText,
  ImageIcon,
  Monitor,
  Newspaper,
  Repeat2,
  Search,
  Video,
} from 'lucide-react'

import ReportAutomationPreview from './preivew/analysis/report-automation-preview'
import GoogleAnalyticsPreview from './preivew/analysis/google-analytics-report-preview'
import MarketingTrendIssuePreview from './preivew/insight/marketing-trend-issue-preview'
import SeoOptimizationPreview from './preivew/insight/seo-optimization-preview'
import ImcProposalPreview from './preivew/insight/imc-proposal-preview'
import BlogAutomationPreview from './preivew/proposal/blog-automation-preview'
import VideoAutomationPreview from './preivew/proposal/video-automation-preview'
import CardNewsAutomationPreview from './preivew/proposal/card-news-automation-preview'
import MarketAnalysisPreview from './preivew/analysis/market-analysis-preview'

export const SERVICES = [
  {
    id: 'report-automation',
    category: 'analysis' as const,
    label: '데이터 분석',
    title: '보고서 자동화',
    description:
      '네이버・구글・메타 대체 광고 분석을 자동화 합니다. 복잡한 데이터를 클릭 한 번으로 명확한 리포트로 변환해줍니다.',
    features: ['캠페인/그룹/소재별 누수 조기 발견', '황금키워드 관리'],
  },
  {
    id: 'ga4-ab-test-report',
    category: 'analysis' as const,
    label: '데이터 분석',
    title: 'GA4 A/B 테스트 보고서',
    description:
      '페이지 유입・클릭・전환까지 퍼널 분석으로 성과가 좋았던 핵심 지표를 분석하기 안내합니다.',
    features: [
      '유입 채널 분석',
      '퍼널별 이탈 / 전환율 분석',
      '캠페인 목적별 유입 분석 - 인지도, 트래픽, 구매자 추가 등',
      '고객 행동 흐름 분석, 세그먼트 분석',
      '소재별 A/B테스트 보고서 제공',
    ],
  },
  {
    id: 'market-analysis',
    category: 'analysis' as const,
    label: '데이터 분석',
    title: '시장 분석',
    description:
      '키워드 입력시 동 주요 경쟁사 발굴하고 순위・상품명・판매가・리뷰 정보를 수집합니다.',
    features: ['광고 순위에 대한 디테일한 관리', '예상 판매량 기반 빠른 판단'],
  },
  {
    id: 'marketing-trend-issue',
    category: 'insight' as const,
    label: '인사이트',
    title: '마케팅 트렌드 / 이슈',
    description:
      '마케팅과 관련된 모든 트렌드, 정보들을 접한 후에 하루 업무를 시작할 수 있게 도와줍니다',
    features: [
      '최근 이슈화된 일주일 기사 내용 공유',
      '네이버, 페이스북, 인스타, 뉴스, X 등 트렌드 키워드 10가지 제공',
      '업종별로 마케팅 성공사례, 이슈, 트렌드 정보 공유',
    ],
  },
  {
    id: 'seo-optimization',
    category: 'insight' as const,
    label: '인사이트',
    title: 'SEO 최적화',
    description:
      'URL 입력 시 해당 업체의 매출, 브랜드 인지도, SEO 최적화 현황 등을 분석해주고 마케팅 및 검색 엔진 노출 향상 방안을 제안해줍니다.',
    features: [
      'URL 입력 시 메타 태그, 키워드 밀도, 리뷰 데이터를 긁어오는 기능',
      '스키마 마크업, 메타 태그, HTML 시맨틱 태그, GEO 등 생성 방법 제안',
      '보고서 PDF 다운로드 기능',
    ],
  },
  {
    id: 'imc-proposal',
    category: 'insight' as const,
    label: '인사이트',
    title: 'IMC 통합제안서',
    description:
      '상세페이지 분석 통한 pain point 발굴 및 마케팅 통합 제안서 제작',
    features: ['캠페인/그룹/소재별 누수 조기 발견', '황금키워드 관리'],
  },
  {
    id: 'blog-automation',
    category: 'proposal' as const,
    label: '콘텐츠 자동화',
    title: '블로그 자동화',
    description:
      '마케팅 트렌드와 인사이트 전략을 반영한 고품질 블로그 콘텐츠를 AI가 자동으로 생성합니다',
    features: [
      'AI 기반 콘텐츠 자동 생성',
      'DALL-E 기반 썸네일 이미지 자동 생성',
      '목차, 소제목, 본문 자동 구성',
      '네이버 블로그 자동 발행',
    ],
  },
  {
    id: 'card-news-automation',
    category: 'proposal' as const,
    label: '콘텐츠 자동화',
    title: '카드뉴스 자동화',
    description:
      '자사 및 경쟁사 브랜드명 입력 시 마케팅에 최적화 된 카드뉴스를 AI가 자동으로 생성합니다.',
    features: ['캠페인/그룹/소재별 누수 조기 발견'],
  },
  {
    id: 'video-automation',
    category: 'proposal' as const,
    label: '콘텐츠 자동화',
    title: '영상 자동화',
    description:
      '자사 및 경쟁사 URL을 입력 시 마케팅 영상을 AI가 자동으로 생성합니다.',
    features: ['정보 수집 및 인사이트', '스크립트 생성', 'AI 영상 생성'],
  },
]

export const SERVICE_TABS = [
  {
    id: 'report-automation',
    category: 'analysis' as const,
    tabLabel: '보고서 자동화',
    icon: FileText,
  },
  {
    id: 'ga4-ab-test-report',
    category: 'analysis' as const,
    tabLabel: 'GA4 분석',
    icon: BookOpen,
  },
  {
    id: 'market-analysis',
    category: 'analysis' as const,
    tabLabel: '시장 조사',
    icon: Search,
  },
  {
    id: 'marketing-trend-issue',
    category: 'insight' as const,
    tabLabel: '마케팅 트렌드',
    icon: BarChart3,
  },
  {
    id: 'seo-optimization',
    category: 'insight' as const,
    tabLabel: 'SEO 최적화',
    icon: Monitor,
  },
  {
    id: 'imc-proposal',
    category: 'insight' as const,
    tabLabel: 'IMC 통합제안서',
    icon: Newspaper,
  },
  {
    id: 'blog-automation',
    category: 'proposal' as const,
    tabLabel: '블로그 자동화',
    icon: Repeat2,
  },
  {
    id: 'card-news-automation',
    category: 'proposal' as const,
    tabLabel: '카드뉴스 자동화',
    icon: ImageIcon,
  },
  {
    id: 'video-automation',
    category: 'proposal' as const,
    tabLabel: '영상 자동화',
    icon: Video,
  },
] as const

export const SERVICE_PREVIEWS = {
  'report-automation': ReportAutomationPreview,
  'ga4-ab-test-report': GoogleAnalyticsPreview,
  'market-analysis': MarketAnalysisPreview,
  'marketing-trend-issue': MarketingTrendIssuePreview,
  'seo-optimization': SeoOptimizationPreview,
  'imc-proposal': ImcProposalPreview,
  'blog-automation': BlogAutomationPreview,
  'card-news-automation': CardNewsAutomationPreview,
  'video-automation': VideoAutomationPreview,
}
