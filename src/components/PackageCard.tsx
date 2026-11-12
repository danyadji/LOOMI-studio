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
  return (
    <PricingOrbitCard
      title={`${pkg.name}.`}
      badge={pkg.badge || "Paket Pilihan"}
      description={pkg.summary}
      priceLabel="Investasi mulai dari"
      price={formatRupiah(pkg.priceFrom)}
      priceUnit="/ proyek"
      metaText={`Waktu: ${pkg.duration} \u2022 ${pkg.revisions}x sesi revisi`}
      includesTitle="Sudah termasuk:"
      features={pkg.includes}
      excludesTitle="Belum termasuk:"
      excludes={pkg.excludes}
      ctaLabel="Pilih Paket Ini"
      href={href}
      onSelect={onSelect ? () => onSelect(pkg.slug) : undefined}
      featured={pkg.popular}
    />
  );
}
