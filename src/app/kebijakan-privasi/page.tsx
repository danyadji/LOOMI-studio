import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export default function KebijakanPrivasiPage() {
  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "Kebijakan Privasi", url: "/kebijakan-privasi" },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-stone-500">
              <li>
                <Link href="/" className="hover:text-black">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0A0A0A]" aria-current="page">
                Kebijakan Privasi
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
            Kebijakan privasi Loomi Studio.
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            Terakhir diperbarui: 11 November 2026
          </p>
        </div>
      </div>

      <div className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 prose prose-stone max-w-none text-stone-700 space-y-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-medium text-[#0A0A0A]">
              1. Prinsip privasi dan arsitektur tanpa database.
            </h2>
            <p className="text-base leading-relaxed">
              Website {siteConfig.name} ({siteConfig.domain}) dibangun sebagai situs statis yang disajikan langsung dari jaringan CDN berkecepatan tinggi. Kami <strong>tidak menyimpan data pribadi Anda di basis data (database) server kami</strong>, tidak menyediakan fitur pendaftaran akun pengguna, dan tidak memproses transaksi pembayaran perbankan di situs ini.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-medium text-[#0A0A0A]">
              2. Data pada panel pemilihan paket.
            </h2>
            <p className="text-base leading-relaxed">
              Ketika Anda menggunakan panel formulir dan mengisi nama, jenis bisnis, atau catatan opsional, data tersebut hanya diproses secara lokal di dalam memori peramban (browser) perangkat Anda. Teks tersebut semata-mata disusun menjadi format pesan obrolan untuk memudahkan Anda berkonsultasi ketika Anda memilih menekan tombol pesan ke WhatsApp resmi kami. Tidak ada data formulir yang dikirimkan ke server web kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-medium text-[#0A0A0A]">
              3. Alat pelacakan analitik web.
            </h2>
            <p className="text-base leading-relaxed">
              Untuk memahami halaman mana yang paling diminati pengunjung serta mengevaluasi efektivitas kampanye promosi, kami menggunakan layanan analitik pihak ketiga:
            </p>
            <ul className="list-disc pl-5 text-base space-y-2 text-stone-700">
              <li>
                <strong>Google Analytics 4 (GA4):</strong> Mencatat data interaksi agregat umum seperti halaman yang dibuka, durasi kunjungan, dan klik tombol pemesanan tanpa mengidentifikasi identitas pribadi Anda secara langsung.
              </li>
              <li>
                <strong>Meta Pixel:</strong> Digunakan untuk mengukur efektivitas kampanye informasi di platform Instagram dan Facebook saat pengunjung menekan tombol menuju WhatsApp.
              </li>
            </ul>
            <p className="text-base leading-relaxed">
              Anda dapat menggunakan fitur privasi di peramban Anda (seperti mode penyamaran/incognito atau ekstensi pemblokir pelacak) jika Anda tidak ingin aktivitas kunjungan Anda disertakan dalam metrik analitik agregat kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-medium text-[#0A0A0A]">
              4. Komunikasi di WhatsApp.
            </h2>
            <p className="text-base leading-relaxed">
              Setelah Anda berpindah ke aplikasi WhatsApp, percakapan Anda tunduk pada kebijakan privasi dan ketentuan layanan WhatsApp/Meta. Segala informasi yang Anda bagikan secara sukarela di dalam obrolan chat (seperti materi bisnis, dokumen usaha, atau nomor rekening saat transfer pelunasan) hanya digunakan untuk keperluan pengerjaan proyek dan dijaga kerahasiaannya oleh tim {siteConfig.name}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-heading font-medium text-[#0A0A0A]">
              5. Kontak terkait privasi.
            </h2>
            <p className="text-base leading-relaxed">
              Bila Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin meminta penghapusan riwayat percakapan proyek Anda dari arsip komunikasi kami, silakan hubungi kami melalui email: <a href={`mailto:${siteConfig.email}`} className="text-[#0A0A0A] underline underline-offset-4 font-medium">{siteConfig.email}</a> atau via WhatsApp resmi di +{siteConfig.whatsappNumber}.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
