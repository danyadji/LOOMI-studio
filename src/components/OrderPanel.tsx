"use client";

import { useState, useEffect, useId } from "react";
import { Check, Copy, ArrowUpRight, X } from "lucide-react";
import { AddOn, PackageSlug } from "@/content/types";
import { packages, addOns } from "@/content/packages";
import { siteConfig } from "@/content/site";
import {
  formatRupiah,
  calculateTotalEstimate,
  buildOrderMessage,
  buildWhatsAppUrl,
  copyToClipboard,
} from "@/lib/whatsapp";
import {
  trackBeginCheckout,
  trackGenerateLead,
  trackCopyOrderMessage,
  getStoredUtmSource,
} from "@/lib/analytics";

interface OrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageSlug?: PackageSlug;
}

export default function OrderPanel({
  isOpen,
  onClose,
  initialPackageSlug,
}: OrderPanelProps) {
  const [selectedSlug, setSelectedSlug] = useState<PackageSlug>(
    initialPackageSlug || "company-profile"
  );
  const [selectedAddOnMap, setSelectedAddOnMap] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [utmSource, setUtmSource] = useState("langsung");

  const nameId = useId();
  const businessId = useId();
  const notesId = useId();

  useEffect(() => {
    if (initialPackageSlug) {
      setSelectedSlug(initialPackageSlug);
    }
  }, [initialPackageSlug]);

  useEffect(() => {
    if (isOpen) {
      const source = getStoredUtmSource();
      setUtmSource(source);

      const currentPkg = packages.find((p) => p.slug === selectedSlug) || packages[0];
      const activeAddOns = Object.entries(selectedAddOnMap)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => ({
          addOn: addOns.find((a) => a.id === id)!,
          quantity: qty,
        }))
        .filter((item) => item.addOn !== undefined);

      const total = calculateTotalEstimate(currentPkg, activeAddOns);

      trackBeginCheckout({
        packageSlug: currentPkg.slug,
        packageName: currentPkg.name,
        totalEstimate: total,
      });
    }
  }, [isOpen, selectedSlug, selectedAddOnMap]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPackage =
    packages.find((p) => p.slug === selectedSlug) || packages[0];

  const availableAddOns = addOns.filter((addon) =>
    currentPackage.addOnIds.includes(addon.id)
  );

  const activeAddOnsList = Object.entries(selectedAddOnMap)
    .filter(([id, qty]) => qty > 0 && currentPackage.addOnIds.includes(id))
    .map(([id, qty]) => ({
      addOn: addOns.find((a) => a.id === id)!,
      quantity: qty,
    }))
    .filter((item) => item.addOn !== undefined);

  const totalEstimate = calculateTotalEstimate(currentPackage, activeAddOnsList);

  const orderMessage = buildOrderMessage({
    packageItem: currentPackage,
    selectedAddOns: activeAddOnsList,
    customerName,
    businessType,
    notes,
    utmSource,
  });

  const waUrl = buildWhatsAppUrl(orderMessage);

  const handleToggleAddOn = (addon: AddOn) => {
    setSelectedAddOnMap((prev) => {
      const currentQty = prev[addon.id] || 0;
      if (currentQty > 0) {
        const next = { ...prev };
        delete next[addon.id];
        return next;
      } else {
        return { ...prev, [addon.id]: 1 };
      }
    });
  };

  const handleUpdateQuantity = (addonId: string, delta: number) => {
    setSelectedAddOnMap((prev) => {
      const currentQty = prev[addonId] || 0;
      const nextQty = Math.max(0, currentQty + delta);
      if (nextQty === 0) {
        const next = { ...prev };
        delete next[addonId];
        return next;
      }
      return { ...prev, [addonId]: nextQty };
    });
  };

  const handleWhatsAppClick = () => {
    trackGenerateLead({
      packageSlug: currentPackage.slug,
      packageName: currentPackage.name,
      addOnCount: activeAddOnsList.length,
      source: utmSource,
      value: totalEstimate,
    });
  };

  const handleCopyMessage = async () => {
    const success = await copyToClipboard(orderMessage);
    if (success) {
      setCopied(true);
      trackCopyOrderMessage(currentPackage.slug);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1f2410]/75 backdrop-blur-[2px] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-panel-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-[2px] shadow-2xl border border-[#c0c0b9] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Panel */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#c0c0b9] bg-[#fafaf7]">
          <div>
            <span className="text-[11px] font-semibold text-[#545c2c] uppercase tracking-wider block">
              Formulir Pemesanan
            </span>
            <h2
              id="order-panel-title"
              className="text-lg sm:text-2xl font-heading font-medium tracking-[-0.015em] text-[#1f2410] mt-0.5"
            >
              Rincian paket pilihan Anda.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-[2px] border border-[#c0c0b9] text-[#1f2410] hover:border-[#1f2410] hover:bg-white flex items-center justify-center transition-colors min-w-[40px] min-h-[40px]"
            aria-label="Tutup panel pesanan"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body Panel */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#1f2410]">
          {/* 1. Pemilihan Paket */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#545c2c] mb-2.5">
              1. Pilih Paket Website
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {packages.map((pkg) => {
                const isSelected = pkg.slug === selectedSlug;
                return (
                  <button
                    key={pkg.slug}
                    type="button"
                    onClick={() => setSelectedSlug(pkg.slug)}
                    aria-pressed={isSelected}
                    className={`p-3.5 text-left rounded-[2px] border transition-all min-h-[48px] ${
                      isSelected
                        ? "border-[#1f2410] bg-[#eef2e2] ring-1 ring-[#1f2410]"
                        : "border-[#c0c0b9] bg-white hover:border-[#838775] hover:bg-[#fafaf7]"
                    }`}
                  >
                    <div className="font-medium text-xs sm:text-sm text-[#1f2410] leading-snug">
                      {pkg.name}
                    </div>
                    <div className="text-xs font-semibold text-[#545c2c] mt-1">
                      Mulai {formatRupiah(pkg.priceFrom)}
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-[#5b5e4e] font-light leading-relaxed">
              <strong className="text-[#1f2410] font-medium">Fokus:</strong> {currentPackage.summary}
            </p>
          </div>

          {/* 2. Pemilihan Add-on */}
          {availableAddOns.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#545c2c]">
                  2. Tambahan Layanan (Add-on Opsional)
                </span>
                <span className="text-[11px] text-[#5b5e4e]">Pilih jika dibutuhkan</span>
              </div>
              <div className="space-y-2">
                {availableAddOns.map((addon) => {
                  const qty = selectedAddOnMap[addon.id] || 0;
                  const isChecked = qty > 0;
                  return (
                    <div
                      key={addon.id}
                      className={`p-3 rounded-[2px] border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                        isChecked
                          ? "border-[#545c2c] bg-[#eef2e2]/60"
                          : "border-[#c0c0b9] bg-white hover:border-[#838775]"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 flex-1">
                        <input
                          type="checkbox"
                          id={`addon-${addon.id}`}
                          checked={isChecked}
                          onChange={() => handleToggleAddOn(addon)}
                          className="mt-0.5 h-4 w-4 rounded-[2px] border-[#838775] text-[#3f5b1e] focus:ring-[#3f5b1e]"
                        />
                        <label htmlFor={`addon-${addon.id}`} className="text-xs sm:text-sm cursor-pointer flex-1">
                          <span className="font-medium text-[#1f2410] block">{addon.name}</span>
                          <span className="text-xs text-[#5b5e4e] block mt-0.5 font-light">{addon.description}</span>
                          <span className="text-xs font-semibold text-[#545c2c] block mt-1">
                            +{formatRupiah(addon.priceFrom)} {addon.allowQuantity && "/ unit"}
                          </span>
                        </label>
                      </div>

                      {addon.allowQuantity && isChecked && (
                        <div className="flex items-center gap-1.5 self-end sm:self-center bg-white border border-[#c0c0b9] rounded-[2px] px-2 py-0.5">
                          <button
                            type="button"
                            onClick={() => handleUpdateQuantity(addon.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-[#1f2410] hover:bg-[#fafaf7] text-xs font-bold"
                            aria-label={`Kurangi jumlah ${addon.name}`}
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold w-5 text-center">{qty}</span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQuantity(addon.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#1f2410] hover:bg-[#fafaf7] text-xs font-bold"
                            aria-label={`Tambah jumlah ${addon.name}`}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Form Singkat Opsional */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#545c2c] mb-2.5">
              3. Profil Singkat Usaha (Opsional)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={nameId} className="block text-xs font-medium text-[#1f2410] mb-1">
                  Nama Anda
                </label>
                <input
                  id={nameId}
                  type="text"
                  placeholder="Nama pemesan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-[2px] border border-[#c0c0b9] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/60 focus:border-[#1f2410] focus:ring-1 focus:ring-[#1f2410] transition-colors"
                />
              </div>
              <div>
                <label htmlFor={businessId} className="block text-xs font-medium text-[#1f2410] mb-1">
                  Jenis Usaha / Brand
                </label>
                <input
                  id={businessId}
                  type="text"
                  placeholder="Misal: Mebel Jati, Klinik, Kafe"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-[2px] border border-[#c0c0b9] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/60 focus:border-[#1f2410] focus:ring-1 focus:ring-[#1f2410] transition-colors"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor={notesId} className="block text-xs font-medium text-[#1f2410] mb-1">
                Catatan Tambahan
              </label>
              <textarea
                id={notesId}
                rows={2}
                placeholder="Ceritakan singkat kebutuhan khusus atau tautan referensi yang disukai"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-[2px] border border-[#c0c0b9] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/60 focus:border-[#1f2410] focus:ring-1 focus:ring-[#1f2410] resize-none transition-colors"
              />
            </div>
          </div>

          {/* 4. Ringkasan Pilihan & Total Estimasi (Ringkas & Bersih) */}
          <div className="p-4 rounded-[2px] bg-[#fafaf7] border border-[#c0c0b9] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#5b5e4e] font-semibold block">
                  Ringkasan Pilihan:
                </span>
                <p className="text-sm font-medium text-[#1f2410] mt-0.5">
                  {currentPackage.name}
                  {activeAddOnsList.length > 0 && (
                    <span className="text-xs text-[#545c2c] font-normal ml-1.5">
                      (+{activeAddOnsList.length} Add-on)
                    </span>
                  )}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#5b5e4e] font-semibold block">
                  Total Estimasi Awal
                </span>
                <span className="text-lg sm:text-xl font-heading font-medium text-[#1f2410]">
                  Mulai {formatRupiah(totalEstimate)}
                </span>
              </div>
            </div>

            {/* Draf pesan dibuat collapsible opsional agar tidak membebani pembaca */}
            <details className="group pt-2 border-t border-[#c0c0b9]/60 text-xs text-[#5b5e4e]">
              <summary className="cursor-pointer hover:text-[#1f2410] font-medium flex items-center justify-between select-none text-[11px] list-none">
                <span className="underline underline-offset-2">Lihat draf teks pesan yang akan dikirim</span>
                <span className="text-[10px] text-[#838775] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <pre className="mt-2 text-[11px] bg-white p-3 rounded-[2px] border border-[#c0c0b9] text-[#1f2410] font-sans whitespace-pre-wrap leading-relaxed max-h-28 overflow-y-auto">
                {orderMessage}
              </pre>
            </details>
          </div>
        </div>

        {/* Footer Panel */}
        <div className="p-4 sm:p-6 border-t border-[#c0c0b9] bg-[#fafaf7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#5b5e4e] text-center sm:text-left">
            <p className="font-medium text-[#1f2410]">
              Pemesanan langsung via WhatsApp:{" "}
              <span className="text-[#3f5b1e]">+{siteConfig.whatsappNumber}</span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#838775]">
              Tanpa pembayaran di situs. Konsultasi dan kesepakatan final dilakukan di chat.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="px-4 py-3 text-xs sm:text-sm font-medium text-[#1f2410] bg-white border border-[#838775] hover:border-[#1f2410] hover:bg-[#fafaf7] rounded-[2px] transition-colors min-h-[46px] flex items-center justify-center gap-1.5"
              aria-label="Salin format pesan pemesanan"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-[#3f5b1e]" aria-hidden="true" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-[#5b5e4e]" aria-hidden="true" />
                  <span>Salin Pesan</span>
                </>
              )}
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#3f5b1e] hover:bg-[#d4ec8c] hover:text-[#1f2410] rounded-[2px] transition-colors min-h-[46px] flex items-center justify-center gap-1.5 flex-1 sm:flex-initial shadow-sm"
            >
              <span>Kirim ke WhatsApp</span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
