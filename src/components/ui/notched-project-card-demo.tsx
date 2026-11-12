import { NotchedProjectCard } from "@/components/ui/notched-project-card";

export default function NotchedProjectCardDemo() {
  return (
    <div className="grid w-full max-w-6xl gap-x-5 gap-y-12 p-6 min-[700px]:grid-cols-3 lg:gap-x-8 lg:p-8">
      <NotchedProjectCard
        href="/portofolio"
        title="Kayu Ukir Lestari"
        description="Katalog produk mebel jati Jepara dengan tombol langsung tanya stok dan estimasi ongkir ke WhatsApp."
        image="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=80"
        badge="Proyek Konsep • Mebel"
        tags={["Katalog WhatsApp", "SEO Lokal"]}
        surface="#fafaf7"
        accent="#3f5b1e"
        accentForeground="#ffffff"
      />
      <NotchedProjectCard
        href="/portofolio"
        title="Klinik Pratama Sehati"
        description="Company profile terstruktur 5 halaman dilengkapi jadwal praktik dokter, Maps, dan tombol janji temu."
        image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
        badge="Proyek Konsep • Medis"
        tags={["Company Profile", "Janji Temu"]}
        surface="#fafaf7"
        accent="#3f5b1e"
        accentForeground="#ffffff"
      />
      <NotchedProjectCard
        href="/portofolio"
        title="Roastery Kopi Senja"
        description="Landing page promosi fokus konversi untuk pemesanan paket hampers dan biji kopi sangrai."
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
        badge="Proyek Konsep • F&B"
        tags={["Landing Page", "Meta Pixel"]}
        surface="#fafaf7"
        accent="#3f5b1e"
        accentForeground="#ffffff"
      />
    </div>
  );
}

