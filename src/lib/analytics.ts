export type TrackingEventParams = {
  itemId?: string;
  itemName?: string;
  value?: number;
  currency?: string;
  addOnCount?: number;
  source?: string;
  [key: string]: unknown;
};

// Declare window types for gtag and fbq
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

// Simpan dan ambil UTM dari sessionStorage agar bertahan selama sesi browsing
export function getStoredUtmSource(): string {
  if (typeof window === "undefined") return "langsung";

  try {
    // Ambil dari URL jika ada query parameter saat mendarat
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    if (utmSource) {
      // Sanitasi dan batasi panjang input untuk mencegah parameter berlebih
      const cleanSource = utmSource.trim().slice(0, 50);
      const cleanMedium = utmMedium ? utmMedium.trim().slice(0, 50) : "";
      const cleanCampaign = utmCampaign ? utmCampaign.trim().slice(0, 50) : "";
      const fullSource = [cleanSource, cleanMedium, cleanCampaign]
        .filter(Boolean)
        .join(" / ")
        .slice(0, 120);
      sessionStorage.setItem("loomi_utm_source", fullSource);
      return fullSource;
    }

    // Cek sessionStorage dari kunjungan sebelumnya di sesi ini
    const stored = sessionStorage.getItem("loomi_utm_source");
    if (stored) return stored.slice(0, 120);

    // Cek referrer
    if (document.referrer) {
      if (document.referrer.includes("instagram.com")) return "instagram";
      if (document.referrer.includes("google.com")) return "google";
      if (document.referrer.includes("facebook.com")) return "facebook";
      if (document.referrer.includes("tiktok.com")) return "tiktok";
    }

    return "langsung";
  } catch {
    return "langsung";
  }
}

// 1. Membuka panel pesanan
export function trackBeginCheckout(params: {
  packageSlug: string;
  packageName: string;
  totalEstimate: number;
}) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "begin_checkout", {
        currency: "IDR",
        value: params.totalEstimate,
        items: [
          {
            item_id: params.packageSlug,
            item_name: params.packageName,
            price: params.totalEstimate,
          },
        ],
      });
    }

    if (window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: params.packageName,
        content_category: "Web Package",
        value: params.totalEstimate,
        currency: "IDR",
      });
    }
  }
}

// 2. Klik Pesan via WhatsApp (Lead Konversi Utama)
export function trackGenerateLead(params: {
  packageSlug: string;
  packageName: string;
  addOnCount: number;
  source: string;
  value?: number;
}) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        currency: "IDR",
        value: params.value || 0,
        item_id: params.packageSlug,
        item_name: params.packageName,
        add_on_count: params.addOnCount,
        lead_source: params.source,
      });
    }

    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: params.packageName,
        value: params.value || 0,
        currency: "IDR",
        lead_source: params.source,
      });
    }
  }
}

// 3. Klik Floating WhatsApp
export function trackFloatingWhatsAppClick() {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        lead_source: "floating_button",
      });
    }

    if (window.fbq) {
      window.fbq("track", "Contact", {
        lead_source: "floating_button",
      });
    }
  }
}

// 4. Klik Salin Pesan (Alternatif jika WA tidak terbuka)
export function trackCopyOrderMessage(packageSlug: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "copy_order_message", {
      item_id: packageSlug,
    });
  }
}

// 5. Klik Pilih Paket
export function trackSelectItem(packageSlug: string, packageName: string, price: number) {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", "select_item", {
        items: [
          {
            item_id: packageSlug,
            item_name: packageName,
            price: price,
          },
        ],
      });
    }

    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: packageName,
        content_ids: [packageSlug],
        content_type: "product",
        value: price,
        currency: "IDR",
      });
    }
  }
}

