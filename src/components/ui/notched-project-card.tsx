"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * NotchedProjectCard
 *
 * Kartu proyek dengan sudut kanan bawah melengkung ke dalam (notched corner)
 * tempat tombol panah navigasi bersarang secara konsentris.
 * Properti `surface` harus menyamai warna latar belakang di belakang kartu
 * agar potongan notch menyatu mulus tanpa garis tepi.
 */

export interface NotchedProjectCardProps {
  href: string;
  title: string;
  description?: string;
  /** Foto sampul utama */
  image: string;
  imageAlt?: string;
  /** Label singkat di atas gambar sampul */
  badge?: string;
  tags?: string[];
  /** Opsional gambar layar produk di atas foto latar */
  screen?: { src: string; alt: string; className?: string };
  /** Tingkat gelap lapisan overlay antara foto dan layar produk (0 sampai 1) */
  dim?: number;
  monochrome?: boolean;
  /** Warna latar belakang di balik kartu untuk melukis lekukan notch */
  surface?: string;
  /** Warna lingkaran panah saat hover */
  accent?: string;
  /** Warna ikon panah saat hover (harus kontras terhadap accent) */
  accentForeground?: string;
  /** Mengaktifkan prioritas muat lebih tinggi untuk gambar di atas lipatan */
  priority?: boolean;
  className?: string;
}

const DISC = 64;
const BLOCK = 80;
const FILLET = 28;

export function NotchedProjectCard({
  href,
  title,
  description,
  image,
  imageAlt = "",
  badge,
  tags = [],
  screen,
  dim = screen ? 0.45 : 0,
  monochrome = false,
  surface = "var(--color-background, #fafaf7)",
  accent = "#3f5b1e",
  accentForeground = "#ffffff",
  priority = false,
  className,
}: NotchedProjectCardProps) {
  const tone = monochrome
    ? "grayscale transition-[filter,transform] duration-500 motion-reduce:transition-none group-hover:grayscale-0 group-focus-visible:grayscale-0"
    : "transition-transform duration-500 motion-reduce:transition-none";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const innerContent = (
    <>
      <div className="relative">
        {/* Sampul foto */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#eef2e2] border border-[#c0c0b9]/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={screen ? "" : imageAlt || `Pratinjau proyek ${title}`}
            width={800}
            height={600}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              tone,
              !screen && "group-hover:scale-[1.04] motion-reduce:group-hover:scale-100",
            )}
          />
          {dim > 0 && (
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundColor: `rgb(0 0 0 / ${dim})` }}
            />
          )}
          {screen && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={screen.src}
              alt={screen.alt}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className={cn(
                "absolute bottom-0 right-0 w-[82%] origin-bottom-right drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] group-hover:scale-[1.07] motion-reduce:group-hover:scale-100",
                tone,
                screen.className,
              )}
            />
          )}
          {badge && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-4 px-4">
              <span className="rounded-full border border-[#d4ec8c]/50 bg-[#1f2410]/90 px-3 py-1 text-xs font-medium text-[#fafaf7]">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Lapisan notch memotong sudut kanan bawah sesuai warna latar di belakang kartu */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0"
          style={{
            width: BLOCK,
            height: BLOCK,
            borderTopLeftRadius: BLOCK - DISC / 2,
            background: surface,
          }}
        />
        {[
          { bottom: BLOCK, right: 0 },
          { bottom: 0, right: BLOCK },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute"
            style={{
              ...pos,
              width: FILLET,
              height: FILLET,
              background: `radial-gradient(circle at top left, transparent ${FILLET - 0.5}px, ${surface} ${FILLET}px)`,
            }}
          />
        ))}

        {/* Cakram tombol panah navigasi di sudut lekukan */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-[#d4ec8c] text-[#1f2410] border border-[#545c2c]/25 transition-[background-color,color,transform] duration-300 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100",
            accent
              ? "group-hover:bg-[var(--card-accent)] group-hover:text-[var(--card-accent-fg)] group-hover:border-transparent"
              : "group-hover:bg-primary group-hover:text-primary-foreground",
          )}
          style={
            {
              width: DISC,
              height: DISC,
              "--card-accent": accent,
              "--card-accent-fg": accentForeground,
            } as React.CSSProperties
          }
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <h3 className="mt-5 text-[22px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-[#5b5e4e] font-light">
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="rounded-md bg-[#eef2e2] border border-[#c0c0b9] px-2.5 py-1 text-xs font-medium text-[#1f2410]"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const linkClasses = cn(
    "group flex flex-col rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-[#3f5b1e] focus-visible:ring-offset-4",
    className,
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
        {innerContent}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {innerContent}
    </Link>
  );
}

export default NotchedProjectCard;

