import Link from "next/link";
import Image from "next/image";
import { packages } from "@/content/packages";
import { portfolioItems } from "@/content/portfolio";
import { processSteps } from "@/content/process";
import { faqItems } from "@/content/faq";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getOrganizationJsonLd } from "@/lib/seo";
import PackageCard from "@/components/PackageCard";

export default function HomePage() {
  const waHeroUrl = buildGeneralWhatsAppUrl("Hero Beranda");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationJsonLd()),
        }}
      />

      {/* 1. Hero Section (Marquee Hero ala Epidemic Sound) */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#E8E6DF] bg-[#FAF9F5] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* H1 Besar (Sentence case with period) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-[1.08]">
              Anda bawa ide dan usaha. Kami bangun websitenya.
            </h1>

            {/* Body Deskripsi Besar */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Website cepat, berkarakter, dan langsung terhubung ke obrolan WhatsApp bisnis Anda. Tanpa kerumitan koding, tanpa database server, dan tanpa biaya langganan bulanan.
            </p>

            {/* CTA Group Pill Buttons: Mengarah ke Halaman Paket & Portofolio */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-h-[52px] inline-flex items-center justify-center"
              >
                Pilih Paket Pembuatan
              </Link>

              <Link
                href="/portofolio"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#0A0A0A] bg-white hover:bg-stone-100 border border-stone-300 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-[#0A0A0A] min-h-[52px] inline-flex items-center justify-center"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>

          {/* Strip Kartu Showcase (Marquee Strip ala Epidemic Sound) */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={item.slug}
                className="rounded-3xl border border-[#E8E6DF] bg-white overflow-hidden p-4 sm:p-5 flex flex-col justify-between hover:border-stone-400 transition-colors"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-4 border border-[#E8E6DF]">
                  <Image
                    src={item.image}
                    alt={`Pratinjau antarmuka ${item.title}`}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  {item.isSample && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold bg-[#0A0A0A]/90 text-white rounded-full backdrop-blur-sm">
                      {item.sampleNote || "Proyek Konsep"}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    Sektor 0{idx + 1} &bull; {item.businessType}
                  </span>
                  <h3 className="text-xl font-heading font-medium text-[#0A0A0A] mt-1">
                    {item.title}.
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Layanan Inti (Pola Zig-Zag ala Section 7 Epidemic Sound) */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#E8E6DF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-24 sm:space-y-32">
          {/* Header Seksi */}
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Layanan Utama
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Tiga solusi website yang dirancang untuk kebutuhan nyata bisnis Anda.
            </h2>
          </div>

          {/* Blok 1: Landing Page */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                01 &bull; Fokus Konversi Iklan
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-medium text-[#0A0A0A] leading-snug">
                Landing page promosi.
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Satu halaman khusus yang didesain untuk mengubah pengunjung dari iklan Instagram, TikTok, atau Google Ads menjadi pesan WhatsApp. Tanpa distraksi navigasi berbelit.
              </p>
              <ul className="space-y-2 text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Struktur penawaran langsung ke tombol WhatsApp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Terintegrasi pelacakan Meta Pixel dan Google Analytics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Selesai dalam 3 sampai 5 hari kerja</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Landing Page &rarr;
                </Link>
                <span className="text-sm font-semibold text-stone-700">Mulai Rp750.000</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-stone-100 border border-[#E8E6DF] p-4 sm:p-6 flex flex-col justify-between shadow-sm">
                <Image
                  src="/images/portfolio/kopi-senja.svg"
                  alt="Visual mockup Landing Page Promosi"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Blok 2: Company Profile (Inverted Zig-zag) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-stone-100 border border-[#E8E6DF] p-4 sm:p-6 flex flex-col justify-between shadow-sm">
                <Image
                  src="/images/portfolio/klinik-sehati.svg"
                  alt="Visual mockup Company Profile Bisnis"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                02 &bull; Kredibilitas Usaha Lengkap
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-medium text-[#0A0A0A] leading-snug">
                Company profile bisnis.
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Website lengkap hingga 5 halaman untuk membangun kredibilitas klinik, bengkel, biro jasa, kontraktor, dan UMKM di mata calon mitra dan pencarian Google.
              </p>
              <ul className="space-y-2 text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>5 halaman terstruktur: Beranda, Profil, Layanan, Portofolio, Kontak</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>SEO teknis lengkap dan integrasi Google Maps lokasi usaha</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>3 kali sesi revisi hingga tuntas</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Company Profile &rarr;
                </Link>
                <span className="text-sm font-semibold text-stone-700">Mulai Rp1.500.000</span>
              </div>
            </div>
          </div>

          {/* Blok 3: Toko WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                03 &bull; Etalase Produk Praktis
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-medium text-[#0A0A0A] leading-snug">
                Katalog toko WhatsApp.
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Etalase produk online yang ringan, rapi, dan cepat diakses melalui ponsel. Pengunjung dapat memilih barang dan varian, lalu rincian pesanan otomatis tersusun rapi ke obrolan WhatsApp penjual.
              </p>
              <ul className="space-y-2 text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Katalog hingga 20 produk awal dimasukkan oleh tim kami</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Format pesan rapi langsung ke WhatsApp tanpa biaya gateway</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                  <span>Panduan mudah memperbarui foto dan harga produk</span>
                </li>
              </ul>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/paket"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Pesan Toko WhatsApp &rarr;
                </Link>
                <span className="text-sm font-semibold text-stone-700">Mulai Rp2.250.000</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-stone-100 border border-[#E8E6DF] p-4 sm:p-6 flex flex-col justify-between shadow-sm">
                <Image
                  src="/images/portfolio/kayu-ukir.svg"
                  alt="Visual mockup Katalog Toko WhatsApp"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Paket & Harga (Mengarah ke Halaman Paket) */}
      <section className="py-20 sm:py-32 bg-[#FAF9F5] border-b border-[#E8E6DF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Investasi Jelas
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Paket pembuatan website kami.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600">
              Biaya transparan mulai dari awal. Anda dapat memilih paket dan add-on sesuai kebutuhan pada halaman paket kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.slug}
                pkg={pkg}
                href="/paket"
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/paket"
              className="inline-flex items-center text-sm font-semibold text-[#0A0A0A] hover:underline underline-offset-4"
            >
              <span>Lihat perbandingan fitur lengkap dan daftar add-on</span>
              <span className="ml-1" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Alur Kerja Praktis (Proses 4 Langkah) */}
      <section className="py-20 sm:py-32 bg-white border-b border-[#E8E6DF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Alur Kerja
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Cara kami bekerja bersama Anda.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#E8E6DF] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-medium text-[#0A0A0A]">
                      0{step.step}.
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-[#E8E6DF] text-stone-700 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#0A0A0A]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/proses"
              className="text-sm font-semibold text-[#0A0A0A] hover:underline underline-offset-4"
            >
              Pelajari rincian alur kerja dan deliverable lengkap &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQ (Akordeon Bersih ala Epidemic Sound) */}
      <section className="py-20 sm:py-32 bg-[#FAF9F5] border-b border-[#E8E6DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2 font-sans">
              Pertanyaan Umum
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Jawaban lugas untuk keraguan Anda.
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="p-6 sm:p-8 rounded-2xl border border-[#E8E6DF] bg-white"
              >
                <h3 className="text-lg sm:text-xl font-heading font-medium text-[#0A0A0A]">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-[#0A0A0A] hover:underline underline-offset-4"
            >
              Lihat seluruh pertanyaan dan jawaban di halaman FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA Penutup (Kontras Gelap Bold ala Epidemic Sound) */}
      <section className="py-20 sm:py-28 bg-[#FAF9F5]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="p-10 sm:p-20 rounded-3xl bg-[#0C0C0C] text-white text-center max-w-5xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-3 font-sans">
              Mulai Hari Ini
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white leading-tight">
              Siap memiliki website profesional untuk usaha Anda?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
              Kunjungi halaman paket kami untuk membandingkan fitur lengkap, atau hubungi kami langsung di WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#0A0A0A] bg-white hover:bg-stone-100 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[52px] inline-flex items-center justify-center"
              >
                Lihat Paket &amp; Harga
              </Link>
              <a
                href={buildGeneralWhatsAppUrl("CTA Akhir Halaman")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white min-h-[52px] inline-flex items-center justify-center"
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
