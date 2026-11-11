import Link from "next/link";
import { siteConfig } from "@/content/site";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const waUrl = buildGeneralWhatsAppUrl("Footer Website");

  return (
    <footer className="bg-[#0C0C0C] text-white mt-auto border-t border-stone-800">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Pernyataan Misi */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block group">
              <span className="font-heading font-medium text-3xl sm:text-4xl tracking-tight text-white group-hover:opacity-80 transition-opacity">
                Loomi Studio.
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Studio pembuatan website praktis untuk UMKM dan bisnis jasa. Kami mengedepankan desain bersih, performa cepat, dan pemesanan langsung ke obrolan WhatsApp tanpa kerumitan koding.
            </p>
            <div className="text-xs text-stone-500 space-y-1.5 pt-2">
              <p><span className="text-stone-300">Area Layanan:</span> {siteConfig.serviceArea}</p>
              <p><span className="text-stone-300">Jam Respon WhatsApp:</span> {siteConfig.replyHours}</p>
            </div>
          </div>

          {/* Navigasi Utama */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
              Halaman Situs
            </h3>
            <ul className="grid grid-cols-2 gap-2.5 text-sm text-stone-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors py-1 inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition-colors py-1 inline-block">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-white transition-colors py-1 inline-block">
                  Paket &amp; Harga
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-white transition-colors py-1 inline-block">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/proses" className="hover:text-white transition-colors py-1 inline-block">
                  Proses Kerja
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors py-1 inline-block">
                  FAQ &amp; Tanya Jawab
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors py-1 inline-block">
                  Kontak Studio
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-white transition-colors py-1 inline-block">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Langsung */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
              Konsultasi WhatsApp
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              Diskusikan kebutuhan website dan paket yang paling cocok untuk usaha Anda langsung bersama kami.
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-stone-300 transition-colors py-1 underline underline-offset-4"
              >
                <span>+{siteConfig.whatsappNumber}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="text-xs text-stone-500 pt-2 space-y-1">
              <p>Email: {siteConfig.email}</p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors inline-block"
              >
                Instagram: @loomi.studio
              </a>
            </div>
          </div>
        </div>

        {/* Baris Bawah */}
        <div className="border-t border-stone-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Situs Next.js statis tanpa database. Transaksi dan kesepakatan final disepakati di WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
