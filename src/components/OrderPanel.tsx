"use client";

import { useState, useEffect, useId } from "react";
import { Package, AddOn, PackageSlug } from "@/content/types";
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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-panel-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E6DF] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Panel */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E8E6DF] bg-[#FAF9F5]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Formulir Pemesanan
            </span>
            <h2
              id="order-panel-title"
              className="text-xl sm:text-2xl font-heading font-medium text-[#0A0A0A] mt-0.5"
            >
              Rincian paket pilihan Anda.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-stone-300 text-stone-700 hover:text-black hover:bg-stone-200/50 flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
            aria-label="Tutup panel pesanan"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body Panel (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-[#0A0A0A]">
          {/* 1. Pemilihan Paket */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              1. Paket Website Pilihan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {packages.map((pkg) => {
                const isSelected = pkg.slug === selectedSlug;
                return (
                  <button
                    key={pkg.slug}
                    type="button"
                    onClick={() => setSelectedSlug(pkg.slug)}
                    className={`p-4 text-left rounded-2xl border transition-all min-h-[48px] ${
                      isSelected
                        ? "border-[#0A0A0A] bg-stone-100/70 ring-1 ring-[#0A0A0A]"
                        : "border-[#E8E6DF] bg-white hover:border-stone-400"
                    }`}
                  >
                    <div className="font-medium text-sm text-[#0A0A0A] font-heading">{pkg.name}</div>
                    <div className="text-xs font-semibold text-stone-700 mt-1">
                      Mulai {formatRupiah(pkg.priceFrom)}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] text-xs text-stone-600 leading-relaxed">
              <strong className="text-[#0A0A0A]">Fokus Paket:</strong> {currentPackage.summary}
            </div>
          </div>

          {/* 2. Pemilihan Add-on */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                2. Tambahan Layanan (Add-on Fleksibel)
              </label>
              <span className="text-xs text-stone-500">Pilih sesuai kebutuhan</span>
            </div>
            <div className="space-y-2.5">
              {availableAddOns.map((addon) => {
                const qty = selectedAddOnMap[addon.id] || 0;
                const isChecked = qty > 0;
                return (
                  <div
                    key={addon.id}
                    className={`p-3.5 rounded-2xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isChecked
                        ? "border-[#0A0A0A] bg-[#FAF9F5]"
                        : "border-[#E8E6DF] bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <input
                        type="checkbox"
                        id={`addon-${addon.id}`}
                        checked={isChecked}
                        onChange={() => handleToggleAddOn(addon)}
                        className="mt-0.5 h-4 w-4 rounded border-stone-300 text-[#0A0A0A] focus:ring-[#0A0A0A]"
                      />
                      <label htmlFor={`addon-${addon.id}`} className="text-sm cursor-pointer">
                        <span className="font-medium text-[#0A0A0A] block">{addon.name}</span>
                        <span className="text-xs text-stone-500 block mt-0.5">{addon.description}</span>
                        <span className="text-xs font-semibold text-[#0A0A0A] block mt-1">
                          +{formatRupiah(addon.priceFrom)} {addon.allowQuantity && "/ unit"}
                        </span>
                      </label>
                    </div>

                    {addon.allowQuantity && isChecked && (
                      <div className="flex items-center gap-2 self-end sm:self-center bg-white border border-[#E8E6DF] rounded-full px-2 py-1">
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(addon.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded-full text-sm font-bold"
                          aria-label={`Kurangi jumlah ${addon.name}`}
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold w-6 text-center">{qty}</span>
                        <button
                          type="button"
                          onClick={() => handleUpdateQuantity(addon.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-700 hover:bg-stone-100 rounded-full text-sm font-bold"
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

          {/* 3. Form Singkat Opsional (FR-06) */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              3. Profil Singkat Usaha (Opsional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={nameId} className="block text-xs font-medium text-stone-700 mb-1">
                  Nama Anda
                </label>
                <input
                  id={nameId}
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8E6DF] bg-white focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none"
                />
              </div>
              <div>
                <label htmlFor={businessId} className="block text-xs font-medium text-stone-700 mb-1">
                  Jenis Usaha / Brand
                </label>
                <input
                  id={businessId}
                  type="text"
                  placeholder="Contoh: Mebel Kayu Jati"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8E6DF] bg-white focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor={notesId} className="block text-xs font-medium text-stone-700 mb-1">
                Catatan Tambahan
              </label>
              <textarea
                id={notesId}
                rows={2}
                placeholder="Ceritakan singkat kebutuhan khusus atau tautan referensi yang Anda sukai..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E8E6DF] bg-white focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] outline-none resize-none"
              />
            </div>
          </div>

          {/* 4. Ringkasan & Pratinjau Pesan */}
          <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8E6DF] space-y-3">
            <div className="flex items-center justify-between border-b border-[#E8E6DF] pb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Total Estimasi Awal
              </span>
              <span className="text-xl sm:text-2xl font-heading font-medium text-[#0A0A0A]">
                Mulai {formatRupiah(totalEstimate)}
              </span>
            </div>
            <div>
              <span className="text-xs font-medium text-stone-600 block mb-1.5">
                Pratinjau Pesan WhatsApp Otomatis:
              </span>
              <pre className="text-xs bg-white p-3.5 rounded-xl border border-[#E8E6DF] text-stone-700 font-mono whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                {orderMessage}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer Panel: Tombol Aksi */}
        <div className="p-5 sm:p-7 border-t border-[#E8E6DF] bg-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            <p>Pemesanan langsung ke WhatsApp: <strong>+{siteConfig.whatsappNumber}</strong></p>
            <p className="text-stone-400">Tidak ada pembayaran di situs ini. Kesepakatan final dilakukan di chat.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-white border border-[#0A0A0A] hover:bg-stone-100 rounded-full transition-colors min-h-[48px] flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-stone-800 rounded-full shadow-sm transition-all min-h-[48px] flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <span>Kirim ke WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
