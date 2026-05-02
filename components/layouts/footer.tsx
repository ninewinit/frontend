import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-border border-t px-6 py-10 md:px-[10%]">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-foreground text-sm font-extrabold tracking-tight">
          NINEWINIT
        </div>
        <p className="text-muted-foreground text-xs">
          © 2026 나인위닛. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            이용약관
          </a>
        </div>
      </div>
    </footer>
  )
}
