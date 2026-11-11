import { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Konsultasi & Pemilihan Paket",
    duration: "Hari 1",
    description:
      "Anda memilih paket yang sesuai dari website atau mendiskusikan kebutuhan khusus via WhatsApp. Kami membantu memastikan paket yang Anda pilih tepat guna tanpa biaya tak terduga.",
    deliverables: [
      "Penetapan ruang lingkup kerja dan rincian harga final",
      "Format brief materi yang perlu disiapkan",
      "Pembayaran Down Payment (DP) 50% untuk memulai pengerjaan",
    ],
  },
  {
    step: 2,
    title: "Pengumpulan Konten & Struktur",
    duration: "Hari 2 - 3",
    description:
      "Anda mengirimkan foto produk, profil usaha, dan kontak melalui WhatsApp atau Google Drive. Jika Anda belum memiliki teks yang pas, kami bantu rapikan susunan kata-katanya.",
    deliverables: [
      "Penyelarasan palet warna sesuai identitas brand",
      "Struktur hierarki halaman (wireframe & konten)",
      "Konfirmasi daftar menu dan navigasi utama",
    ],
  },
  {
    step: 3,
    title: "Pengerjaan Kode & Sesi Revisi",
    duration: "Hari 4 - 8",
    description:
      "Website dirakit dengan Next.js dan Tailwind CSS berstandar tinggi. Kami berikan tautan pratinjau langsung yang dapat Anda buka di HP untuk ditinjau bersama.",
    deliverables: [
      "Tautan pratinjau (preview link) privat yang dapat dicoba",
      "Sesi peninjauan dan penyesuaian detail (revisi)",
      "Pemeriksaan kecepatan muat mobile dan responsivitas layar",
    ],
  },
  {
    step: 4,
    title: "Peluncuran & Serah Terima",
    duration: "Hari 9 - 10",
    description:
      "Setelah pratinjau disetujui dan sisa pembayaran diselesaikan, website diarahkan ke domain resmi Anda dan didaftarkan ke Google Search Console.",
    deliverables: [
      "Website resmi aktif dan terindeks di mesin pencari",
      "Penyerahan kepemilikan kode sumber secara utuh",
      "Panduan praktis memperbarui harga atau teks secara mandiri",
    ],
  },
];

