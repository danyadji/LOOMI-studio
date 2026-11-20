import { AddOn, Package } from "./types";

export const addOns: AddOn[] = [
  {
    id: "payment-gateway",
    name: "Integrasi Payment Gateway Otomatis",
    description: "Pembeli dapat membayar otomatis di website via QRIS, Virtual Account bank, dan e-wallet (Midtrans / Xendit / Tripay)",
    priceFrom: 750000,
    allowQuantity: false,
  },
  {
    id: "shipping-api",
    name: "Integrasi Cek Ongkir Otomatis Ekspedisi",
    description: "Kalkulasi otomatis tarif kurir reguler (JNE, J&T, SiCepat) berdasarkan alamat kecamatan tujuan pembeli",
    priceFrom: 500000,
    allowQuantity: false,
  },
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
    duration: "5 - 7 hari kerja",
    revisions: 2,
    popular: false,
    includes: [
      "1 halaman terstruktur fokus konversi",
      "Termasuk Domain .com resmi & hosting CDN cepat 1 tahun",
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
    addOnIds: ["extra-page", "full-copywriting", "gmb-setup"],
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
    duration: "10 - 14 hari kerja",
    revisions: 3,
    popular: true,
    includes: [
      "Hingga 5 halaman (Beranda, Profil, Layanan, Portofolio, Kontak)",
      "Termasuk Domain .com resmi & hosting CDN cepat 1 tahun",
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
    addOnIds: ["extra-page", "full-copywriting", "gmb-setup"],
  },
  {
    slug: "toko-whatsapp",
    name: "Website Toko Online",
    badge: "Solusi Praktis E-Commerce",
    summary:
      "Website toko online profesional lengkap dengan etalase produk, varian ukuran/warna, keranjang belanja, dan checkout pesanan WhatsApp bebas komisi.",
    targetAudience:
      "Toko ritel, produsen mebel, fashion, kuliner, dan UMKM yang ingin toko online praktis dengan opsi upgrade ke pembayaran otomatis.",
    priceFrom: 2250000,
    duration: "14 - 21 hari kerja",
    revisions: 3,
    popular: false,
    includes: [
      "Website toko online modern lengkap dengan keranjang belanja",
      "Termasuk Domain .com resmi & hosting CDN cepat 1 tahun",
      "Katalog etalase produk rapi dengan filter kategori",
      "Pilihan variasi spesifikasi (ukuran, warna, bahan)",
      "Alur checkout langsung ke WhatsApp (bebas potongan biaya transaksi)",
      "Hingga 20 produk awal dimasukkan oleh tim kami",
      "Format gambar WebP kompresi tinggi agar hemat kuota ponsel",
      "Panduan mudah memperbarui stok, harga, dan foto produk",
      "3 kali sesi revisi",
    ],
    excludes: [
      "Integrasi payment gateway otomatis (tersedia sebagai add-on)",
      "Kalkulasi ongkir ekspedisi otomatis di web (tersedia sebagai add-on)",
      "Sistem multi-gudang rumit / ERP enterprise",
    ],
    addOnIds: [
      "payment-gateway",
      "shipping-api",
      "extra-products",
      "extra-page",
      "full-copywriting",
    ],
  },
  {
    slug: "sistem-kustom",
    name: "Paket Kustom & Sistem Khusus",
    badge: "Solusi Bisnis Berkembang",
    summary:
      "Arsitektur website dan sistem kustom untuk kebutuhan alur bisnis spesifik, sistem membership pengguna, ulasan dinamis, dan integrasi multi-API.",
    targetAudience:
      "Bisnis dengan alur transaksi khusus, portal membership pembeli, web app internal, atau kebutuhan database cloud mandiri.",
    priceFrom: 0,
    customPriceLabel: "Berdasarkan Kebutuhan",
    duration: "20 - 45 hari kerja",
    revisions: 0,
    popular: false,
    includes: [
      "Arsitektur database cloud khusus (Supabase / PostgreSQL)",
      "Sistem login akun pengguna / membership pembeli",
      "Integrasi API pihak ketiga (Payment Gateway, Webhook, Ekspedisi)",
      "Penyerahan 100% kode sumber utuh & repositori teknis (SPK resmi)",
      "Konsultasi wireframe dan alur sistem sebelum koding dimulai",
      "Termasuk Domain .com resmi & hosting CDN cepat 1 tahun",
      "Garansi pemeliharaan teknis & perbaikan bug prioritas",
    ],
    excludes: [
      "Server dedicated enterprise ekstrem (disesuaikan kebutuhan)",
      "Pengelolaan operasional data harian pasca serah terima",
    ],
    addOnIds: [],
  },
];

