import Link from "next/link";
import { portfolioItems } from "@/content/portfolio";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import PortfolioShowcaseGrid from "@/components/PortfolioShowcaseGrid";

export default function PortofolioPage() {
  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Portofolio", url: "/portofolio" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] overflow-hidden bg-[#1f2410] text-[#fafaf7] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?auto=format&fit=crop&w=1600&q=80"
          alt="Meja kerja desain dengan iMac perak untuk perancangan portofolio website"
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
                Portofolio
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.15]">
              Portofolio dan konsep desain kami.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#e4e9d6] font-light leading-relaxed">
              Berikut adalah contoh struktur dan tata letak website yang kami rancang untuk berbagai sektor UMKM dan bisnis jasa. Setiap konsep memprioritaskan keterbacaan di HP serta jalur pesan cepat ke WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Kartu Pilihan Konsep (Klik untuk Membuka Showcase Detail Multi-Foto) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Ringkasan Sektor
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
              Pilih contoh konsep untuk melihat galeri detailnya.
            </h2>
          </div>

          <PortfolioShowcaseGrid
            items={portfolioItems}
            surface="#ffffff"
            descriptionMode="businessType"
            sampleBadge="Proyek Konsep Desain LOOMI"
            priorityFirst
          />
        </div>
      </section>

      {/* Ajakan Konsultasi Referensi */}
      <section className="py-16 lg:py-20 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-white border border-[#c0c0b9]">
            <h3 className="text-[22px] font-heading font-medium text-[#1f2410] tracking-[-0.015em]">
              Punya contoh tampilan yang Anda sukai?
            </h3>
            <p className="mt-2 text-sm text-[#5b5e4e]">
              Kirimkan tautan referensi atau tangkapan layar tampilan yang Anda inginkan ke WhatsApp kami untuk kami pelajari.
            </p>
            <a
              href={buildGeneralWhatsAppUrl("Kirim Referensi Desain")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-[#545c2c] text-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] transition-colors min-h-[48px]"
            >
              Kirim Referensi ke WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
