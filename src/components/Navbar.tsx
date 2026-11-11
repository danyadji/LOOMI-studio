"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
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
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E6DF] transition-colors">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo LOOMI */}
          <Link
            href="/"
            className="flex items-baseline gap-1.5 group focus-visible:ring-2 focus-visible:ring-[#0A0A0A] rounded-sm"
          >
            <span className="font-heading font-medium text-2xl sm:text-3xl tracking-tight text-[#0A0A0A] group-hover:opacity-80 transition-opacity">
              Loomi
            </span>
            <span className="text-xs font-sans font-semibold tracking-wider uppercase text-stone-500">
              Studio
            </span>
          </Link>

          {/* Desktop Navigation (4 Menu Saja) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-[#0A0A0A] font-semibold"
                      : "text-stone-600 hover:text-[#0A0A0A]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0A0A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Header (Pill Button ala Epidemic Sound) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFloatingWhatsAppClick()}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-h-[46px]"
            >
              Konsultasi WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-stone-800 hover:text-black hover:bg-stone-200/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Tutup menu utama" : "Buka menu utama"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-[#E8E6DF] bg-[#FAF9F5] px-6 pt-4 pb-8 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium min-h-[44px] flex items-center ${
                    isActive
                      ? "bg-stone-200/70 text-[#0A0A0A] font-semibold"
                      : "text-stone-700 hover:bg-stone-200/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 pt-4 border-t border-[#E8E6DF]">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackFloatingWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full shadow-sm transition-all min-h-[48px]"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
