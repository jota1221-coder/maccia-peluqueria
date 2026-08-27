/** Solo aplica el tema claro. Las fuentes ya vienen del layout raíz —
 *  ambos temas comparten Playfair + Work Sans + Cormorant. */
export default function BlancoLayout({ children }: { children: React.ReactNode }) {
  return <div className="theme-light min-h-screen">{children}</div>;
}
