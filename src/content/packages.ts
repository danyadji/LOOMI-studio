import { AddOn, Package } from "./types";

export const addOns: AddOn[] = [
  {
    id: "extra-page",
    name: "Halaman Tambahan",
    description: "Penambahan satu halaman konten terpisah (misal: halaman FAQ terpisah, tim, atau cabang)",
    priceFrom: 250000,
    allowQuantity: true,
  },
  {
    id: "full-copywriting",
    name: "Penyusunan Copywriting Lengkap",
    description: "Kami bantu susun teks penjualan, profil bisnis, dan pesan promosi yang persuasif",
    priceFrom: 400000,
    allowQuantity: false,
  },
  {
    id: "gmb-setup",
    name: "Setup Google Bisnis Profil & Maps",
    description: "Pendaftaran dan optimasi lokasi usaha di Google Maps agar mudah dicari pelanggan sekitar",
    priceFrom: 200000,
    allowQuantity: false,
  },
  {
    id: "domain-hosting",
    name: "Domain .com & Hosting Cepat 1 Tahun",
    description: "Registrasi domain nama usaha Anda dan hosting CDN berkecepatan tinggi selama 1 tahun penuh",
    priceFrom: 350000,
    allowQuantity: false,
  },
  {
    id: "extra-products",
    name: "Input Tambahan 10 Produk Katalog",
    description: "Bantuan input data foto, deskripsi, varian, dan harga untuk 10 produk toko",
    priceFrom: 200000,
    allowQuantity: true,
  },
];

export const packages: Package[] = [
  {
    slug: "landing-page",
    name: "Landing Page Promosi",
    badge: "Cocok untuk Iklan & Promo",
    summary:
      "Satu halaman fokus konversi tinggi untuk promosi produk unggulan, kampanye iklan Instagram/TikTok, atau peluncuran layanan baru.",
    targetAudience: "UMKM yang sedang beriklan atau membutuhkan satu halaman penawaran lugas.",
    priceFrom: 750000,
    duration: "3 - 5 hari kerja",
    revisions: 2,
    popular: false,
    includes: [
      "1 halaman terstruktur fokus konversi",
      "Desain responsif mobile-first",
      "Tombol pesanan langsung ke WhatsApp",
      "Integrasi Google Analytics 4 & Meta Pixel",
      "Setup SEO teknis dasar (title, meta deskripsi, Open Graph)",
      "Revisi minor hingga tuntas",
    ],
    excludes: [
      "Halaman sub-menu tambahan",
      "Sistem login atau database server",
      "Payment gateway otomatis",
    ],
    addOnIds: ["extra-page", "full-copywriting", "domain-hosting", "gmb-setup"],
  },
  {
    slug: "company-profile",
    name: "Company Profile Bisnis",
    badge: "Paling Banyak Dipilih",
    summary:
      "Website profil lengkap hingga 5 halaman untuk membangun kredibilitas usaha di mata calon klien, mitra, dan pencarian Google.",
    targetAudience:
      "Bisnis jasa, kontraktor, klinik, bengkel, kantor konsultan, dan UMKM berkembang yang butuh identitas terpercaya.",
    priceFrom: 1500000,
    duration: "5 - 10 hari kerja",
    revisions: 3,
    popular: true,
    includes: [
      "Hingga 5 halaman (Beranda, Profil, Layanan, Portofolio, Kontak)",
      "Desain kustom sesuai identitas dan warna brand Anda",
      "Panel pemesanan paket terhubung langsung ke WhatsApp",
      "Sitemap XML, robots.txt, dan data terstruktur JSON-LD",
      "Integrasi Google Maps dan jam operasional",
      "Optimasi Core Web Vitals agar situs dibuka sangat cepat di HP",
      "3 kali sesi revisi",
    ],
    excludes: [
      "Sistem pemesanan berbayar otomatis di website",
      "Dashboard admin dengan database dinamis",
      "Penulisan artikel blog berkala",
    ],
    addOnIds: ["extra-page", "full-copywriting", "domain-hosting", "gmb-setup"],
  },
  {
    slug: "toko-whatsapp",
    name: "Katalog Toko WhatsApp",
    badge: "Solusi Praktis Penjualan",
    summary:
      "Website etalase produk dengan tombol pesan cepat yang merangkum pilihan barang langsung ke chat WhatsApp penjual.",
    targetAudience:
      "Toko ritel, produsen mebel/kerajinan, kuliner, dan UMKM yang transaksi akhirnya ditutup lewat obrolan WhatsApp.",
    priceFrom: 2250000,
    duration: "7 - 14 hari kerja",
    revisions: 3,
    popular: false,
    includes: [
      "Etalase katalog produk rapi dengan filter kategori",
      "Hingga 20 produk awal dimasukkan oleh tim kami",
      "Tombol pesan per produk otomatis menyusun format chat WhatsApp",
      "Format gambar WebP kompresi tinggi agar hemat kuota",
      "Halaman panduan mudah untuk mengganti harga dan foto produk",
      "Integrasi pelacakan konversi klik WhatsApp (GA4 & Meta)",
      "3 kali sesi revisi",
    ],
    excludes: [
      "Payment gateway bank otomatis dan kartu kredit",
      "Kalkulasi ongkos kirim kurir otomatis di web (dihitung manual di chat)",
      "Akun login member pembeli",
    ],
    addOnIds: ["extra-page", "extra-products", "full-copywriting", "domain-hosting"],
  },
];

