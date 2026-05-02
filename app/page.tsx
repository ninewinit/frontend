import { Hero } from '@/components/landing/hero'
import { PainPoints } from '@/components/landing/pain-points'
import { CompanyIntro } from '@/components/landing/company-intro'
import { ContactForm } from '@/components/landing/contact/contact-form'
import ServiceTab from '@/components/landing/service/service-tab'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <ServiceTab />
      </Suspense>
      <PainPoints />
      <CompanyIntro />
      <ContactForm />
    </>
  )
}
