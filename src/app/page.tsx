import Link from "next/link";
import { packages } from "@/content/packages";
import { portfolioItems } from "@/content/portfolio";
import { processSteps } from "@/content/process";
import { faqItems } from "@/content/faq";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getOrganizationJsonLd } from "@/lib/seo";
import PackageCard from "@/components/PackageCard";
import FaqAccordion from "@/components/FaqAccordion";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";

const mainServices = [
  {
    code: "01",
    audience: "Iklan & Promo",
    title: "Landing page promosi.",
    summary:
      "Satu halaman fokus untuk mengubah klik iklan Instagram, TikTok, atau Google menjadi obrolan WhatsApp tanpa menu bercabang.",
    specs: ["1 halaman fokus", "Meta Pixel & GA4", "3-5 hari kerja"],
    href: "/layanan#landing-page",
    featured: false,
  },
  {
    code: "02",
    audience: "Pilihan Utama UMKM",
    title: "Company profile bisnis.",
    summary:
      "Website resmi hingga 5 halaman berisi profil usaha, daftar layanan, galeri proyek, SEO Google, dan pin lokasi usaha.",
    specs: ["Hingga 5 halaman", "SEO & Google Maps", "5-10 hari kerja"],
    href: "/layanan#company-profile",
    featured: true,
  },
  {
    code: "03",
    audience: "Etalase Produk",
    title: "Katalog toko WhatsApp.",
    summary:
      "Katalog belanja ringan di layar HP agar pembeli bisa pilih varian barang lalu kirim rincian pesanan otomatis ke WhatsApp.",
    specs: ["Hingga 20 produk awal", "Format pesan order", "7-14 hari kerja"],
    href: "/layanan#toko-whatsapp",
    featured: false,
  },
];

