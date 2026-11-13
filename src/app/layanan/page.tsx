import Link from "next/link";
import { Check, ArrowUpRight, Sparkles, Clock, ArrowRight } from "lucide-react";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export default function LayananPage() {
  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* Header Halaman (Hero Foto Monitor Komputer AHPjJe1a3CA) */}
      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] overflow-hidden bg-[#1f2410] text-[#fafaf7] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1681583484651-281ae2defb17?auto=format&fit=crop&w=1600&q=80"
          alt="Monitor komputer di atas meja kerja perancangan website LOOMI Studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#1f2410]/35 bg-gradient-to-r from-[#1f2410]/95 via-[#1f2410]/85 to-[#1f2410]/55"
        />

        <div className="relative z-10 max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-[#e4e9d6]">
              <li>
                <Link href="/" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#d4ec8c]" aria-current="page">
                Layanan
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.15]">
              Layanan pembuatan website kami.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#e4e9d6] font-light leading-relaxed">
              Setiap jenis usaha memiliki kebutuhan yang berbeda. Kami menyediakan tiga pilihan terarah agar Anda mendapatkan struktur website yang tepat guna tanpa membayar fitur yang belum dibutuhkan.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Panduan Cepat: Pilih Sesuai Kebutuhan Usaha */}
      <section className="bg-white border-b border-[#c0c0b9] py-10 sm:py-14">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#545c2c] block mb-2 font-sans">
              Panduan Cepat Memilih
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#1f2410] tracking-[-0.015em]">
              Usaha Anda butuh yang mana?
            </h2>
            <p className="mt-2 text-sm text-[#5b5e4e] font-light">
              Klik salah satu kartu ringkas di bawah ini untuk langsung membaca penjelasan detailnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Quick Card 01 */}
            <a
              href="#landing-page"
              className="p-6 rounded-[2px] border border-[#c0c0b9] bg-[#fafaf7] hover:bg-white hover:border-[#1f2410] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#545c2c] mb-3">
                  <span className="font-semibold uppercase tracking-wider">01 &bull; Iklan &amp; Promo</span>
                  <span className="text-[#5b5e4e]">3-5 Hari</span>
                </div>
                <h3 className="text-xl font-heading font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
                  Landing Page
                </h3>
                <p className="text-xs sm:text-sm text-[#5b5e4e] mt-2 font-light leading-relaxed">
                  1 halaman fokus konversi iklan media sosial (Meta, TikTok, Instagram) langsung diarahkan ke chat WhatsApp.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#c0c0b9]/50 flex items-center gap-1.5 text-xs font-semibold text-[#3f5b1e] group-hover:text-[#1f2410]">
                <span>Pelajari detail</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>

            {/* Quick Card 02 (Pilihan Utama) */}
            <a
              href="#company-profile"
              className="p-6 rounded-[2px] border-2 border-[#3f5b1e] bg-white hover:bg-[#fafaf7] transition-all group flex flex-col justify-between shadow-sm relative"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-[#1f2410] bg-[#d4ec8c] px-2 py-0.5 rounded-[2px]">
                    02 &bull; Paling Banyak Dipilih
                  </span>
                  <span className="text-[#5b5e4e]">5-10 Hari</span>
                </div>
                <h3 className="text-xl font-heading font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
                  Company Profile
                </h3>
                <p className="text-xs sm:text-sm text-[#5b5e4e] mt-2 font-light leading-relaxed">
                  Hingga 5 halaman profil resmi untuk membangun reputasi usaha, SEO pencarian Google, dan pin Google Maps.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#c0c0b9]/50 flex items-center gap-1.5 text-xs font-semibold text-[#3f5b1e] group-hover:text-[#1f2410]">
                <span>Pelajari detail</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>

            {/* Quick Card 03 */}
            <a
              href="#toko-whatsapp"
              className="p-6 rounded-[2px] border border-[#c0c0b9] bg-[#fafaf7] hover:bg-white hover:border-[#1f2410] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#545c2c] mb-3">
                  <span className="font-semibold uppercase tracking-wider">03 &bull; Etalase Produk</span>
                  <span className="text-[#5b5e4e]">7-14 Hari</span>
                </div>
                <h3 className="text-xl font-heading font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
                  Katalog Toko WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-[#5b5e4e] mt-2 font-light leading-relaxed">
                  Etalase 20 produk mebel, kerajinan, atau kuliner di HP dengan tombol rangkum order otomatis ke WhatsApp.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#c0c0b9]/50 flex items-center gap-1.5 text-xs font-semibold text-[#3f5b1e] group-hover:text-[#1f2410]">
                <span>Pelajari detail</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Rincian Informasi Tiap Layanan */}
      <div className="bg-[#fafaf7]">
        {/* Layanan 01: Landing Page Promosi */}
        <section id="landing-page" className="scroll-mt-24 py-16 lg:py-20 border-b border-[#c0c0b9] bg-white">
          <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="max-w-3xl mb-10">
              <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                <span className="font-semibold uppercase tracking-wider text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                  Layanan 01 &bull; Iklan &amp; Promosi
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                  <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                  <span>Estimasi 3 sampai 5 hari kerja</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.18]">
                Landing page promosi.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5b5e4e] font-light leading-relaxed">
                Website 1 halaman fokus konversi yang dirancang khusus untuk mengubah pengunjung dari iklan Meta Ads, TikTok Ads, dan Instagram Story langsung menjadi obrolan pesanan di WhatsApp tanpa menu berbelit.
              </p>
            </div>

            {/* 3 Kolom Penjelasan Lugas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#c0c0b9]/70">
              {/* Kolom 1: Cocok Untuk */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#545c2c] block font-sans">
                  Cocok untuk Anda jika:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Mempromosikan 1 produk atau penawaran unggulan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Sedang menjalankan iklan berbayar di media sosial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Menjual jasa yang membutuhkan respon chat cepat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Ingin alur pesan ringkas tanpa menu bercabang</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 2: Yang Dikerjakan */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Yang kami kerjakan:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>1 halaman fokus konversi (panjang terukur)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Struktur susunan copywriting penawaran jelas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Desain ringan dan sangat cepat dibuka di HP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Integrasi Meta Pixel dan Google Analytics</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Ketentuan & Garansi */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Ketentuan &amp; Garansi:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Waktu pengerjaan 3 sampai 5 hari kerja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Termasuk 2 kali sesi revisi desain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Domain dan hosting tahun pertama aktif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Bebas biaya sewa server bulanan selamanya</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aksi & Tautan Menu Paket */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#5b5e4e] font-light">
                Rincian biaya paket, opsi add-on, dan formulir pemesanan dapat Anda lihat di menu Paket &amp; Harga.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-medium bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center gap-2"
                >
                  <span>Lihat Harga di Menu Paket</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href={buildGeneralWhatsAppUrl("Tanya Layanan Landing Page")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#fafaf7] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan 02: Company Profile Bisnis (Sorotan Utama) */}
        <section id="company-profile" className="scroll-mt-24 py-16 lg:py-20 border-b border-[#c0c0b9] bg-[#fafaf7] relative">
          <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="max-w-3xl mb-10">
              <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                <span className="inline-flex items-center gap-1.5 font-semibold tracking-[0.04em] text-[#1f2410] bg-[#d4ec8c] px-3 py-1 rounded-[2px] border border-[#3f5b1e]/30">
                  <Sparkles className="size-3 text-[#3f5b1e]" aria-hidden="true" />
                  <span>Paling Banyak Dipilih UMKM</span>
                </span>
                <span className="font-semibold uppercase tracking-wider text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                  Layanan 02
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-white px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                  <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                  <span>Estimasi 5 sampai 10 hari kerja</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.18]">
                Company profile bisnis.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5b5e4e] font-light leading-relaxed">
                Website resmi multi-halaman untuk membangun reputasi usaha, menampilkan galeri layanan atau portofolio, dan memudahkan calon pelanggan menemukan profil serta lokasi bisnis Anda di Google Search dan Google Maps.
              </p>
            </div>

            {/* 3 Kolom Penjelasan Lugas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#c0c0b9]/70 bg-white/70 p-6 sm:p-8 rounded-[2px] border border-[#c0c0b9]">
              {/* Kolom 1: Cocok Untuk */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#545c2c] block font-sans">
                  Cocok untuk Anda jika:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Klinik, bengkel, konsultan, kontraktor interior, mebel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Butuh website resmi untuk meyakinkan calon klien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Ingin mudah ditemukan lewat Google Search dan Maps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Memiliki beberapa layanan yang butuh halaman terpisah</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 2: Yang Dikerjakan */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Yang kami kerjakan:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Hingga 5 halaman terstruktur (Beranda, Profil, Layanan, Kontak)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>SEO Google teknis dan Schema JSON-LD lengkap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Integrasi Google Maps dan jam operasional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Galeri showcase foto proyek dan tautan WhatsApp resmi</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Ketentuan & Garansi */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Ketentuan &amp; Garansi:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Waktu pengerjaan 5 sampai 10 hari kerja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Termasuk 3 kali sesi revisi desain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Hak milik kode sumber penuh tanpa sistem sewa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Panduan mandiri pembaruan konten website</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aksi & Tautan Menu Paket */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#5b5e4e] font-light">
                Rincian biaya paket, opsi add-on, dan formulir pemesanan dapat Anda lihat di menu Paket &amp; Harga.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-semibold bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Lihat Harga di Menu Paket</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href={buildGeneralWhatsAppUrl("Tanya Layanan Company Profile")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#fafaf7] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan 03: Katalog Toko WhatsApp */}
        <section id="toko-whatsapp" className="scroll-mt-24 py-16 lg:py-20 border-b border-[#c0c0b9] bg-white">
          <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="max-w-3xl mb-10">
              <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                <span className="font-semibold uppercase tracking-wider text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                  Layanan 03 &bull; Etalase Produk
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                  <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                  <span>Estimasi 7 sampai 14 hari kerja</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.18]">
                Katalog toko WhatsApp.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5b5e4e] font-light leading-relaxed">
                Etalase katalog produk online yang sangat ringan di ponsel. Pengunjung dapat memilih barang, melihat varian dan foto, lalu tombol pesan langsung merangkum daftar belanja otomatis ke nomor WhatsApp admin Anda.
              </p>
            </div>

            {/* 3 Kolom Penjelasan Lugas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#c0c0b9]/70">
              {/* Kolom 1: Cocok Untuk */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#545c2c] block font-sans">
                  Cocok untuk Anda jika:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Produsen mebel jati Jepara, pengrajin kayu, fashion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Memiliki banyak produk yang sering ditanyakan di chat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Ongkir dan pembayaran lebih nyaman dikonfirmasi via WA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Tidak ingin sistem toko rumit yang memotong komisi</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 2: Yang Dikerjakan */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Yang kami kerjakan:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Input hingga 20 produk awal lengkap dengan foto dan varian</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Fitur filter kategori dan pencarian produk yang rapi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Format rincian pesanan otomatis ke nomor WhatsApp admin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Desain katalog responsif dan nyaman diakses di HP</span>
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Ketentuan & Garansi */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                  Ketentuan &amp; Garansi:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Waktu pengerjaan 7 sampai 14 hari kerja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Termasuk 2 kali sesi revisi tata letak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Bebas biaya komisi penjualan per transaksi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                    <span>Panduan pembaruan produk mandiri lewat HP</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aksi & Tautan Menu Paket */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#5b5e4e] font-light">
                Rincian biaya paket, opsi add-on, dan formulir pemesanan dapat Anda lihat di menu Paket &amp; Harga.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-medium bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center gap-2"
                >
                  <span>Lihat Harga di Menu Paket</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </Link>
                <a
                  href={buildGeneralWhatsAppUrl("Tanya Layanan Toko WhatsApp")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#fafaf7] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Banner Konsultasi Bawah */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="rounded-[2px] border border-[#3f4620]/30 bg-[#1f2410] text-[#fafaf7] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4ec8c]">
                Masih Ragu Memilih?
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white">
                Konsultasikan ide usaha Anda langsung ke desainer kami.
              </h3>
              <p className="text-sm text-[#e4e9d6] font-light">
                Ceritakan jenis produk atau jasa Anda via WhatsApp. Kami bantu rekomendasikan format website yang paling hemat dan tepat guna.
              </p>
            </div>
            <a
              href={buildGeneralWhatsAppUrl("Konsultasi Halaman Layanan")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-[2px] text-sm font-semibold bg-[#d4ec8c] hover:bg-[#ddf327] text-[#1f2410] transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 shrink-0 shadow-sm"
            >
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
