"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { trackFloatingWhatsAppClick } from "@/lib/analytics";

const navLinks = [
  { name: "Layanan", href: "/layanan" },
  { name: "Paket & Harga", href: "/paket" },
  { name: "Portofolio", href: "/portofolio" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const waUrl = buildGeneralWhatsAppUrl("Navigasi Header");

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf7]/90 backdrop-blur-md border-b border-[#c0c0b9] transition-colors">
      <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Wordmark LOOMI Studio */}
          <Link
            href="/"
            className="flex items-baseline gap-2 group rounded-sm py-1"
          >
            <span className="font-heading font-normal text-2xl sm:text-[28px] tracking-[-0.015em] text-[#1f2410] group-hover:text-[#545c2c] transition-colors">
              Loomi
            </span>
            <span className="text-xs font-sans font-medium tracking-wide text-[#545c2c]">
              Studio
            </span>
          </Link>

          {/* Navigasi Desktop (4 Menu Utama) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] transition-colors py-1.5 relative ${
                    isActive
                      ? "text-[#545c2c] font-semibold"
                      : "text-[#5b5e4e] font-medium hover:text-[#1f2410]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#545c2c] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Header (Primary Olive -> Hover Leaf Soft + Dark Ink) */}
          <div className="hidden md:flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFloatingWhatsAppClick()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[44px]"
            >
              Konsultasi WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button (Berlabel eksplisit sesuai antislop-layoutmobile) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-full border border-[#838775] text-[#1f2410] hover:bg-[#d4ec8c] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center gap-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              <span className="text-xs font-medium">
                {mobileMenuOpen ? "Tutup" : "Menu"}
              </span>
              {mobileMenuOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-[#c0c0b9] bg-[#fafaf7] px-6 pt-4 pb-8">
          <nav className="flex flex-col space-y-2" aria-label="Menu Mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base min-h-[44px] flex items-center transition-colors ${
                    isActive
                      ? "bg-[#d4ec8c] text-[#1f2410] font-semibold"
                      : "text-[#1f2410] font-medium hover:bg-[#ffffff]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 pt-4 border-t border-[#c0c0b9]">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackFloatingWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px]"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
