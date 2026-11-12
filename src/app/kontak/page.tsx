import Link from "next/link";
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
                Kontak
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-medium tracking-[-0.015em] text-[#1f2410] leading-[1.15]">
              Hubungi Loomi Studio.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] leading-relaxed">
              Kami siap membantu mewujudkan website yang fungsional untuk bisnis Anda. Hubungi kami melalui kanal komunikasi resmi di bawah ini.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* WhatsApp Card (Sorotan #d4ec8c lembut) */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#545c2c] bg-[#d4ec8c]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#3d431e] block mb-4">
                  Kanal Utama &bull; Respon Cepat
                </span>
                <h2 className="text-[22px] sm:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  WhatsApp resmi.
                </h2>
                <p className="text-sm text-[#1f2410] mt-2 leading-relaxed">
                  Kanal utama untuk konsultasi cepat, pengiriman materi brief, dan konfirmasi pemesanan paket.
                </p>
                <div className="mt-6 pt-6 border-t border-[#545c2c]/25">
                  <div className="text-xl font-heading font-medium text-[#1f2410]">
                    +{siteConfig.whatsappNumber}
                  </div>
                  <div className="text-xs text-[#3d431e] mt-1">
                    Jam Respon: {siteConfig.replyHours}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#545c2c]/25">
                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] transition-colors min-h-[48px] flex items-center justify-center"
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>

            {/* Lokasi & Area Layanan */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#c0c0b9] bg-[#fafaf7] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#545c2c] block mb-4">
                  Lokasi Operasional
                </span>
                <h2 className="text-[22px] sm:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  Area layanan kami.
                </h2>
                <p className="text-sm text-[#5b5e4e] mt-2 leading-relaxed">
                  Berbasis di Jepara, Jawa Tengah. Kami melayani diskusi langsung di area lokal maupun pengerjaan daring untuk klien di seluruh Indonesia.
                </p>
                <div className="mt-6 pt-6 border-t border-[#c0c0b9] text-sm text-[#1f2410] space-y-2">
                  <p><strong className="font-semibold">Domisili:</strong> {siteConfig.address}</p>
                  <p><strong className="font-semibold">Cakupan:</strong> {siteConfig.serviceArea}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c0c0b9] text-xs text-[#5b5e4e]">
                Konsultasi daring via WhatsApp atau Google Meet fleksibel sesuai jadwal Anda.
              </div>
            </div>

            {/* Media Sosial & Email */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#c0c0b9] bg-[#fafaf7] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#545c2c] block mb-4">
                  Surel &amp; Portofolio
                </span>
                <h2 className="text-[22px] sm:text-[28px] font-heading font-medium text-[#1f2410] leading-[1.2] tracking-[-0.015em]">
                  Email &amp; Instagram.
                </h2>
                <p className="text-sm text-[#5b5e4e] mt-2 leading-relaxed">
                  Ikuti pembaruan konsep desain kami atau kirimkan surat resmi penawaran kerja sama proyek.
                </p>
                <div className="mt-6 pt-6 border-t border-[#c0c0b9] text-sm text-[#1f2410] space-y-3">
                  <div>
                    <span className="block text-xs font-semibold text-[#5b5e4e]">Email Penawaran:</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-[#545c2c] hover:text-[#1f2410] underline underline-offset-2 font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#5b5e4e]">Instagram Resmi:</span>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[#545c2c] hover:text-[#1f2410] underline underline-offset-2 font-medium">
                      @loomi.studio
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c0c0b9] text-xs text-[#5b5e4e]">
                Pesan WhatsApp tetap merupakan kanal tercepat kami dalam membalas pertanyaan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
