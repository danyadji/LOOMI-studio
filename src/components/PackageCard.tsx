import Link from "next/link";
import { Package } from "@/content/types";
import { formatRupiah } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: Package;
  onSelect?: (slug: Package["slug"]) => void;
  href?: string;
}

export default function PackageCard({ pkg, onSelect, href }: PackageCardProps) {
  return (
    <div
      className={`rounded-3xl flex flex-col justify-between transition-all p-8 sm:p-10 border ${
        pkg.popular
          ? "bg-[#FFFFFF] border-[#0A0A0A] shadow-md ring-1 ring-[#0A0A0A] relative"
          : "bg-[#FFFFFF] border-[#E8E6DF] hover:border-stone-400"
      }`}
    >
      <div>
        {/* Header Kartu Paket */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {pkg.badge || "Paket Pilihan"}
          </span>
          {pkg.popular && (
            <span className="text-xs font-medium px-3 py-1 bg-[#0A0A0A] text-white rounded-full">
              Paling Banyak Dipilih
            </span>
          )}
        </div>

        {/* Nama Paket */}
        <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A] tracking-tight">
          {pkg.name}.
        </h3>
        <p className="text-sm text-stone-600 mt-3 min-h-[44px] leading-relaxed">
          {pkg.summary}
        </p>

        {/* Harga */}
        <div className="mt-8 pt-6 border-t border-[#E8E6DF]">
          <div className="text-xs text-stone-500 uppercase tracking-wider font-medium">
            Investasi Mulai Dari
          </div>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A] tracking-tight">
              {formatRupiah(pkg.priceFrom)}
            </span>
            <span className="text-xs text-stone-500 ml-1">/ proyek</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-stone-500 mt-2.5">
            <span>Waktu: {pkg.duration}</span>
            <span>&bull;</span>
            <span>{pkg.revisions}x Sesi Revisi</span>
          </div>
        </div>

        {/* Fitur Termasuk */}
        <div className="mt-8 space-y-3">
          <div className="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider">
            Sudah Termasuk:
          </div>
          <ul className="space-y-2.5 text-sm text-stone-700">
            {pkg.includes.map((inc, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5"
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
          <div className="mt-8 pt-6 border-t border-[#E8E6DF] space-y-2">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Tidak Termasuk:
            </div>
            <ul className="space-y-1.5 text-xs text-stone-500">
              {pkg.excludes.map((exc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-stone-400 font-bold" aria-hidden="true">&ndash;</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tombol CTA Pill */}
      <div className="mt-10 pt-6 border-t border-[#E8E6DF]">
        {href ? (
          <Link
            href={href}
            className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-h-[50px] inline-flex items-center justify-center ${
              pkg.popular
                ? "bg-[#0A0A0A] hover:bg-stone-800 text-white shadow-sm"
                : "bg-white hover:bg-stone-100 text-[#0A0A0A] border border-[#0A0A0A]"
            }`}
          >
            Pilih Paket Ini
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onSelect && onSelect(pkg.slug)}
            className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-h-[50px] flex items-center justify-center ${
              pkg.popular
                ? "bg-[#0A0A0A] hover:bg-stone-800 text-white shadow-sm"
                : "bg-white hover:bg-stone-100 text-[#0A0A0A] border border-[#0A0A0A]"
            }`}
          >
            Pilih Paket Ini
          </button>
        )}
      </div>
    </div>
  );
}
