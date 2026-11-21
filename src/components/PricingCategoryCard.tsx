"use client";

import { useState } from "react";
import { Check, Minus, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { PricingPlanTier } from "@/content/pricingCategories";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface PricingCategoryCardProps {
  plan: PricingPlanTier;
  categoryTitle: string;
}

export default function PricingCategoryCard({
  plan,
  categoryTitle,
}: PricingCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalItems = plan.includes.length + plan.excludes.length;
  const isLongList = totalItems > 9;

  const waMessage = `Halo ${siteConfig.name}, saya tertarik konsultasi paket ${plan.name} : ${plan.tech} (${plan.price}) untuk ${categoryTitle}.`;
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <div className="relative flex h-full">
      {/* Exterior L-shaped corner brackets for recommended featured card */}
      {plan.featured && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1.5 -top-1.5 size-3 border-l-[1.5px] border-t-[1.5px] border-[#838775] z-10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-1.5 -top-1.5 size-3 border-r-[1.5px] border-t-[1.5px] border-[#838775] z-10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 -left-1.5 size-3 border-b-[1.5px] border-l-[1.5px] border-[#838775] z-10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 -right-1.5 size-3 border-b-[1.5px] border-r-[1.5px] border-[#838775] z-10"
          />
        </>
      )}

      <article
        className={cn(
          "flex flex-1 flex-col justify-between rounded-[2px] border p-6 sm:p-7 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0",
          plan.featured
            ? "border-[#1f2410] bg-[#1f2410] text-[#fafaf7] shadow-[0_14px_30px_-14px_rgba(31,36,16,0.45)]"
            : "border-[#c0c0b9] bg-white text-[#1f2410] hover:border-[#838775] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        )}
      >
        <div>
          {/* Header Kartu: Judul, Tag Teknologi, dan Badge */}
          <div className="flex flex-wrap items-start justify-between gap-2.5">
            <div>
              <span
                className={cn(
                  "inline-block rounded-[2px] border px-2 py-0.5 text-[11px] font-medium tracking-[0.02em] mb-2 font-mono",
                  plan.featured
                    ? "border-[#d4ec8c]/50 bg-[#d4ec8c]/15 text-[#d4ec8c]"
                    : "border-[#c0c0b9] bg-[#fafaf7] text-[#545c2c]"
                )}
              >
                {plan.tech}
              </span>
              <h3
                className={cn(
                  "text-xl sm:text-2xl font-heading font-semibold tracking-[-0.015em] leading-snug",
                  plan.featured ? "text-[#fafaf7]" : "text-[#1f2410]"
                )}
              >
                {plan.name}
              </h3>
            </div>

            {plan.badge && (
              <span
                className={cn(
                  "inline-block shrink-0 rounded-[2px] border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em]",
                  plan.featured
                    ? "border-[#d4ec8c] bg-[#d4ec8c] text-[#1f2410] font-semibold"
                    : "border-[#c0c0b9] bg-[#f5f4f0] text-[#5b5e4e]"
                )}
              >
                {plan.badge}
              </span>
            )}
          </div>

          {/* Deskripsi Singkat */}
          <p
            className={cn(
              "mt-3 text-sm font-light leading-relaxed min-h-[3rem]",
              plan.featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]"
            )}
          >
            {plan.description}
          </p>

          {/* Bagian Harga */}
          <div
            className={cn(
              "mt-5 border-t border-dashed pt-5",
              plan.featured ? "border-[#fafaf7]/25" : "border-[#c0c0b9]"
            )}
          >
            <div
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.05em]",
                plan.featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]"
              )}
            >
              Investasi Mulai Dari
            </div>
            <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span
                className={cn(
                  plan.price.length > 18
                    ? "text-[22px] sm:text-[24px]"
                    : "text-[28px] sm:text-[32px] xl:text-[36px]",
                  "font-heading font-medium leading-none tracking-[-0.025em] tabular-nums",
                  plan.featured ? "text-[#fafaf7]" : "text-[#1f2410]"
                )}
              >
                {plan.price}
              </span>
              <span
                className={cn(
                  "text-xs font-normal",
                  plan.featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]"
                )}
              >
                / proyek
              </span>
            </div>

            {plan.note && (
              <p
                className={cn(
                  "mt-2 text-xs italic leading-relaxed",
                  plan.featured ? "text-[#d4ec8c]/90" : "text-[#545c2c]"
                )}
              >
                {plan.note}
              </p>
            )}
          </div>

          {/* Section Rincian: Sudah Termasuk (Include) & Tidak Termasuk (Exclude) */}
          <div
            className={cn(
              "mt-6 border-t border-dashed pt-5",
              plan.featured ? "border-[#fafaf7]/25" : "border-[#c0c0b9]"
            )}
          >
            <div
              className={cn(
                "space-y-6 transition-all duration-200",
                isLongList && !isExpanded
                  ? "max-h-[360px] overflow-y-auto pr-1 sm:pr-2"
                  : "max-h-none"
              )}
            >
              {/* Bagian Sudah Termasuk (Include) */}
              <div>
                <div
                  className={cn(
                    "mb-3 flex items-center justify-between text-xs font-semibold tracking-wide uppercase",
                    plan.featured ? "text-[#fafaf7]" : "text-[#1f2410]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Check
                      className={cn(
                        "size-3.5",
                        plan.featured ? "text-[#d4ec8c]" : "text-[#3f5b1e]"
                      )}
                      aria-hidden="true"
                    />
                    Sudah Termasuk (Include)
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-normal",
                      plan.featured ? "text-[#c7ccb8]" : "text-[#838775]"
                    )}
                  >
                    {plan.includes.length} poin
                  </span>
                </div>
                <ul
                  className={cn(
                    "space-y-2.5 text-sm",
                    plan.featured ? "text-[#fafaf7]" : "text-[#1f2410]"
                  )}
                >
                  {plan.includes.map((item, idx) => (
                    <li key={`inc-${idx}`} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          plan.featured ? "text-[#d4ec8c]" : "text-[#3f5b1e]"
                        )}
                        aria-hidden="true"
                      />
                      <span className="leading-snug text-xs sm:text-sm font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bagian Tidak Termasuk (Exclude) */}
              <div
                className={cn(
                  "border-t border-dashed pt-4",
                  plan.featured ? "border-[#fafaf7]/15" : "border-[#c0c0b9]/70"
                )}
              >
                <div
                  className={cn(
                    "mb-2.5 flex items-center justify-between text-xs font-semibold tracking-wide uppercase",
                    plan.featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Minus
                      className={cn(
                        "size-3.5",
                        plan.featured ? "text-[#c7ccb8]" : "text-[#838775]"
                      )}
                      aria-hidden="true"
                    />
                    Tidak Termasuk (Exclude)
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-normal",
                      plan.featured ? "text-[#c7ccb8]" : "text-[#838775]"
                    )}
                  >
                    {plan.excludes.length} poin
                  </span>
                </div>
                <ul
                  className={cn(
                    "space-y-2 text-xs",
                    plan.featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]"
                  )}
                >
                  {plan.excludes.map((item, idx) => (
                    <li key={`exc-${idx}`} className="flex items-start gap-2">
                      <Minus
                        className={cn(
                          "mt-0.5 size-3.5 shrink-0",
                          plan.featured ? "text-[#c7ccb8]" : "text-[#838775]"
                        )}
                        aria-hidden="true"
                      />
                      <span className="leading-snug font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tombol expand jika daftar panjang */}
            {isLongList && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "mt-3 flex items-center gap-1 text-xs font-medium py-1 underline underline-offset-4 transition-colors",
                  plan.featured
                    ? "text-[#d4ec8c] hover:text-[#ffffff]"
                    : "text-[#545c2c] hover:text-[#1f2410]"
                )}
              >
                <span>
                  {isExpanded
                    ? "Ringkas rincian"
                    : `Lihat seluruh rincian (${totalItems} poin)`}
                </span>
                {isExpanded ? (
                  <ChevronUp className="size-3.5" aria-hidden="true" />
                ) : (
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Tombol Konsultasi WhatsApp */}
        <div className="mt-8 pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group/btn inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] px-5 py-3 text-sm font-medium transition-all duration-200 motion-reduce:transition-none active:scale-[0.99]",
              plan.featured
                ? "bg-[#d4ec8c] text-[#1f2410] font-semibold hover:bg-[#c4de74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ec8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2410]"
                : "bg-[#1f2410] text-[#fafaf7] hover:bg-[#2c3316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#545c2c] focus-visible:ring-offset-2"
            )}
          >
            <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>
      </article>
    </div>
  );
}
