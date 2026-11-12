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
    <header className="sticky top-0 z-40 w-full pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-[1224px] mx-auto pointer-events-auto">
        {/* Floating White Rectangular Bar ala referensi Forest Admin */}
        <div className="bg-white border border-[#c0c0b9] rounded-[3px] shadow-[0_2px_10px_rgba(31,36,16,0.05)] px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo Kiri: Kotak Zaitun Geometris Placeholder (R-23) + Wordmark LOOMI */}
          <Link
            href="/"
            aria-label="LOOMI Studio Beranda"
            className="flex items-center gap-3 group shrink-0 py-1 rounded-sm"
          >
            <span
              className="w-8 h-8 rounded-[2px] bg-[#545c2c] group-hover:bg-[#3f4620] transition-colors flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              {/* Simbol monogram geometris placeholder sebelum aset logo final */}
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M12 4L5 11" />
                <path d="M12 4L19 11" />
                <path d="M12 10L6 16" />
                <path d="M12 10L18 16" />
                <path d="M12 5V20" />
              </svg>
            </span>
            <span className="font-sans font-semibold tracking-[0.14em] text-[16px] sm:text-[17px] text-[#1f2410] uppercase">
              Loomi
            </span>
          </Link>

          {/* Navigasi Desktop Tengah (4 Menu) */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] transition-colors py-2 relative min-h-[44px] inline-flex items-center whitespace-nowrap ${
                    isActive
                      ? "text-[#545c2c] font-semibold"
                      : "text-[#1f2410] font-normal hover:text-[#545c2c]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#545c2c]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Kanan: Kotak Zaitun + Panah Eksternal WhatsApp (R-08: penanda tab eksternal) */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFloatingWhatsAppClick()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-[2px] transition-colors min-h-[44px] whitespace-nowrap"
            >
              <span>Konsultasi WhatsApp</span>
              <svg
                className="w-3.5 h-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-[2px] border border-[#838775] bg-white text-[#1f2410] hover:bg-[#d4ec8c] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center gap-2"
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

        {/* Mobile Floating Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 bg-white border border-[#c0c0b9] rounded-[3px] shadow-[0_8px_24px_rgba(31,36,16,0.08)] p-4"
          >
            <nav className="flex flex-col space-y-1" aria-label="Menu Mobile">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-[2px] text-sm min-h-[44px] flex items-center transition-colors ${
                      isActive
                        ? "bg-[#d4ec8c] text-[#1f2410] font-semibold"
                        : "text-[#1f2410] font-normal hover:bg-[#fafaf7]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-[#c0c0b9]">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackFloatingWhatsAppClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-[2px] transition-colors min-h-[48px]"
              >
                <span>Konsultasi WhatsApp</span>
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
