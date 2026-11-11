import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/content/portfolio";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";

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
                Portofolio
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Portofolio dan konsep desain kami.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed">
              Berikut adalah contoh struktur dan tata letak website yang kami kembangkan untuk berbagai sektor UMKM dan bisnis jasa. Setiap desain mengedepankan kecepatan muat di HP dan kemudahan pemesanan ke WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <div
                key={item.slug}
                className="p-8 sm:p-12 rounded-3xl border border-[#E8E6DF] bg-[#FAF9F5] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-white border border-[#E8E6DF]">
                    <Image
                      src={item.image}
                      alt={`Pratinjau antarmuka ${item.title}`}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    {item.isSample && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-[#0A0A0A]/90 text-white rounded-full backdrop-blur-sm">
                        {item.sampleNote || "Proyek Konsep"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block font-sans">
                      Studi Kasus 0{index + 1} &bull; {item.businessType}
                    </span>
                    <h2 className="text-3xl font-heading font-medium text-[#0A0A0A] mt-1.5">
                      {item.title}.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.scope.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-white border border-[#E8E6DF] text-stone-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                      Fokus Implementasi:
                    </span>
                    <ul className="space-y-2 text-sm text-stone-700">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-bold text-[#0A0A0A]">&#10003;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E8E6DF]">
                    <a
                      href={buildGeneralWhatsAppUrl(`Tanya Portofolio ${item.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full transition-colors min-h-[48px]"
                    >
                      Diskusikan Desain Seperti Ini
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center max-w-xl mx-auto p-10 rounded-3xl bg-[#FAF9F5] border border-[#E8E6DF]">
            <h3 className="text-xl font-heading font-medium text-[#0A0A0A]">
              Punya contoh tampilan yang Anda sukai?
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Kirimkan tautan referensi atau tangkapan layar tampilan yang Anda inginkan ke WhatsApp kami untuk kami pelajari.
            </p>
            <a
              href={buildGeneralWhatsAppUrl("Kirim Referensi Desain")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-stone-100 transition-colors"
            >
              <span>Kirim Referensi ke WhatsApp</span>
              <span className="ml-1" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
