import SeoOptimizationPreviewImage from '@/public/images/preview/seo-optimization-preview-image.png'
import Image from 'next/image'
function SeoOptimizationPreview() {
  return (
    <div className="relative mt-60 flex h-full w-full items-center justify-center">
      <Image
        src={SeoOptimizationPreviewImage}
        alt="seo-optimization-preview-image"
      />
    </div>
  )
}

export default SeoOptimizationPreview
