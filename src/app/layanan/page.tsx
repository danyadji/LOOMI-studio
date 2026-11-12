import Link from "next/link";
import { formatRupiah } from "@/lib/whatsapp";
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

      {/* Header Halaman */}
      <div className="bg-[#fafaf7] border-b border-[#c0c0b9] py-16 lg:py-24">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-[#5b5e4e]">
              <li>
                <Link href="/" className="hover:text-[#1f2410]">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#545c2c]" aria-current="page">
                Layanan
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.15]">
              Layanan pembuatan website kami.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] leading-relaxed">
              Setiap jenis usaha memiliki kebutuhan yang berbeda. Kami menyediakan tiga layanan terarah agar Anda mendapatkan struktur website yang tepat guna tanpa biaya berlebihan.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 space-y-12 lg:space-y-16">
          {/* Layanan 1: Landing Page */}
          <section id="landing-page" className="p-6 sm:p-12 rounded-2xl border border-[#c0c0b9] bg-[#fafaf7]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-medium text-[#5b5e4e]">
                  Layanan 01 &bull; Iklan &amp; Promo
                </span>
                <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                  Landing page promosi.
                </h2>
                <p className="text-base text-[#5b5e4e] leading-relaxed">
                  Halaman tunggal yang didesain secara spesifik untuk mengonversi pengunjung dari Meta Ads, TikTok Ads, atau tautan Instagram Story langsung menjadi obrolan WhatsApp.
                </p>

                <div className="p-5 rounded-xl bg-white border border-[#c0c0b9] text-sm">
                  <strong className="text-[#1f2410] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-[#5b5e4e]">
                    UMKM yang mempromosikan satu produk unggulan, penawaran musiman, pendaftaran kegiatan, atau jasa khusus yang membutuhkan respon chat langsung tanpa menu bercabang.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#545c2c] block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1f2410]">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Struktur copywriting fokus pesan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Desain responsif layar HP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Integrasi Meta Pixel &amp; GA4</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Estimasi 3 sampai 5 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#c0c0b9] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#5b5e4e] font-medium">Investasi mulai dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#545c2c] mt-2 tracking-[-0.015em]">
                    {formatRupiah(750000)}
                  </div>
                  <p className="text-xs text-[#5b5e4e] mt-2">
                    Termasuk 2 kali sesi revisi dan tautan WhatsApp terformat.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#c0c0b9] flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket#comparePlansSection"
                    className="w-full py-3 px-6 rounded-full text-xs font-medium text-[#545c2c] border border-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Bandingkan dengan Paket Lain
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 2: Company Profile (Sorotan Utama) */}
          <section id="company-profile" className="p-6 sm:p-12 rounded-2xl border border-[#545c2c] bg-white ring-1 ring-[#545c2c]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#d4ec8c] text-[#1f2410]">
                  Layanan 02 &bull; Pilihan Utama
                </span>
                <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                  Company profile bisnis.
                </h2>
                <p className="text-base text-[#5b5e4e] leading-relaxed">
                  Website lengkap hingga 5 halaman memuat profil usaha, layanan, portofolio, alur kerja, dan kontak resmi agar bisnis lebih dipercaya oleh mitra maupun pencarian Google.
                </p>

                <div className="p-5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] text-sm">
                  <strong className="text-[#1f2410] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-[#5b5e4e]">
                    Klinik, bengkel, konsultan, kontraktor bangunan/interior, produsen mebel Jepara, dan bisnis jasa yang membutuhkan identitas daring resmi.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#545c2c] block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1f2410]">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>5 Halaman Terstruktur Rapi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>SEO Teknis &amp; Data Terstruktur JSON-LD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Integrasi Google Maps &amp; Jam Buka</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Estimasi 5 sampai 10 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#d4ec8c]/35 border border-[#545c2c]/30 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#3d431e] font-medium">Investasi mulai dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#1f2410] mt-2 tracking-[-0.015em]">
                    {formatRupiah(1500000)}
                  </div>
                  <p className="text-xs text-[#3d431e] mt-2">
                    Termasuk 3 kali sesi revisi, optimasi Google, dan kode sumber penuh.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#545c2c]/25 flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket#comparePlansSection"
                    className="w-full py-3 px-6 rounded-full text-xs font-medium text-[#1f2410] bg-white border border-[#545c2c] hover:bg-[#d4ec8c] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Bandingkan dengan Paket Lain
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 3: Toko WhatsApp */}
          <section id="toko-whatsapp" className="p-6 sm:p-12 rounded-2xl border border-[#c0c0b9] bg-[#fafaf7]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-medium text-[#5b5e4e]">
                  Layanan 03 &bull; Etalase Produk
                </span>
                <h2 className="text-[28px] lg:text-[36px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.2]">
                  Katalog toko WhatsApp.
                </h2>
                <p className="text-base text-[#5b5e4e] leading-relaxed">
                  Etalase katalog online ringan di layar HP. Pengunjung memilih produk, harga, dan varian, lalu tombol beli langsung merangkum pesan pesanan ke WhatsApp admin Anda.
                </p>

                <div className="p-5 rounded-xl bg-white border border-[#c0c0b9] text-sm">
                  <strong className="text-[#1f2410] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-[#5b5e4e]">
                    Pengrajin mebel Jepara, toko kerajinan, konveksi lokal, usaha kuliner, serta penjual yang menangani ongkos kirim dan pembayaran melalui chat WhatsApp.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#545c2c] block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1f2410]">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Input hingga 20 produk awal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Filter kategori produk praktis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Format rincian order otomatis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                      <span>Estimasi 7 sampai 14 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-[#c0c0b9] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-[#5b5e4e] font-medium">Investasi mulai dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#545c2c] mt-2 tracking-[-0.015em]">
                    {formatRupiah(2250000)}
                  </div>
                  <p className="text-xs text-[#5b5e4e] mt-2">
                    Termasuk input 20 produk awal dan panduan pembaruan data mandiri.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#c0c0b9] flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket#comparePlansSection"
                    className="w-full py-3 px-6 rounded-full text-xs font-medium text-[#545c2c] border border-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Bandingkan dengan Paket Lain
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
