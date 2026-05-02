import type { TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

type ContactFieldProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export function ContactInputField({ id, label, ...props }: ContactFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className="w-full border-b border-gray-800 bg-transparent py-2.5 text-sm transition-colors outline-none placeholder:text-gray-500"
        {...props}
      />
    </div>
  )
}

type ContactTextareaFieldProps = {
  label: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function ContactTextareaField({
  id,
  label,
  ...props
}: ContactTextareaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full resize-none rounded-lg border border-gray-800 bg-transparent p-4 text-sm transition-colors outline-none placeholder:text-gray-500"
        {...props}
      />
    </div>
  )
}

export function ContactFormSuccess() {
  return (
    <section id="contact" className="bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="bg-surface-foreground/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <div className="border-surface-foreground h-8 w-8 rounded-full border-2" />
        </div>
        <h2 className="text-surface-foreground mb-3 text-2xl font-bold md:text-3xl">
          문의가 접수되었습니다
        </h2>
        <p className="text-surface-muted text-sm">
          검토 후 빠르게 연락드리겠습니다.
        </p>
      </div>
    </section>
  )
}
