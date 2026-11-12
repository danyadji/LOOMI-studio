"use client";

import { useState } from "react";
import Link from "next/link";
import { faqItems } from "@/content/faq";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { getFaqJsonLd, getBreadcrumbJsonLd } from "@/lib/seo";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "hosting-domain": true,
    "source-code": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCategory === "semua"
      ? faqItems
      : faqItems.filter((item) => item.category === selectedCategory);

  const breadcrumbs = [
    { name: "Beranda", url: "/" },
    { name: "FAQ", url: "/faq" },
  ];

  const categories = [
    { id: "semua", name: "Semua Kategori" },
    { id: "umum", name: "Umum & Pemesanan" },
    { id: "paket", name: "Paket & Revisi" },
    { id: "teknis", name: "Hosting & Kode Sumber" },
    { id: "pembayaran", name: "Skema Pembayaran" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <div className="bg-[#fafaf7] border-b border-[#c0c0b9] py-16 lg:py-24">
        <div className="max-w-[1224px] mx-auto px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-[#5b5e4e]">
              <li>
                <Link href="/" className="hover:text-[#1f2410]">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#545c2c]" aria-current="page">
                FAQ
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[38px] sm:text-5xl lg:text-[60px] font-heading font-normal tracking-[-0.015em] text-[#1f2410] leading-[1.15]">
              Pertanyaan yang sering diajukan.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#5b5e4e] leading-relaxed">
              Kami menyusun jawaban transparan untuk pertanyaan penting seputar kepemilikan kode sumber, domain, hosting, mekanisme revisi, dan sistem pembayaran.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Category Tabs Pill Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-12" role="tablist" aria-label="Kategori Pertanyaan">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors min-h-[44px] ${
                  selectedCategory === cat.id
                    ? "bg-[#545c2c] text-white"
                    : "bg-[#fafaf7] border border-[#838775] text-[#1f2410] hover:bg-[#d4ec8c]"
                }`}
                role="tab"
                aria-selected={selectedCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="divide-y divide-[#c0c0b9] border-t border-b border-[#c0c0b9]">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div key={faq.id} className="py-6 sm:py-7">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left flex items-start justify-between gap-6 rounded-lg min-h-[48px] py-1"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-heading font-normal text-lg sm:text-[22px] text-[#1f2410] leading-[1.25] tracking-[-0.015em]">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[#545c2c] transform transition-transform duration-200 text-2xl font-light shrink-0 leading-none mt-1 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="pt-3 text-base text-[#5b5e4e] leading-relaxed pr-8"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bantuan Langsung */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#fafaf7] border border-[#c0c0b9] text-center">
            <h3 className="text-[22px] font-heading font-normal text-[#1f2410] tracking-[-0.015em]">
              Punya pertanyaan lain yang belum terjawab?
            </h3>
            <p className="mt-2 text-sm text-[#5b5e4e]">
              Jangan ragu untuk bertanya langsung kepada kami via WhatsApp. Kami siap menjelaskan dengan ramah.
            </p>
            <a
              href={buildGeneralWhatsAppUrl("Pertanyaan Khusus di FAQ")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium bg-[#545c2c] hover:bg-[#8fa65b] text-white hover:text-[#1f2410] transition-colors min-h-[48px]"
            >
              Tanyakan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
