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
                Portofolio
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.15]">
              Portofolio dan konsep desain kami.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] leading-relaxed">
              Berikut adalah contoh struktur dan tata letak website yang kami rancang untuk berbagai sektor UMKM dan bisnis jasa. Setiap konsep memprioritaskan keterbacaan di HP serta jalur pesan cepat ke WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <PortfolioPageClient items={portfolioItems} />
    </>
  );
}
