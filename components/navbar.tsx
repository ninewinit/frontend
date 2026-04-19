"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-foreground text-lg font-extrabold tracking-tight">
          NINEWINIT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/company-profile.pdf"
            download
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            회사소개서
          </Link>
          <button className="text-foreground text-sm font-medium hover:text-primary transition-colors">
            구독하기
          </button>
          <Link
            href="#"
            className="text-foreground text-sm font-medium hover:text-primary transition-colors"
          >
            로그인
          </Link>
          <Link
            href="#contact"
            className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            상담신청
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/company-profile.pdf"
              download
              className="text-foreground text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              회사소개서
            </Link>
            <button className="text-foreground text-sm font-medium hover:text-primary transition-colors py-2 text-left">
              구독하기
            </button>
            <Link
              href="#"
              className="text-foreground text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              로그인
            </Link>
            <Link
              href="#contact"
              className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              상담신청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
