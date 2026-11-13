import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
            priorityFirst
          />
        </div>
      </section>

      {/* Ajakan Konsultasi Referensi (Card Interaktif Bernuansa Hidup & Arsitektural) */}
      <section className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2px] border border-[#3f4620]/30 bg-[#1f2410] text-[#fafaf7] p-8 sm:p-12 lg:p-14">
            {/* Latar Aksen Geometris Halus */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4ec8c]/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#3f5b1e]/20 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#d4ec8c]/15 border border-[#d4ec8c]/30 px-3 py-1 rounded-[2px] text-xs font-medium tracking-[0.04em] uppercase text-[#d4ec8c]">
                  <span className="w-1.5 h-1.5 bg-[#ddf327] inline-block shrink-0" aria-hidden="true" />
                  <span>Konsultasi Referensi Bebas</span>
                </div>

                <h3 className="text-[26px] sm:text-3xl lg:text-[36px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.2]">
                  Punya contoh tampilan yang Anda sukai?
                </h3>

                <p className="text-base sm:text-lg text-[#e4e9d6] font-light leading-relaxed max-w-xl">
                  Kirimkan tautan website, postingan media sosial, atau tangkapan layar tampilan yang Anda inginkan. Kami pelajari alur rancangannya dan hitungkan estimasi biayanya secara transparan.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-[#fafaf7]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/10 border border-white/15">
                    <span className="text-[#ddf327] font-bold" aria-hidden="true">&#10003;</span>
                    Screenshot HP atau Medsos
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/10 border border-white/15">
                    <span className="text-[#ddf327] font-bold" aria-hidden="true">&#10003;</span>
                    Tautan Website Inspirasi
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/10 border border-white/15">
                    <span className="text-[#ddf327] font-bold" aria-hidden="true">&#10003;</span>
                    Gratis Diskusi &amp; Tanpa Komitmen
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center lg:items-end">
                <div className="w-full max-w-sm rounded-[2px] border border-white/15 bg-white/5 p-6 backdrop-blur-sm space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#d4ec8c]">
                      Obrolan Langsung
                    </span>
                    <p className="text-sm text-[#e4e9d6] font-light">
                      Ceritakan kebutuhan bisnis Anda langsung ke desainer LOOMI Studio.
                    </p>
                  </div>

                  <a
                    href={buildGeneralWhatsAppUrl("Kirim Referensi Desain")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#1f2410] bg-[#d4ec8c] hover:bg-[#ddf327] rounded-[2px] transition-colors min-h-[48px] shadow-sm font-sans"
                  >
                    <span>Kirim Referensi ke WhatsApp</span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </a>

                  <p className="text-[11px] text-[#c7ccb8] text-center">
                    Biasanya dibalas dalam hitungan menit pada jam kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
