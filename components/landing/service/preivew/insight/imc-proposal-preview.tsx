import Image from 'next/image'

import ImcProposalPreviewImage from '@/public/images/preview/imc-proposal-preview-image.png'
function ImcProposalPreview() {
  return (
    <div className="itmes-center relative mt-60 flex h-full w-full justify-center">
      <Image src={ImcProposalPreviewImage} alt="imc-proposal-preview-image" />
    </div>
  )
}

export default ImcProposalPreview
