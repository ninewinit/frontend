'use client'

import { useState } from 'react'

import {
  ContactFormSuccess,
  ContactInputField,
  ContactTextareaField,
} from '@/components/landing/contact/contact-fields'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return <ContactFormSuccess />
  }

  return (
    <section id="contact" className="bg-background px-[10%] py-20 md:py-28">
      <div className="mx-auto">
        <div className="mb-10">
          <h2 className="heading1 text-center">광고 문의하기</h2>
          <p className="heading3 text-center text-gray-500">
            전문가와 상담하고 맞춤형 솔루션을 받아보세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ContactInputField
              id="company"
              type="text"
              name="company"
              label="업체명"
              value={formData.company}
              onChange={handleChange}
              placeholder="업체명을 입력하세요"
              required
            />

            <ContactInputField
              id="name"
              type="text"
              name="name"
              label="담당자명"
              value={formData.name}
              onChange={handleChange}
              placeholder="담당자명을 입력하세요"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ContactInputField
              id="phone"
              type="tel"
              name="phone"
              label="전화번호"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010-0000-0000"
              required
            />

            <ContactInputField
              id="email"
              type="email"
              name="email"
              label="이메일"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          <ContactTextareaField
            id="message"
            name="message"
            label="문의내용"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="문의하실 내용을 자세히 입력해주세요"
            required
          />

          <button
            type="submit"
            className="bg-primary-main text-surface flex w-full items-center justify-center gap-2 rounded-lg py-4.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            문의하기
          </button>
        </form>
      </div>
    </section>
  )
}
