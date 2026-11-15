import { PortfolioItem } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "inspiring-furni",
    title: "Inspiring Furni",
    businessType: "Furniture Manufacture, Jepara",
    packageType: "Katalog Toko WhatsApp",
    summary:
      "Website etalase dan katalog furnitur kayu jati solid Jepara dengan sistem pemesanan langsung ke WhatsApp workshop serta pilihan variasi ukuran produk yang fleksibel.",
    scope: ["Katalog Toko WhatsApp", "Pilihan Varian Ukuran", "Mobile Checkout Cepat"],
    image: "/images/portfolio/inspiring-furni/1.png",
    gallery: [
      {
        src: "/images/portfolio/inspiring-furni/1.png",
        alt: "Halaman beranda website Inspiring Furni pada layar desktop",
        caption: "Halaman beranda dengan identitas furnitur jati solid dan tombol WhatsApp",
      },
      {
        src: "/images/portfolio/inspiring-furni/2.png",
        alt: "Katalog produk furnitur jati solid Inspiring Furni",
        caption: "Katalog etalase produk dengan filter pencarian dan label harga",
      },
      {
        src: "/images/portfolio/inspiring-furni/3.png",
        alt: "Halaman detail produk jendela kusen bulat dengan pemilih ukuran dan kaca",
        caption: "Halaman detail produk dengan pilihan diameter dan jenis kaca",
      },
      {
        src: "/images/portfolio/inspiring-furni/7.png",
        alt: "Tampilan responsif website Inspiring Furni pada tiga layar ponsel",
        caption: "Tampilan mobile responsif untuk pengunjung iklan Instagram dan TikTok",
      },
      {
        src: "/images/portfolio/inspiring-furni/6.png",
        alt: "Alur pemesanan dan checkout langsung ke WhatsApp workshop",
        caption: "Formulir ringkasan pesanan dan pengiriman langsung tersambung ke WhatsApp",
      },
      {
        src: "/images/portfolio/inspiring-furni/8.png",
        alt: "Alur keranjang belanja dan formulir pengiriman di layar ponsel",
        caption: "Alur pemesanan mobile yang ringkas tanpa login",
      },
    ],
    url: "https://www.inspiringfurni.web.id",
    isSample: false,
    highlights: [
      "Katalog galeri produk mebel jati dengan tombol langsung tanya stok dan custom ke WhatsApp",
      "Pilihan spesifikasi variasi ukuran diameter dan jenis kaca yang otomatis terangkum dalam pesanan",
      "Desain responsif yang sangat ringan dibuka dari koneksi ponsel calon pembeli luar kota",
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
