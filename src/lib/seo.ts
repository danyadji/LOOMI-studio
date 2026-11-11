import { siteConfig } from "@/content/site";
import { packages } from "@/content/packages";
import { faqItems } from "@/content/faq";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jepara",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Jepara",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kudus",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pati",
      },
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
    priceRange: "Rp750.000 - Rp2.500.000+",
    sameAs: [siteConfig.instagram],
  };
}

export function getPackagesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: packages.map((pkg, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: pkg.name,
        description: pkg.summary,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          price: pkg.priceFrom,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

