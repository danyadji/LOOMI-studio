"use client";

import { useState, useEffect, useId } from "react";
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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1f2410]/70 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-panel-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#c0c0b9] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Panel */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#c0c0b9] bg-[#fafaf7]">
          <div>
            <span className="text-xs font-semibold text-[#545c2c]">
              Formulir Pemesanan
            </span>
            <h2
              id="order-panel-title"
              className="text-xl sm:text-2xl font-heading font-medium tracking-[-0.015em] text-[#1f2410] mt-0.5"
            >
              Rincian paket pilihan Anda.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-full border border-[#838775] text-[#1f2410] hover:bg-[#d4ec8c] flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Tutup panel pesanan"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body Panel */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-[#1f2410]">
          {/* 1. Pemilihan Paket */}
          <div>
            <span className="block text-xs font-semibold text-[#545c2c] mb-3">
              1. Paket Website Pilihan
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {packages.map((pkg) => {
                const isSelected = pkg.slug === selectedSlug;
                return (
                  <button
                    key={pkg.slug}
                    type="button"
                    onClick={() => setSelectedSlug(pkg.slug)}
                    aria-pressed={isSelected}
                    className={`p-4 text-left rounded-xl border transition-colors min-h-[48px] ${
                      isSelected
                        ? "border-[#545c2c] bg-[#d4ec8c]/60 ring-1 ring-[#545c2c]"
                        : "border-[#838775] bg-white hover:bg-[#fafaf7]"
                    }`}
                  >
                    <div className="font-medium text-sm text-[#1f2410] font-heading">
                      {pkg.name}
                    </div>
                    <div className="text-xs font-semibold text-[#545c2c] mt-1">
                      Mulai {formatRupiah(pkg.priceFrom)}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 p-3.5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] text-xs text-[#5b5e4e] leading-relaxed">
              <strong className="text-[#1f2410]">Fokus Paket:</strong> {currentPackage.summary}
            </div>
          </div>

          {/* 2. Pemilihan Add-on */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="block text-xs font-semibold text-[#545c2c]">
                2. Tambahan Layanan (Add-on Opsional)
              </span>
              <span className="text-xs text-[#5b5e4e]">Pilih sesuai kebutuhan</span>
            </div>
            <div className="space-y-2.5">
              {availableAddOns.map((addon) => {
                const qty = selectedAddOnMap[addon.id] || 0;
                const isChecked = qty > 0;
                return (
                  <div
                    key={addon.id}
                    className={`p-3.5 rounded-xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isChecked
                        ? "border-[#545c2c] bg-[#d4ec8c]/35"
                        : "border-[#c0c0b9] bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <input
                        type="checkbox"
                        id={`addon-${addon.id}`}
                        checked={isChecked}
                        onChange={() => handleToggleAddOn(addon)}
                        className="mt-1 h-4 w-4 rounded border-[#838775] text-[#545c2c] focus:ring-[#545c2c]"
                      />
                      <label htmlFor={`addon-${addon.id}`} className="text-sm cursor-pointer flex-1">
                        <span className="font-medium text-[#1f2410] block">{addon.name}</span>
                        <span className="text-xs text-[#5b5e4e] block mt-0.5">{addon.description}</span>
                        <span className="text-xs font-semibold text-[#545c2c] block mt-1">
                          +{formatRupiah(addon.priceFrom)} {addon.allowQuantity && "/ unit"}
                        </span>
                      </label>
                    </div>

                    {addon.allowQuantity && isChecked && (
                      <div className="flex items-center gap-2 self-end sm:self-center bg-white border border-[#838775] rounded-full px-2 py-1">
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(addon.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1f2410] hover:bg-[#d4ec8c] rounded-full text-sm font-bold"
                          aria-label={`Kurangi jumlah ${addon.name}`}
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold w-6 text-center">{qty}</span>
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(addon.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1f2410] hover:bg-[#d4ec8c] rounded-full text-sm font-bold"
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

          {/* 3. Form Singkat Opsional */}
          <div>
            <span className="block text-xs font-semibold text-[#545c2c] mb-3">
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
                  placeholder="Masukkan nama Anda"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#838775] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/70 focus:border-[#545c2c] focus:ring-1 focus:ring-[#545c2c]"
                />
              </div>
              <div>
                <label htmlFor={businessId} className="block text-xs font-medium text-[#1f2410] mb-1">
                  Jenis Usaha / Brand
                </label>
                <input
                  id={businessId}
                  type="text"
                  placeholder="Misal: Mebel, Klinik, Kuliner"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#838775] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/70 focus:border-[#545c2c] focus:ring-1 focus:ring-[#545c2c]"
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
                placeholder="Ceritakan singkat kebutuhan khusus atau tautan referensi website"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#838775] bg-white text-[#1f2410] placeholder:text-[#5b5e4e]/70 focus:border-[#545c2c] focus:ring-1 focus:ring-[#545c2c] resize-none"
              />
            </div>
          </div>

          {/* 4. Ringkasan & Pratinjau Pesan */}
          <div className="p-5 rounded-xl bg-[#fafaf7] border border-[#c0c0b9] space-y-3">
            <div className="flex items-center justify-between border-b border-[#c0c0b9] pb-3">
              <span className="text-xs font-semibold text-[#5b5e4e]">
                Total Estimasi Awal
              </span>
              <span className="text-xl sm:text-2xl font-heading font-medium text-[#545c2c]">
                Mulai {formatRupiah(totalEstimate)}
              </span>
            </div>
            <div>
              <span className="text-xs font-medium text-[#5b5e4e] block mb-1.5">
                Pratinjau Pesan WhatsApp Otomatis:
              </span>
              <pre className="text-xs bg-white p-3.5 rounded-xl border border-[#c0c0b9] text-[#1f2410] font-mono whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                {orderMessage}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer Panel */}
        <div className="p-5 sm:p-7 border-t border-[#c0c0b9] bg-[#fafaf7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#5b5e4e] text-center sm:text-left">
            <p>
              Pemesanan langsung ke WhatsApp:{" "}
              <strong className="text-[#1f2410]">+{siteConfig.whatsappNumber}</strong>
            </p>
            <p className="mt-0.5">Tidak ada pembayaran di situs ini. Kesepakatan dilakukan di chat.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="px-5 py-3 text-xs sm:text-sm font-medium text-[#545c2c] bg-transparent border border-[#545c2c] hover:bg-[#d4ec8c] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-[#545c2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Salin Pesan</span>
                </>
              )}
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 text-xs sm:text-sm font-medium text-white bg-[#545c2c] hover:bg-[#8fa65b] hover:text-[#1f2410] rounded-full transition-colors min-h-[48px] flex items-center justify-center flex-1 sm:flex-initial"
            >
              Kirim ke WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
