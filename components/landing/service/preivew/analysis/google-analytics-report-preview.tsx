import ChannelInsightsImage from '@/public/images/preview/google-analytics/channel-insights.png'
import FunnelDropOffImage from '@/public/images/preview/google-analytics/funnel-drop-off.png'
import CampaignGoalsImage from '@/public/images/preview/google-analytics/campaign-goals.png'
import CustomerFlowImage from '@/public/images/preview/google-analytics/customer-flow.png'
import Image from 'next/image'

const GoogleAnalyticsList = [
  {
    id: 'channelInsights',
    label: '유입 채널 분석',
    image: ChannelInsightsImage,
  },
  {
    id: 'funnelDropOff',
    label: '퍼널별 이탈 / 전환율 분석',
    image: FunnelDropOffImage,
  },
  {
    id: 'campaignGoals',
    label: '캠페인 목적별 유입 분석 - 인지도, 트래픽, 구독자 증가 등',
    image: CampaignGoalsImage,
  },
  {
    id: 'customerFlow',
    label: '고객 행동 흐름 분석, 세그먼트 분석',
    image: CustomerFlowImage,
  },
]

function GoogleAnalyticsPreview() {
  return (
    <div className="mt-60 px-20">
      <ul className="flex w-full flex-col items-center justify-center gap-30">
        {GoogleAnalyticsList.map((item, idx) => (
          <li
            className="flex w-full flex-col items-center justify-center gap-7.5"
            key={item.id}
          >
            <p className="body-1 text-gray-300">{`${String(idx + 1).padStart(2, '0')}.${item.label}`}</p>
            <div className="relative min-h-125 w-full overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={`${item.label} 상세 이미지`}
                fill
                priority
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoogleAnalyticsPreview
