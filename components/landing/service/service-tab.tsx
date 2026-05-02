'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SERVICE_PREVIEWS, SERVICE_TABS, SERVICES } from './service-data'
import { cn } from '@/lib/utils'
import ServiceContentHeader from './service-content-header'

import { useRouter, useSearchParams } from 'next/navigation'

function ServiceTab() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const serviceTab = searchParams.get('service') || 'report-automation'
  return (
    <section id="service" className="bg-background relative z-20 px-30 py-75">
      <header className="z-50 mb-40 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="to-secondary-mint h-px w-10 bg-linear-to-r from-transparent"></span>
          <span className="syne-caption text-secondary-mint">
            core services
          </span>
          <span className="to-secondary-mint h-px w-10 bg-linear-to-l from-transparent"></span>
        </div>

        <h2 className="heading1">
          나인위닛
          <span className="from-secondary-mint via-secondary-purple to-secondary-pink bg-linear-to-r via-80% bg-clip-text text-transparent">
            9가지 핵심 기술
          </span>
          로 <br />
          마케팅 시장을 이겨나가다
        </h2>

        <p className="heading3 text-gray-500">
          AI 기반 자동화로 데이터 분석부터 콘텐츠 생성까지, 마케팅의 모든 과정을
          혁신합니다
        </p>
      </header>

      <Tabs
        value={serviceTab}
        onValueChange={(nextId) => {
          const param = new URLSearchParams()
          param.set('service', nextId)
          router.replace(`?${param.toString()}#service`, { scroll: false })
        }}
      >
        <TabsList className="border-secondary-mint/20 z-50 grid h-30 w-full grid-cols-9 rounded-xl border bg-[#10101F] p-2">
          {SERVICE_TABS.map((serviceTab, index) => (
            <TabsTrigger
              key={serviceTab.id}
              className={cn(
                'group items-cneter relative flex h-full w-full flex-col justify-center gap-1 rounded-lg border transition-colors duration-350',
                serviceTab.category === 'analysis' &&
                  'data-[state=active]:border-secondary-mint data-[state=active]:bg-secondary-mint/10',
                serviceTab.category === 'insight' &&
                  'data-[state=active]:border-secondary-purple data-[state=active]:bg-secondary-purple/10',
                serviceTab.category === 'proposal' &&
                  'data-[state=active]:border-secondary-pink data-[state=active]:bg-secondary-pink/10',
                index < SERVICE_TABS.length - 1 &&
                  'after:via-secondary-mint/20 after:absolute after:top-1/2 after:right-0 after:h-16 after:w-px after:-translate-y-1/2 after:bg-linear-to-b after:from-transparent after:to-transparent'
              )}
              value={serviceTab.id}
            >
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <span
                  className={cn(
                    'border-button-text flex items-center justify-center rounded-lg border p-2 transition-colors duration-350',
                    serviceTab.category === 'analysis' &&
                      'group-data-[state=active]:border-secondary-mint group-data-[state=active]:text-secondary-mint',
                    serviceTab.category === 'insight' &&
                      'group-data-[state=active]:border-secondary-purple group-data-[state=active]:text-secondary-purple',
                    serviceTab.category === 'proposal' &&
                      'group-data-[state=active]:border-secondary-pink group-data-[state=active]:text-secondary-pink'
                  )}
                >
                  <serviceTab.icon
                    className={cn(
                      'text-button-text size-6! transition-colors duration-350',
                      serviceTab.category === 'analysis' &&
                        'group-data-[state=active]:text-secondary-mint',
                      serviceTab.category === 'insight' &&
                        'group-data-[state=active]:text-secondary-purple',
                      serviceTab.category === 'proposal' &&
                        'group-data-[state=active]:text-secondary-pink'
                    )}
                  />
                </span>
                <span
                  className={cn(
                    'body2 text-button-text text-sm text-nowrap transition-colors duration-350',
                    serviceTab.category === 'analysis' &&
                      'group-data-[state=active]:text-secondary-mint',
                    serviceTab.category === 'insight' &&
                      'group-data-[state=active]:text-secondary-purple',
                    serviceTab.category === 'proposal' &&
                      'group-data-[state=active]:text-secondary-pink'
                  )}
                >
                  {serviceTab.tabLabel}
                </span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-17.5">
          {SERVICE_TABS.map((serviceTab, idx) => {
            const Preview = SERVICE_PREVIEWS[serviceTab.id]
            const service = SERVICES.find((item) => item.id === serviceTab.id)
            if (!service || !Preview) return null

            return (
              <TabsContent key={serviceTab.id} value={serviceTab.id}>
                <ServiceContentWrapper category={serviceTab.category}>
                  <ServiceContentHeader
                    {...SERVICES[idx]}
                    sectionIndex={idx + 1}
                  />
                  <Preview />
                </ServiceContentWrapper>
              </TabsContent>
            )
          })}
        </div>
      </Tabs>

      <div
        aria-hidden
        className="bg-secondary-purple/50 pointer-events-none absolute top-0 -left-[10%] z-5 aspect-square size-150 rounded-full blur-[450px]"
      ></div>
      <div
        aria-hidden
        className="bg-secondary-mint/20 pointer-events-none absolute top-[15%] right-0 z-5 aspect-square size-150 rounded-full blur-[450px]"
      ></div>
    </section>
  )
}

function ServiceContentWrapper({
  children,
  category = 'insight',
}: {
  children: React.ReactNode
  category?: 'analysis' | 'insight' | 'proposal'
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl bg-linear-to-t from-transparent p-px',
        category === 'analysis' && 'to-secondary-mint',
        category === 'insight' && 'to-secondary-purple',
        category === 'proposal' && 'to-secondary-pink'
      )}
    >
      <div className="bg-background rounded-xl p-10">{children}</div>
    </div>
  )
}
export default ServiceTab
