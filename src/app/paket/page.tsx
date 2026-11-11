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

      {/* Header Halaman (ala Epidemic Sound Pricing) */}
      <div className="bg-[#FAF9F5] border-b border-[#E8E6DF] py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-stone-500">
              <li>
                <Link href="/" className="hover:text-black">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0A0A0A]" aria-current="page">
                Paket &amp; Harga
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight max-w-3xl mx-auto">
            Paket pembuatan website kami.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Semua harga adalah biaya mulai dari yang jelas dan transparan. Tanpa biaya perpanjangan server bulanan.
          </p>

          <div className="mt-6">
            <a
              href="#comparePlansSection"
              className="inline-flex items-center text-sm font-semibold text-[#0A0A0A] hover:underline underline-offset-4"
            >
              <span>Bandingkan tabel fitur paket</span>
              <span className="ml-1" aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Kartu Paket Berdampingan */}
      <div className="py-20 sm:py-28 bg-[#FAF9F5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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

      {/* Tabel Perbandingan Paket (Section 8.1 & 8.2 DESIGN.md) */}
      <div id="comparePlansSection" className="py-20 sm:py-28 bg-white border-t border-[#E8E6DF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Perbandingan Detail
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A]">
              Tabel perbandingan fitur paket.
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E8E6DF] bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E8E6DF] bg-[#FAF9F5]">
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#0A0A0A] w-2/5">
                    Fitur &amp; Kemampuan
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#0A0A0A] text-center w-1/5">
                    Landing Page
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#0A0A0A] text-center w-1/5 bg-stone-100/60">
                    Company Profile
                  </th>
                  <th className="p-5 sm:p-6 font-heading font-medium text-base text-[#0A0A0A] text-center w-1/5">
                    Toko WhatsApp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E6DF] text-stone-700">
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Jumlah Halaman</td>
                  <td className="p-5 sm:p-6 text-center">1 Halaman</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 font-semibold text-[#0A0A0A]">Hingga 5 Halaman</td>
                  <td className="p-5 sm:p-6 text-center">Etalase Katalog</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Waktu Pengerjaan</td>
                  <td className="p-5 sm:p-6 text-center">3 - 5 hari kerja</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 font-semibold text-[#0A0A0A]">5 - 10 hari kerja</td>
                  <td className="p-5 sm:p-6 text-center">7 - 14 hari kerja</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Sesi Revisi</td>
                  <td className="p-5 sm:p-6 text-center">2 kali</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 font-semibold text-[#0A0A0A]">3 kali</td>
                  <td className="p-5 sm:p-6 text-center">3 kali</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Format Pesan Otomatis ke WhatsApp</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 text-emerald-700 font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">&#10003;</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">SEO Teknis (Sitemap, Robots, JSON-LD)</td>
                  <td className="p-5 sm:p-6 text-center text-stone-400">Dasar</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 text-emerald-700 font-bold">Lengkap</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">Lengkap</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Katalog Produk &amp; Filter Kategori</td>
                  <td className="p-5 sm:p-6 text-center text-stone-400">&ndash;</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 text-stone-400">&ndash;</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">Hingga 20 Produk</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Kepemilikan Kode Sumber Penuh</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50 text-emerald-700 font-bold">&#10003;</td>
                  <td className="p-5 sm:p-6 text-center text-emerald-700 font-bold">&#10003;</td>
                </tr>
                <tr>
                  <td className="p-5 sm:p-6 font-medium text-[#0A0A0A]">Aksi Pemesanan</td>
                  <td className="p-5 sm:p-6 text-center">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("landing-page")}
                      className="px-4 py-2 text-xs font-semibold rounded-full border border-[#0A0A0A] hover:bg-stone-100"
                    >
                      Pilih
                    </button>
                  </td>
                  <td className="p-5 sm:p-6 text-center bg-stone-50/50">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("company-profile")}
                      className="px-4 py-2 text-xs font-semibold rounded-full bg-[#0A0A0A] text-white hover:bg-stone-800"
                    >
                      Pilih
                    </button>
                  </td>
                  <td className="p-5 sm:p-6 text-center">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage("toko-whatsapp")}
                      className="px-4 py-2 text-xs font-semibold rounded-full border border-[#0A0A0A] hover:bg-stone-100"
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
      <div className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#E8E6DF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Tambahan Fleksibel
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A]">
              Daftar add-on tambahan.
            </h2>
            <p className="mt-3 text-base text-stone-600">
              Layanan tambahan yang bisa Anda gabungkan langsung pada panel formulir pesanan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="p-8 rounded-3xl border border-[#E8E6DF] bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-heading font-medium text-[#0A0A0A]">
                      {addon.name}
                    </h3>
                    <span className="text-base font-semibold text-[#0A0A0A] whitespace-nowrap">
                      +{formatRupiah(addon.priceFrom)}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E6DF] text-xs text-stone-500">
                  {addon.allowQuantity
                    ? "Dapat dipesan lebih dari satu unit"
                    : "Layanan per paket proyek"}
                </div>
              </div>
            ))}
          </div>

          {/* Banner Bantuan WhatsApp */}
          <div className="mt-16 p-10 sm:p-14 rounded-3xl bg-[#0C0C0C] text-white flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-heading font-medium">
                Masih ragu memilih paket yang paling cocok?
              </h3>
              <p className="text-sm text-stone-300">
                Konsultasikan langsung dengan kami via WhatsApp. Kami bantu hitungkan estimasi terbaik tanpa paksaan.
              </p>
            </div>
            <a
              href={buildGeneralWhatsAppUrl("Halaman Paket")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-semibold bg-white hover:bg-stone-100 text-[#0A0A0A] whitespace-nowrap transition-colors min-h-[48px] flex items-center justify-center"
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
