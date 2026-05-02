import CampaignReportImage from '@/public/images/preview/report-automation/campaign-report.png'
import GroupReportImage from '@/public/images/preview/report-automation/group-report.png'
import ProductReportImage from '@/public/images/preview/report-automation/product-report.png'
import KeywrodReportImage from '@/public/images/preview/report-automation/keyword-report.png'
import Image from 'next/image'

const ReportAutomationList = [
  {
    id: 'campaign',
    label: '캠페인별 리포트',
    image: CampaignReportImage,
  },
  {
    id: 'group',
    label: '그룹별 리포트',
    image: GroupReportImage,
  },
  {
    id: 'product',
    label: '상품(소재)별 리포트',
    image: ProductReportImage,
  },
  {
    id: 'keyword',
    label: '키워드별 리포트',
    image: KeywrodReportImage,
  },
]

function ReportAutomationPreview() {
  return (
    <div className="mt-60 px-20">
      <ul className="flex w-full flex-col items-center justify-center gap-30">
        {ReportAutomationList.map((item, idx) => (
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

export default ReportAutomationPreview
