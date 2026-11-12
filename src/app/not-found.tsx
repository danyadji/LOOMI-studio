import Link from "next/link";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#fafaf7] px-6 py-20">
      <div className="max-w-lg w-full text-center space-y-8">
        <span className="font-heading font-normal text-7xl sm:text-8xl text-[#545c2c] block tracking-[-0.02em]">
          404.
        </span>

        <div className="space-y-3">
          <h1 className="text-[28px] sm:text-[36px] font-heading font-normal text-[#1f2410] tracking-[-0.015em] leading-[1.2]">
            Halaman tidak ditemukan.
          </h1>
          <p className="text-base text-[#5b5e4e] leading-relaxed max-w-sm mx-auto">
            Halaman yang Anda tuju mungkin telah dipindahkan, diubah alamatnya, atau tidak tersedia lagi.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] flex items-center justify-center"
          >
            Kembali ke Beranda
          </Link>
          <a
            href={buildGeneralWhatsAppUrl("Halaman 404")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium bg-transparent hover:bg-[#d4ec8c] text-[#545c2c] hover:text-[#1f2410] border border-[#545c2c] rounded-full transition-colors min-h-[48px] flex items-center justify-center"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