export default function HomePage() {
  const waHeroUrl = buildGeneralWhatsAppUrl("CTA Penutup Beranda");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd()),
        }}
      />

      {/* 1. Hero Section Full 1 Layar (Hijau #3f5b1e di belakang Floating Navbar) */}
      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] min-h-[100dvh] flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#3f5b1e] text-[#fafaf7] overflow-hidden">
        <div className="max-w-[1224px] w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2.5 text-xs font-medium tracking-[0.06em] uppercase text-[#d4ec8c]">
              <span className="w-2 h-2 bg-[#d4ec8c] inline-block shrink-0" aria-hidden="true" />
              <span>Website Praktis UMKM Indonesia</span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[58px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.16]">
              Anda bawa ide usaha.
              <br className="hidden sm:inline" />{" "}
              Kami bangun{" "}
              <span className="bg-[#ddf327] text-[#1f2410] px-2.5 py-0.5 inline-block mt-1.5 sm:mt-2">
                websitenya.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#e4e9d6] font-light leading-relaxed max-w-2xl mx-auto">
              Website cepat, berkarakter, dan langsung terhubung ke obrolan WhatsApp bisnis Anda. Tanpa kerumitan koding, tanpa database server, dan tanpa biaya langganan bulanan.
            </p>

            {/* CTA Persegi Terpusat */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-[#1f2410] bg-[#ffffff] hover:bg-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
              >
                Pilih Paket Pembuatan
              </Link>

              <Link
                href="/portofolio"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-[#fafaf7] bg-transparent hover:bg-[#2f4516] border border-[#c7ccb8] hover:border-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1B. Showcase Proyek Konsep (3 Kartu NotchedProjectCard di bawah Hero) */}
      <section className="py-16 lg:py-24 bg-[#f5f4f0]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
                Konsep Desain UMKM
              </span>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                Contoh rancangan per sektor usaha.
              </h2>
            </div>
            <Link
              href="/portofolio"
              className="text-sm font-semibold text-[#3f5b1e] hover:text-[#1f2410] underline underline-offset-4 py-1 self-start md:self-auto"
            >
              Lihat detail seluruh studi kasus &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {portfolioItems.map((item) => (
              <NotchedProjectCard
                key={item.slug}
                href={`/portofolio#${item.slug}`}
                title={`${item.title}.`}
                description={item.highlights[0]}
                image={item.image}
                imageAlt={`Contoh desain website ${item.title} (${item.businessType})`}
                badge={item.isSample ? "Proyek Konsep" : item.businessType}
                tags={item.scope}
                surface="#f5f4f0"
                accent="#3f5b1e"
                accentForeground="#ffffff"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pendekatan Kami (Referensi Desain Kartu Pertama Forest Manifesto) */}
      <section className="py-16 lg:py-24 bg-[#f5f4f0]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] mb-5">
              <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
              <span>Pendekatan Kami</span>
            </div>
            <h2 className="text-[28px] sm:text-4xl lg:text-[40px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
              Dibangun untuk cara{" "}
              <span className="bg-[#ddf327] text-[#1f2410] px-2 py-0.5 inline-block">
                UMKM Indonesia
              </span>{" "}
              berjualan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Kartu 1 (Mengikuti struktur penuh kartu referensi pertama) */}
            <div className="p-6 sm:p-8 bg-white rounded-[2px] flex flex-col justify-between">
              <div>
                <span className="inline-block self-start bg-[#f5f4f0] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
                  Poin 01
                </span>
                <h3 className="mt-5 text-[20px] sm:text-[22px] font-heading font-medium text-[#1f2410] leading-[1.28] tracking-[-0.015em]">
                  Pemesanan langsung ke WhatsApp.
                </h3>
                <p className="mt-4 text-sm text-[#5b5e4e] font-light leading-relaxed">
                  Calon pembeli tidak dipaksa membuat akun atau mengisi keranjang rumit. Pilihan produk atau layanan mereka langsung tersusun menjadi pesan chat ke nomor admin Anda.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-[#e6e4dc] flex items-center gap-4">
                <span className="text-[26px] sm:text-[30px] font-heading font-medium text-[#1f2410] tracking-[-0.02em] leading-none shrink-0">
                  1 Klik
                </span>
                <span className="text-xs text-[#5b5e4e] font-light leading-snug">
                  Format pesan otomatis langsung masuk ke WhatsApp admin.
                </span>
              </div>
            </div>

            {/* Kartu 2 (Struktur identik kartu referensi pertama) */}
            <div className="p-6 sm:p-8 bg-white rounded-[2px] flex flex-col justify-between">
              <div>
                <span className="inline-block self-start bg-[#f5f4f0] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
                  Poin 02
                </span>
                <h3 className="mt-5 text-[20px] sm:text-[22px] font-heading font-medium text-[#1f2410] leading-[1.28] tracking-[-0.015em]">
                  Cepat dibuka, rapi di semua layar.
                </h3>
                <p className="mt-4 text-sm text-[#5b5e4e] font-light leading-relaxed">
                  Website dirancang ringan dan nyaman dilihat dari HP, tablet, maupun laptop, sehingga calon pelanggan tidak pergi sebelum melihat produk Anda.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-[#e6e4dc] flex items-center gap-4">
                <span className="text-[26px] sm:text-[30px] font-heading font-medium text-[#1f2410] tracking-[-0.02em] leading-none shrink-0">
                  3 Layar
                </span>
                <span className="text-xs text-[#5b5e4e] font-light leading-snug">
                  Fokus tampilan mobile, tablet, hingga layar desktop.
                </span>
              </div>
            </div>

            {/* Kartu 3 (Struktur identik kartu referensi pertama) */}
            <div className="p-6 sm:p-8 bg-white rounded-[2px] flex flex-col justify-between">
              <div>
                <span className="inline-block self-start bg-[#f5f4f0] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
                  Poin 03
                </span>
                <h3 className="mt-5 text-[20px] sm:text-[22px] font-heading font-medium text-[#1f2410] leading-[1.28] tracking-[-0.015em]">
                  Harga jelas, tanpa biaya tersembunyi.
                </h3>
                <p className="mt-4 text-sm text-[#5b5e4e] font-light leading-relaxed">
                  Semua cakupan dan biaya disepakati di awal. Setelah website live, kami tetap mendampingi sampai Anda nyaman mengelolanya sendiri.
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-[#e6e4dc] flex items-center gap-4">
                <span className="text-[26px] sm:text-[30px] font-heading font-medium text-[#1f2410] tracking-[-0.02em] leading-none shrink-0">
                  2-3x
                </span>
                <span className="text-xs text-[#5b5e4e] font-light leading-snug">
                  Paket transparan bergaransi revisi dan pendampingan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Layanan Utama (Ringkas, Terstruktur, dan Mudah Dipindai di Mobile) */}
      <section className="py-14 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 lg:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#f5f4f0] px-3 py-1.5 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] mb-4">
                <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                <span>Layanan Utama</span>
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                Tiga jenis website sesuai tahap bisnis Anda.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
                Pilih format yang paling sesuai dengan target penjualan usaha Anda saat ini.
              </p>
            </div>
            <Link
              href="/layanan"
              className="text-sm font-semibold text-[#3f5b1e] hover:text-[#1f2410] underline underline-offset-4 py-2 min-h-[44px] inline-flex items-center self-start md:self-auto shrink-0"
            >
              Lihat semua detail layanan &rarr;
            </Link>
          </div>

          <div className="space-y-4">
            {mainServices.map((service) => (
              <div
                key={service.code}
                className={`bg-white rounded-[4px] p-5 sm:p-7 border transition-colors ${
                  service.featured ? "border-[#545c2c]" : "border-[#c0c0b9]/80"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start md:items-center">
                  <div className="md:col-span-9 lg:col-span-10 grid grid-cols-1 lg:grid-cols-10 gap-3 lg:gap-8 items-start lg:items-center">
                    <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-center lg:items-start gap-2.5 lg:gap-2">
                      <span className="text-xs font-medium tracking-[0.06em] uppercase text-[#545c2c]">
                        Layanan {service.code}
                      </span>
                      <span
                        className={`inline-block px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] uppercase rounded-[2px] ${
                          service.featured
                            ? "bg-[#d4ec8c] text-[#1f2410]"
                            : "bg-[#f5f4f0] text-[#5b5e4e]"
                        }`}
                      >
                        {service.audience}
                      </span>
                    </div>

                    <div className="lg:col-span-7 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#5b5e4e] font-light leading-relaxed">
                        {service.summary}
                      </p>
                      <p className="pt-0.5 text-xs font-medium text-[#545c2c]">
                        {service.specs.join(" \u2022 ")}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-3 lg:col-span-2 flex md:justify-end">
                    <Link
                      href={service.href}
                      className={`w-full sm:w-auto px-5 py-2.5 text-sm font-medium rounded-[2px] transition-colors min-h-[44px] inline-flex items-center justify-center shrink-0 ${
                        service.featured
                          ? "bg-[#3f5b1e] text-white hover:bg-[#2f4516]"
                          : "bg-transparent text-[#3f5b1e] border border-[#545c2c] hover:bg-[#3f5b1e] hover:text-white"
                      }`}
                    >
                      Lihat detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Paket & Harga (Mengarah ke Halaman Paket) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="inline-flex items-center gap-2 bg-[#f5f4f0] border border-[#c0c0b9] px-2.5 py-1 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] mb-4 font-sans">
              <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
              <span>Investasi Jelas</span>
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.15]">
              Paket pembuatan website kami.
            </h2>
            <p className="mt-4 text-base text-[#5b5e4e] font-light">
              Biaya transparan sejak awal. Anda dapat memilih paket dan tambahan add-on pada halaman paket kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch max-w-lg mx-auto lg:max-w-none">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} href="/paket" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/paket"
              className="inline-flex items-center text-sm font-semibold text-[#545c2c] hover:text-[#1f2410] underline underline-offset-4 py-2 min-h-[44px]"
            >
              <span>Lihat tabel perbandingan fitur lengkap dan daftar add-on</span>
              <span className="ml-1.5" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Alur Kerja 4 Langkah (Desain kartu seragam dengan section Pendekatan Kami) */}
      <section className="py-16 lg:py-24 bg-[#f5f4f0]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] mb-5">
                <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                <span>Alur Kerja</span>
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                Cara kami bekerja bersama Anda.
              </h2>
            </div>
            <Link
              href="/proses"
              className="text-sm font-semibold text-[#3f5b1e] hover:text-[#1f2410] underline underline-offset-4 py-2 min-h-[44px] inline-flex items-center self-start md:self-auto"
            >
              Lihat rincian tahapan dan output &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 bg-white rounded-[2px]"
              >
                <span className="inline-block self-start bg-[#f5f4f0] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
                  Tahap 0{step.step}
                </span>
                <h3 className="mt-5 text-[20px] font-heading font-medium text-[#1f2410] leading-[1.28] tracking-[-0.015em]">
                  {step.title}.
                </h3>
                <p className="mt-4 text-sm text-[#5b5e4e] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Ringkas (Accordion Interaktif) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#f5f4f0] px-3 py-1.5 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e]">
                <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                <span>Pertanyaan Umum</span>
              </div>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                Jawaban lugas untuk keraguan Anda.
              </h2>
              <p className="text-sm text-[#5b5e4e] font-light leading-relaxed">
                Pertanyaan seputar hosting, kepemilikan kode, revisi, dan cara pemesanan yang paling sering ditanyakan klien UMKM.
              </p>
              <div className="pt-2">
                <Link
                  href="/faq"
                  className="text-sm font-semibold text-[#3f5b1e] hover:text-[#1f2410] underline underline-offset-4 py-2 min-h-[44px] inline-flex items-center"
                >
                  Buka seluruh halaman FAQ &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion
                items={faqItems.slice(0, 4)}
                defaultOpenIds={[faqItems[0].id]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Penutup (Deep Forest Olive #1f2410) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="p-8 sm:p-16 rounded-2xl bg-[#1f2410] text-[#fafaf7] text-center">
            <span className="text-xs font-semibold text-[#d4ec8c] block mb-3 font-sans">
              Mulai Hari Ini
            </span>
            <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-heading font-medium tracking-[-0.015em] text-[#fafaf7] leading-[1.18] max-w-3xl mx-auto">
              Siap memiliki website profesional untuk usaha Anda?
            </h2>
            <p className="mt-5 text-base text-[#c7ccb8] max-w-xl mx-auto leading-relaxed">
              Pilih paket di halaman harga kami, atau konsultasikan terlebih dahulu kebutuhan usaha Anda via WhatsApp.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-[#1f2410] bg-[#d4ec8c] hover:bg-[#9cbc64] rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
              >
                Lihat Paket &amp; Harga
              </Link>
              <a
                href={waHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-[#fafaf7] bg-transparent hover:bg-[#545c2c] border border-[#fafaf7] rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
