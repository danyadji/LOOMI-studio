import Link from "next/link";
import { packages } from "@/content/packages";
import { processSteps } from "@/content/process";
import { faqItems } from "@/content/faq";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getOrganizationJsonLd } from "@/lib/seo";
import PackageCard from "@/components/PackageCard";
import CarouselStacked from "@/components/ui/carousel-07";

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

      {/* 1. Hero Section ala Referensi Forest Admin (Hijau #3f5b1e di belakang Floating Navbar) */}
      <section className="relative z-0 -mt-[78px] sm:-mt-[82px] pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#3f5b1e] text-[#fafaf7] border-b border-[#2f4516] overflow-hidden">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Kolom Kiri: Kicker, Headline Highlighter, Deskripsi & 2 Tombol Persegi */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.06em] uppercase text-[#d4ec8c]">
                <span className="w-2 h-2 bg-[#d4ec8c] inline-block shrink-0" aria-hidden="true" />
                <span>Website Praktis UMKM Indonesia</span>
              </div>

              <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-heading font-medium tracking-[-0.015em] text-[#ffffff] leading-[1.15]">
                Anda bawa{" "}
                <span className="bg-[#d4ec8c] text-[#1f2410] px-2.5 py-0.5 inline-block">
                  ide usaha
                </span>
                .{" "}
                <br className="hidden sm:inline" />
                Kami bangun{" "}
                <span className="bg-[#d4ec8c] text-[#1f2410] px-2.5 py-0.5 inline-block mt-1.5 sm:mt-2">
                  websitenya.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#e4e9d6] leading-relaxed max-w-lg">
                Website cepat, berkarakter, dan langsung terhubung ke obrolan WhatsApp bisnis Anda. Tanpa kerumitan koding, tanpa database server, dan tanpa biaya langganan bulanan.
              </p>

              {/* CTA Persegi ala Referensi Screenshot */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/paket"
                  className="px-7 py-3.5 text-sm font-medium text-[#1f2410] bg-[#ffffff] hover:bg-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pilih Paket Pembuatan
                </Link>

                <Link
                  href="/portofolio"
                  className="px-7 py-3.5 text-sm font-medium text-[#fafaf7] bg-transparent hover:bg-[#2f4516] border border-[#c7ccb8] hover:border-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Lihat Portofolio
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Slot Aset Visual (R-23 Placeholder sampai gambar final diupload) */}
            {/* TODO (R-23): Ganti blok placeholder ini dengan komponen <Image /> dari aset yang diupload user */}
            <div className="lg:col-span-6 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[5/4] w-full rounded-[4px] bg-[#334a18] border border-[#545c2c] p-3 sm:p-4 overflow-hidden">
                {/* Komposisi Mosaik Geometris Limau & Zaitun mengikuti siluet referensi */}
                <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-1.5" aria-hidden="true">
                  <div className="col-span-3 row-span-1 bg-[#d4ec8c]" />
                  <div className="col-span-1 row-span-1 bg-[#9cbc64]" />

                  <div className="col-span-1 row-span-1 bg-[#d4ec8c]" />
                  <div className="col-span-1 row-span-1 bg-[#3f5b1e]" />
                  <div className="col-span-2 row-span-1 bg-[#d4ec8c]" />

                  <div className="col-span-1 row-span-1 bg-[#8fa65b]" />
                  <div className="col-span-1 row-span-1 bg-[#d4ec8c]" />
                  <div className="col-span-1 row-span-1 bg-[#3f5b1e]" />
                  <div className="col-span-1 row-span-1 bg-[#d4ec8c]" />

                  <div className="col-span-2 row-span-1 bg-[#d4ec8c]" />
                  <div className="col-span-1 row-span-1 bg-[#3f5b1e]" />
                  <div className="col-span-1 row-span-1 bg-[#9cbc64]" />
                </div>

                {/* Label Placeholder Jujur (R-23 & R-38) */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-2 bg-white/95 border border-[#c0c0b9] px-3.5 py-2 rounded-[2px]">
                  <span className="text-xs font-medium text-[#1f2410]">
                    [Slot Aset Visual Hero]
                  </span>
                  <span className="text-[11px] font-medium text-[#545c2c]">
                    Siap diganti gambar Anda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1B. Showcase Interaktif Stacked Carousel (Edge-to-Edge di bawah Hero) */}
      <section className="py-14 lg:py-20 bg-[#fafaf7] border-b border-[#c0c0b9] overflow-hidden">
        <div className="w-full overflow-hidden">
          <div className="text-center mb-2 px-6">
            <span className="text-xs text-[#5b5e4e] font-sans font-medium">
              Contoh konsep desain per sektor UMKM (geser ke kiri atau kanan)
            </span>
          </div>
          <CarouselStacked />
        </div>
      </section>

      {/* 2. Feature Trio (3 Kolom dengan Penekanan Visual Hierarki #d4ec8c sesuai R-14 & R-37) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Pendekatan Kami
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
              Dibangun untuk cara UMKM Indonesia berjualan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kartu Utama (Surface Raised #d4ec8c sebagai focal point keunggulan konversi) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#d4ec8c] border border-[#545c2c]/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#545c2c] text-white flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  Pemesanan langsung ke WhatsApp.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#1f2410] leading-relaxed">
                  Calon pembeli tidak dipaksa membuat akun atau mengisi keranjang rumit. Pilihan produk atau layanan mereka langsung tersusun menjadi pesan chat ke nomor admin Anda.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#545c2c]/25 text-xs font-semibold text-[#3d431e]">
                Fokus Utama: Konversi Chat
              </div>
            </div>

            {/* Kartu Pendukung 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#c0c0b9] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] text-[#545c2c] flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  Ringan dibuka lewat HP 4G.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5b5e4e] leading-relaxed">
                  Website diekspor sebagai halaman statis murni tanpa kueri database berat, sehingga pelanggan di luar kota tetap dapat membuka katalog gambar dengan nyaman.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c0c0b9] text-xs font-medium text-[#5b5e4e]">
                Arsitektur Statis Next.js
              </div>
            </div>

            {/* Kartu Pendukung 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#c0c0b9] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] text-[#545c2c] flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-[22px] lg:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  Kode sumber utuh milik Anda.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5b5e4e] leading-relaxed">
                  Tidak ada sistem sewa bulanan yang mengunci website Anda. Setelah pelunasan, seluruh arsip kode dan aset desain diserahkan penuh ke pihak usaha Anda.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c0c0b9] text-xs font-medium text-[#5b5e4e]">
                Tanpa Biaya Langganan Studio
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
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
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
      <section className="py-16 lg:py-24 bg-[#fafaf7] border-b border-[#c0c0b9]">
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
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#c0c0b9] flex flex-col justify-between"
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
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
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
      <section className="py-16 lg:py-24 bg-[#fafaf7]">
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
