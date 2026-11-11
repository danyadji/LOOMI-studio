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
                Proses Kerja
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Alur kerja pembuatan website kami.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed">
              Kami menyederhanakan alur pembuatan website agar Anda tidak dipusingkan oleh urusan teknis server atau koding. Berikut adalah tahapan pengerjaan dari konsultasi hingga peluncuran.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="relative border-l-2 border-[#E8E6DF] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Marker Lingkaran Angka */}
                <div className="absolute -left-[49px] sm:-left-[65px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0A] text-white font-medium text-xs sm:text-sm flex items-center justify-center ring-4 ring-white shadow-sm font-heading">
                  0{step.step}
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-[#E8E6DF]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A]">
                      {step.title}.
                    </h2>
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-[#E8E6DF] text-stone-700 rounded-full self-start sm:self-auto">
                      Estimasi: {step.duration}
                    </span>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E8E6DF]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-3 font-sans">
                      Hasil &amp; Output Tahap Ini:
                    </span>
                    <ul className="space-y-2 text-sm text-stone-700">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-bold text-[#0A0A0A]">&bull;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-[#0C0C0C] text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-medium">
              Siap memulai langkah pertama?
            </h3>
            <p className="mt-3 text-sm text-stone-300 max-w-md mx-auto">
              Pilih paket Anda atau hubungi kami di WhatsApp untuk obrolan awal tanpa komitmen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/paket"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-white text-[#0A0A0A] rounded-full hover:bg-stone-100 transition-colors min-h-[48px] flex items-center justify-center"
              >
                Lihat Paket &amp; Harga
              </Link>
              <a
                href={buildGeneralWhatsAppUrl("Halaman Proses")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-stone-800 hover:bg-stone-700 border border-stone-700 text-white rounded-full transition-colors min-h-[48px] flex items-center justify-center"
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
