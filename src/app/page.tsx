import { Logo } from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";
import { WHATSAPP_LINK, WHATSAPP_ACADEMIA, WHATSAPP_AUTOR, SERVICIOS, RESEÑAS } from "@/lib/content";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-ink-950/90 backdrop-blur-sm border-b hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Logo size={34} />
          <div className="hidden md:flex h-full items-stretch gap-8 eyebrow">
            <a href="#servicios" className="nav-link flex items-center hover:text-copper-300 transition-colors">Servicios</a>
            <a href="#academia" className="nav-link flex items-center hover:text-copper-300 transition-colors">Academia</a>
            <a href="#resenas" className="nav-link flex items-center hover:text-copper-300 transition-colors">Reseñas</a>
            <a href="#ubicacion" className="nav-link flex items-center hover:text-copper-300 transition-colors">Ubicación</a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid !py-3 !px-6 !text-xs">
            Reservar turno
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">Peluquería &amp; Barbería · Martínez</p>
            <h1 className="font-brand text-5xl lg:text-7xl text-ink-50 leading-[0.95]">
              Maccia<br /><span className="text-copper-300">Peluquería</span>
            </h1>
            <span className="rule" />
            <p className="mt-8 text-ink-100 text-lg max-w-xl font-sans">
              Corte, barba, diseños craneales y colorimetría. Con la Academia de peluquería al lado, para el que quiere aprender el oficio de verdad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-copper-300 text-xl tracking-widest">★★★★★</span>
              <span className="text-sm text-ink-100/70 font-sans">5.0 · 32 reseñas en Google</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid">
                Reservar turno
              </a>
              <a href="#servicios" className="cta-outline">
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/corte-fade.png" alt="Corte de pelo en Maccia Peluquería" priority fit="cover" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">01 — Servicios</p>
            <h2 className="font-display text-3xl lg:text-5xl text-ink-50 max-w-lg">
              Servicios <span className="text-copper-300">Maccia</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/3]" className="!border-0" fit="cover" position={s.pos} />
                  <div className="p-7">
                    <p className="font-display text-xl text-ink-50">{s.nombre}</p>
                    <p className="mt-3 text-sm text-ink-100/60 font-sans leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-100/60 font-sans italic">Consultanos precios por WhatsApp.</p>
        </div>
      </section>

      <FramedPhoto
        src="/fotos/salon.png"
        alt="Interior de Maccia Peluquería"
        aspect="h-64 lg:h-80 w-full"
        className="!border-0"
        fit="cover"
        position="center 42%"
      />

      <div className="divider max-w-7xl mx-auto" />

      {/* ACADEMIA */}
      <section id="academia" className="py-28 bg-ink-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">02 — Academia</p>
            <h2 className="font-display text-3xl lg:text-5xl text-ink-50 leading-tight">
              Formate con <span className="text-copper-300">oficio real</span>.
            </h2>
            <span className="rule" />
            <p className="mt-8 text-ink-100 font-sans leading-relaxed max-w-xl">
              Clases de peluquería profesional, dictadas en el mismo local, de la mano de Leonardo &ldquo;Leo&rdquo; Mennelli. Técnica de corte, barbería y color — para el que se quiere formar de verdad.
            </p>
            <a href={WHATSAPP_ACADEMIA} target="_blank" rel="noopener" className="cta-link inline-block mt-8">
              Consultar la próxima camada →
            </a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/leo.png" alt="Leonardo Mennelli, dueño de Maccia Peluquería" fit="cover" position="center 20%">
              <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-ink-950 to-transparent pt-10 pb-5 px-6 pointer-events-none">
                <p className="eyebrow">Leonardo &ldquo;Leo&rdquo; Mennelli</p>
              </div>
            </FramedPhoto>
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* RESEÑAS */}
      <section id="resenas" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">03 — Reseñas</p>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="font-display text-3xl lg:text-5xl text-ink-50">
                Lo que dicen <span className="text-copper-300">en Google</span>.
              </h2>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-copper-300 text-2xl tracking-widest">★★★★★</span>
              <span className="text-ink-100/70 font-sans">5.0 sobre 32 reseñas</span>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {RESEÑAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <div className="card p-7 h-full flex flex-col">
                  <span className="text-copper-300 tracking-widest">★★★★★</span>
                  <p className="mt-4 text-ink-100 font-sans italic leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
                  <p className="mt-5 eyebrow !text-ink-100/70">{r.nombre}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <a
            href="https://maps.app.goo.gl/H9TR531B6n1Wd6KWA"
            target="_blank"
            rel="noopener"
            className="cta-link inline-block mt-8"
          >
            Ver todas las reseñas en Google Maps →
          </a>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-28 bg-ink-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">04 — Ubicación</p>
            <h2 className="font-display text-3xl lg:text-5xl text-ink-50 leading-tight">
              Martínez,<br /><span className="text-copper-300">San Isidro</span>.
            </h2>
            <span className="rule" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p className="font-sans text-ink-50">Hipólito Yrigoyen 550</p>
                <p className="text-sm text-ink-100/60 mt-1 font-sans">Martínez, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p className="font-sans text-ink-50">Lunes a sábado, 10 a 20 hs</p>
                <p className="text-sm text-ink-100/60 mt-1 font-sans">Domingo cerrado</p>
              </li>
            </ul>
            <div className="mt-10 flex gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-link">WhatsApp</a>
              <a href="tel:+541140307491" className="cta-link">011 4030-7491</a>
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-copper-500/10 rounded-full blur-3xl" />
        </div>
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">05 — Reservá</p>
          <h2 className="font-display text-4xl lg:text-6xl text-ink-50 leading-tight">
            ¿Te <span className="text-copper-300">esperamos</span>?
          </h2>
          <div className="flex justify-center mt-8"><span className="rule" /></div>
          <p className="mt-10 text-ink-100/70 font-sans max-w-md mx-auto text-lg">
            Escribinos por WhatsApp y coordinamos tu turno.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="cta-solid mt-12 !px-12 !py-5">
            Reservar mi turno
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline pt-20 pb-10 bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
          <div>
            <Logo size={40} />
            <p className="mt-6 text-ink-100/60 font-sans leading-relaxed">
              Peluquería, barbería y academia en Martínez.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">Contacto</p>
            <p className="text-ink-100 font-sans">011 4030-7491</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="block text-ink-100/70 hover:text-copper-300 transition-colors mt-2 font-sans">WhatsApp</a>
            <a href="mailto:mennelli51@outlook.com" className="block text-ink-100/70 hover:text-copper-300 transition-colors mt-1 font-sans">mennelli51@outlook.com</a>
          </div>
          <div>
            <p className="eyebrow mb-5">Ubicación</p>
            <p className="text-ink-100 font-sans">Hipólito Yrigoyen 550</p>
            <p className="text-ink-100/70 font-sans">Martínez, Buenos Aires</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] text-ink-100/60 font-sans max-w-2xl mx-auto leading-relaxed px-6">
            Este sitio es un proyecto de demostración técnica desarrollado de forma independiente.
            No es el sitio oficial de Maccia Peluquería ni mantiene relación comercial con el establecimiento.
          </p>
          <p className="text-center mt-5">
            <a href={WHATSAPP_AUTOR} target="_blank" rel="noopener" className="cta-link !text-[10px]">
              Demo desarrollada por Joaquín Rao · 2026 · Versión A
            </a>
          </p>
          <p className="text-center mt-4">
            <a href="/blanco" className="cta-link !text-[11px]">Ver la otra versión (clara) →</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
