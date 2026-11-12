import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export default function KontakPage() {
  const waContactUrl = buildGeneralWhatsAppUrl("Halaman Kontak Resmi");

  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Kontak", url: "/kontak" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <section className="relative z-0 -mt-[76px] sm:-mt-[80px] min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#1f2410] text-[#fafaf7] pt-32 pb-16 sm:pt-36 sm:pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
          alt="Konsultasi pembuatan website menggunakan laptop di LOOMI Studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#1f2410]/35 bg-gradient-to-r from-[#1f2410]/95 via-[#1f2410]/85 to-[#1f2410]/65"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1f2410] to-transparent"
        />

        <div className="relative z-10 max-w-[1224px] w-full mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Kolom Kiri: Headline & Aksi Utama */}
            <div className="lg:col-span-6 space-y-6">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-xs text-[#e4e9d6]">
                  <li>
                    <Link href="/" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                      Beranda
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="font-semibold text-[#d4ec8c]" aria-current="page">
                    Kontak
                  </li>
                </ol>
              </nav>

              <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-heading font-medium tracking-[-0.02em] text-[#ffffff] leading-[1.12]">
                Hubungi Loomi Studio.
              </h1>

              <p className="text-base sm:text-lg text-[#e4e9d6] font-light leading-relaxed max-w-xl">
                Kami siap membantu mewujudkan website yang fungsional untuk bisnis Anda. Mulai obrolan langsung lewat WhatsApp atau kirim detail kebutuhan melalui surel resmi kami.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-sm font-medium text-[#1f2410] bg-[#ddf327] hover:bg-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center gap-2"
                >
                  <span>Chat WhatsApp Sekarang</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
                <Link
                  href="/paket"
                  className="px-7 py-3.5 text-sm font-medium text-[#fafaf7] bg-[#1f2410]/50 hover:bg-[#1f2410]/80 border border-[#c7ccb8] hover:border-[#d4ec8c] rounded-[2px] transition-colors min-h-[48px] inline-flex items-center justify-center"
                >
                  Lihat Paket &amp; Harga
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Satu Panel Informasi Kontak Terpadu */}
            <div className="lg:col-span-6">
              <div className="bg-[#fafaf7] text-[#1f2410] border border-[#c0c0b9] rounded-[2px] p-6 sm:p-9 shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-[#f5f4f0] px-2.5 py-1 rounded-[2px] text-[11px] font-medium tracking-[0.06em] uppercase text-[#5b5e4e]">
                  <span className="w-1.5 h-1.5 bg-[#3f5b1e] inline-block shrink-0" aria-hidden="true" />
                  <span>Kanal Komunikasi Resmi</span>
                </div>

                <div className="mt-5 divide-y divide-[#e6e4dc]">
                  {/* WhatsApp */}
                  <a
                    href={waContactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-4 flex items-start justify-between gap-4 min-h-[48px]"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[2px] bg-[#d4ec8c] text-[#1f2410]">
                        <MessageCircle className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <span className="block text-xs font-medium text-[#5b5e4e]">
                          WhatsApp Resmi ({siteConfig.replyHours})
                        </span>
                        <span className="mt-0.5 block font-heading text-lg font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
                          +{siteConfig.whatsappNumber}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-[#5b5e4e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#3f5b1e]"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group py-4 flex items-start justify-between gap-4 min-h-[48px]"
                  >
                    <div className="flex items-start gap-3.5 min-w-0">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[2px] bg-[#f5f4f0] text-[#3f5b1e]">
                        <Mail className="size-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs font-medium text-[#5b5e4e]">
                          Email Penawaran &amp; Kerja Sama
                        </span>
                        <span className="mt-0.5 block font-heading text-base sm:text-lg font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors break-all">
                          {siteConfig.email}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-[#5b5e4e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#3f5b1e]"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-4 flex items-start justify-between gap-4 min-h-[48px]"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[2px] bg-[#f5f4f0] text-[#3f5b1e] text-xs font-semibold">
                        IG
                      </span>
                      <div>
                        <span className="block text-xs font-medium text-[#5b5e4e]">
                          Instagram Resmi
                        </span>
                        <span className="mt-0.5 block font-heading text-base sm:text-lg font-medium text-[#1f2410] group-hover:text-[#3f5b1e] transition-colors">
                          @loomi.studio
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-[#5b5e4e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#3f5b1e]"
                      aria-hidden="true"
                    />
                  </a>

                  {/* Lokasi */}
                  <div className="py-4 flex items-start gap-3.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[2px] bg-[#f5f4f0] text-[#3f5b1e]">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-medium text-[#5b5e4e]">
                        Lokasi
                      </span>
                      <span className="mt-0.5 block font-heading text-base sm:text-lg font-medium text-[#1f2410]">
                        {siteConfig.address}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 pt-4 border-t border-dashed border-[#c0c0b9] text-xs text-[#5b5e4e] font-light leading-relaxed">
                  Konsultasi daring via WhatsApp atau Google Meet fleksibel sesuai jadwal Anda, tanpa komitmen di muka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
