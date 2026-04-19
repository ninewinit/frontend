import type { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

type ContactFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function ContactInputField({
  id,
  label,
  ...props
}: ContactFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-surface-foreground">
        {label}
      </label>
      <input
        id={id}
        className="w-full border-b border-surface-border bg-transparent py-2.5 text-sm text-surface-foreground placeholder:text-surface-muted outline-none focus:border-surface-foreground transition-colors"
        {...props}
      />
    </div>
  );
}

type ContactTextareaFieldProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function ContactTextareaField({
  id,
  label,
  ...props
}: ContactTextareaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-surface-foreground">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full border border-surface-border rounded-lg bg-transparent p-4 text-sm text-surface-foreground placeholder:text-surface-muted outline-none focus:border-surface-foreground transition-colors resize-none"
        {...props}
      />
    </div>
  );
}

export function ContactFormSuccess() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-surface-foreground/10 flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 rounded-full border-2 border-surface-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-surface-foreground mb-3">
          문의가 접수되었습니다
        </h2>
        <p className="text-surface-muted text-sm">검토 후 빠르게 연락드리겠습니다.</p>
      </div>
    </section>
  );
}
