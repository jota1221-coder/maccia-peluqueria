import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Las tres caras del sitio se cargan UNA sola vez acá y las usan los dos
// temas. Antes /blanco cargaba su propia copia encima de estas: 8 archivos
// de fuente para una página, el 55% de su peso.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Cara del header (logo + menú). Solo el peso que se usa, para no
// engordar la página: las fuentes ya son el grueso de su peso.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  variable: "--font-header",
  display: "swap",
});

const title = "Maccia Peluquería · Barbería y Academia en Martínez";
const description =
  "Corte, barba, diseños craneales y colorimetría en Martínez. Academia de peluquería para formarte con oficio real. Reservá tu turno online.";

export const metadata: Metadata = {
  metadataBase: new URL("https://maccia-peluqueria.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://maccia-peluqueria.vercel.app",
    siteName: "Maccia Peluquería",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${workSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}
