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

      <div className="bg-[#FAF9F5] border-b border-[#E8E6DF] py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-stone-500">
              <li>
                <Link href="/" className="hover:text-black">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="font-semibold text-[#0A0A0A]" aria-current="page">
                FAQ
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-heading font-medium tracking-tight text-[#0A0A0A] leading-tight">
              Pertanyaan yang sering diajukan.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed">
              Kami menyusun jawaban transparan untuk pertanyaan penting seputar kepemilikan kode sumber, domain, hosting, sistem revisi, dan skema pembayaran.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Category Tabs Pill Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-12" role="tablist" aria-label="Kategori Pertanyaan">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors min-h-[44px] ${
                  selectedCategory === cat.id
                    ? "bg-[#0A0A0A] text-white shadow-sm"
                    : "bg-[#FAF9F5] border border-[#E8E6DF] text-stone-700 hover:border-stone-400"
                }`}
                role="tab"
                aria-selected={selectedCategory === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List ala Epidemic Sound */}
          <div className="divide-y divide-[#E8E6DF] border-t border-b border-[#E8E6DF]">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div key={faq.id} className="py-6 sm:py-8 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left flex items-start justify-between gap-6 focus-visible:ring-2 focus-visible:ring-[#0A0A0A] rounded-lg min-h-[48px]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-heading font-medium text-xl sm:text-2xl text-[#0A0A0A] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[#0A0A0A] transform transition-transform duration-200 text-2xl font-light shrink-0 leading-none mt-1 ${
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
                      className="pt-4 text-base text-stone-600 leading-relaxed pr-8"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bantuan Langsung */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FAF9F5] border border-[#E8E6DF] text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#0A0A0A]">
              Punya pertanyaan lain yang belum terjawab?
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Jangan ragu untuk bertanya langsung kepada kami via WhatsApp. Kami siap menjelaskan dengan ramah.
            </p>
            <a
              href={buildGeneralWhatsAppUrl("Pertanyaan Khusus di FAQ")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-[#0A0A0A] hover:bg-stone-800 text-white transition-colors min-h-[48px]"
            >
              Tanyakan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
