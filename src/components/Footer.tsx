import Link from "next/link";
import { siteConfig } from "@/content/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const waUrl = buildGeneralWhatsAppUrl("Footer Website");

  return (
    <footer className="bg-[#1f2410] text-[#fafaf7] mt-auto border-t border-[#3f4620]">
      <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Informasi Operasional */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block group rounded-sm">
              <span className="font-heading font-medium text-3xl sm:text-4xl tracking-[-0.015em] text-[#fafaf7] group-hover:text-[#d4ec8c] transition-colors">
                Loomi Studio.
              </span>
            </Link>
            <p className="text-sm text-[#c7ccb8] leading-relaxed max-w-sm">
              Studio pembuatan website praktis untuk UMKM dan bisnis jasa. Mengedepankan desain editorial ringan, waktu muat cepat di ponsel, dan pemesanan langsung ke obrolan WhatsApp.
            </p>
          </div>

          {/* Navigasi Halaman */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d4ec8c] font-sans">
              Halaman Situs
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-[#c7ccb8]">
              <li>
                <Link href="/" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Paket &amp; Harga
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/proses" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Proses Kerja
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  FAQ &amp; Tanya Jawab
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Kontak Studio
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-[#d4ec8c] transition-colors py-1 inline-block">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Langsung */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#d4ec8c] font-sans">
              Konsultasi WhatsApp
            </h3>
            <p className="text-sm text-[#c7ccb8] leading-relaxed">
              Diskusikan kebutuhan website dan paket yang paling sesuai untuk usaha Anda langsung bersama tim kami.
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4ec8c] hover:text-[#fafaf7] transition-colors py-1 underline underline-offset-4"
              >
                <span>+{siteConfig.whatsappNumber}</span>
              </a>
            </div>
            <div className="text-xs text-[#c7ccb8] pt-2 space-y-1.5">
              <p>Email: {siteConfig.email}</p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4ec8c] transition-colors inline-block"
              >
                Instagram: @loomi.studio
              </a>
            </div>
          </div>
        </div>

        {/* Baris Hak Cipta */}
        <div className="border-t border-[#3f4620] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c7ccb8] gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Situs Next.js statis tanpa database. Kesepakatan proyek dilakukan melalui WhatsApp resmi.
          </p>
        </div>
      </div>
    </footer>
  );
}
