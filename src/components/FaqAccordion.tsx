"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FaqItem } from "@/content/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIds?: string[];
  className?: string;
}

/** Accessible multi-item FAQ accordion using hairline dividers and plus/close rotation. */
export default function FaqAccordion({
  items,
  defaultOpenIds = [],
  className,
}: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const id of defaultOpenIds) {
      initial[id] = true;
    }
    return initial;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className={cn(
        "divide-y divide-[#c0c0b9] border-t border-b border-[#c0c0b9]",
        className,
      )}
    >
      {items.map((faq) => {
        const isOpen = !!openIds[faq.id];
        const triggerId = `faq-trigger-${faq.id}`;
        const panelId = `faq-answer-${faq.id}`;

        return (
          <div key={faq.id} className="py-5 sm:py-6">
            <button
              id={triggerId}
              type="button"
              onClick={() => toggleItem(faq.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="group flex min-h-[48px] w-full items-start justify-between gap-4 rounded-[2px] py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#545c2c] focus-visible:ring-offset-2"
            >
              <span className="font-heading text-lg sm:text-[22px] font-medium leading-[1.28] tracking-[-0.015em] text-[#1f2410] transition-colors group-hover:text-[#3f5b1e]">
                {faq.question}
              </span>
              <span
                className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-[2px] text-[#3f5b1e] transition-colors group-hover:bg-[#d4ec8c]/60"
                aria-hidden="true"
              >
                <Plus
                  className={cn(
                    "size-5 transition-transform duration-200 motion-reduce:transition-none",
                    isOpen && "rotate-45",
                  )}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none",
                isOpen
                  ? "visible grid-rows-[1fr] opacity-100"
                  : "invisible grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-2.5 pr-4 sm:pr-10 text-sm sm:text-base font-light leading-relaxed text-[#5b5e4e]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

