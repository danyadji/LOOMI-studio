import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Jasa Pembuatan Website UMKM & Bisnis Praktis`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "jasa pembuatan website UMKM",
    "jasa website Jepara",
    "website company profile bisnis",
    "toko online WhatsApp",
    "jasa landing page cepat",
    "LOOMI Studio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Jasa Pembuatan Website UMKM & Bisnis Praktis`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/portfolio/kayu-ukir.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Pembuatan Website Praktis untuk UMKM`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Jasa Pembuatan Website UMKM`,
    description: siteConfig.description,
    images: ["/images/portfolio/kayu-ukir.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#fafaf7] text-[#1f2410] font-sans font-light antialiased selection:bg-[#d4ec8c] selection:text-[#1f2410]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
