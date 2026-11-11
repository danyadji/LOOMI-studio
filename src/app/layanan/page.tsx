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
      <div className="bg-[#FAF9F5] border-b border-[#E8E6DF] py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-stone-500">
              <li>
                <Link href="/" className="hover:text-black">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0A0A0A]" aria-current="page">
                Layanan
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Layanan pembuatan website kami.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed">
              Setiap jenis usaha memiliki karakteristik yang berbeda. Kami menyediakan tiga jenis layanan terarah agar Anda mendapatkan solusi website yang tepat sasaran tanpa biaya berlebihan.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-24">
          {/* Layanan 1: Landing Page */}
          <section id="landing-page" className="p-8 sm:p-14 rounded-3xl border border-[#E8E6DF] bg-[#FAF9F5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Layanan 01 &bull; Iklan &amp; Promo
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A]">
                  Landing page promosi.
                </h2>
                <p className="text-base text-stone-600 leading-relaxed">
                  Halaman tunggal yang didesain secara spesifik untuk mengonversi trafik pengunjung menjadi pesan WhatsApp. Cocok bagi Anda yang aktif beriklan di Meta Ads, TikTok Ads, atau membagikan link promosi di Instagram Story.
                </p>

                <div className="p-5 rounded-2xl bg-white border border-[#E8E6DF] text-sm">
                  <strong className="text-[#0A0A0A] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-stone-600">
                    UMKM yang sedang mempromosikan satu produk unggulan, penawaran promo terbatas, pendaftaran event, atau jasa khusus yang membutuhkan pesan langsung tanpa distraksi menu lain.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Struktur copywriting konversi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Desain responsif mobile</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Integrasi Meta Pixel &amp; GA4</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Waktu pengerjaan 3 sampai 5 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E8E6DF] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Investasi Mulai Dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A] mt-2">
                    {formatRupiah(750000)}
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Termasuk 2 kali sesi revisi dan integrasi tautan WhatsApp terformat.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E8E6DF] flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Bandingkan dengan Paket Lain
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 2: Company Profile */}
          <section id="company-profile" className="p-8 sm:p-14 rounded-3xl border border-[#0A0A0A] bg-white ring-1 ring-[#0A0A0A]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Layanan 02 &bull; Paling Banyak Dipilih
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A]">
                  Company profile bisnis.
                </h2>
                <p className="text-base text-stone-600 leading-relaxed">
                  Solusi lengkap hingga 5 halaman yang memuat identitas usaha, deskripsi layanan, cuplikan portofolio, proses kerja, dan informasi kontak resmi. Website ini menjadi kartu nama digital yang meningkatkan kredibilitas Anda di hadapan mitra dan calon klien.
                </p>

                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8E6DF] text-sm">
                  <strong className="text-[#0A0A0A] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-stone-600">
                    Klinik, bengkel, biro konsultan, kontraktor arsitektur/interior, usaha mebel Jepara, dan bisnis jasa yang memerlukan etalase resmi agar dipercaya oleh pelanggan baru.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>5 Halaman Terstruktur Rapi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>SEO Teknis &amp; Data Terstruktur JSON-LD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Integrasi Google Maps &amp; Profil Usaha</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Waktu pengerjaan 5 sampai 10 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF9F5] border border-[#E8E6DF] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Investasi Mulai Dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A] mt-2">
                    {formatRupiah(1500000)}
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Termasuk 3 kali sesi revisi, optimasi Google, dan kepemilikan kode sumber utuh.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E8E6DF] flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-xs font-semibold text-stone-700 bg-white border border-[#E8E6DF] hover:bg-stone-100 text-center transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Bandingkan dengan Paket Lain
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Layanan 3: Toko WhatsApp */}
          <section id="toko-whatsapp" className="p-8 sm:p-14 rounded-3xl border border-[#E8E6DF] bg-[#FAF9F5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Layanan 03 &bull; Etalase Produk
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A]">
                  Katalog toko WhatsApp.
                </h2>
                <p className="text-base text-stone-600 leading-relaxed">
                  Etalase katalog produk online yang ringan, rapi, dan cepat diakses melalui ponsel. Pengunjung dapat melihat foto produk, harga, dan varian, lalu menekan tombol beli yang langsung menyusun ringkasan pesanan ke WhatsApp Anda.
                </p>

                <div className="p-5 rounded-2xl bg-white border border-[#E8E6DF] text-sm">
                  <strong className="text-[#0A0A0A] block mb-1">Untuk siapa layanan ini cocok?</strong>
                  <p className="text-stone-600">
                    Pengrajin mebel/furniture, toko kerajinan tangan, produsen pakaian lokal, toko makanan/kuliner, dan penjual yang terbiasa melayani tanya jawab ongkir dan pembayaran langsung di WhatsApp.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                    Cakupan yang dikerjakan:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Katalog hingga 20 produk awal dimasukkan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Filter kategori produk yang mudah</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Format pesan pesanan rapi ke WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                      <span>Waktu pengerjaan 7 sampai 14 hari kerja</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E8E6DF] flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Investasi Mulai Dari</span>
                  <div className="text-3xl sm:text-4xl font-heading font-medium text-[#0A0A0A] mt-2">
                    {formatRupiah(2250000)}
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Termasuk bantuan input 20 produk awal dan panduan edit data mandiri.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E8E6DF] flex flex-col gap-3">
                  <Link
                    href="/paket"
                    className="w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white transition-colors min-h-[48px] inline-flex items-center justify-center"
                  >
                    Lihat Paket &amp; Harga
                  </Link>
                  <Link
                    href="/paket"
                    className="w-full py-3 px-6 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 text-center transition-colors min-h-[44px] flex items-center justify-center"
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
