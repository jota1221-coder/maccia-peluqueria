"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Gallery({
  images,
  aspect = "h-64 lg:h-80 w-full",
  intervalMs = 3500,
}: {
  images: { src: string; alt: string; position?: string }[];
  aspect?: string;
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduced || images.length <= 1) return;
    const t = setInterval(() => setI((n) => (n + 1) % images.length), intervalMs);
    return () => clearInterval(t);
  }, [paused, images.length, intervalMs]);

  return (
    <div
      className={`relative overflow-hidden ${aspect}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={idx === 0}
          sizes="100vw"
          className="object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: idx === i ? 1 : 0, objectPosition: img.position ?? "center" }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 inset-x-0 z-10 flex items-center justify-center gap-2">
          {images.map((img, idx) => (
            <button
              key={img.src}
              aria-label={`Ver foto ${idx + 1}`}
              onClick={() => setI(idx)}
              className="h-2 w-2 rounded-full transition-all"
              style={{
                background: idx === i ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                transform: idx === i ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
