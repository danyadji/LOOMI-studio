"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Package } from "@/content/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface CustomPackageCardProps {
  pkg: Package;
  onSelect?: () => void;
  href?: string;
}

export default function CustomPackageCard({
  pkg,
  onSelect,
  href,
}: CustomPackageCardProps) {
  const ctaContent = (
    <>
      <span>Konsultasi Kustom</span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        aria-hidden="true"
      />
    </>
  );

  const ctaClassName =
    "group/btn inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] px-6 py-3 text-sm font-medium transition-all duration-200 motion-reduce:transition-none border border-[#838775] bg-white text-[#1f2410] hover:border-[#1f2410] hover:bg-[#fafaf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#545c2c] focus-visible:ring-offset-2 active:scale-[0.99]";

  return (
    <article className="mt-8 rounded-[2px] border border-[#c0c0b9] bg-[#f5f4f0] p-6 sm:p-8 lg:p-10 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-[#838775] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-12px_rgba(31,36,16,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Kolom Kiri: Info & Fitur */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold tracking-[-0.015em] text-[#1f2410] leading-snug">
                {pkg.name}.
              </h3>
              {pkg.badge && (
                <span className="inline-block shrink-0 rounded-[2px] border border-[#c0c0b9] bg-white/75 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.02em] text-[#5b5e4e]">
                  {pkg.badge}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm font-light text-[#5b5e4e] leading-relaxed max-w-2xl">
              {pkg.summary}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-dashed border-[#c0c0b9]">
            <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#5b5e4e] block mb-3 font-sans">
              Sudah termasuk:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {pkg.includes.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1f2410] font-light">
                  <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Harga, Waktu, & Tombol CTA */}
        <div className="lg:col-span-5 xl:col-span-4 border-t lg:border-t-0 lg:border-l border-dashed border-[#c0c0b9] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between h-full">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#5b5e4e] block">
              Investasi proyek:
            </span>
            <div className="mt-2">
              <span className="text-[26px] sm:text-[30px] font-heading font-medium leading-tight text-[#1f2410] tracking-[-0.02em] block">
                {pkg.customPriceLabel || "Berdasarkan Kebutuhan"}
              </span>
            </div>
            <div className="mt-2 text-xs text-[#5b5e4e]">
              Waktu: {pkg.duration} &bull; Pendampingan SPK
            </div>
            <p className="mt-3 text-xs text-[#5b5e4e] font-light leading-relaxed">
              Estimasi biaya dan jadwal disusun transparan setelah diskusi alur sistem dan spesifikasi fitur.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-dashed border-[#c0c0b9]">
            {href ? (
              <Link href={href} className={ctaClassName}>
                {ctaContent}
              </Link>
            ) : onSelect ? (
              <button type="button" onClick={onSelect} className={ctaClassName}>
                {ctaContent}
              </button>
            ) : (
              <a
                href={buildGeneralWhatsAppUrl("Konsultasi Proyek Kustom")}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClassName}
              >
                {ctaContent}
              </a>
            )}
            <p className="text-[11px] text-center text-[#5b5e4e] mt-2 font-light">
              Konsultasi awal gratis untuk memetakan alur usaha Anda.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
