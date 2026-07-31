import type { Metadata } from "next";
import { Yeseva_One, Lora } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
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
    <html lang="es" className={`${yesevaOne.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-ink-950 text-ink-50 antialiased">
        {children}
      </body>
    </html>
  );
}
