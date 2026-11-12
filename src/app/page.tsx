import Link from "next/link";
import { packages } from "@/content/packages";
import { portfolioItems } from "@/content/portfolio";
import { processSteps } from "@/content/process";
import { faqItems } from "@/content/faq";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getOrganizationJsonLd } from "@/lib/seo";
import PackageCard from "@/components/PackageCard";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";

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
      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] min-h-[100dvh] flex flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#3f5b1e] text-[#fafaf7] border-b border-[#2f4516] overflow-hidden">
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
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
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
                surface="#ffffff"
                accent="#3f5b1e"
                accentForeground="#ffffff"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pendekatan Kami (Referensi Desain Kartu Pertama Forest Manifesto) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-b border-[#c0c0b9]">
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
                <span className="inline-block self-start bg-[#fafaf7] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
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
                <span className="inline-block self-start bg-[#fafaf7] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
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
                <span className="inline-block self-start bg-[#fafaf7] px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e] rounded-[2px]">
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

      {/* 3. Feature Stack Zig-Zag (Tiga Solusi Layanan dengan Pratinjau Struktur Asli) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 space-y-20 lg:space-y-28">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Layanan Utama
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Tiga solusi website yang disesuaikan dengan tahap bisnis Anda.
            </h2>
          </div>

          {/* Blok 1: Landing Page Promosi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-medium text-[#5b5e4e] block">
                01. Fokus Konversi Iklan
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                Landing page promosi.
              </h3>
              <p className="text-base text-[#5b5e4e] leading-relaxed">
                Satu halaman khusus yang didesain untuk mengubah pengunjung dari iklan Instagram, TikTok, atau Google Ads menjadi obrolan WhatsApp tanpa distraksi navigasi lain.
              </p>
              <ul className="space-y-2.5 text-sm text-[#1f2410] pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Struktur penawaran langsung ke tombol WhatsApp terformat</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Terintegrasi pelacakan Meta Pixel dan Google Analytics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Selesai dalam 3 sampai 5 hari kerja</span>
                </li>
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Landing Page
                </Link>
                <span className="text-sm font-medium text-[#5b5e4e]">Mulai Rp750.000</span>
              </div>
            </div>

            {/* Pratinjau Struktur Landing Page (Pengganti Skeleton SVG) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-[#c0c0b9] p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[#c0c0b9] pb-3">
                  <span className="text-xs font-medium text-[#5b5e4e]">
                    [Contoh Struktur Landing Page]
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#d4ec8c] text-[#1f2410]">
                    1 Halaman Fokus
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] space-y-3">
                  <div className="text-xs font-semibold text-[#545c2c]">Blok Penawaran Utama</div>
                  <div className="font-heading text-xl text-[#1f2410]">Paket Hampers Kopi Roastery</div>
                  <p className="text-xs text-[#5b5e4e] leading-relaxed">
                    Berisi foto produk, rincian isi paket, harga transparan, dan tombol langsung pilih varian ke WhatsApp.
                  </p>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#545c2c] text-white text-xs font-medium">
                      Pesan via WhatsApp
                    </span>
                    <span className="text-xs text-[#5b5e4e]">Meta Pixel Terpasang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blok 2: Company Profile Bisnis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Pratinjau Struktur Company Profile */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-white border border-[#c0c0b9] p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[#c0c0b9] pb-3">
                  <span className="text-xs font-medium text-[#5b5e4e]">
                    [Contoh Struktur 5 Halaman]
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#d4ec8c] text-[#1f2410]">
                    SEO &amp; Maps Siap
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9]">
                    <div className="font-semibold text-[#545c2c]">01. Beranda &amp; Profil</div>
                    <p className="text-[#5b5e4e] mt-1">Identitas usaha dan legalitas jelas</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9]">
                    <div className="font-semibold text-[#545c2c]">02. Daftar Layanan</div>
                    <p className="text-[#5b5e4e] mt-1">Penjabaran jasa dan jadwal praktik</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9]">
                    <div className="font-semibold text-[#545c2c]">03. Galeri Proyek</div>
                    <p className="text-[#5b5e4e] mt-1">Dokumentasi hasil kerja nyata</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#d4ec8c]/60 border border-[#545c2c]/30">
                    <div className="font-semibold text-[#1f2410]">04. Kontak &amp; Peta</div>
                    <p className="text-[#1f2410] mt-1">Pin Google Maps dan WhatsApp resmi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-medium text-[#5b5e4e] block">
                02. Kredibilitas Usaha Lengkap
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                Company profile bisnis.
              </h3>
              <p className="text-base text-[#5b5e4e] leading-relaxed">
                Website lengkap hingga 5 halaman untuk membangun kredibilitas klinik, bengkel, biro jasa, kontraktor, dan UMKM di mata calon mitra maupun pencarian Google.
              </p>
              <ul className="space-y-2.5 text-sm text-[#1f2410] pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>5 halaman terstruktur: Beranda, Profil, Layanan, Portofolio, Kontak</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>SEO teknis lengkap (sitemap, robots, JSON-LD) dan Google Maps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>3 kali sesi revisi hingga tuntas</span>
                </li>
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Company Profile
                </Link>
                <span className="text-sm font-medium text-[#5b5e4e]">Mulai Rp1.500.000</span>
              </div>
            </div>
          </div>

          {/* Blok 3: Katalog Toko WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-medium text-[#5b5e4e] block">
                03. Etalase Produk Praktis
              </span>
              <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                Katalog toko WhatsApp.
              </h3>
              <p className="text-base text-[#5b5e4e] leading-relaxed">
                Etalase produk online yang ringan dan cepat diakses dari ponsel. Pelanggan dapat memilih barang beserta varian, lalu rincian pesanan otomatis terkirim rapi ke WhatsApp penjual.
              </p>
              <ul className="space-y-2.5 text-sm text-[#1f2410] pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Katalog hingga 20 produk awal dimasukkan oleh tim kami</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Format pesan rapi langsung ke WhatsApp tanpa biaya gateway</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                  <span>Panduan praktis memperbarui foto dan harga produk sendiri</span>
                </li>
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Toko WhatsApp
                </Link>
                <span className="text-sm font-medium text-[#5b5e4e]">Mulai Rp2.250.000</span>
              </div>
            </div>

            {/* Pratinjau Format Pesan WhatsApp */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-[#c0c0b9] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-[#c0c0b9] pb-3">
                  <span className="text-xs font-medium text-[#5b5e4e]">
                    [Contoh Output Pesan WhatsApp]
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#d4ec8c] text-[#1f2410]">
                    Siap Dikirim Pembeli
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] font-sans text-xs text-[#1f2410] space-y-1.5 leading-relaxed">
                  <p>Halo Admin, saya ingin memesan dari website:</p>
                  <p>* Produk: Kursi Teras Jati Natural</p>
                  <p>* Varian: Finishing Doff (2 Unit)</p>
                  <p>* Estimasi Awal: Rp2.400.000</p>
                  <p>Mohon info ketersediaan stok dan ongkos kirim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Paket & Harga (Mengarah ke Halaman Paket) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Investasi Jelas
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Paket pembuatan website kami.
            </h2>
            <p className="mt-4 text-base text-[#5b5e4e]">
              Biaya transparan sejak awal. Anda dapat memilih paket dan tambahan add-on pada halaman paket kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} href="/paket" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/paket"
              className="inline-flex items-center text-sm font-semibold text-[#545c2c] hover:text-[#1f2410] underline underline-offset-4 py-2"
            >
              <span>Lihat tabel perbandingan fitur lengkap dan daftar add-on</span>
              <span className="ml-1.5" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Alur Kerja 4 Langkah */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
                Alur Kerja
              </span>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                Cara kami bekerja bersama Anda.
              </h2>
            </div>
            <Link
              href="/proses"
              className="text-sm font-semibold text-[#545c2c] hover:text-[#1f2410] underline underline-offset-4 py-2 self-start md:self-auto"
            >
              Lihat rincian tahapan dan output &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-7 rounded-2xl bg-[#fafaf7] border border-[#c0c0b9] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-heading font-medium text-[#545c2c] tracking-[-0.015em]">
                      0{step.step}.
                    </span>
                    <span className="text-xs font-medium px-3 py-1 bg-[#d4ec8c] text-[#1f2410] rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5b5e4e] mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Ringkas (Editorial List Terbagi Garis Tipis untuk Variasi RHYTHM 2) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold text-[#545c2c] block font-sans">
                Pertanyaan Umum
              </span>
              <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                Jawaban lugas untuk keraguan Anda.
              </h2>
              <p className="text-sm text-[#5b5e4e] leading-relaxed">
                Pertanyaan seputar hosting, kepemilikan kode, revisi, dan cara pemesanan yang paling sering ditanyakan klien UMKM.
              </p>
              <div className="pt-2">
                <Link
                  href="/faq"
                  className="text-sm font-semibold text-[#545c2c] hover:text-[#1f2410] underline underline-offset-4 py-1 inline-block"
                >
                  Buka seluruh halaman FAQ
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#c0c0b9] border-t border-b border-[#c0c0b9]">
              {faqItems.slice(0, 4).map((faq) => (
                <div key={faq.id} className="py-6 sm:py-7">
                  <h3 className="text-lg sm:text-[22px] font-heading font-medium text-[#1f2410] leading-[1.25] tracking-[-0.015em]">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5b5e4e] mt-2.5 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
