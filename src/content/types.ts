export type AddOn = {
  id: string;
  name: string;
  description: string;
  priceFrom: number; // Rupiah
  allowQuantity: boolean;
};

export type PackageSlug = "landing-page" | "company-profile" | "toko-whatsapp";

export type Package = {
  slug: PackageSlug;
  name: string;
  badge?: string;
  summary: string;
  targetAudience: string;
  priceFrom: number; // Rupiah, ditampilkan sebagai "Mulai dari"
  duration: string; // Contoh: "3-5 hari kerja"
  revisions: number;
  includes: string[];
  excludes: string[];
  popular?: boolean;
  addOnIds: string[];
};

export type PortfolioGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  businessType: string;
  packageType?: string;
  summary?: string;
  scope: string[];
  image: string;
  gallery?: PortfolioGalleryImage[];
  url?: string;
  isSample: boolean; // True jika proyek konsep/latihan (R-23, R-38)
  sampleNote?: string;
  highlights: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "umum" | "paket" | "teknis" | "pembayaran";
};

export type ProcessStep = {
  step: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  whatsappNumber: string; // Format internasional tanpa +, contoh: "6281234567890"
  replyHours: string;
  instagram: string;
  serviceArea: string;
  email: string;
  address: string;
};

