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
                Kontak
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Hubungi Loomi Studio.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed">
              Kami siap membantu mewujudkan website yang fungsional untuk bisnis Anda. Hubungi kami melalui kanal komunikasi di bawah ini.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#0A0A0A] bg-white ring-1 ring-[#0A0A0A] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-4">
                  Kanal Utama &bull; Respon Cepat
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A]">
                  WhatsApp resmi.
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Kanal utama untuk konsultasi cepat, pengiriman materi brief, dan konfirmasi pemesanan paket.
                </p>
                <div className="mt-6 pt-6 border-t border-[#E8E6DF]">
                  <div className="text-xl font-heading font-medium text-[#0A0A0A]">
                    +{siteConfig.whatsappNumber}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    Jam Respon: {siteConfig.replyHours}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8E6DF]">
                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white transition-colors min-h-[48px] flex items-center justify-center gap-2"
                >
                  <span>Chat WhatsApp Sekarang</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Lokasi & Area Layanan */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E8E6DF] bg-[#FAF9F5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-4">
                  Lokasi Operasional
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A]">
                  Area layanan kami.
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Berbasis di Jepara, Jawa Tengah. Kami melayani diskusi langsung di area lokal maupun pengerjaan daring untuk klien di seluruh Indonesia.
                </p>
                <div className="mt-6 pt-6 border-t border-[#E8E6DF] text-sm text-stone-700 space-y-2">
                  <p><strong className="text-[#0A0A0A]">Domisili:</strong> {siteConfig.address}</p>
                  <p><strong className="text-[#0A0A0A]">Cakupan:</strong> {siteConfig.serviceArea}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8E6DF] text-xs text-stone-500">
                Konsultasi daring via WhatsApp / Google Meet fleksibel kapan saja.
              </div>
            </div>

            {/* Media Sosial & Email */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E8E6DF] bg-[#FAF9F5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-4">
                  Surel &amp; Portofolio
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A]">
                  Email &amp; Instagram.
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Ikuti pembaruan karya terbaru kami atau kirimkan surat resmi penawaran kerjasama proyek.
                </p>
                <div className="mt-6 pt-6 border-t border-[#E8E6DF] text-sm text-stone-700 space-y-3">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-semibold">Email Penawaran:</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-[#0A0A0A] hover:underline font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-500 font-semibold">Instagram Resmi:</span>
                    <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[#0A0A0A] hover:underline font-medium">
                      @loomi.studio
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E8E6DF] text-xs text-stone-500">
                Pesan WhatsApp tetap merupakan kanal tercepat kami dalam membalas pertanyaan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
