import Image from 'next/image'

import MarketingTrendIssuePreviewImage from '@/public/images/preview/marketing-trend-issue-preview-image.png'

function MarketingTrendIssuePreview() {
  return (
    <div className="relative mt-60 flex h-full w-full items-center justify-center">
      <Image
        src={MarketingTrendIssuePreviewImage}
        alt="marketing-trend-issue-preview-image"
      />
    </div>
  )
}

export default MarketingTrendIssuePreview
