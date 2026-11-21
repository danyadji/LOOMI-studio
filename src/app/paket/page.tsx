"use client";

import { useState } from "react";
import Link from "next/link";
import {
  pricingCategories,
  categoryComparisons,
  PricingCategory,
} from "@/content/pricingCategories";
import { addOns } from "@/content/packages";
import { siteConfig } from "@/content/site";
import { formatRupiah, buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd, getPackagesJsonLd } from "@/lib/seo";
import PricingCategoryCard from "@/components/PricingCategoryCard";
import { cn } from "@/lib/utils";

export default function PaketPage() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<PricingCategory["id"]>("landing-page");

  const currentCategory =
    pricingCategories.find((cat) => cat.id === activeCategoryId) ||
    pricingCategories[0];

  const currentComparison = categoryComparisons[activeCategoryId];

  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Paket & Harga", url: "/paket" },
  ];

  const getWaConsultUrl = (tierName: string, tech: string, price: string) => {
    const text = `Halo ${siteConfig.name}, saya tertarik konsultasi paket ${tierName} : ${tech} (${price}) untuk ${currentCategory.title}.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPackagesJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* Header Halaman (Hero Foto MacBook Pro) */}
      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] overflow-hidden bg-[#1f2410] text-[#fafaf7] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=1600&q=80"
          alt="MacBook Pro menampilkan komponen perancangan antarmuka website"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#1f2410]/75 bg-gradient-to-b from-[#1f2410]/85 via-[#1f2410]/75 to-[#1f2410]/90"
        />

        <div className="relative z-10 max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center space-x-2 text-xs text-[#e4e9d6]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#d4ec8c] transition-colors py-1 inline-block"
                >
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#d4ec8c]" aria-current="page">
                Paket &amp; Harga
              </li>
            </ol>
          </nav>

          <h1 className="text-[36px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.15] max-w-3xl mx-auto">
            Paket pembuatan website kami.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#e4e9d6] font-light max-w-2xl mx-auto leading-relaxed">
            Pilihan paket transparan dengan teknologi WordPress dan Next.js modern. Tanpa biaya tersembunyi.
          </p>

          <div className="mt-6">
            <a
              href="#comparePlansSection"
              className="inline-flex items-center text-sm font-semibold text-[#d4ec8c] hover:text-[#ffffff] underline underline-offset-4 py-2 min-h-[44px]"
            >
              <span>Bandingkan tabel fitur paket</span>
              <span className="ml-1.5" aria-hidden="true">
                &darr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Area Navigasi Kategori (Tabs) & Kartu Paket */}
      <section className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header Bagian Kategori */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block mb-2 font-mono">
              Kategori Layanan
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Pilih jenis website kebutuhan Anda.
            </h2>
          </div>

          {/* Sistem 3 Tombol Kategori (Tab Navigation) - 1 Baris Sejajar Penuh */}
          <div
            role="tablist"
            aria-label="Pilihan Kategori Layanan"
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-[#edebe4] border border-[#c0c0b9] rounded-[4px] max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            {pricingCategories.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={cn(
                    "whitespace-nowrap px-4 py-3 text-xs sm:text-sm font-medium rounded-[2px] transition-all duration-200 min-h-[44px] flex items-center justify-center text-center",
                    isActive
                      ? "bg-[#1f2410] text-[#fafaf7] shadow-sm font-semibold"
                      : "text-[#545c2c] hover:text-[#1f2410] hover:bg-black/5"
                  )}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Deskripsi Kategori Aktif */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-block rounded-[2px] border border-[#c0c0b9] bg-white px-2.5 py-1 text-xs text-[#545c2c] font-medium tracking-wide mb-3 font-mono">
              {currentCategory.badge}
            </span>
            <p className="text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          {/* 3 Pricing Card Sesuai Kategori Tanpa Reload Halaman */}
          <div
            role="tabpanel"
            id={`panel-${currentCategory.id}`}
            aria-labelledby={`tab-${currentCategory.id}`}
            className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch max-w-lg mx-auto lg:max-w-none"
          >
            {currentCategory.plans.map((plan) => (
              <PricingCategoryCard
                key={plan.id}
                plan={plan}
                categoryTitle={currentCategory.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tabel Perbandingan Paket Dinamis */}
      <section
        id="comparePlansSection"
        className="py-16 lg:py-24 bg-white border-t border-[#c0c0b9]"
      >
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-mono uppercase tracking-wider">
              Perbandingan Detail
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Tabel perbandingan fitur paket.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5b5e4e] font-light">
              Perbandingan spesifikasi teknis tier untuk kategori{" "}
              <span className="font-semibold text-[#1f2410]">
                {currentCategory.title}
              </span>
              .
            </p>
          </div>

          {/* Tab Selector di Area Tabel: 1 Baris Sejajar Penuh Rapi (Tidak Ada Tombol Kepotong) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-[#edebe4] border border-[#c0c0b9] rounded-[4px] max-w-3xl mb-10">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={cn(
                  "whitespace-nowrap px-4 py-2.5 text-xs sm:text-sm font-medium rounded-[2px] transition-all min-h-[42px] flex items-center justify-center text-center",
                  activeCategoryId === cat.id
                    ? "bg-[#1f2410] text-[#fafaf7] shadow-sm font-semibold"
                    : "text-[#545c2c] hover:text-[#1f2410] hover:bg-black/5"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto rounded-[2px] border border-[#c0c0b9] bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#c0c0b9] bg-[#fafaf7]">
                  <th className="p-4 sm:p-5 font-heading font-medium text-sm sm:text-base text-[#1f2410] w-[28%]">
                    {currentComparison.columnHeaders.feature}
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-medium text-xs sm:text-sm text-[#1f2410] text-center w-[24%]">
                    <div className="font-bold text-sm sm:text-base text-[#1f2410]">
                      {currentComparison.columnHeaders.starter.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#545c2c] mt-0.5">
                      {currentComparison.columnHeaders.starter.tech}
                    </div>
                    <div className="text-xs font-semibold text-[#1f2410] mt-1">
                      {currentComparison.columnHeaders.starter.price}
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-medium text-xs sm:text-sm text-[#1f2410] text-center w-[24%] bg-[#d4ec8c]/35 border-x border-[#c0c0b9]">
                    <div className="inline-block rounded-[2px] bg-[#1f2410] text-[#fafaf7] text-[10px] uppercase font-mono px-2 py-0.5 mb-1 tracking-wider">
                      Paling Banyak Dipilih
                    </div>
                    <div className="font-bold text-sm sm:text-base text-[#1f2410]">
                      {currentComparison.columnHeaders.professional.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#545c2c] mt-0.5">
                      {currentComparison.columnHeaders.professional.tech}
                    </div>
                    <div className="text-xs font-semibold text-[#1f2410] mt-1">
                      {currentComparison.columnHeaders.professional.price}
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 font-heading font-medium text-xs sm:text-sm text-[#1f2410] text-center w-[24%]">
                    <div className="font-bold text-sm sm:text-base text-[#1f2410]">
                      {currentComparison.columnHeaders.advanced.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#545c2c] mt-0.5">
                      {currentComparison.columnHeaders.advanced.tech}
                    </div>
                    <div className="text-xs font-semibold text-[#1f2410] mt-1">
                      {currentComparison.columnHeaders.advanced.price}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c0c0b9] text-[#5b5e4e]">
                {currentComparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#fafaf7]/50 transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-medium text-[#1f2410] leading-snug">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-light leading-snug">
                      {row.starter}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-medium text-[#1f2410] bg-[#d4ec8c]/15 border-x border-[#c0c0b9] leading-snug">
                      {row.professional}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-light leading-snug">
                      {row.advanced}
                    </td>
                  </tr>
                ))}
                {/* Baris Tombol Aksi Konsultasi WhatsApp */}
                <tr className="bg-[#fafaf7]/80">
                  <td className="p-4 sm:p-5 font-medium text-[#1f2410]">
                    Aksi Konsultasi
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    <a
                      href={getWaConsultUrl(
                        currentComparison.columnHeaders.starter.name,
                        currentComparison.columnHeaders.starter.tech,
                        currentComparison.columnHeaders.starter.price
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-[2px] border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[40px] w-full max-w-[160px]"
                    >
                      Pilih Starter
                    </a>
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-[#d4ec8c]/25 border-x border-[#c0c0b9]">
                    <a
                      href={getWaConsultUrl(
                        currentComparison.columnHeaders.professional.name,
                        currentComparison.columnHeaders.professional.tech,
                        currentComparison.columnHeaders.professional.price
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-[2px] bg-[#1f2410] text-[#fafaf7] hover:bg-[#343b1c] transition-colors min-h-[40px] w-full max-w-[160px] shadow-sm"
                    >
                      Pilih Professional
                    </a>
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    <a
                      href={getWaConsultUrl(
                        currentComparison.columnHeaders.advanced.name,
                        currentComparison.columnHeaders.advanced.tech,
                        currentComparison.columnHeaders.advanced.price
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-[2px] border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[40px] w-full max-w-[160px]"
                    >
                      Pilih Paket
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Daftar Add-on Tambahan */}
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-t border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-mono uppercase tracking-wider">
              Tambahan Fleksibel
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Daftar add-on tambahan.
            </h2>
            <p className="mt-3 text-base text-[#5b5e4e] font-light">
              Fitur dan integrasi opsional yang dapat ditambahkan langsung sesuai kebutuhan proyek Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="p-6 sm:p-7 rounded-[2px] border border-[#c0c0b9] bg-white flex flex-col justify-between hover:border-[#838775] transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-heading font-medium text-[#1f2410]">
                      {addon.name}
                    </h3>
                    <span className="text-base font-semibold text-[#545c2c] whitespace-nowrap font-mono">
                      +{formatRupiah(addon.priceFrom)}
                    </span>
                  </div>
                  <p className="text-sm text-[#5b5e4e] mt-2 leading-relaxed font-light">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-[#c0c0b9] text-xs text-[#838775]">
                  {addon.allowQuantity
                    ? "Dapat dipesan lebih dari satu unit"
                    : "Layanan per paket proyek"}
                </div>
              </div>
            ))}
          </div>

          {/* Banner Bantuan WhatsApp */}
          <div className="mt-16 p-8 sm:p-12 rounded-[2px] bg-[#1f2410] text-[#fafaf7] flex flex-col sm:flex-row items-center justify-between gap-8 border border-[#1f2410]">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#fafaf7]">
                Masih ragu memilih paket yang paling cocok?
              </h3>
              <p className="text-sm sm:text-base text-[#c7ccb8] font-light">
                Konsultasikan langsung via WhatsApp. Kami bantu berikan rekomendasi arsitektur terbaik sesuai anggaran dan target bisnis Anda.
              </p>
            </div>
            <a
              href={buildGeneralWhatsAppUrl("Halaman Paket")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-[2px] text-sm font-semibold bg-[#d4ec8c] hover:bg-[#c4de74] text-[#1f2410] whitespace-nowrap transition-colors min-h-[48px] flex items-center justify-center shadow-sm"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
