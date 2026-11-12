import Link from "next/link";
import { portfolioItems } from "@/content/portfolio";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";

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

      {/* Ringkasan 3 Kartu NotchedProjectCard */}
      <div className="py-16 lg:py-24 bg-white border-b border-[#c0c0b9]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#545c2c] block mb-2 font-sans">
              Ringkasan Sektor
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
              Pilih contoh konsep untuk melihat detailnya.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {portfolioItems.map((item, idx) => (
              <NotchedProjectCard
                key={item.slug}
                href={`#${item.slug}`}
                title={`${item.title}.`}
                description={item.businessType}
                image={item.image}
                imageAlt={`Ilustrasi sektor usaha ${item.title}`}
                badge={item.isSample ? "Proyek Konsep Desain LOOMI" : item.businessType}
                tags={item.scope}
                surface="#ffffff"
                accent="#3f5b1e"
                accentForeground="#ffffff"
                priority={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rincian Studi Kasus per Sektor */}
      <div className="py-16 lg:py-24 bg-[#fafaf7]">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-10 lg:space-y-14">
            {portfolioItems.map((item, index) => (
              <section
                id={item.slug}
                key={item.slug}
                className="scroll-mt-28 p-6 sm:p-10 rounded-2xl border border-[#c0c0b9] bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1f2410] border border-[#c0c0b9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={`Pratinjau konsep desain ${item.title}`}
                      width={900}
                      height={560}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {item.isSample && (
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-[#1f2410]/90 text-[#fafaf7] rounded-full border border-[#d4ec8c]/40">
                        {item.sampleNote || "Proyek Konsep"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <span className="text-xs font-medium text-[#5b5e4e] block font-sans">
                      Konsep 0{index + 1} &bull; {item.businessType}
                    </span>
                    <h2 className="text-[28px] lg:text-[36px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em] mt-1.5">
                      {item.title}.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.scope.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-[#fafaf7] border border-[#c0c0b9] text-[#545c2c] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-[#545c2c] block">
                      Fokus Implementasi:
                    </span>
                    <ul className="space-y-2 text-sm text-[#1f2410]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-bold text-[#545c2c]" aria-hidden="true">&#10003;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#c0c0b9]">
                    <a
                      href={buildGeneralWhatsAppUrl(`Tanya Portofolio ${item.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 text-sm font-medium text-white bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] rounded-[2px] transition-colors min-h-[48px]"
                    >
                      Diskusikan Desain Seperti Ini
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-white border border-[#c0c0b9]">
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
      </div>
    </>
  );
}
