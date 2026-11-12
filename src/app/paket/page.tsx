"use client";

import { useState } from "react";
import Link from "next/link";
import { packages, addOns } from "@/content/packages";
import { PackageSlug } from "@/content/types";
import { formatRupiah, buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { trackSelectItem } from "@/lib/analytics";
import { getPackagesJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";
import PackageCard from "@/components/PackageCard";
import OrderPanel from "@/components/OrderPanel";

export default function PaketPage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<PackageSlug>("company-profile");

  const handleSelectPackage = (slug: PackageSlug) => {
    setSelectedSlug(slug);
    const pkg = packages.find((p) => p.slug === slug);
    if (pkg) {
      trackSelectItem(pkg.slug, pkg.name, pkg.priceFrom);
    }
    setOrderModalOpen(true);
  };

  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Paket & Harga", url: "/paket" },
  ];

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

      {/* Header Halaman */}
      <div className="bg-[#fafaf7] border-b border-[#c0c0b9] py-16 lg:py-24">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center space-x-2 text-xs text-[#5b5e4e]">
              <li>
                <Link href="/" className="hover:text-[#1f2410]">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#545c2c]" aria-current="page">
                Paket &amp; Harga
              </li>
            </ol>
          </nav>

          <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.15] max-w-3xl mx-auto">
            Paket pembuatan website kami.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] max-w-2xl mx-auto leading-relaxed">
            Semua harga merupakan biaya mulai dari yang jelas dan transparan. Tanpa biaya sewa server bulanan.
          </p>

          <div className="mt-6">
            <a
              href="#comparePlansSection"
              className="inline-flex items-center text-sm font-semibold text-[#545c2c] hover:text-[#1f2410] underline underline-offset-4 py-1"
            >
              <span>Bandingkan tabel fitur paket</span>
              <span className="ml-1.5" aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Kartu Paket */}
      <div className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                pkg={pkg}
                onSelect={(slug) => handleSelectPackage(slug)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tabel Perbandingan Paket */}
      <div id="comparePlansSection" className="py-16 lg:py-24 bg-white border-t border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Perbandingan Detail
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Tabel perbandingan fitur paket.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#c0c0b9] bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#c0c0b9] bg-[#fafaf7]">
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#1f2410] w-2/5">
                    Fitur &amp; Kemampuan
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#1f2410] text-center w-1/5">
                    Landing Page
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#1f2410] text-center w-1/5 bg-[#d4ec8c]/45">
                    Company Profile
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#1f2410] text-center w-1/5">
                    Toko WhatsApp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c0c0b9] text-[#5b5e4e]">
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Jumlah Halaman</td>
                  <td className="p-5 sm:p-6 text-center">1 Halaman</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 font-semibold text-[#1f2410]">
                    Hingga 5 Halaman
                  </td>
                  <td className="p-5 sm:p-6 text-center">Etalase Katalog</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Waktu Pengerjaan</td>
                  <td className="p-5 sm:p-6 text-center">3 - 5 hari kerja</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 font-semibold text-[#1f2410]">
                    5 - 10 hari kerja
                  </td>
                  <td className="p-5 sm:p-6 text-center">7 - 14 hari kerja</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Sesi Revisi</td>
                  <td className="p-5 sm:p-6 text-center">2 kali</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 font-semibold text-[#1f2410]">
                    3 kali
                  </td>
                  <td className="p-5 sm:p-6 text-center">3 kali</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Format Pesan Otomatis WhatsApp</td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 text-[#545c2c] font-bold">
                    &#10003;
                  </td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-bold">&#10003;</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">SEO Teknis (Sitemap, Robots, JSON-LD)</td>
                  <td className="p-5 sm:p-6 text-center text-[#5b5e4e]">Dasar</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 text-[#1f2410] font-semibold">
                    Lengkap
                  </td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-semibold">Lengkap</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Katalog Produk &amp; Filter Kategori</td>
                  <td className="p-5 sm:p-6 text-center text-[#5b5e4e]">&ndash;</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 text-[#5b5e4e]">&ndash;</td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-semibold">Hingga 20 Produk</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Kepemilikan Kode Sumber Penuh</td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20 text-[#545c2c] font-bold">
                    &#10003;
                  </td>
                  <td className="p-5 sm:p-6 text-center text-[#545c2c] font-bold">&#10003;</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#1f2410]">Aksi Pemesanan</td>
                  <td className="p-5 sm:p-6 text-center">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("landing-page")}
                      className="px-5 py-2.5 text-xs font-medium rounded-full border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[44px]"
                    >
                      Pilih
                    </button>
                  </td>
                  <td className="p-5 sm:p-6 text-center bg-[#d4ec8c]/20">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("company-profile")}
                      className="px-5 py-2.5 text-xs font-medium rounded-full bg-[#545c2c] text-white hover:bg-[#8fa65b] hover:text-[#1f2410] transition-colors min-h-[44px]"
                    >
                      Pilih
                    </button>
                  </td>
                  <td className="p-5 sm:p-6 text-center">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("toko-whatsapp")}
                      className="px-5 py-2.5 text-xs font-medium rounded-full border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[44px]"
                    >
                      Pilih
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Daftar Add-on Tambahan */}
      <div className="py-16 lg:py-24 bg-[#fafaf7] border-t border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Tambahan Fleksibel
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Daftar add-on tambahan.
            </h2>
            <p className="mt-3 text-base text-[#5b5e4e]">
              Layanan tambahan yang dapat digabungkan langsung pada panel formulir pesanan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="p-6 sm:p-8 rounded-2xl border border-[#c0c0b9] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-heading font-medium text-[#1f2410]">
                      {addon.name}
                    </h3>
                    <span className="text-base font-semibold text-[#545c2c] whitespace-nowrap">
                      +{formatRupiah(addon.priceFrom)}
                    </span>
                  </div>
                  <p className="text-sm text-[#5b5e4e] mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c0c0b9] text-xs text-[#5b5e4e]">
                  {addon.allowQuantity
                    ? "Dapat dipesan lebih dari satu unit"
                    : "Layanan per paket proyek"}
                </div>
              </div>
            ))}
          </div>

          {/* Banner Bantuan WhatsApp */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#1f2410] text-[#fafaf7] flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-heading font-medium text-[#fafaf7]">
                Masih ragu memilih paket yang paling cocok?
              </h3>
              <p className="text-sm text-[#c7ccb8]">
                Konsultasikan langsung via WhatsApp. Kami bantu hitungkan estimasi terbaik sesuai kebutuhan Anda.
              </p>
            </div>
            <a
              href={buildGeneralWhatsAppUrl("Halaman Paket")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-[#d4ec8c] hover:bg-[#9cbc64] text-[#1f2410] whitespace-nowrap transition-colors min-h-[48px] flex items-center justify-center"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </div>

      <OrderPanel
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialPackageSlug={selectedSlug}
      />
    </>
  );
}
