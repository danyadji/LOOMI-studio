"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingOrbitCardProps {
  title: string;
  badge?: string;
  description: string;
  priceLabel?: string;
  price: string;
  priceUnit?: string;
  metaText?: string;
  includesTitle?: string;
  features: string[];
  excludesTitle?: string;
  excludes?: string[];
  ctaLabel?: string;
  href?: string;
  onSelect?: () => void;
  featured?: boolean;
  className?: string;
}

/**
 * Architectural pricing card inspired by Ink Orbit:
 * sharp 2px geometry, dashed feature dividers, tabular pricing,
 * and an inverted dark frame with exterior L-shaped corner brackets
 * when `featured` is enabled.
 */
export function PricingOrbitCard({
  title,
  badge,
  description,
  priceLabel = "Investasi mulai dari",
  price,
  priceUnit = "/ proyek",
  metaText,
  includesTitle = "Sudah termasuk:",
  features,
  excludesTitle = "Belum termasuk:",
  excludes = [],
  ctaLabel = "Pilih Paket Ini",
  href,
  onSelect,
  featured = false,
  className,
}: PricingOrbitCardProps) {
  const ctaClassName = cn(
    "group/btn mt-auto inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[2px] px-4 py-3 text-sm font-medium transition-all duration-200 motion-reduce:transition-none active:scale-[0.99]",
    featured
      ? "bg-[#fafaf7] text-[#1f2410] hover:bg-[#d4ec8c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ec8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2410]"
      : "border border-[#838775] bg-white text-[#1f2410] hover:border-[#1f2410] hover:bg-[#fafaf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#545c2c] focus-visible:ring-offset-2",
  );

  const ctaContent = (
    <>
      <span>{ctaLabel}</span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        aria-hidden="true"
      />
    </>
  );

  return (
    <div className={cn("relative flex h-full", className)}>
      {featured && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1.5 -top-1.5 size-3 border-l-[1.5px] border-t-[1.5px] border-[#838775]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-1.5 -top-1.5 size-3 border-r-[1.5px] border-t-[1.5px] border-[#838775]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 -left-1.5 size-3 border-b-[1.5px] border-l-[1.5px] border-[#838775]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 -right-1.5 size-3 border-b-[1.5px] border-r-[1.5px] border-[#838775]"
          />
        </>
      )}

      <article
        className={cn(
          "flex flex-1 flex-col justify-between rounded-[2px] border p-6 sm:p-7 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0",
          featured
            ? "border-[#1f2410] bg-[#1f2410] text-[#fafaf7] hover:shadow-[0_14px_30px_-14px_rgba(31,36,16,0.45)]"
            : "border-[#c0c0b9] bg-[#f5f4f0] text-[#1f2410] hover:border-[#838775] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-12px_rgba(31,36,16,0.14)]",
        )}
      >
        <div>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3
              className={cn(
                "text-lg sm:text-xl font-heading font-semibold tracking-[-0.015em] leading-snug",
                featured ? "text-[#fafaf7]" : "text-[#1f2410]",
              )}
            >
              {title}
            </h3>
            {badge && (
              <span
                className={cn(
                  "inline-block shrink-0 rounded-[2px] border px-2 py-0.5 text-[11px] font-medium tracking-[0.02em]",
                  featured
                    ? "border-[#d4ec8c]/60 bg-[#d4ec8c]/10 text-[#d4ec8c]"
                    : "border-[#c0c0b9] bg-white/75 text-[#5b5e4e]",
                )}
              >
                {badge}
              </span>
            )}
          </div>

          <p
            className={cn(
              "mt-3 text-sm font-light leading-relaxed lg:min-h-[4.3em]",
              featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
            )}
          >
            {description}
          </p>

          <div
            className={cn(
              "mt-6 border-t border-dashed pt-5",
              featured ? "border-[#fafaf7]/25" : "border-[#c0c0b9]",
            )}
          >
            <div
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.05em]",
                featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
              )}
            >
              {priceLabel}
            </div>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span
                className={cn(
                  "text-[32px] sm:text-[36px] xl:text-[40px] font-heading font-medium leading-none tracking-[-0.03em] tabular-nums",
                  featured ? "text-[#fafaf7]" : "text-[#1f2410]",
                )}
              >
                {price}
              </span>
              {priceUnit && (
                <span
                  className={cn(
                    "text-xs font-normal",
                    featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
                  )}
                >
                  {priceUnit}
                </span>
              )}
            </div>
            {metaText && (
              <div
                className={cn(
                  "mt-2.5 text-xs",
                  featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
                )}
              >
                {metaText}
              </div>
            )}
          </div>

          <div
            className={cn(
              "mt-6 border-t border-dashed pt-5",
              featured ? "border-[#fafaf7]/25" : "border-[#c0c0b9]",
            )}
          >
            {includesTitle && (
              <div
                className={cn(
                  "mb-3 text-xs font-semibold",
                  featured ? "text-[#fafaf7]" : "text-[#1f2410]",
                )}
              >
                {includesTitle}
              </div>
            )}
            <ul
              className={cn(
                "space-y-2.5 text-sm",
                featured ? "text-[#fafaf7]" : "text-[#1f2410]",
              )}
            >
              {features.map((item, idx) => (
                <li key={`${idx}-${item}`} className="flex items-start gap-2.5">
                  <Check
                    className={cn(
                      "mt-1 size-3.5 shrink-0",
                      featured ? "text-[#d4ec8c]" : "text-[#3f5b1e]",
                    )}
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {excludes.length > 0 && (
            <div
              className={cn(
                "mt-6 border-t border-dashed pt-5",
                featured ? "border-[#fafaf7]/25" : "border-[#c0c0b9]",
              )}
            >
              <div
                className={cn(
                  "mb-2 text-xs font-semibold",
                  featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
                )}
              >
                {excludesTitle}
              </div>
              <ul
                className={cn(
                  "space-y-1.5 text-xs",
                  featured ? "text-[#c7ccb8]" : "text-[#5b5e4e]",
                )}
              >
                {excludes.map((item, idx) => (
                  <li key={`${idx}-${item}`} className="flex items-start gap-2">
                    <Minus className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 pt-2">
          {href ? (
            <Link href={href} className={ctaClassName}>
              {ctaContent}
            </Link>
          ) : (
            <button type="button" onClick={onSelect} className={ctaClassName}>
              {ctaContent}
            </button>
          )}
        </div>
      </article>
    </div>
  );
}

export interface InkOrbitPricingProps {
  plans: PricingOrbitCardProps[];
  className?: string;
}

/** Three-column responsive wrapper for `PricingOrbitCard` items. */
export function InkOrbitPricing({ plans, className }: InkOrbitPricingProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-7 items-stretch",
        className,
      )}
    >
      {plans.map((plan) => (
        <PricingOrbitCard key={plan.title} {...plan} />
      ))}
    </div>
  );
}

export default InkOrbitPricing;

