import { PortfolioItem } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "kayu-ukir-lestari",
    title: "Kayu Ukir Lestari",
    businessType: "Produsen Mebel & Kerajinan Kayu, Jepara",
    packageType: "Katalog Toko WhatsApp",
    summary:
      "Konsep etalase mebel jati Jepara dengan tampilan bersih agar pembeli luar kota bisa memilih model kursi atau meja lalu menanyakan stok langsung lewat WhatsApp.",
    scope: ["Katalog Produk WhatsApp", "Optimasi Gambar WebP", "SEO Lokal Jepara"],
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80",
        alt: "Interior ruang tamu dengan furnitur kayu jati Kayu Ukir Lestari",
        caption: "Suasana produk dan karakter visual brand",
      },
      {
        src: "/images/portfolio/kayu-ukir-desktop.jpg",
        alt: "Tampilan konsep katalog mebel Kayu Ukir Lestari pada layar laptop",
        caption: "Tampilan katalog grid pada layar desktop",
      },
      {
        src: "/images/portfolio/kayu-ukir-mobile.jpg",
        alt: "Pratinjau halaman detail produk kursi jati di layar ponsel",
        caption: "Tampilan detail produk dan tombol pesan di HP",
      },
    ],
    isSample: true,
    sampleNote: "Proyek Konsep Desain LOOMI Studio",
    highlights: [
      "Katalog galeri produk ukir jati dengan tombol langsung tanya stok ke WhatsApp",
      "Ringan dibuka pada koneksi 4G ponsel pelanggan luar kota",
      "Struktur SEO lokal untuk kata kunci pengrajin mebel Jepara",
    ],
  },
  {
    slug: "klinik-gigi-sehati",
    title: "Klinik Pratama Sehati",
    businessType: "Klinik Kesehatan & Layanan Medis",
    packageType: "Company Profile Bisnis",
    summary:
      "Rancangan company profile 5 halaman untuk klinik kesehatan dengan informasi jadwal dokter yang mudah dibaca pasien dan alur janji temu langsung ke admin WhatsApp.",
    scope: ["Company Profile 5 Halaman", "Integrasi Jadwal Dokter", "Tombol Janji Temu"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
        alt: "Ruang perawatan bersih Klinik Pratama Sehati",
        caption: "Identitas ruang layanan dan standar klinik",
      },
      {
        src: "/images/portfolio/klinik-sehati-desktop.jpg",
        alt: "Tampilan konsep website jadwal dokter Klinik Pratama Sehati di tablet meja resepsionis",
        caption: "Tampilan halaman jadwal dokter dan layanan klinik",
      },
      {
        src: "/images/portfolio/klinik-sehati-mobile.jpg",
        alt: "Pratinjau pendaftaran janji temu pasien melalui layar ponsel",
        caption: "Alur pemilihan jadwal praktik dari layar HP pasien",
      },
    ],
    isSample: true,
    sampleNote: "Proyek Konsep Desain LOOMI Studio",
    highlights: [
      "Informasi jadwal praktik dokter dan lokasi terhubung langsung ke Google Maps",
      "Pengunjung dapat memilih poli sebelum terhubung ke nomor admin klinik di WhatsApp",
      "Navigasi bersih dan mudah dibaca oleh pasien berbagai kelompok usia",
    ],
  },
  {
    slug: "kopi-seduh-nusantara",
    title: "Roastery Kopi Senja",
    businessType: "Kedai Kopi & Penjualan Biji Sangrai",
    packageType: "Landing Page Promosi",
    summary:
      "Satu halaman promosi khusus paket hampers dan biji kopi sangrai yang mengarahkan klik iklan Instagram langsung ke format pesanan WhatsApp tanpa checkout rumit.",
    scope: ["Landing Page Promosi", "Pemesanan Paket Hampers", "Pelacakan Meta Pixel"],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        alt: "Sajian kopi dan atmosfer kedai Roastery Kopi Senja",
        caption: "Atmosfer produk dan materi kampanye utama",
      },
      {
        src: "/images/portfolio/kopi-senja-desktop.jpg",
        alt: "Tampilan landing page etalase biji kopi Roastery Kopi Senja di laptop",
        caption: "Etalase paket kopi dan pilihan origin di desktop",
      },
      {
        src: "/images/portfolio/kopi-senja-mobile.jpg",
        alt: "Pratinjau halaman pemesanan hampers kopi di ponsel",
        caption: "Halaman promosi paket hampers untuk trafik iklan HP",
      },
    ],
    isSample: true,
    sampleNote: "Proyek Konsep Desain LOOMI Studio",
    highlights: [
      "Satu halaman fokus konversi untuk promo paket hampers musiman",
      "Pilihan varian biji kopi otomatis terangkum dalam format chat WhatsApp",
      "Terintegrasi Meta Pixel untuk evaluasi kampanye iklan Instagram",
    ],
  },
];
