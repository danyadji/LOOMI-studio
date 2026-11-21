export interface PricingPlanTier {
  id: string;
  name: string;
  tech: string;
  price: string;
  description: string;
  note?: string;
  includes: string[];
  excludes: string[];
  featured?: boolean;
  badge?: string;
  ctaText?: string;
}

export interface PricingCategory {
  id: "landing-page" | "company-profile" | "toko-online";
  title: string;
  badge: string;
  description: string;
  plans: PricingPlanTier[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    badge: "Konversi Cepat",
    description:
      "Satu halaman fokus konversi tinggi untuk promosi produk unggulan, kampanye iklan, atau peluncuran layanan bisnis Anda.",
    plans: [
      {
        id: "lp-starter",
        name: "Starter",
        tech: "WordPress",
        price: "Rp750.000",
        description:
          "Landing page satu halaman hemat dan praktis berbasis konfigurasi standar WordPress untuk promosi awal.",
        badge: "Praktis & Terjangkau",
        includes: [
          "Landing page satu halaman (Hero, profil singkat, layanan/produk, keunggulan, kontak)",
          "Desain responsif desktop dan mobile",
          "Tombol WhatsApp dan tautan media sosial",
          "Formulir kontak sederhana",
          "Instalasi dan konfigurasi dasar WordPress",
          "Domain dan hosting tahun pertama",
        ],
        excludes: [
          "Halaman tambahan",
          "CMS atau fitur khusus di luar konfigurasi standar",
          "Copywriting profesional dan produksi foto",
          "Tema/plugin premium dan email bisnis berbayar",
          "Maintenance rutin dan perpanjangan tahun berikutnya",
        ],
        featured: false,
      },
      {
        id: "lp-professional",
        name: "Professional",
        tech: "Next.js Static",
        price: "Rp1.500.000",
        description:
          "Landing page modern performa tinggi dengan loading ultra-cepat, animasi halus, dan arsitektur Next.js modern.",
        badge: "Paling Banyak Dipilih",
        includes: [
          "Landing page dengan desain custom",
          "Hero, layanan/produk, keunggulan, CTA, dan kontak",
          "Desain responsif",
          "Animasi dan interaksi ringan",
          "Optimasi metadata dan struktur halaman dasar",
          "Deployment dan HTTPS",
          "Domain tahun pertama",
        ],
        excludes: [
          "Dashboard CMS",
          "Backend/database khusus dan autentikasi",
          "Fitur transaksi",
          "Animasi kompleks dan integrasi API berbayar",
          "Hosting WordPress",
          "Perpanjangan domain dan VPS tahun berikutnya",
        ],
        featured: true,
      },
      {
        id: "lp-professional-cms",
        name: "Professional + CMS",
        tech: "Next.js + WordPress Headless",
        price: "Rp2.500.000",
        description:
          "Kombinasi kecepatan frontend Next.js dengan kemudahan dashboard WordPress untuk pengelolaan teks dan gambar mandiri.",
        badge: "Fleksibel & Dinamis",
        includes: [
          "Seluruh fitur Landing Page Professional",
          "Dashboard WordPress untuk mengelola konten",
          "Integrasi WordPress REST API",
          "Pengelolaan teks, gambar, dan informasi layanan",
          "Deployment frontend dan HTTPS",
          "Hosting WordPress dan domain tahun pertama",
        ],
        excludes: [
          "E-Commerce dan checkout",
          "Custom workflow CMS kompleks",
          "Multi-role khusus dan approval berjenjang",
          "Penulisan artikel dalam jumlah besar",
          "Plugin premium dan layanan API berbayar",
          "Perpanjangan hosting dan domain tahun berikutnya",
        ],
        featured: false,
      },
    ],
  },
  {
    id: "company-profile",
    title: "Company Profile",
    badge: "Kredibilitas Bisnis",
    description:
      "Website profil perusahaan multi-halaman untuk membangun kredibilitas kuat di mata calon klien, mitra, dan Google.",
    plans: [
      {
        id: "cp-starter",
        name: "Starter",
        tech: "WordPress",
        price: "Rp1.750.000",
        description:
          "Company profile multi-halaman terstruktur berbasis WordPress yang ramah pengguna dan mudah diperbarui.",
        badge: "Multi Halaman",
        includes: [
          "Halaman Beranda",
          "Halaman Tentang Perusahaan",
          "Halaman Layanan atau Produk",
          "Halaman Portofolio atau Galeri sederhana",
          "Halaman Kontak dan tombol WhatsApp",
          "Dashboard WordPress",
          "Desain responsif dan SEO dasar",
          "Hosting dan domain tahun pertama",
        ],
        excludes: [
          "Katalog E-Commerce dan checkout online",
          "Fitur booking, member, dan portal pelanggan",
          "Sistem internal khusus",
          "Copywriting profesional dan produksi foto/video",
          "Plugin premium dan layanan pihak ketiga berbayar",
          "Halaman atau fitur tambahan di luar kesepakatan",
          "Perpanjangan hosting dan domain tahun berikutnya",
        ],
        featured: false,
      },
      {
        id: "cp-professional",
        name: "Professional",
        tech: "Next.js Static",
        price: "Rp3.500.000",
        description:
          "Company profile custom dengan teknologi Next.js berkecepatan tinggi, keamanan solid, dan SEO teknis mutakhir.",
        badge: "Paling Banyak Dipilih",
        includes: [
          "Company profile dengan desain custom",
          "Halaman Beranda, Tentang, Layanan, Portofolio, dan Kontak",
          "Desain responsif dan navigasi",
          "Animasi dan interaksi ringan",
          "Optimasi metadata dan SEO dasar",
          "Deployment dan HTTPS",
          "Domain tahun pertama",
        ],
        excludes: [
          "Dashboard CMS",
          "Backend/database dan autentikasi",
          "Pengelolaan konten mandiri",
          "E-Commerce dan fitur booking",
          "Integrasi sistem eksternal",
          "API berbayar dan aset premium",
          "Perpanjangan domain dan VPS tahun berikutnya",
        ],
        featured: true,
      },
      {
        id: "cp-professional-cms",
        name: "Professional + CMS",
        tech: "Next.js + WordPress Headless",
        price: "Mulai Rp5.500.000",
        description:
          "Solusi profesional terlengkap: performa Next.js dipadukan dengan dashboard WordPress headless untuk tim Anda.",
        badge: "Skalabilitas Tinggi",
        includes: [
          "Company profile custom menggunakan Next.js",
          "Halaman Beranda, Profil, Layanan, Portofolio, dan Kontak",
          "Dashboard WordPress untuk mengelola konten",
          "Integrasi WordPress REST API",
          "Desain responsif dan interaksi sesuai kebutuhan",
          "Deployment dan HTTPS",
          "Hosting CMS dan domain tahun pertama",
        ],
        excludes: [
          "E-Commerce dan checkout",
          "Workflow CMS kompleks",
          "Pengembangan plugin khusus",
          "Penulisan konten dan input data dalam jumlah besar",
          "Plugin premium dan layanan pihak ketiga berbayar",
          "Perpanjangan infrastruktur tahun berikutnya",
        ],
        featured: false,
      },
    ],
  },
  {
    id: "toko-online",
    title: "Website Toko Online / E-Commerce",
    badge: "Solusi Penjualan",
    description:
      "Etalase produk dan platform transaksi digital untuk mendongkrak omset penjualan usaha Anda secara online.",
    plans: [
      {
        id: "to-starter",
        name: "Starter",
        tech: "WordPress + WooCommerce",
        price: "Rp2.500.000",
        description:
          "Website etalase toko online praktis dengan katalog terstruktur dan alur pesanan langsung menuju WhatsApp.",
        note: "Catatan: Integrasi Midtrans dan pengiriman otomatis tersedia sebagai add-on.",
        badge: "Katalog WhatsApp",
        includes: [
          "Website company profile",
          "Katalog dan kategori produk",
          "Halaman detail produk",
          "Dashboard WooCommerce untuk mengelola produk",
          "Maksimal 10 produk awal",
          "Tombol pemesanan melalui WhatsApp",
          "Desain responsif",
          "Konfigurasi dasar WordPress dan WooCommerce",
          "Hosting dan domain tahun pertama",
        ],
        excludes: [
          "Checkout dan pembayaran otomatis di website",
          "Integrasi Midtrans",
          "Integrasi ongkos kirim otomatis",
          "Input produk lebih dari 10 produk",
          "Foto produk profesional dan copywriting produk",
          "Plugin premium dan biaya layanan pihak ketiga",
          "Perpanjangan hosting dan domain tahun berikutnya",
        ],
        featured: false,
      },
      {
        id: "to-professional",
        name: "Professional",
        tech: "Next.js + Headless WooCommerce",
        price: "Rp4.500.000 - Rp6.000.000",
        description:
          "Frontend katalog modern berkecepatan tinggi dengan navigasi instan dan backend WooCommerce yang teruji.",
        badge: "Paling Banyak Dipilih",
        includes: [
          "Frontend katalog produk custom menggunakan Next.js",
          "WooCommerce sebagai dashboard pengelolaan produk",
          "Integrasi WooCommerce REST API",
          "Halaman katalog dan kategori produk",
          "Pencarian produk dasar",
          "Halaman detail produk dan informasi harga",
          "Pemesanan melalui WhatsApp atau inquiry",
          "Desain responsif dan deployment",
          "Hosting CMS dan domain tahun pertama",
        ],
        excludes: [
          "Keranjang belanja dan checkout transaksi online penuh",
          "Payment gateway",
          "Integrasi pengiriman otomatis",
          "ERP dan sistem inventori khusus",
          "Sinkronisasi multi-gudang dan marketplace",
          "Input produk dalam jumlah besar di luar kuota",
          "Plugin premium dan API berbayar",
          "Perpanjangan VPS, hosting, dan domain tahun berikutnya",
        ],
        featured: true,
      },
      {
        id: "to-full-ecommerce",
        name: "Full E-Commerce",
        tech: "Next.js + Headless WooCommerce",
        price: "Mulai Rp12.000.000",
        description:
          "Toko online mandiri lengkap dengan keranjang belanja, integrasi payment gateway, dan kalkulasi ekspedisi otomatis.",
        badge: "Full Checkout & Otomatisasi",
        includes: [
          "Frontend toko online custom menggunakan Next.js",
          "WooCommerce sebagai backend pengelolaan produk dan pesanan",
          "Katalog, kategori, pencarian, dan detail produk",
          "Keranjang belanja",
          "Checkout langsung melalui website",
          "Integrasi payment gateway",
          "Integrasi pengiriman sesuai penyedia",
          "Manajemen pesanan melalui WooCommerce",
          "Pengujian checkout dan status pembayaran",
          "Deployment dan HTTPS",
        ],
        excludes: [
          "Biaya transaksi payment gateway",
          "Biaya layanan ekspedisi",
          "Langganan plugin/API premium",
          "Integrasi ERP, POS, marketplace, dan sistem akuntansi",
          "Aplikasi mobile native",
          "Produksi foto/video dan input produk dalam jumlah besar",
          "Biaya upgrade infrastruktur jika kapasitas server tidak mencukupi",
          "Maintenance berkelanjutan",
          "Perpanjangan infrastruktur tahun berikutnya",
        ],
        featured: false,
      },
    ],
  },
];
