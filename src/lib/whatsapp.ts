import { siteConfig } from "@/content/site";
import { Package, AddOn } from "@/content/types";

export type OrderDetails = {
  packageItem: Package;
  selectedAddOns: {
    addOn: AddOn;
    quantity: number;
  }[];
  customerName?: string;
  businessType?: string;
  notes?: string;
  utmSource?: string;
};

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateTotalEstimate(
  packageItem: Package,
  selectedAddOns: { addOn: AddOn; quantity: number }[]
): number {
  const addOnsTotal = selectedAddOns.reduce((sum, item) => {
    return sum + item.addOn.priceFrom * item.quantity;
  }, 0);
  return packageItem.priceFrom + addOnsTotal;
}

export function buildOrderMessage(details: OrderDetails): string {
  const {
    packageItem,
    selectedAddOns,
    customerName,
    businessType,
    notes,
    utmSource,
  } = details;

  const totalEstimate = calculateTotalEstimate(packageItem, selectedAddOns);

  let addOnText = "Tidak ada";
  if (selectedAddOns.length > 0) {
    addOnText = selectedAddOns
      .map((item) => {
        if (item.addOn.allowQuantity && item.quantity > 1) {
          return `${item.addOn.name} (x${item.quantity})`;
        }
        return item.addOn.name;
      })
      .join(", ");
  }

  const lines: string[] = [
    `Halo ${siteConfig.name}, saya mau pesan paket ${packageItem.name}.`,
    "",
    `Paket: ${packageItem.name}`,
    `Add-on: ${addOnText}`,
    `Estimasi mulai dari: ${formatRupiah(totalEstimate)}`,
  ];

  // Kolom opsional yang kosong tidak dimunculkan di pesan (AC-02)
  if (customerName && customerName.trim() !== "") {
    lines.push(`Nama: ${customerName.trim()}`);
  }

  if (businessType && businessType.trim() !== "") {
    lines.push(`Bisnis: ${businessType.trim()}`);
  }

  if (notes && notes.trim() !== "") {
    lines.push(`Catatan: ${notes.trim()}`);
  }

  const source = utmSource && utmSource.trim() !== "" ? utmSource.trim() : "langsung";
  lines.push(`Sumber: ${source}`);

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string, customPhone?: string): string {
  const phone = customPhone || siteConfig.whatsappNumber;
  // encodeURIComponent memastikan karakter khusus (&, #, emoji, enter) tampil utuh (AC-03)
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export function buildGeneralWhatsAppUrl(sourceContext?: string): string {
  const context = sourceContext ? ` (${sourceContext})` : "";
  const message = `Halo ${siteConfig.name}, saya ingin konsultasi pembuatan website untuk usaha saya${context}.`;
  return buildWhatsAppUrl(message);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback untuk browser lawas / konteks non-secure
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      textArea.remove();
      return successful;
    }
  } catch {
    return false;
  }
}

