import { LogoLight } from "@/components/LogoLight";
import { HeaderBlanco } from "@/components/HeaderBlanco";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";
import { Gallery } from "@/components/Gallery";
import { WHATSAPP_LINK, SERVICIOS, RESEÑAS } from "@/lib/content";

const GALERIA_SALON = [
  { src: "/fotos/salon.png", alt: "Interior de Maccia Peluquería", position: "center 42%" },
  { src: "/fotos/corte-fade.png", alt: "Corte en proceso en Maccia Peluquería", position: "center 65%" },
  { src: "/fotos/barba.png", alt: "Arreglo de barba en Maccia Peluquería", position: "center 60%" },
];

export default function Blanco() {
  return (
    <main>
      {/* NAV */}
      <HeaderBlanco />

      {/* HERO */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow2 mb-6">Peluquería &amp; Barbería · Martínez</p>
            <h1 className="font-display2 text-5xl lg:text-7xl leading-[0.95]">
              Maccia<br /><span className="accent">Peluquería</span>
            </h1>
            <span className="rule2" />
            <p className="mt-8 text-[#3A342E] text-lg max-w-xl font-sans2">
              Corte, barba, diseños craneales y colorimetría. Con la Academia de peluquería al lado, para el que quiere aprender el oficio de verdad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xl tracking-widest" style={{ color: "#8A6300" }}>★★★★★</span>
              <span className="text-sm text-[#5C534A] font-sans2">5.0 · 32 reseñas en Google</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid2">
                Reservar turno
              </a>
              <a href="#servicios" className="cta-outline2">
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/corte-fade.png" alt="Corte de pelo en Maccia Peluquería" priority fit="cover" />
          </Reveal>
        </div>
      </section>

      <div className="divider2 max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow2 mb-4">01 — Servicios</p>
            <h2 className="font-display2 text-3xl lg:text-5xl max-w-lg">
              Oficio de barbero, <span className="accent">de verdad</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14">
          {SERVICIOS.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.nombre}>
                <div className="grid lg:grid-cols-2 items-stretch border-t hairline">
                  <div className={`relative aspect-[4/5] lg:aspect-auto ${reversed ? "lg:order-2" : ""}`}>
                    <FramedPhoto
                      src={s.img}
                      alt={s.nombre}
                      aspect="h-full w-full"
                      className="!border-0"
                      fit="cover"
                      position={s.pos}
                    />
                  </div>
                  <div className={`flex items-center px-6 lg:px-16 py-14 lg:py-20 ${reversed ? "lg:order-1" : ""}`}>
                    <div className="max-w-md">
                      <h3 className="font-display2 text-4xl lg:text-6xl uppercase leading-[0.95] mb-6">
                        {s.nombre}
                      </h3>
                      <p className="font-sans2 text-[#3A342E] leading-relaxed text-lg">{s.descLarga}</p>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-link2 inline-block mt-8">
                        Consultar por WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="mt-14 text-sm text-[#5C534A] font-sans2 italic">Consultanos precios por WhatsApp.</p>
        </div>
      </section>

      <Gallery images={GALERIA_SALON} aspect="h-64 lg:h-80 w-full" />

      <div className="divider2 max-w-7xl mx-auto" />

      {/* ACADEMIA */}
      <section id="academia" className="py-28 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow2 mb-4">02 — Academia</p>
            <h2 className="font-display2 text-3xl lg:text-5xl leading-tight">
              Formate con <span className="accent">oficio real</span>.
            </h2>
            <span className="rule2" />
            <p className="mt-8 text-[#3A342E] font-sans2 leading-relaxed max-w-xl">
              Clases de peluquería profesional, dictadas en el mismo local, de la mano de Leonardo &ldquo;Leo&rdquo; Mennelli. Técnica de corte, barbería y color — para el que se quiere formar de verdad.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-link2 inline-block mt-8">
              Consultar la próxima camada →
            </a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/leo.png" alt="Leonardo Mennelli, dueño de Maccia Peluquería" fit="cover" position="center 20%" />
            <p className="eyebrow2 mt-4">Leonardo &ldquo;Leo&rdquo; Mennelli</p>
          </Reveal>
        </div>
      </section>

      <div className="divider2 max-w-7xl mx-auto" />

      {/* RESEÑAS */}
      <section id="resenas" className="panel-dark bg-ink-950 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow2 mb-4">03 — Reseñas</p>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="font-display2 text-3xl lg:text-5xl">
                Lo que dicen <span className="accent">en Google</span>.
              </h2>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-2xl tracking-widest" style={{ color: "#8A6300" }}>★★★★★</span>
              <span className="text-[#5C534A] font-sans2">5.0 sobre 32 reseñas</span>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {RESEÑAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <div className="card2 p-7 h-full flex flex-col">
                  <span className="tracking-widest" style={{ color: "#8A6300" }}>★★★★★</span>
                  <p className="mt-4 text-[#3A342E] font-sans2 italic leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
                  <p className="mt-5 eyebrow2 !text-[#5C534A]">{r.nombre}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <a
            href="https://maps.app.goo.gl/H9TR531B6n1Wd6KWA"
            target="_blank"
            rel="noopener"
            className="cta-link2 inline-block mt-8"
          >
            Ver todas las reseñas en Google Maps →
          </a>
        </div>
      </section>

      <div className="divider2 max-w-7xl mx-auto" />

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-28 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow2 mb-4">04 — Ubicación</p>
            <h2 className="font-display2 text-3xl lg:text-5xl leading-tight">
              Martínez,<br /><span className="accent">Zona Norte</span>.
            </h2>
            <span className="rule2" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p className="font-sans2">Hipólito Yrigoyen 550</p>
                <p className="text-sm text-[#5C534A] mt-1 font-sans2">Martínez, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p className="font-sans2">Lunes a sábado, 10 a 20 hs</p>
                <p className="text-sm text-[#5C534A] mt-1 font-sans2">Domingo cerrado</p>
              </li>
            </ul>
            <div className="mt-10 flex gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-link2">WhatsApp</a>
              <a href="tel:+541140307491" className="cta-link2">011 4030-7491</a>
            </div>
            <FramedPhoto src="/fotos/fachada.png" alt="Fachada de Maccia Peluquería" aspect="aspect-[16/9]" className="mt-10" fit="cover" position="70% center" />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={200}>
            <div className="aspect-[5/4] overflow-hidden border hairline">
              <iframe
                src="https://www.google.com/maps?q=Hipolito+Yrigoyen+550+Martinez+Buenos+Aires&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-32">
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow2 mb-6">05 — Reservá</p>
          <h2 className="font-display2 text-4xl lg:text-6xl leading-tight">
            ¿Te <span className="accent">esperamos</span>?
          </h2>
          <div className="flex justify-center mt-8"><span className="rule2" /></div>
          <p className="mt-10 text-[#5C534A] font-sans2 max-w-md mx-auto text-lg">
            Escribinos por WhatsApp y coordinamos tu turno.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid2 mt-12 !px-12 !py-5">
            Reservar mi turno
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="panel-dark bg-ink-950 border-t hairline pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
          <div>
            <LogoLight size={40} />
            <p className="mt-6 text-[#5C534A] font-sans2 leading-relaxed">
              Peluquería, barbería y academia en Martínez.
            </p>
          </div>
          <div>
            <p className="eyebrow2 mb-5">Contacto</p>
            <p className="font-sans2">011 4030-7491</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="block text-[#5C534A] hover:opacity-60 transition-opacity mt-2 font-sans2">WhatsApp</a>
            <a href="mailto:mennelli51@outlook.com" className="block text-[#5C534A] hover:opacity-60 transition-opacity mt-1 font-sans2">mennelli51@outlook.com</a>
          </div>
          <div>
            <p className="eyebrow2 mb-5">Ubicación</p>
            <p className="font-sans2">Hipólito Yrigoyen 550</p>
            <p className="text-[#5C534A] font-sans2">Martínez, Buenos Aires</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] text-[#5C534A] font-sans2 max-w-2xl mx-auto leading-relaxed px-6">
            Este sitio es un proyecto de demostración técnica desarrollado de forma independiente.
            No es el sitio oficial de Maccia Peluquería ni mantiene relación comercial con el establecimiento.
          </p>
          <p className="text-center text-[10px] mt-5 eyebrow2">
            Demo desarrollada por Joaquin Rao · 2026 · Versión B
          </p>
          <p className="text-center mt-4">
            <a href="/" className="cta-link2 !text-[11px]">Ver la otra versión (oscura) →</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
