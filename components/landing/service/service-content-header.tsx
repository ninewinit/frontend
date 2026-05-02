import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ServiceContentHeaderProps {
  label: string
  category: string
  sectionIndex: number
  title: string
  description: string
  features: string[]
}

function ServiceContentHeader({
  category,
  sectionIndex,
  title,
  description,
  label,
  features,
}: ServiceContentHeaderProps) {
  const sectionIdx = String(sectionIndex).padStart(2, '0')
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-end justify-between">
        <div>
          <ServiceTabCategoryLabel category={category} label={label} />

          <div className="py-4">
            <span className="syne-caption text-gray-500">
              {`SERVICE ${sectionIdx}`}
            </span>
            <h4 className="heading2">{title}</h4>
          </div>

          <p className="body1 w-2/3 text-gray-500">{description}</p>
        </div>

        <span className="font-syne text-[200px] leading-40 font-semibold text-gray-900/20">
          {`${sectionIdx}`}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <span className="caption2 text-gray-500">주요 기능</span>
        <ul className="flex flex-col gap-4">
          {features.map((feature, idx) => (
            <li
              className="flex items-center gap-3"
              key={`${title}-feature-${idx}`}
            >
              <ServiceTabCategoryCheckBadge category={category} />

              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ServiceTabCategoryLabel({
  category,
  label,
}: {
  category: string
  label: string
}) {
  return (
    <span
      className={cn(
        'body2 text-glow rounded-full border px-3.5 py-1.5',
        category === 'analysis' &&
          'text-secondary-mint border-secondary-mint text-shadow-secondary-mint',
        category === 'insight' &&
          'text-secondary-purple border-secondary-purple text-shadow-secondary-purple',
        category === 'proposal' &&
          'text-secondary-pink border-secondary-pink text-shadow-secondary-pink'
      )}
    >
      {label}
    </span>
  )
}

function ServiceTabCategoryCheckBadge({ category }: { category: string }) {
  return (
    <span
      className={cn(
        'flex aspect-square size-6 items-center justify-center rounded-sm border',
        category === 'analysis' &&
          'text-secondary-mint border-secondary-mint bg-secondary-mint/20',
        category === 'insight' &&
          'text-secondary-purple border-secondary-purple bg-secondary-purple/20',
        category === 'proposal' &&
          'text-secondary-pink border-secondary-pink text-shadow-secondary-pink'
      )}
    >
      <Check className="size-3" />
    </span>
  )
}

export default ServiceContentHeader
