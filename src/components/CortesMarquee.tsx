"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CorteImg = { src: string; alt: string; position?: string };

export function CortesMarquee({ images }: { images: CorteImg[] }) {
  const [open, setOpen] = useState<CorteImg | null>(null);
  const track = [...images, ...images];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="overflow-hidden">
        <div className="marquee-track" style={open ? { animationPlayState: "paused" } : undefined}>
          {track.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(img)}
              aria-label={`Ver ${img.alt} en grande`}
              className="photo-frame relative shrink-0 w-60 sm:w-[300px] lg:w-[340px] aspect-[4/3] cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                className="photo-fg object-cover"
                style={{ objectPosition: img.position ?? "center" }}
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl leading-none"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={open.src}
            alt={open.alt}
            className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain cursor-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
