import { Package } from "@/content/types";
import { formatRupiah } from "@/lib/whatsapp";
import { PricingOrbitCard } from "@/components/ui/ink-orbit-pricing";

interface PackageCardProps {
  pkg: Package;
  onSelect?: (slug: Package["slug"]) => void;
  href?: string;
}

/** Adapts domain package data to the architectural PricingOrbitCard layout. */
export default function PackageCard({ pkg, onSelect, href }: PackageCardProps) {
  const isCustom = pkg.slug === "sistem-kustom" || pkg.priceFrom === 0;

  return (
    <PricingOrbitCard
      title={`${pkg.name}.`}
      badge={pkg.badge || "Paket Pilihan"}
      description={pkg.summary}
      priceLabel={isCustom ? "Investasi proyek:" : "Investasi mulai dari"}
      price={pkg.customPriceLabel || formatRupiah(pkg.priceFrom)}
      priceUnit={isCustom ? "" : "/ proyek"}
      metaText={
        isCustom
          ? `Waktu: ${pkg.duration} \u2022 Pendampingan SPK`
          : `Waktu: ${pkg.duration} \u2022 ${pkg.revisions}x sesi revisi`
      }
      includesTitle="Sudah termasuk:"
      features={pkg.includes}
      excludesTitle="Ketentuan & batasan:"
      excludes={pkg.excludes}
      ctaLabel={isCustom ? "Konsultasi Kustom" : "Pilih Paket Ini"}
      href={href}
      onSelect={onSelect ? () => onSelect(pkg.slug) : undefined}
      featured={pkg.popular}
    />
  );
}
