import Link from "next/link";
import { Check, ArrowUpRight, Sparkles, Clock } from "lucide-react";
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
              Setiap jenis usaha memiliki kebutuhan yang berbeda. Kami menyediakan tiga layanan terarah agar Anda mendapatkan struktur website yang tepat guna tanpa biaya berlebihan.
            </p>
          </div>
        </div>
      </section>

      {/* Daftar Layanan Utama LOOMI Studio */}
      <div className="py-14 sm:py-20 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 space-y-10 lg:space-y-14">
          {/* Layanan 01: Landing Page Promosi */}
          <section
            id="landing-page"
            className="scroll-mt-28 rounded-[2px] border border-[#c0c0b9] bg-white p-6 sm:p-10 lg:p-12 transition-all hover:border-[#838775]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold tracking-[0.05em] uppercase text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                    Layanan 01 &bull; Iklan &amp; Promo
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                    <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                    <span>3-5 hari kerja</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-[26px] sm:text-3xl lg:text-[34px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                    Landing page promosi.
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
                    Halaman tunggal yang didesain secara spesifik untuk mengonversi pengunjung iklan Meta Ads, TikTok Ads, dan Instagram Story langsung menjadi obrolan WhatsApp bisnis Anda.
                  </p>
                </div>

                <div className="rounded-[2px] border-l-2 border-[#545c2c] bg-[#f5f4f0] p-4 text-xs sm:text-sm">
                  <strong className="text-[#1f2410] block mb-1 font-medium">Cocok untuk:</strong>
                  <p className="text-[#5b5e4e] font-light leading-relaxed">
                    UMKM dengan satu produk unggulan, penawaran promo musiman, pendaftaran acara, atau jasa khusus yang membutuhkan respon chat cepat tanpa menu bercabang.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block mb-3 font-sans">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1f2410]">
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Struktur copywriting fokus closing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Desain ringan di layar HP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Integrasi Meta Pixel &amp; Google Analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Tombol WhatsApp langsung terformat</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[2px] border border-[#c0c0b9] bg-[#fafaf7] p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                      Spesifikasi &amp; Garansi
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-medium text-[#1f2410] mt-1">
                      Informasi Paket Pembuatan
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#5b5e4e]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>1 halaman fokus konversi cepat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Termasuk 2 kali sesi revisi desain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Domain &amp; hosting tahun pertama aktif</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Tanpa biaya langganan server bulanan</span>
                    </li>
                  </ul>

                  <p className="text-xs text-[#5b5e4e] font-light leading-relaxed pt-2 border-t border-[#c0c0b9]/60">
                    Rincian biaya lengkap, fitur inklusif, dan formulir pemesanan tersedia di menu Paket &amp; Harga.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-[2px] text-sm font-medium bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 shadow-sm font-semibold"
                  >
                    <span>Lihat Harga di Menu Paket</span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </Link>
                  <a
                    href={buildGeneralWhatsAppUrl("Tanya Layanan Landing Page")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-[2px] text-xs sm:text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#f5f4f0] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Tanya Layanan Ini via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 02: Company Profile Bisnis (Sorotan Utama / Flagship UMKM) */}
          <section
            id="company-profile"
            className="scroll-mt-28 rounded-[2px] border-2 border-[#3f5b1e] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_6px_28px_rgba(31,36,16,0.06)] ring-2 ring-[#3f5b1e]/15 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-semibold tracking-[0.04em] text-[#1f2410] bg-[#d4ec8c] px-3 py-1 rounded-[2px] border border-[#3f5b1e]/30">
                    <Sparkles className="size-3 text-[#3f5b1e]" aria-hidden="true" />
                    <span>Paling Banyak Dipilih UMKM</span>
                  </span>
                  <span className="font-semibold tracking-[0.05em] uppercase text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                    Layanan 02
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                    <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                    <span>5-10 hari kerja</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-[26px] sm:text-3xl lg:text-[34px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                    Company profile bisnis.
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
                    Website resmi multi-halaman memuat profil usaha, daftar layanan, galeri portofolio, dan kontak terpadu agar bisnis Anda tampil tepercaya di mata mitra serta mudah ditemukan di pencarian Google.
                  </p>
                </div>

                <div className="rounded-[2px] border-l-2 border-[#3f5b1e] bg-[#f5f4f0] p-4 text-xs sm:text-sm">
                  <strong className="text-[#1f2410] block mb-1 font-medium">Cocok untuk:</strong>
                  <p className="text-[#5b5e4e] font-light leading-relaxed">
                    Klinik, bengkel, konsultan, kontraktor interior, produsen mebel Jepara, dan bisnis jasa profesional yang membutuhkan identitas daring resmi.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block mb-3 font-sans">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1f2410]">
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Hingga 5 halaman terstruktur rapi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>SEO Google &amp; Schema JSON-LD lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Integrasi Google Maps &amp; Jam Buka</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Hak milik kode sumber penuh &amp; panduan edit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[2px] border-2 border-[#3f5b1e] bg-[#f5f4f0] p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                      Pilihan Favorit Klien
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-medium text-[#1f2410] mt-1">
                      Informasi Paket Pembuatan
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#1f2410]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Hingga 5 halaman profil bisnis resmi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Termasuk 3 kali sesi revisi desain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Optimasi Google SEO &amp; Maps terpadu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Hak milik kode sumber penuh tanpa biaya bulanan</span>
                    </li>
                  </ul>

                  <p className="text-xs text-[#5b5e4e] font-light leading-relaxed pt-2 border-t border-[#c0c0b9]/60">
                    Rincian biaya lengkap, fitur inklusif, dan formulir pemesanan tersedia di menu Paket &amp; Harga.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-[2px] text-sm font-medium bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 shadow-sm font-semibold"
                  >
                    <span>Lihat Harga di Menu Paket</span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </Link>
                  <a
                    href={buildGeneralWhatsAppUrl("Tanya Layanan Company Profile")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-[2px] text-xs sm:text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#fafaf7] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Tanya Layanan Ini via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 03: Katalog Toko WhatsApp */}
          <section
            id="toko-whatsapp"
            className="scroll-mt-28 rounded-[2px] border border-[#c0c0b9] bg-white p-6 sm:p-10 lg:p-12 transition-all hover:border-[#838775]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold tracking-[0.05em] uppercase text-[#545c2c] bg-[#eef2e2] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/60">
                    Layanan 03 &bull; Etalase Produk
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#5b5e4e] bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] border border-[#c0c0b9]/40 font-medium">
                    <Clock className="size-3 text-[#545c2c]" aria-hidden="true" />
                    <span>7-14 hari kerja</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-[26px] sm:text-3xl lg:text-[34px] font-heading font-medium tracking-[-0.02em] text-[#1f2410] leading-[1.2]">
                    Katalog toko WhatsApp.
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-[#5b5e4e] font-light leading-relaxed">
                    Etalase belanja online ringan di layar HP. Pengunjung memilih produk, harga, dan varian, lalu tombol pesan langsung merangkum rincian order otomatis ke nomor WhatsApp admin Anda.
                  </p>
                </div>

                <div className="rounded-[2px] border-l-2 border-[#545c2c] bg-[#f5f4f0] p-4 text-xs sm:text-sm">
                  <strong className="text-[#1f2410] block mb-1 font-medium">Cocok untuk:</strong>
                  <p className="text-[#5b5e4e] font-light leading-relaxed">
                    Pengrajin mebel jati Jepara, toko kerajinan kayu, konveksi lokal, kuliner, dan pedagang yang menangani konfirmasi ongkir serta transfer pembayaran langsung via chat.
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block mb-3 font-sans">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#1f2410]">
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Input hingga 20 produk awal siap jual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Filter kategori produk praktis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Format rincian pesanan otomatis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-4 shrink-0 text-[#3f5b1e] mt-0.5" aria-hidden="true" />
                      <span>Panduan pembaruan produk mandiri</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[2px] border border-[#c0c0b9] bg-[#fafaf7] p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#545c2c] uppercase tracking-wider block font-sans">
                      Spesifikasi &amp; Garansi
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-medium text-[#1f2410] mt-1">
                      Informasi Paket Pembuatan
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#5b5e4e]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Input 20 produk awal langsung siap jual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Termasuk 2 kali sesi revisi tata letak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Bebas biaya komisi per transaksi penjualan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                      <span>Panduan pembaruan produk mandiri</span>
                    </li>
                  </ul>

                  <p className="text-xs text-[#5b5e4e] font-light leading-relaxed pt-2 border-t border-[#c0c0b9]/60">
                    Rincian biaya lengkap, fitur inklusif, dan formulir pemesanan tersedia di menu Paket &amp; Harga.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-[2px] text-sm font-medium bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-white transition-colors min-h-[48px] inline-flex items-center justify-center gap-2 shadow-sm font-semibold"
                  >
                    <span>Lihat Harga di Menu Paket</span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </Link>
                  <a
                    href={buildGeneralWhatsAppUrl("Tanya Layanan Toko WhatsApp")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-[2px] text-xs sm:text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#f5f4f0] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Tanya Layanan Ini via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
