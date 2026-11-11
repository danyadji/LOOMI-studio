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
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=75",
    title: "Kayu Ukir Lestari",
    description: "Katalog produk mebel jati Jepara terhubung langsung ke pesanan WhatsApp.",
    badge: "Mebel & Ukir",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=75",
    title: "Klinik Pratama Sehati",
    description: "Company profile terstruktur dengan integrasi jadwal dokter dan janji temu pasien.",
    badge: "Kesehatan",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=75",
    title: "Roastery Kopi Senja",
    description: "Landing page penjualan biji kopi sangrai dan paket hampers siap promosi.",
    badge: "F&B / Kopi",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=75",
    title: "Dapur Roti Artisan",
    description: "Etalase digital roti segar harian dengan format rekap order rapi ke ponsel penjual.",
    badge: "Kuliner",
    href: "/portofolio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=75",
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
  // Layar Ponsel (< 640px): Responsif, sensitivitas geser tinggi
  if (width > 0 && width < 640) {
    const cardWidth = 208;
    const scaleReduction = 0.06;
    const halfVisualCard = (cardWidth * (1 - scaleReduction)) / 2;
    const targetX = Math.max(90, Math.round(width / 2 - halfVisualCard + 10));

    return {
      distanceDivisor: 80,
      velocityDivisor: 320,
      sensitivity: 90,
      xMultiplier: targetX,
      yMultiplier: 14,
      rotationMultiplier: 5,
      scaleReduction,
    };
  }

  // Khusus tablet & layar 753px (640px - 840px):
  // Menempel penuh ke tepi layar tanpa sisa gap
  if (width >= 640 && width <= 840) {
    const cardWidth = 256;
    const scaleReduction = 0.08;
    const halfVisualCard = (cardWidth * (1 - scaleReduction)) / 2;
    const targetX = Math.round(width / 2 - halfVisualCard + 16);

    return {
      distanceDivisor: 95,
      velocityDivisor: 360,
      sensitivity: 105,
      xMultiplier: targetX,
      yMultiplier: 18,
      rotationMultiplier: 6,
      scaleReduction,
    };
  }

  // Tablet landscape (841px - 1024px)
  if (width > 840 && width < 1024) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 420,
      sensitivity: 130,
      xMultiplier: 230,
      yMultiplier: 22,
      rotationMultiplier: 7,
      scaleReduction: 0.1,
    };
  }

  // Desktop (>= 1024px) atau SSR default
  return {
    distanceDivisor: 140,
    velocityDivisor: 480,
    sensitivity: 150,
    xMultiplier: 220,
    yMultiplier: 28,
    rotationMultiplier: 8,
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
  const [activeIndex, setActiveIndex] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update indikator aktif secara efisien
  React.useEffect(() => {
    return scrollProgress.on("change", (latest) => {
      let idx = Math.round(latest) % total;
      if (idx < 0) idx += total;
      setActiveIndex(idx);
    });
  }, [scrollProgress, total]);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const snapToTarget = React.useCallback(
    (targetVal: number) => {
      animate(scrollProgress, targetVal, {
        type: "spring",
        stiffness: 280,
        damping: 26,
        mass: 0.6,
      });
    },
    [scrollProgress],
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

    // Gestur geser ringan minimal 35px langsung menggeser 1 kartu
    if (Math.abs(dragDistance) > 35 && totalShift === 0) {
      totalShift = dragDistance < 0 ? 1 : -1;
    }

    // Batasi pergeseran maksimal 1 kartu per gestur agar tidak glitch
    totalShift = Math.max(-1, Math.min(1, totalShift));

    const target = Math.round(startProgress.current) + totalShift;
    snapToTarget(target);
  };

  const goToSlide = (targetIndex: number) => {
    const current = scrollProgress.get();
    const currentRound = Math.round(current);
    let diff = (targetIndex - (currentRound % total)) % total;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    snapToTarget(currentRound + diff);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-4 sm:py-8 bg-transparent overflow-hidden select-none px-0 mx-0",
        className,
      )}
    >
      <div className="relative w-full h-80 sm:h-112 lg:h-128 flex items-center justify-center overflow-visible">
        {/* Permukaan Drag Sentuh Ringan dengan touchAction pan-y agar scroll halaman tetap lancar */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
          aria-label="Geser ke samping untuk melihat contoh proyek website"
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

      {/* Kontrol Navigasi & Indikator Titik */}
      <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6 z-20">
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1 < 0 ? total - 1 : activeIndex - 1)}
          className="p-2.5 rounded-full border border-[#E8E6DF] bg-white hover:bg-stone-100 text-[#0A0A0A] shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#0A0A0A] active:scale-95"
          aria-label="Proyek sebelumnya"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#E8E6DF] shadow-xs">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-[#0A0A0A]"
                  : "w-1.5 bg-stone-300 hover:bg-stone-500",
              )}
              aria-label={`Buka slide proyek ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSlide((activeIndex + 1) % total)}
          className="p-2.5 rounded-full border border-[#E8E6DF] bg-white hover:bg-stone-100 text-[#0A0A0A] shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#0A0A0A] active:scale-95"
          aria-label="Proyek berikutnya"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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
  // Modulo melingkar stabil tanpa jeda atau loncatan nilai
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
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
    return Math.min(absO * config.yMultiplier, 50);
  });
  const scale = useTransform(
    offset,
    (o) => Math.max(0.75, 1 - Math.abs(o) * config.scaleReduction),
  );

  // Mencegah pop-in: kartu memudar mulus ke 0 sebelum mencapai titik putaran (offset ±2)
  const opacity = useTransform(
    offset,
    [-2, -1.6, -1, 0, 1, 1.6, 2],
    [0, 0.45, 0.95, 1, 0.95, 0.45, 0],
  );

  // Hirarki z-index presisi dan terprediksi
  const zIndex = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO > 1.8) return 0;
    return Math.round((2 - absO) * 10);
  });

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
      className={cn(
        "absolute rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl group pointer-events-none transform-gpu will-change-transform",
        "w-52 h-72 sm:w-64 sm:h-96 lg:w-72 lg:h-[26rem]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={slide.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Dimmer overlay dinamis */}
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

      {/* Gradien kontras teks */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

      <Badge className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A] border-none shadow-xs">
        {slide.badge}
      </Badge>

      <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 text-white">
        <p className="text-base sm:text-xl font-heading font-medium leading-snug mb-1 drop-shadow-md text-white">
          {slide.title}
        </p>
        <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
          {slide.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
