import Link from "next/link";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FAF9F5] px-4 py-20">
      <div className="max-w-lg w-full text-center space-y-8">
        <span className="font-heading font-medium text-7xl sm:text-8xl text-[#0A0A0A] block tracking-tighter">
          404.
        </span>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-heading font-medium text-[#0A0A0A] tracking-tight">
            Halaman tidak ditemukan.
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-sm mx-auto">
            Halaman yang Anda tuju mungkin telah dipindahkan, diubah alamatnya, atau tidak tersedia lagi.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white rounded-full transition-colors min-h-[48px] flex items-center justify-center"
          >
            Kembali ke Beranda
          </Link>
          <a
            href={buildGeneralWhatsAppUrl("Halaman 404")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-white hover:bg-stone-100 text-[#0A0A0A] border border-[#0A0A0A] rounded-full transition-colors min-h-[48px] flex items-center justify-center"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
