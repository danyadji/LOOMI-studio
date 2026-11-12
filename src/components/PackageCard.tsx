import Link from "next/link";
import { Package } from "@/content/types";
import { formatRupiah } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: Package;
  onSelect?: (slug: Package["slug"]) => void;
  href?: string;
}

export default function PackageCard({ pkg, onSelect, href }: PackageCardProps) {
  const isFeatured = pkg.popular;

  return (
    <div
      className={`rounded-2xl flex flex-col justify-between transition-colors p-6 sm:p-8 border ${
        isFeatured
          ? "bg-white border-[#545c2c] ring-1 ring-[#545c2c] relative"
          : "bg-white border-[#c0c0b9] hover:border-[#838775]"
      }`}
    >
      <div>
        {/* Header Kartu Paket */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-xs font-medium text-[#5b5e4e]">
            {pkg.badge || "Paket Pilihan"}
          </span>
          {isFeatured && (
            <span className="text-xs font-semibold px-3 py-1 bg-[#d4ec8c] text-[#1f2410] rounded-full">
              Pilihan Utama
            </span>
          )}
        </div>

        {/* Nama Paket (Heading weight 400 sesuai DESIGN.md) */}
        <h3 className="text-[22px] sm:text-[28px] font-heading font-normal text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
          {pkg.name}.
        </h3>
        <p className="text-sm text-[#5b5e4e] mt-3 min-h-[44px] leading-relaxed">
          {pkg.summary}
        </p>

        {/* Harga */}
        <div className="mt-8 pt-6 border-t border-[#c0c0b9]">
          <div className="text-xs text-[#5b5e4e] font-medium">
            Investasi mulai dari
          </div>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl sm:text-4xl font-heading font-normal text-[#545c2c] tracking-[-0.015em]">
              {formatRupiah(pkg.priceFrom)}
            </span>
            <span className="text-xs text-[#5b5e4e] ml-1">/ proyek</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#5b5e4e] mt-2.5">
            <span>Waktu: {pkg.duration}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{pkg.revisions}x sesi revisi</span>
          </div>
        </div>

        {/* Fitur Termasuk */}
        <div className="mt-8 space-y-3">
          <div className="text-xs font-semibold text-[#1f2410]">
            Sudah termasuk:
          </div>
          <ul className="space-y-2.5 text-sm text-[#1f2410]">
            {pkg.includes.map((inc, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#545c2c] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-snug">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tidak Termasuk */}
        {pkg.excludes.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#c0c0b9] space-y-2">
            <div className="text-xs font-semibold text-[#5b5e4e]">
              Belum termasuk:
            </div>
            <ul className="space-y-1.5 text-xs text-[#5b5e4e]">
              {pkg.excludes.map((exc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#5b5e4e] font-bold" aria-hidden="true">&ndash;</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tombol CTA Pill (Tanpa panah dekoratif berlebih sesuai R-08) */}
      <div className="mt-10 pt-6 border-t border-[#c0c0b9]">
        {href ? (
          <Link
            href={href}
            className={`w-full py-3 px-5 rounded-full text-sm font-medium transition-colors min-h-[48px] inline-flex items-center justify-center ${
              isFeatured
                ? "bg-[#545c2c] text-white hover:bg-[#8fa65b] hover:text-[#1f2410]"
                : "bg-transparent text-[#545c2c] border border-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410]"
            }`}
          >
            Pilih Paket Ini
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onSelect && onSelect(pkg.slug)}
            className={`w-full py-3 px-5 rounded-full text-sm font-medium transition-colors min-h-[48px] flex items-center justify-center ${
              isFeatured
                ? "bg-[#545c2c] text-white hover:bg-[#8fa65b] hover:text-[#1f2410]"
                : "bg-transparent text-[#545c2c] border border-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410]"
            }`}
          >
            Pilih Paket Ini
          </button>
        )}
      </div>
    </div>
  );
}
