import { PortfolioItem } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "inspiring-furni",
    title: "Inspiring Furni",
    businessType: "Furniture Manufacture, Jepara",
    packageType: "Website Toko Online",
    summary:
      "Website etalase dan toko online furnitur kayu jati solid Jepara dengan sistem pemesanan langsung ke WhatsApp workshop serta pilihan variasi ukuran produk yang fleksibel.",
    scope: ["Website Toko Online", "Pilihan Varian Ukuran", "Mobile Checkout Cepat"],
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
    slug: "flowrist",
    title: "Flowrys Florist",
    businessType: "Toko Florist & Bunga Segar",
    packageType: "Company Profile Bisnis",
    summary:
      "Website company profile dan etalase toko florist bunga modern dengan katalog buket, bunga meja, dan hampers, lengkap dengan formulir jadwal pengiriman dan pemesanan WhatsApp.",
    scope: ["Company Profile Toko Bunga", "Katalog Buket & Hampers", "Format Pesan & Kirim WA"],
    image: "/images/portfolio/flowrist/1.png",
    gallery: [
      {
        src: "/images/portfolio/flowrist/1.png",
        alt: "Halaman beranda website Flowrys Florist pada layar desktop",
        caption: "Halaman beranda dengan identitas toko bunga segar, kurasi buket, dan tombol pemesanan WhatsApp",
      },
      {
        src: "/images/portfolio/flowrist/2.png",
        alt: "Katalog koleksi bunga dan filter kategori produk Flowrys Florist di desktop",
        caption: "Katalog etalase bunga meja, buket, hampers, serta filter kategori dan pencarian",
      },
      {
        src: "/images/portfolio/flowrist/3.png",
        alt: "Tampilan responsif mobile website Flowrys Florist di tiga layar ponsel",
        caption: "Tampilan responsif mobile untuk pengunjung dari promosi media sosial",
      },
      {
        src: "/images/portfolio/flowrist/4.png",
        alt: "Detail produk hampers, keranjang belanja, dan formulir checkout Flowrys Florist di ponsel",
        caption: "Alur pemilihan produk, opsi ambil di toko atau diantar, dan konfirmasi pesanan",
      },
    ],
    isSample: false,
    highlights: [
      "Struktur beranda visual elegan dengan katalog produk buket, bunga papan, bunga meja, dan hampers",
      "Pilihan spesifikasi metode penerimaan (ambil di toko atau diantar ke alamat) dan tanggal pengiriman",
      "Format pemesanan otomatis langsung terhubung ke nomor admin WhatsApp tanpa alur checkout rumit",
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
