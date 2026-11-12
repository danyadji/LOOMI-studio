import Link from "next/link";
import { processSteps } from "@/content/process";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export default function ProsesPage() {
  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Proses", url: "/proses" },
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
                Proses Kerja
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.15]">
              Alur kerja pembuatan website kami.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] leading-relaxed">
              Kami menyederhanakan alur pengerjaan website agar Anda tidak terbebani istilah teknis atau pengaturan server. Berikut tahapan lengkap dari konsultasi hingga peluncuran.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative border-l-2 border-[#c0c0b9] ml-4 sm:ml-6 pl-8 sm:pl-12 space-y-12">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Marker Lingkaran Angka */}
                <div className="absolute -left-[49px] sm:-left-[67px] top-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#545c2c] text-white font-medium text-xs sm:text-sm flex items-center justify-center ring-4 ring-white font-heading">
                  0{step.step}
                </div>

                <div className="p-6 sm:p-9 rounded-2xl bg-[#fafaf7] border border-[#c0c0b9]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h2 className="text-[22px] sm:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                      {step.title}.
                    </h2>
                    <span className="text-xs font-medium px-3 py-1 bg-[#d4ec8c] text-[#1f2410] rounded-full self-start sm:self-auto">
                      Estimasi: {step.duration}
                    </span>
                  </div>

                  <p className="text-base text-[#5b5e4e] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#c0c0b9]">
                    <span className="text-xs font-semibold text-[#545c2c] block mb-3 font-sans">
                      Hasil &amp; Output Tahap Ini:
                    </span>
                    <ul className="space-y-2 text-sm text-[#1f2410]">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-bold text-[#545c2c]" aria-hidden="true">&bull;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-14 rounded-2xl bg-[#1f2410] text-[#fafaf7] text-center">
            <h3 className="text-[22px] sm:text-[28px] font-heading font-medium text-[#fafaf7]">
              Siap memulai langkah pertama?
            </h3>
            <p className="mt-3 text-sm text-[#c7ccb8] max-w-md mx-auto">
              Pilih paket Anda atau hubungi kami via WhatsApp untuk obrolan awal tanpa komitmen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium bg-[#d4ec8c] text-[#1f2410] rounded-full hover:bg-[#9cbc64] transition-colors min-h-[48px] flex items-center justify-center"
              >
                Lihat Paket &amp; Harga
              </Link>
              <a
                href={buildGeneralWhatsAppUrl("Halaman Proses")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium bg-transparent hover:bg-[#545c2c] border border-[#fafaf7] text-[#fafaf7] rounded-full transition-colors min-h-[48px] flex items-center justify-center"
              >
                Mulai Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
