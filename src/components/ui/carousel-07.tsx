"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
  href?: string;
}

const defaultSlides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    title: "Kayu Ukir Lestari",
    description: "Katalog produk mebel jati Jepara terhubung langsung ke pesanan WhatsApp.",
    badge: "Mebel & Ukir",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    title: "Klinik Pratama Sehati",
    description: "Company profile terstruktur dengan integrasi jadwal dokter dan janji temu pasien.",
    badge: "Kesehatan",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    title: "Roastery Kopi Senja",
    description: "Landing page penjualan biji kopi sangrai dan paket hampers siap promosi.",
    badge: "F&B / Kopi",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    title: "Dapur Roti Artisan",
    description: "Etalase digital roti segar harian dengan format rekap order rapi ke ponsel penjual.",
    badge: "Kuliner",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    title: "Batik Tenun Pesisir",
    description: "Website galeri busana tradisional nusantara dengan pemuatan cepat di layar smartphone.",
    badge: "Kriya & Mode",
    href: "/portofolio",
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  // Mobile screens (< 640px)
  if (width > 0 && width < 640) {
    const cardWidth = 208;
    const scaleReduction = 0.06;
    const halfVisualCard = (cardWidth * (1 - scaleReduction)) / 2;
    const targetX = Math.max(90, Math.round(width / 2 - halfVisualCard + 10));

    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: targetX,
      yMultiplier: 16,
      rotationMultiplier: 6,
      scaleReduction,
    };
  }

  // Khusus ukuran tablet & 753px (640px - 840px):
  // Kartu menempel di pinggir layar secara penuh tanpa celah/gap
  if (width >= 640 && width <= 840) {
    const cardWidth = 256;
    const scaleReduction = 0.08;
    const halfVisualCard = (cardWidth * (1 - scaleReduction)) / 2;
    const targetX = Math.round(width / 2 - halfVisualCard + 16);

    return {
      distanceDivisor: 150,
      velocityDivisor: 600,
      sensitivity: 200,
      xMultiplier: targetX,
      yMultiplier: 20,
      rotationMultiplier: 7,
      scaleReduction,
    };
  }

  // Tablet landscape (841px - 1024px)
  if (width > 840 && width < 1024) {
    return {
      distanceDivisor: 170,
      velocityDivisor: 700,
      sensitivity: 220,
      xMultiplier: 230,
      yMultiplier: 26,
      rotationMultiplier: 9,
      scaleReduction: 0.1,
    };
  }

  // Desktop (>= 1024px) atau SSR default
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 200,
    yMultiplier: 36,
    rotationMultiplier: 10,
    scaleReduction: 0.12,
  };
};

export interface CarouselStackedProps {
  slides?: Slide[];
  className?: string;
}

const CarouselStacked = ({ slides = defaultSlides, className }: CarouselStackedProps) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-6 sm:py-10 bg-transparent overflow-hidden select-none",
        className,
      )}
    >
      <div className="relative w-full h-80 sm:h-112 lg:h-128 flex items-center justify-center overflow-visible">
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
          aria-label="Geser untuk melihat contoh proyek website"
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card = ({ slide, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10),
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      className={cn(
        "absolute rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group pointer-events-none",
        "w-52 h-72 sm:w-64 sm:h-96 lg:w-72 lg:h-[26rem]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={slide.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.55, 0.25, 0, 0.25, 0.55],
          ),
        }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* Gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

      <Badge className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] border-none shadow-sm">
        {slide.badge}
      </Badge>

      <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 text-white">
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-base sm:text-xl font-heading font-medium leading-snug mb-1 drop-shadow-md text-white"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-xs text-stone-200 line-clamp-2 leading-relaxed"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;

