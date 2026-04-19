import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 md:px-[10%] py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-foreground font-extrabold text-sm tracking-tight">
          NINEWINIT
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 나인위닛. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
