import Link from "next/link";
import { portfolioItems } from "@/content/portfolio";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import PortfolioPageClient from "@/components/PortfolioPageClient";

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

      <PortfolioPageClient items={portfolioItems} />
    </>
  );
}
