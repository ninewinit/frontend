import { Hero } from '@/components/landing/hero'
import { PainPoints } from '@/components/landing/pain-points'
import { CompanyIntro } from '@/components/landing/company-intro'
import { ContactForm } from '@/components/landing/contact/contact-form'
import ServiceTab from '@/components/landing/service/service-tab'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTab />
      <PainPoints />
      <CompanyIntro />
      <ContactForm />
    </>
  )
}
