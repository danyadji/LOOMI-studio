"use client";

import { useState } from "react";
import { Images } from "lucide-react";
import { PortfolioItem } from "@/content/types";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import PortfolioShowcaseGrid from "@/components/PortfolioShowcaseGrid";
import PortfolioDetailModal from "@/components/PortfolioDetailModal";

interface PortfolioPageClientProps {
  items: PortfolioItem[];
}

/** Interactive portfolio listing and case-study gallery modal controller for `/portofolio`. */
export default function PortfolioPageClient({ items }: PortfolioPageClientProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      {/* Ringkasan 3 Kartu NotchedProjectCard */}
      <div className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Ringkasan Sektor
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
              Pilih contoh konsep untuk melihat galeri detailnya.
            </h2>
          </div>

          <PortfolioShowcaseGrid
            items={items}
            surface="#ffffff"
            descriptionMode="businessType"
            sampleBadge="Proyek Konsep Desain LOOMI"
            priorityFirst
            onSelectItem={setSelectedItem}
          />
        </div>
      </div>

      {/* Rincian Studi Kasus per Sektor */}
      <div className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-10 lg:space-y-14">
            {items.map((item, index) => {
              const gallery =
                item.gallery && item.gallery.length > 0
                  ? item.gallery
                  : [{ src: item.image, alt: item.title, caption: item.businessType }];

              return (
                <section
                  id={item.slug}
                  key={item.slug}
                  className="scroll-mt-28 p-6 sm:p-10 rounded-2xl border border-[#c0c0b9] bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className="lg:col-span-5 space-y-3">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      aria-label={`Buka showcase galeri ${item.title}`}
                      className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#1f2410] border border-[#c0c0b9] block text-left"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={`Pratinjau konsep desain ${item.title}`}
                        width={900}
                        height={675}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                      />
                      {item.isSample && (
                        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-[#1f2410]/90 text-[#fafaf7] rounded-full border border-[#d4ec8c]/40">
                          {item.sampleNote || "Proyek Konsep"}
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-[2px] bg-[#1f2410]/85 px-2.5 py-1.5 text-xs font-medium text-[#fafaf7] transition-colors group-hover:bg-[#3f5b1e]">
                        <Images className="size-3.5" aria-hidden="true" />
                        <span>{gallery.length} Foto Showcase</span>
                      </span>
                    </button>

                    {gallery.length > 1 && (
                      <div className="grid grid-cols-3 gap-2.5">
                        {gallery.map((photo, idx) => (
                          <button
                            key={`${photo.src}-${idx}`}
                            type="button"
                            onClick={() => setSelectedItem(item)}
                            aria-label={`Lihat foto ${idx + 1} ${item.title}: ${photo.caption}`}
                            className="aspect-[4/3] overflow-hidden rounded-lg border border-[#c0c0b9] bg-[#f5f4f0] transition-opacity hover:opacity-85"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-xs font-medium text-[#5b5e4e] block font-sans">
                        Konsep 0{index + 1} &bull; {item.businessType}
                      </span>
                      <h2 className="text-[28px] lg:text-[36px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em] mt-1.5">
                        {item.title}.
                      </h2>
                      {item.summary && (
                        <p className="mt-3 text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
                          {item.summary}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.scope.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 bg-[#fafaf7] border border-[#c0c0b9] text-[#545c2c] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-[#545c2c] block">
                        Fokus Implementasi:
                      </span>
                      <ul className="space-y-2 text-sm text-[#1f2410]">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="font-bold text-[#545c2c]" aria-hidden="true">
                              &#10003;
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#c0c0b9] flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#f5f4f0] rounded-[2px] transition-colors min-h-[48px]"
                      >
                        <Images className="size-4 shrink-0" aria-hidden="true" />
                        <span>Buka Galeri Detail ({gallery.length} Foto)</span>
                      </button>
                      <a
                        href={buildGeneralWhatsAppUrl(`Tanya Portofolio ${item.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 text-sm font-medium text-white bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] rounded-[2px] transition-colors min-h-[48px]"
                      >
                        Diskusikan Desain Seperti Ini
                      </a>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-white border border-[#c0c0b9]">
            <h3 className="text-[22px] font-heading font-medium text-[#1f2410] tracking-[-0.015em]">
              Punya contoh tampilan yang Anda sukai?
            </h3>
            <p className="mt-2 text-sm text-[#5b5e4e]">
              Kirimkan tautan referensi atau tangkapan layar tampilan yang Anda inginkan ke WhatsApp kami untuk kami pelajari.
            </p>
            <a
              href={buildGeneralWhatsAppUrl("Kirim Referensi Desain")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[48px]"
            >
              Kirim Referensi ke WhatsApp
            </a>
          </div>
        </div>
      </div>

      <PortfolioDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}

