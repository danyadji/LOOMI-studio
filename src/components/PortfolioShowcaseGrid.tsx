"use client";

import { useState } from "react";
import { PortfolioItem } from "@/content/types";
import { NotchedProjectCard } from "@/components/ui/notched-project-card";
import PortfolioDetailModal from "@/components/PortfolioDetailModal";

interface PortfolioShowcaseGridProps {
  items: PortfolioItem[];
  surface?: string;
  descriptionMode?: "highlight" | "businessType";
  sampleBadge?: string;
  priorityFirst?: boolean;
}

/**
 * Interactive 3-column grid of NotchedProjectCard items that opens a multi-photo
 * project detail showcase modal on click.
 */
export default function PortfolioShowcaseGrid({
  items,
  surface = "#f5f4f0",
  descriptionMode = "highlight",
  sampleBadge = "Proyek Konsep",
  priorityFirst = false,
}: PortfolioShowcaseGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
        {items.map((item, idx) => (
          <NotchedProjectCard
            key={item.slug}
            onClick={() => setSelectedItem(item)}
            title={`${item.title}.`}
            description={
              descriptionMode === "businessType"
                ? item.businessType
                : item.highlights[0]
            }
            image={item.image}
            imageAlt={`Contoh desain website ${item.title} (${item.businessType})`}
            badge={item.isSample ? sampleBadge : item.businessType}
            tags={item.scope}
            surface={surface}
            accent="#3f5b1e"
            accentForeground="#ffffff"
            priority={priorityFirst && idx === 0}
          />
        ))}
      </div>

      <PortfolioDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
