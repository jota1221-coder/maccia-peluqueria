"use client";

import { useEffect, useRef, useState } from "react";
import { LogoLight } from "@/components/LogoLight";
import { WHATSAPP_LINK } from "@/lib/content";

export function HeaderBlanco() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 96);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`panel-dark nav-hide fixed top-0 inset-x-0 z-50 bg-ink-950/90 backdrop-blur-sm border-b hairline ${
        hidden ? "nav-hide-up" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <LogoLight size={34} />
        <div className="hidden md:flex h-full items-stretch gap-8 eyebrow2">
          <a href="#servicios" className="nav-link2 flex items-center transition-colors">Servicios</a>
          <a href="#academia" className="nav-link2 flex items-center transition-colors">Academia</a>
          <a href="#resenas" className="nav-link2 flex items-center transition-colors">Reseñas</a>
          <a href="#ubicacion" className="nav-link2 flex items-center transition-colors">Ubicación</a>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid2 !py-3 !px-6 !text-xs">
          Reservar turno
        </a>
      </div>
    </nav>
  );
}
