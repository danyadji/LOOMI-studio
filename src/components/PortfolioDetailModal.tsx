"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { PortfolioItem } from "@/content/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

/**
 * Interactive project showcase dialog with a multi-photo gallery,
 * keyboard navigation (Esc, Left/Right arrows), and project scope summary.
 */
export default function PortfolioDetailModal({
  item,
  onClose,
}: PortfolioDetailModalProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const titleId = useId();

  useEffect(() => {
    setActiveIdx(0);
  }, [item?.slug]);

  const gallery = item
    ? item.gallery && item.gallery.length > 0
      ? item.gallery
      : [{ src: item.image, alt: item.title, caption: item.businessType }]
    : [];

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && gallery.length > 1) {
        setActiveIdx((prev) => (prev + 1) % gallery.length);
      } else if (e.key === "ArrowLeft" && gallery.length > 1) {
        setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, gallery.length, onClose]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const safeIdx = activeIdx < gallery.length ? activeIdx : 0;
  const activePhoto = gallery[safeIdx];
  const waUrl = buildGeneralWhatsAppUrl(`Tanya Showcase ${item.title}`);

  const goPrev = () => {
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goNext = () => {
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2410]/75 p-3 sm:p-6 backdrop-blur-[2px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92dvh] w-full max-w-5xl overflow-y-auto rounded-[4px] border border-[#c0c0b9] bg-[#fafaf7] shadow-2xl"
      >
        {/* Header Modal */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[#c0c0b9]/80 bg-[#fafaf7]/95 px-5 py-3.5 backdrop-blur-sm sm:px-7">
          <div className="inline-flex items-center gap-2 rounded-[2px] bg-[#f5f4f0] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-[#5b5e4e]">
            <span className="inline-block h-1.5 w-1.5 shrink-0 bg-[#3f5b1e]" aria-hidden="true" />
            <span>
              {item.packageType || (item.isSample ? "Proyek Konsep Desain" : "Detail Proyek")}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup showcase detail proyek"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[2px] border border-[#c0c0b9] bg-white text-[#1f2410] transition-colors hover:border-[#1f2410] hover:bg-[#f5f4f0]"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Konten Utama: Galeri Kiri & Detail Kanan */}
        <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#c0c0b9] bg-[#f5f4f0]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="h-full w-full object-cover"
              />

              <span className="absolute left-3 top-3 rounded-[2px] bg-[#1f2410]/85 px-2.5 py-1 text-xs font-medium tabular-nums text-[#fafaf7]">
                {safeIdx + 1} / {gallery.length}
              </span>

              {gallery.length > 1 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Foto proyek sebelumnya"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[2px] bg-[#1f2410]/85 text-[#fafaf7] transition-colors hover:bg-[#3f5b1e]"
                  >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Foto proyek berikutnya"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[2px] bg-[#1f2410]/85 text-[#fafaf7] transition-colors hover:bg-[#3f5b1e]"
                  >
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>

            <div className="mt-2.5 flex items-center justify-between gap-3 text-xs text-[#5b5e4e]">
              <span>{activePhoto.caption}</span>
              {item.isSample && (
                <span className="shrink-0 font-medium text-[#545c2c]">
                  {item.sampleNote || "Proyek Konsep"}
                </span>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-3 gap-2.5 sm:gap-3">
                {gallery.map((photo, idx) => {
                  const isActive = idx === safeIdx;
                  return (
                    <button
                      key={`${photo.src}-${idx}`}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      aria-label={`Tampilkan foto ${idx + 1}: ${photo.caption}`}
                      aria-pressed={isActive}
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-[2px] border bg-[#f5f4f0] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f5b1e] focus-visible:ring-offset-2",
                        isActive
                          ? "border-[#3f5b1e] ring-2 ring-[#3f5b1e]"
                          : "border-[#c0c0b9] opacity-75 hover:opacity-100",
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            <div>
              <span className="block text-xs font-medium uppercase tracking-[0.05em] text-[#545c2c]">
                {item.businessType}
              </span>
              <h2
                id={titleId}
                className="mt-1.5 font-heading text-2xl font-medium leading-[1.2] tracking-[-0.02em] text-[#1f2410] sm:text-[28px]"
              >
                {item.title}.
              </h2>

              {item.summary && (
                <p className="mt-3 text-sm font-light leading-relaxed text-[#5b5e4e]">
                  {item.summary}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.scope.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[2px] border border-[#c0c0b9] bg-[#f5f4f0] px-2.5 py-1 text-xs font-medium text-[#1f2410]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-dashed border-[#c0c0b9] pt-5">
                <span className="block text-xs font-semibold text-[#1f2410]">
                  Fokus Implementasi:
                </span>
                <ul className="mt-3 space-y-2.5 text-sm text-[#1f2410]">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        className="mt-1 size-3.5 shrink-0 text-[#3f5b1e]"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#c0c0b9] pt-5 sm:flex-row lg:flex-col">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] bg-[#3f5b1e] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f4516]"
              >
                <span>Diskusikan Desain Seperti Ini</span>
                <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              </a>
              <Link
                href="/paket"
                onClick={onClose}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[2px] border border-[#838775] bg-white px-5 py-3 text-sm font-medium text-[#1f2410] transition-colors hover:border-[#1f2410] hover:bg-[#f5f4f0]"
              >
                Lihat Paket Pembuatan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

